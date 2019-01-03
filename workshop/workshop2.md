# Workshop de React - Parte 2

## Dividamos en componentes

Sigamos con la segunda parte, ya pensamos qué parte de nuestro componente App podemos aislar y reutilizar convirtiéndola en componente, me imagino que pensamos todos lo mismo, lo decimos a la vez? 1, 2... ~~El contai...~~ La **card!!** Por como vemos, necesitamos mostrar 6 veces los mismos datos, entonces es nuestro candidato perfecto para aislar, luego se puede pasar otras cosas a componentes, la especificación ya queda en cada uno según la modularización que quiera realizar \(como por ejemplo, el div con clase "minmax" también se repite bastante, no? ;D\) Antes de hacer el componente, tenemos que analizar lo que tenemos y cómo lo queremos mostrar. Qué tenemos? Nuestra `card`:

```jsx
<div className="card">
  <h5>Lunes</h5>
  <h6>2018-09-26</h6>
  <img src={logo} alt="Clima diario" className="imagebottom" />
  <div className="minmax">
    <p>
      <span className="tempmax" />
      26
    </p>
    <p>
      <span className="tempmin" />
      15
    </p>
  </div>
</div>
```

Y un array `forecastday` \(en `forecast`\) con los 6 días que pedimos a la API:

```javascript
{
  "date": "2018-11-14",
  "date_epoch": 1542153600,
  "day": {
    "maxtemp_c": 26.1,
    "maxtemp_f": 79,
    "mintemp_c": 19.7,
    "mintemp_f": 67.5,
    "avgtemp_c": 21.2,
    "avgtemp_f": 70.1,
    "maxwind_mph": 18.1,
    "maxwind_kph": 29.2,
    "totalprecip_mm": 0.2,
    "totalprecip_in": 0.01,
    "avgvis_km": 19.1,
    "avgvis_miles": 11,
    "avghumidity": 54,
    "condition": {
      "text": "Patchy rain possible",
      "icon": "//cdn.apixu.com/weather/64x64/day/176.png",
      "code": 1063
    },
    "uv": 10.6
  },
  "astro": {
    "sunrise": "05:42 AM",
    "sunset": "07:37 PM",
    "moonrise": "11:23 AM",
    "moonset": "12:51 AM"
  }
}
```

Viendo los nombres de las cosas podemos ir pensando dónde poner cada cosa, no? Lo que nos falta ver es cómo **iterar**, recorrer el array usando los datos de ese array en un componente que reutilicemos en cada iteración.

Para eso tenemos el método [`map()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map) de Array, que en cada iteración vamos a tener disponible los días tal como vemos en el JSON que está acá arriba ☝️

El uso de `map()` en nuestro JSX sería:

```jsx
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  /* [...] */

  render() {
    const { location, current, forecast } = this.state.clima;
    return this.state.isLoaded ? (
      <div className="App">
        <div className="container">
          <div className="top">

            {/* [...] */}

          </div>
          <div className="bottom">
            {/*Usamos map() donde va el código que vamos a repetir*/}
            {forecast.forecastday.map(dia => {
              /* en 'dia' vamos a tener cada objeto del array */
              return(
                /*
                  Acá iteramos nuestra card con la data del 'dia'
                  y la retornamos
                */
              )}
            )}
          </div>
        </div>
      </div>
    ) : (
      <div className="App">Cargando...</div>
    );
  }
}

export default App;
```

Ya tenemos entonces nuestro código a repetir, la data en un array y nuestra herramienta para iterar, prueben hacerlo y cualquier cosa dejo la solución en el dropdown.

 **Solución** \`\`\`jsx {forecast.forecastday.map\(dia =&gt; { return \(

#### {this.getWeekDay\(dia.date\_epoch\)}

**{dia.date}**

![Clima diario](https://github.com/agustinmulet/reactworkshop/tree/caff27c875935fd41bec63ba2bbd3e13a692c7aa/Workshop/%7Bdia.day.condition.icon%7D)

 {parseInt\(dia.day.maxtemp\_c\)}

 {parseInt\(dia.day.mintemp\_c\)} \); }\)} \`\`\`

Esa es mi solución, ah, qué? Que qué es `getWeekDay()`? Es una función que ~~hice yo ;\)~~ me pasó [Goncy](https://twitter.com/goncy) para mostrar el día de la semana calculando desde la fecha en formato UNIX que nos proveen en `date_epoch`. Para hacerla es como hicimos antes cuando vimos [Props y State](propsstate.md), pero debemos definir antes un arreglo con los días de la semana, el cual va por fuera de la definición de nuestro componente.

```jsx
import React, { Component } from "react";
import "./App.css";

