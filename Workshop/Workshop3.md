# Workshop de React - Parte 3

## Creando nuestra cuenta en Webtask

_Antes que nada, gracias [Leo Galante](https://twitter.com/lndgalante) por el datazo para hacer esto_ 😁

**Webtask.io** es un servicio que nos permite (entre otras cosas) lograr lo que necesitamos, que en nuestro caso va a ser guardar la API key en un lugar seguro que nos funcione como punto intermedio entre nuestro frontend y la API pública de Apixu.
Bueno, entramos a la página de [Webtask.io](https://webtask.io) y nos creamos un usuario (se lo pueden crear con Github, Google, Facebook o Microsoft), el proceso es simple y rápido y luego seguramente te va a mandar a usar la CLI (Command Line Interface - Interfaz de Línea de Comando) pero que eso no nos importe y vayamos al [editor que tiene integrado](https://webtask.io/make) que es mucho más lindo.
Al terminar lo que vamos a hacer nos quedaría que en nuestro Frontend haríamos la petición de la data a un [endpoint](https://blog.makeitreal.camp/que-es-un-api/#cómo-funciona-un-web-api) que creemos en Webtask, luego una función que escribamos en Webtask se encarga de buscar la data en Apixu con nuestra API key guardada como secreto y nos retorna el JSON al Frontend para que manipulemos esa data tranquilos. De esta forma podemos trabajar sin exponer nuestra API key y nadie va a abusar de ella 😉

Una vez adentro del editor, vamos a crear un endpoint nuevo, hacemos click en la barra izquierda, en el ícono que dice "Create New" (Crear uno nuevo) Función de Webtask y podemos elegir comenzar con un template mejor (así escribimos un poquito menos de código jaja). Nos va a ofrecer distintos tipos de funciones, nosotros con una Full HTTP Function vamos a estar bien. Al darle a Continuar nos pide un nombre para el endpoint, esto es para tener una referencia para nosotros, en este caso vamos a usar el nombre `clima-apixu`, elijan el que más les guste.
Una vez creado, nos recibe el editor con este boilerplate:

```javascript
module.exports = function(context, req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello, world!</h1>");
};
```

Wow, y qué es todo eso? 🤪 Esto se parece un poco más a cómo sería código en NodeJS, pero a no asustarse que hay que modificar un par de cosas y ya lo sacamos andando ;)
Vamos de a poco: `module.exports` indica que de nuestro módulo que creamos, vamos a exportar por defecto nuestra función. la cual recibe por parámetros un contexto ([documentación de contexto de Webtask](https://webtask.io/docs/context)) que básicamente va a tener datos del contexto de webtask donde estamos parados (después vamos a ver para qué usamoe el contexto bien), req es un objeto donde vamos a tener datos de la petición que recibimos del Frontend (tipo de petición GET, POST, etc.) y res va a ser el objeto donde vamos a retornar los datos en formato JSON una vez que los hayamos obtenido de Apixu.

[Docu de NodeJS para leer más sobre transacciones HTTP (en inglés)](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)

Empecemos por chequear qué tipo de petición nos estarían haciendo, nosotros desde el Frontend vamos a hacer una petición de tipo `GET` utilizando `fetch()` como ya hicimos. La información de la petición la encontramos en `req.method`, así que dentro de nuestra cloud function hacemos:

```javascript
module.exports = function(context, req, res) {
  // Cambiemos el tipo de contenido que vamos a retornar, que va a ser un JSON
  res.writeHead(200, { "Content-Type": "application/json" });
  if (req.method === "GET") {
    //Vamos a buscar la data a apixu y la retornamos en el objeto res
    res.end();
  }
};
```

Bien, ahora tenemos que traernos la dirección de la API que nos la traemos del Frontend y necesitamos una forma de traernos la data porque `fetch()` no nos sirve acá. Empecemos por tener la URL de la API a mano así después la usamos para ir a buscar la data, en el renglón siguiente al `res.writeHead` y afuera del `if` nos guardamos la URL de la petición a apixu en una constante:

```javascript
const request_url = `https://api.apixu.com/v1/forecast.json?key=${
  process.env.REACT_APP_API_KEY
}&q=Buenos+Aires&days=6`;
```

Es la que teníamos en el Frontend, pero nuestra variable de entorno no nos va a servir acá, lo que nos ofrece Webtask es tener variables como esa guardadas en "secreto", vamos a guardar nuestra API key ahí. Hacemos click en la llave (🔧) que está arriba a la izquierda de nuestro editor de Webtask y seleccionamos `Secrets` del menú. Clickeamos en el botón `Add Secret` y agregamos nuestra key, como nombre de referencia vamos a usar `API_KEY` y luego nuestra key la traemos de nuestro archivo `.env.development.local`, no se preocupen, va a estar a salvo ahí adentro :)
Y cómo usamos este secreto? Está en el contexto que recibimos en la función y accedemos usando `context.secrets`, entonces nuestra URL quedaría de la siguiente manera:

```javascript
const request_url = `https://api.apixu.com/v1/forecast.json?key=${
  context.secrets.API_KEY
}&q=Buenos+Aires&days=6`;
```

Buenísimo, ya tenemos la url para buscar la data y también nuestra API key a salvo. Ahora tenemos que ir a buscar la data a nuestra `request_url` y retornarla en la respuesta, en el objeto `res`.
Para hacer esto tenemos un paquete llamado `request` que es bastante intuitivo y copado (en Webtask se pueden instalar algunos paquetes de NPM), empecemos por meter dentro de nuestro `if` lo que necesitamos utilizando `request`:

```javascript
if (req.method === "GET") {
  request.get(request_url, function(error, resp, body) {
    if (error) {
      res.write(error);
      res.end();
    }
    res.write(body);
    res.end();
  });
}
```

Un momento, me dijiste que esto era simple Agustín! Bueno, parece complejo pero yo creo que explicando cada parte se entiende bien lo que estamos haciendo:
Con `request.get` vamos a ir a buscar a nuestra URL la data de apixu, luego esa data que se consiga, se recibe en la función que está como segundo parámetro de `get`, en la cual tendremos en `error` el tipo de error si llegase a haber alguno (crucemos los deditos para que no), en `resp` tendremos otro objeto de respuesta de esta función (nosotros necesitamos usar `res` para retornar directo al Frontend) y en `body` vamos a tener la data que recibamos de hacer el `request.get` a la API de apixu, es decir, el JSON que ya obteníamos al hacer el `fetch()` en el Frontend.
Luego chequeamos si hay un error, y si lo hay que escriba en el objeto de respuesta ese error y lo finalice, lo cual causa que ya recibamos una respuesta con el error en el Frontend. Luego si ese `if` no se cumple, sigue de largo y consideramos que no hubo error y escribimos el `body` con la data obtenida en el objeto de respuesta.
En este momento se nos va a quejar de que no está definido request, entonces importamos el paquete en la parte superior de nuestro código, afuera del `module.exports`:

```javascript
var request = require("request");
```

Le damos guardar y si prestamos atención, del lado izquierdo de esta línea que acabamos de agregar, aparece un signo + en un cuadradito azul, es el editor que nos ofrece importar el paquete `request` de forma fácil. Hacemos click y ya tenemos nuestra cloud function lista!

<details>
<summary>
<b>Código completo de la Cloud Function</b>
</summary>

```javascript
var request = require("request");

module.exports = function(context, req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  const request_url = `https://api.apixu.com/v1/forecast.json?key=${
    context.secrets.API_KEY
  }&q=Buenos+Aires&days=6`;
  if (req.method === "GET") {
    request.get(request_url, function(error, resp, body) {
      if (error) {
        res.write(error);
      }
      res.write(body);
      res.end();
    });
  }
};
```

