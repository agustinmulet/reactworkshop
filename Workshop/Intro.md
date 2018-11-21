# Workshop de React - Intro

Bueno, arranquemos viendo los requerimientos para correr todo:

- [NodeJS (Versión 8 a 10 preferentemente)](https://nodejs.org/es/)
- [Git](https://git-scm.com)
- (Opcional) React DevTools [Para Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) [Para Firefox](https://addons.mozilla.org/es/firefox/addon/react-devtools/)
- Ganas de laburar
- Un cerebro (preferentemente uno que funcione)

Bueno, como los devs de facebook son gente copada, tienen un repo con webpack y react todo configurado y lindo para empezar a laburar rápido; así que, una vez que tengamos NodeJS instalado, abrimos la línea de comando (Bash, Terminal, CMD, CMDer, iTerm, etc.) y nos posicionamos en la carpeta donde queramos laburar y tipeamos los siguientes comandos:

```bash
npx create-react-app reactworkshop
cd reactworkshop
npm start
```

El primer comando nos crea una carpeta 'ReactWorkshop', clona ahí adentro lo de este repo [Create-React-App](https://github.com/facebook/create-react-app) e instala los paquetes necesarios para trabajar, luego entramos al directorio creado y con el último comando corremos un servidor local con hot reloading (actualización automática de los cambios que hagamos). Este servidor corre por defecto en [http://localhost:3000](localhost:3000). Debería abrirse una pestaña en nuestro navegador por defecto con esta dirección, si no lo hace pueden hacerlo manualmente. Y tengan en cuenta que **para frenar el servidor** estando en la línea de comando hay que presionar <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Si no hubo problemas, ya tenemos nuestro primer componente ~~que no hicimos nosotros~~ andando! **Yay!**

## Empezando a laburar

Ahora abrimos la carpeta de nuestro proyecto en nuestro IDE o editor favorito (el mío es [VS Code](https://code.visualstudio.com)) y vamos al archivo App.js, ese es nuestro componente de entrada a la web app que estamos haciendo, el componente donde van a vivir nuestros demás componentes. El punto de entrada a la aplicación por medio de React es el archivo index.js, vamos a analizarlos:

### index.js

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

¿Qué vemos acá? Bueno, ignorando las líneas sobre Service Workers (las eliminé, no vamos a tratar ese tema en este workshop), vemos que usando [imports](https://es.stackoverflow.com/questions/13272/cuál-es-la-diferencia-entre-import-from-y-var-require) de ES6 (cosas nuevas de Javascript) traemos React para tener React a mano (duh), ReactDOM para actuar de intermediario entre nuestra app y el [DOM](https://www.w3.org/2005/03/DOM3Core-es/introduccion.html), estilos en el `index.css` y algo re loco y nuevo, nos traemos el componente App que es el componente principal donde van a vivir los demás componentes nuestra aplicación. Algo que quizás me olvidé de contar es que **TODO** en React es un componente, sí, _todo_.

En el último renglón usamos un método de ReactDOM para indicarle que tiene que renderizar el componente `App` en el elemento del DOM que tenga como id `root`. Este elemento es un div y lo vamos a encontrar en el archivo `index.html` dentro de la carpeta `/public`.

Pasemos a chusmear nuestro componente principal:

### App.js

```jsx
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```

Wow, muchas cosas nuevas por acá. Como diría Jack, _vamos por partes_.
Antes que nada, como convención los componentes **comienzan con letra mayúscula**, siguiendo con lo nuestro vemos que tenemos otra forma de importar un solo miembro de cierto módulo, usando lo que se llama [_named import_](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import#Importa_un_solo_miembro_de_un_módulo.) (En el link pueden leer más al respecto).
Haciendo `import React, { Component } from "react";`, importamos React y el módulo Component para luego indicar que App va a ser un Component `class App extends Component`. Esto está hecho para simplificar el código a como lo vemos nosotros, es lo mismo no importar Component y escribir `class App extends React.Component` 🤷‍♀️ pero bueno, nos sirve para aprender que existen los named imports.
Este tipo de componentes se llaman "Componentes de Clase" y tienen lo que se llama `state` (estado) por defecto, si no necesitamos usar el `state`, podemos usar lo que se llama "Componente Funcional". Si no entendés todavía lo que es el `state`, tranqui, lo vamos a ver más adelante, paciencia :)
Nuestro componente App como Componente Funcional quedaría de la siguiente forma:

```jsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
```

Como vemos, estamos guardando una [arrow function](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions) en App (de ahí su nombre de "Funcional") y hacemos un return (implícito) de nuestro JSX. Esta sintaxis la vamos a usar en los componentes que reciban `props` y que no necesiten tener un `state`. Sí, ya sé, cada vez sumamos más conceptos, ya los vamos a ver, _chillax_.
Dejemos a App tranquilo como Componente de Clase mejor, ya vamos a ver por qué.

Si seguimos vemos que usar imágenes en svg es tan simple como importarla y usarla en el atributo (prop, en realidad, ya lo vas a entender) de nuestra `img`. Lo raro es que está entre llaves, esto es porque estamos usando JSX y cuando ponemos algo entre llaves, estamos indicando que **vamos a utilizar Javascript**. En este caso, le decimos que usamos la imagen importada en `logo`, Webpack se encarga de esto, que ya viene todo configurado y lindo. De esta forma podemos importar JPG, PNG, GIF, BMP y SVG.

Bueno, debo estar aburriendo con tanto para leer, vamos a crear nuestro primer componente! **Emoción**

Lo que vamos a hacer es:

1. Escribir un componente con un párrafo que diga "Hola Mundo!" (va a ser un Componente Funcional)
2. Insertarlo dentro de nuestro componente principal `App`
3. Una vez que lo veamos funcionando, lo pasamos a otro archivo para tener nuestros componentes aislados y ver qué tan simple es separar en componentes

Bueno, vamos a tipear:
Hagamos nuestro componente funcional, vamos a elegir un nombre, por ejemplo, `Saludo` (recordá que el nombre del componente debe empezar con mayúscula), entonces hacemos:

```jsx
const Saludo = () => <p>Hola Mundo!</p>;
```

Y así de simple tenemos un componente nuevo, en un solo renglón 😜 (obvio que es un componente simple, después se va a ir complejizando la cosa).
Este renglón vamos a tener que escribirlo entre los imports y la declaración de nuestro componente `App`.

```jsx
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Acá va nuestro nuevo componente
const Saludo = () => <p>Hola Mundo!</p>;

class App extends Component {
[...]
```

Genial, si guardamos el archivo en este momento vemos que nuestra web app se actualiza automáticamente y en la consola React nos chilla porque tenemos definido el componente pero no lo estamos utilizando. Sabemos que adentro de Saludo vive nuestro componente que definimos, ahora **cómo lo usamos?**:
Donde querramos que vaya nuestro componente (en JSX), escribimos `<Saludo />`.
Listo.
No está buenísimo?

Nuestro componente App quedaría así:

```jsx
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Saludo = () => <p>Hola Mundo!</p>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Nuestro componente recién creado */}
          <Saludo />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```

Recuerden que cada componente de React **puede retornar solamente UN elemento** y en JSX los elementos pueden cerrarse en la misma línea si es que no tienen _children_, por ejemplo, nuestro componente nuevo podemos escribirlo tanto como lo hicimos recién o de la siguiente forma:

```jsx
<Saludo>{/* Acá irían los hijos o children */}</Saludo>
```

Ya tenemos nuestro nuevo componente dentro de su componente padre (en el árbol de jerarquías, queda `App` como componente padre y `Saludo` como su hijo), ahora vamos a guardarlo en un archivo aparte para entender más el tema de la _componentización_ (fua, qué palabra).
Empezamos por crear una carpeta `/components` dentro de `/src` donde va a vivir nuestro nuevo componente y dentro de esa carpeta `/src/components` creamos un archivo, `Saludo.js`.
En este nuevo archivo empezamos a tipear:

- Primero importamos React
  `import React from "react";`

- Pasamos nuestro componente funcional a este archivo:
  `const Saludo = () => <p>Hola Mundo!</p>;`

- Exportamos nuestro componente para que pueda ser utilizado fuera de este archivo:
  `export default Saludo;`

Listo, guardamos lo que hicimos y vamos a editar nuestro componente padre `App` para traer nuestro nuevo componente:

- Borramos la línea donde definíamos a nuestro componente `Saludo`:
  ~`const Saludo = () => <p>Hola Mundo!</p>;`~

- Importamos nuestro componente desde el archivo recién creado (escribimos esta línea donde estaba la línea que recién borramos):
  `import Saludo from "./components/Saludo";`

Guardamos y si todo sale bien, debería estar todo funcionando igual que hasta recién.

Nuestros componentes deberían quedar así:

### App.js

(Limpié un poco para que quede solamente nuestro nuevo componente)

```jsx
import React, { Component } from "react";
import "./App.css";

import Saludo from "./components/Saludo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Saludo />
        </header>
      </div>
    );
  }
}

export default App;
```

### Saludo.js

```jsx
import React from "react";

const Saludo = () => <p>Hola Mundo!</p>;

export default Saludo;
```

Ya hiciste tu primer componente, **felicitaciones!!!!** 🎉🎉🎉🎉🎉🎉🎉

Ahora necesitamos aprender **Props**, **State** y algunas cosas más de componentes para poder seguir, no me odies, yo sé que es mucha teoría.

[Vamos con Props y State ->](PropsState.md)