/* Generamos un arreglo con los días de la semana */
const semana = ["Lunes",  "Martes",  "Miércoles",  "Jueves",  "Viernes",  "Sábado",  "Domingo"]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clima: {},
      isLoaded: false
    };
    //No hay que olvidarse del binding
    this.getWeekDay = this.getWeekDay.bind(this);
  }

  getWeekDay(fecha) {
    return semana[new Date(fecha * 1000).getDay()];
  }
  {/* [...] */}
}
```

**Algo para tener en cuenta cuando iteramos:** Si vemos la consola, React nos dice que cada hijo en un array o iterador debe tener una prop única que sea `key` \(`clave`\), tiene que ser un valor único que no se repita dentro del array. **Pasar el id como key se considera malas prácticas** ya que si eliminamos o movemos datos dentro del array, ese id puede ir cambiando. En nuestro caso la `key` puede ser el día de la semana, sea en UNIX \(`date_epoch`\) o en string \(`date`\), entonces pasamos eso como prop a lo que se itera, nos quedaría:

`<div className="card" key={dia.date}>`

También vemos que las fechas máxima y mínima desde la API nos la proveen como un número con decimal, al utilizar `parseInt()` obtenemos la parte entera del número únicamente \(en lo personal me gusta más un número entero\).

Ya está, tenemos todo funcional y todo lindo, ahora nos falta algo clave, **componentizar**. Dejo el código hasta ahora y pensamos las divisiones:

 **Código hasta ahora** \`\`\`jsx import React, { Component } from "react"; import "./App.css"; const semana = \[ "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo" \]; class App extends Component { constructor\(props\) { super\(props\); this.state = { clima: {}, isLoaded: false }; this.getWeekDay = this.getWeekDay.bind\(this\); } getWeekDay\(fecha\) { return semana\[new Date\(fecha \* 1000\).getDay\(\)\]; } componentDidMount\(\) { fetch\( \`https://api.apixu.com/v1/forecast.json?key=${ process.env.REACT\_APP\_API\_KEY }&q=Buenos+Aires&days=6\` \) .then\(response =&gt; response.json\(\)\) .then\(jsonData =&gt; { jsonData.current.condition.icon = jsonData.current.condition.icon.replace\( "64x64", "128x128" \); this.setState\({ clima: jsonData, isLoaded: true }\); }\); } render\(\) { const { location, current, forecast } = this.state.clima; return this.state.isLoaded ? \( ![Clima principal](https://github.com/agustinmulet/reactworkshop/tree/caff27c875935fd41bec63ba2bbd3e13a692c7aa/Workshop/%7Bcurrent.condition.icon%7D)

{current.temp\_c} °C

###  {location.name}, {location.region}, {location.country}

 ST: {current.feelslike\_c} °C, H: {current.humidity} % {forecast.forecastday.map\(dia =&gt; { return \(

#### {this.getWeekDay\(dia.date\_epoch\)}

**{dia.date}**

![Clima diario](https://github.com/agustinmulet/reactworkshop/tree/caff27c875935fd41bec63ba2bbd3e13a692c7aa/Workshop/%7Bdia.day.condition.icon%7D)

 {parseInt\(dia.day.maxtemp\_c\)}

 {parseInt\(dia.day.mintemp\_c\)} \); }\)} \) : \(Cargando... \); } } export default App; \`\`\`

Ahora es cuando uno decide qué tanto componentizar, qué tan atómico ser. Podemos hacer que la parte de arriba sea un componente y la parte de abajo otro, o la parte de arriba y la card otro, o dejar la parte de arriba como parte del componente App y que la parte de abajo sea otro componente... En fin, hay varias posibilidades, para este workshop lo que vamos a hacer es que lo que está en la parte de arriba sea un componente, lo que está abajo sea otro y lo que llamamos card sea otro, que es el que más nos hace ver el tema de la reutilización de código.

Empecemos entonces por la parte de arriba, creamos un archivo nuevo llamado `Top.js` y creamos nuestro componente funcional con lo que corresponde a la parte de arriba. No olvidemos pasar por props lo que necesitemos en el componente \(`current` y `location`\), que lo vamos a tener disponible en nuestro nuevo componente en `props` \(para lo cual si usamos ES6 destructuring de nuevo, no tenemos que modificar nada en nuestro JSX 😉\). Nos debería quedar así:

**Top.js:**

```jsx
import React, { Component } from "react";
// El archivo css no es necesario cargarlo ya que se carga en el componente padre