</details>

Ahora nos falta conectar el Frontend a nuestro endpoint! Si vemos en la barra de abajo de todo del editor de Webtask, vamos a ver un link y un botón para copiar esa URL. El formato debería ser algo así: `https://wt-c8e20XXXXXXXXXXXXXXXXXXXXXXXa-0.sandbox.auth0-extend.com/clima`, la copiamos y vamos al Frontend de nuestra app, donde hicimos el `fetch()` y pegamos la URL nueva adentro. Guardamos el archivo y si todo sale bien, debería seguir todo funcionando, yay! 🎉

<details>
<summary>
<b>Cómo debería quedar nuestro fetch</b>
</summary>

```javascript
componentDidMount() {
    fetch(
      `https://wt-c8e20XXXXXXXXXXXXXXXXXXXXXXXa-0.sandbox.auth0-extend.com/clima`
    )
      .then(result => result.json())
      .then(data => {
        //Cambiamos la resolución del ícono del día actual para que sea más grande
        data.current.condition.icon = data.current.condition.icon.replace(
          "64x64",
          "128x128"
        );
        this.setState({ clima: data, isLoaded: true });
      });
}
```

</details>

Ahora nos queda el último paso, subir nuestro proyecto a algún lado para poder mostrarlo 😉

---

**Yapa:** Si quieren que la cloud function les quede como una [API REST](https://juanda.gitbooks.io/webapps/content/api/arquitectura-api-rest.html), les dejo otro código que pueden usar para algún otro proyecto :)

<details>
<summary>
<b>Cloud Function como API REST</b>
</summary>

```javascript
var request = require("request");