// Indicamos que la función recibe props
const Top = (props) => {
  // Usamos ES6 destructuring
  const { current, location } = props;
  return(
    <div className="top">
      <img src={current.condition.icon} alt="Clima principal" className="image" />
      <p className="temp">{current.temp_c} °C</p>
      <h4 className="city">
        {location.name}, {location.region}, {location.country}
      </h4>
      <div className="feelslike">
        ST: {current.feelslike_c} °C, H: {current.humidity} %
      </div>
    </div>;
  );
};

export default Top;
```

Y en **App.js:**

```jsx
import React, { Component } from "react";
// Importamos nuestro componente nuevo,
// presten atención a la carpeta donde lo crean
import Top from "./Top";

import "./App.css";

class App extends Component {

  /* [...] */

  render() {
    const { location, current, forecast } = this.state.clima;
    return this.state.isLoaded ? (
      <div className="App">
        <div className="container">
          {/* Utilizamos nuestro componente y le pasamos props */}
          <Top current={current} location={location}/>

          <div className="bottom">
            {/* [...] */}
          </div>

        </div>
      </div>

    /* [...] */
}
```

Ahora les queda como tarea hacer lo mismo con el componente de abajo, al que podemos llamar `Bottom`, recuerden también crear uno `Card` que va a ser utilizado adentro de las iteraciones del `map()` y va a haber que pasar las props dos niveles para abajo en el árbol de jerarquía. También presten atención a lo que se usa en `Card`, qué es lo que se tienen que llevar de `App` 😉

Una vez que finalicen, les deberían quedar estos archivos: \(no espíen antes de probar ehhhhh\)

 **App.js** \`\`\`jsx import React, { Component } from "react"; import Top from "./Top"; import Bottom from "./Bottom"; import "./App.css"; class App extends Component { constructor\(props\) { super\(props\); this.state = { clima: {}, isLoaded: false }; } componentDidMount\(\) { fetch\( \`https://api.apixu.com/v1/forecast.json?key=${ process.env.REACT\_APP\_API\_KEY }&q=Buenos+Aires&days=6\` \) .then\(result =&gt; result.json\(\)\) .then\(data =&gt; { //Cambiamos la resolución del ícono del día actual para que sea más grande data.current.condition.icon = data.current.condition.icon.replace\( "64x64", "128x128" \); this.setState\({ clima: data, isLoaded: true }\); }\); } render\(\) { const { location, current, forecast } = this.state.clima; return this.state.isLoaded ? \( \) : \(Loading... \); } } export default App; \`\`\`

 **Top.js** \`\`\`jsx import React from "react"; const Top = props =&gt; { const { current, location } = props; return \( ![Clima principal](https://github.com/agustinmulet/reactworkshop/tree/caff27c875935fd41bec63ba2bbd3e13a692c7aa/Workshop/%7Bcurrent.condition.icon%7D)

{current.temp\_c} °C

###  {location.name}, {location.region}, {location.country}

 ST: {current.feelslike\_c} °C, H: {current.humidity} % \); }; export default Top; \`\`\`

 **Bottom.js** \`\`\`jsx import React from "react"; import Card from "./Card"; const Bottom = props =&gt; { const { forecast } = props; return \( {forecast.forecastday.map\(dia =&gt; { return; }\)} \); }; export default Bottom; \`\`\`

 **Card.js** \`\`\`jsx import React from "react"; const semana = \[ "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo" \]; const getWeekDay = fecha =&gt; { return semana\[new Date\(fecha \* 1000\).getDay\(\)\]; }; const Card = props =&gt; { const { dia } = props; return \(

#### {getWeekDay\(dia.date\_epoch\)}

**{dia.date}**

![Clima diario](https://github.com/agustinmulet/reactworkshop/tree/caff27c875935fd41bec63ba2bbd3e13a692c7aa/Workshop/%7Bdia.day.condition.icon%7D)

 {parseInt\(dia.day.maxtemp\_c\)}

 {parseInt\(dia.day.mintemp\_c\)} \); }; export default Card; \`\`\`

**Listo!!** Phew~ ya deberíamos tener nuestra app del clima funcionando a la perfección! En la próxima parte vamos a ver cómo usar un 'Backend-as-a-Token' \(según dice en su página, yo lo veo más como un servicio de backend o cloud functions, ya son muchas cosas y me pierdo 😵\) para guardar nuestra API key y subir nuestro proyecto a \(por ejemplo\) [Netlify](https://www.netlify.com) que es un hosting que me gusta **MUCHISIMO**

[⭠ Volver a la primer parte del Workshop](workshop.md)

[Vamos a subirlo! ⭢](workshop3.md)