module.exports = function(context, req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  const request_url = `https://api.apixu.com/v1/forecast.json?key=${
    context.secrets.API_KEY
  }&q=Buenos+Aires&days=6`;
  switch (req.method) {
    case "GET":
      request.get(request_url, function(error, resp, body) {
        if (error) {
          res.write(error);
        }
        res.write(body);
        res.end();
      });
      break;
    case "POST":
      // Implementar caso POST
      res.write(JSON.stringify({ error: "POST no implementado" }));
      res.end();
      break;
    case "DELETE":
      // Implementar caso DELETE
      res.write(JSON.stringify({ error: "DELETE no implementado" }));
      res.end();
      break;
    case "PUT":
      // Implementar caso PUT
      res.write(JSON.stringify({ error: "PUT no implementado" }));
      res.end();
      break;
  }
};
```

</details>

---

## Subir nuestro proyecto a Netlify

Bueno, como algunos habrán visto, casi todos mis slides y proyectos los tengo subidos a [Netlify](https://www.netlify.com), es (más que) un hosting bastante copado y facilita mucho el subir proyectos hechos por ejemplo con `create-react-app`. Tenemos dos formas de hacerlo:

- [Vinculando nuestro Github](#vinculando-nuestro-github)
- [Sin vincular nuestro Github](#sin-vincular-nuestro-github)

### Vinculando nuestro Github

Si vinculamos nuestra cuenta de Github, después es tan simple como entrar a nuestro usuario en Netlify y decirle cuál es el proyecto del que queremos que haga el `deploy`, pero para eso primero tenemos que subir nuestra app del clima a un repo nuestro, no? Pequeño detalle 😜
Comencemos por entrar a nuestro usuario de github, a la parte de repositorios y creemos uno nuevo con el botón verde **New** que está a la derecha. Luego escribimos un nombre para nuestro repositorio (por ejemplo "ClimaApp") y no hace falta que pongamos descripción ni que lo inicialicemos con un README. Vamos al botón de abajo de todo y terminamos de crear nuestro repositorio.
Se nos va a crear un repositorio vacío y el mismo Github que es re copado nos va a decir cómo subir nuestro proyecto donde dice `…or push an existing repository from the command line`. Entonces abrimos una terminal y vamos hasta la carpeta raíz de nuestra app, luego ahí hacemos lo que nos dice Github:

```
git remote add origin https://github.com/agustinmulet/ClimaApp.git
git push -u origin master
```

Es probable que nos pida nuestro usuario y constraseña de Github, en ese caso ingresamos nuestras credenciales y si todo salió bien, ya tenemos nuestra app subida a un repo propio!

Ahora resta hacer lo que dije antes, entrar con nuestro usuario a Netlify, indicarle cuál es el repositorio con nuestra app (ClimaApp si le pusieron el mismo nombre que yo), esperamos un poco que haga el deploy y ya está!
Lo que sí, Netlify nos da un nombre raro para nuestro sitio, así que podemos ir a [**Cambiando la URL**](#cambiando-la-url).

### Sin vincular nuestro Github

Si no te gusta andar vinculando tu Github con cualquier cosa, o si no usás o no tenés Github, se puede subir nuestro proyecto igual ;)

Es simple, primero nos hacemos un usuario en Netlify e ingresamos. Netlify nos recibe con un Dashboard y donde vemos un rectángulo con línea punteada que dice `Want to deploy a new site without connecting to Git? Drag and drop your site folder here` tenemos que hacer drag and drop de nuestro proyecto ya preparado para producción.
Vamos entonces a preparar nuestro proyecto primero. Abrimos una terminal y vamos a la carpeta raíz de nuestra app, ahí ejecutamos el comando `npm build`. Si no hubo problemas, deberíamos ver una carpeta nueva llamada `public` dentro de la carpeta de nuestra app.
Ahora es tan simple como hacer 'drag and drop' (arrastrar y soltar) esta nueva carpeta `public` que nos creó este comando, esperamos que se suba todo et voilà! Ya deberíamos tener nuestra app subida con un nombre extraño, podemos cambiarlo en la siguiente parte [**Cambiando la URL**](#cambiando-la-url).

### Cambiando la URL

Para cambiar el nombre al que querramos (nombredeapp.netlify.com), tenemos que (si es que estamos en el Dashboard principal de Netlify) hacer click en nuestra app recién subida con nombre raro, hacer click en el botón `⚙ Site Settings` y en la parte de `Site Information` vamos a ver otro botón `Change site name`, donde podemos definir el nombre que querramos. Es probable que algún nombre como ClimaApp esté utilizado, pero podemos inventar algo usando nuestro nombre, o algún nombre raro que se les ocurra (climarino, weatherapp, miappdelclima, loquesea jaja).

**Listo!** Espero que hayan disfrutado este workshop y cualquier cosa que les parezca mejorable o que no esté claramente explicada, manden PR para poder hacer un buen workshop de React desde cero y que más gente pueda aprender.

Además, si tienen ganas, pongan una foto en Twitter de su app funcionando, para contagiar a que más personas lo hagan :) y pueden alterar el CSS, lo que quieran!

## Cómo seguir desde acá?

Ahora la idea es ir mejorando lo que tenemos, les tiro un par de ideas de cosas que se pueden hacer:

- Mostrar más datos
- Reacomodar cosas en el layout
- Hacer nuestra app responsive
- Agregar un input y buscar el clima en distintas ciudades

Mil cosas más se pueden hacer, pero esas me parecen copadas.
Y si te animás a agregar el input para buscar en distintas ciudades, me gustaría verlo! 😄😄

[⇐ Volver al principio](../README.md)
