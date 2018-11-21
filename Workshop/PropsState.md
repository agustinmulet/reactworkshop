# Workshop de React - Props y State

Los componentes necesitan datos para trabajar y React tiene dos formas distintas de combinar componentes y datos: **Props** y **State**. (Props = Propiedades (_Properties_) y State = Estado)
En pocas palabras podemos decir que **State** es donde viven nuestros datos y **Props** son los datos que se pasan de un componente a otro.

## Props

La filosofía de React dice que el flujo de datos es _unidireccional_ y _top-down_, es decir, que los datos se pueden pasar de componentes padres a componentes hijos. (Se puede pasar de hijo a padre también, pero no vayamos en contra de lo que nos sugieren por ahora)

La forma de pasar datos de padres a hijos se denomina **Props** y son inmutables, es decir que un componente que recibe props, solamente puede leerlas y no sobreescribir el dato que recibe.

![alt text](https://cms-assets.tutsplus.com/uploads/users/1795/posts/29541/image/Stateful-vs-Stateless-Component-Tutorial-Component-with-prop.jpg "Props")

Como vemos, las props son externas a nuestro componente. (Imagen tomada prestada de [este post](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541))

Entonces probemos con lo que ya tenemos, hagamos que nuestro componente `Saludo` diga 'Hola' y nuestro nombre. Entonces, donde utilizamos nuestro componente, pasamos una Prop llamada `nombre` (lo elegimos nosotros el nombre) con el dato, en mi caso, "Agustin":

```jsx
import React, { Component } from "react";
import "./App.css";

import Saludo from "./components/Saludo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Saludo nombre="Agustin" />
        </header>
      </div>
    );
  }
}

export default App;
```

Y así ya le pasamos una Prop a nuestro componente creado. Guardamos los cambios y si instalaste las React DevTools, estando en el navegador podés apretar F12 (o el equivalente para abrir las DevTools de tu navegador), ir a la pestaña React (es posible que tengas que hacer click en el simbolito >>) y en la barra de búsqueda, buscamos nuestro componente Saludo, le hacemos click y a la derecha vamos a ver las Props que tiene nuestro componente. Deberíamos ver ahí que nuestro Saludo recibe una Prop "nombre" con el valor (en mi caso) "Agustin".

Todo muy lindo pero, ¿cómo lo usamos? Así:
Vamos a nuestro componente `Saludo`, que al ser un componente funcional, debemos especificar que va a recibir las `props` como parámetro y de esa forma las vamos a poder utilizar. Al estar utilizando JSX, para poder utilizar lo que tengamos en props, lo ponemos entre llaves `{}`

```jsx
import React from "react";

const Saludo = props => <p>Hola {props.nombre}!</p>;

export default Saludo;
```

Guardamos y vemos cómo nuestro componente nos saluda 👋👋👋

**IMPORTANTE:** Si queremos usar Props en un componente de clase, tenemos que usar `this`, ya que los componentes de clase generan un contexto y las props vienen "de regalo". Si hiciésemos un _upgrade_ de nuestro componente funcional `Saludo` a uno de clase, podríamos usar las props recibidas de la siguiente forma:

```jsx
import React, { Component } from "react";

class Saludo extends Component {
  render() {
    return <p>Hola {this.props.nombre}!</p>;
  }
}

export default Saludo;
```

Probalo y vas a ver que es lo mismo :) Pero dejémoslo como componente funcional, ya que es buena práctica que los componentes que solamente muestran data sean funcionales. Caso que necesitemos, hacemos el upgrade a componente de clase.

## State

El **State** o estado, es mutable, es algo que puede variar. Está encapsulado y ojo, no debemos mutarlo indiscriminadamente como pisamos una variable (lo cual no nos deja hacer React al estar encapsulado).
El State es un objeto que es propiedad del componente donde se lo declara y su scope o alcance está limitado al mismo componente. Suele ser el punto de partida para obtener los datos que luego van a ser pasados como props a los hijos.

Al cambiar el estado en un componente, los componentes que tengan props que dependan de ese estado, **React**-cionan (see what I did there? ;D ya habrán hecho mil veces ese chiste jajaja) y se re-renderizan con la data actualizada, de eso se encarga React internamente y es casi mágico ✨

La forma de cambiar el estado de un componente es utilizando el método `setState` pasando como parámetro un objeto donde le indicamos qué partes del estado queremos cambiar. Luego React se encarga de hacer todos los cambios de forma **asíncrona** (cuidado con esto, no es instantáneo el cambio de estado), actualizar el estado, el virtual DOM y el DOM por nosotros.

![alt text](https://cms-assets.tutsplus.com/uploads/users/1795/posts/29541/image/Stateful-vs-Stateless-Component-Tutorial-Component-with-state.jpg "State")

Y acá vemos que el State es interno de cada componente. (Imagen tomada prestada de [este post](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541))

Cada componente no sabe si el otro componente (padre, hijo, hermano, tátara-tátara-abuelo(??)) tiene estado o no, pero sí puede recibir ese estado como prop.
Sin dar más vueltas, probemos cómo es todo este tema del estado de un componente, vamos a:

- Agregar estado a nuestro componente App (es buena práctica que el componente padre/contenedor tenga estado, busque datos en una API de ser necesario y pase esos datos como props a los componentes hijos)
- Agregar un botón
- Crear una función para cambiar nuestro estado y vincular esta función para llamarla con el botón
- Por último, pasar ese estado como prop a nuestro componente `Saludo`

Vamos a hacerlo?

Agregar estado a nuestro componente de clase se hace de la siguiente forma:

```jsx
[...]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: "nombre",
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Saludo nombre="Agustin" />
        </header>
      </div>
    );
  }
}

[...]
```

Como vemos, definimos el método `constructor` que va a ejecutarse al momento de crear e inicializar nuestro componente y el cual recibe props por parámetro. Al hacer `super(props)` llamamos al constructor del objeto padre (Component en nuestro caso) enviándole las props que recibimos como parámetro del constructor (esto es **mandatorio**, _cada vez que se define el constructor en un componente de clase, va acompañado de la llamada a `super()`_)
Dentro del [constructor](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes/constructor) de nuestro componente, inicializamos el estado, donde vamos a indicarle que vamos a tener un nombre y en nuestro caso vamos a inicializarlo con el string "nombre" para saber que ahí va a ir nuestro nombre.
Antes de seguir les dejo un truquito: como estamos usando create-react-app, podemos definir el estado de forma más simple

```jsx
[...]

class App extends Component {
  state = {
    nombre: "nombre",
  }

[...]
```

Podés probar cualquiera de las dos formas, de todos modos no te aseguro que esta segunda forma de inicializar el estado funcione en una app hecha fuera de create-react-app (_no lo probé, para ser sincero_).

Siguiendo con lo nuestro, vamos a crear un botón en `App`:

```jsx
[...]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: "nombre",
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={false}>Hola, qué tal?</button>
          <Saludo nombre="Agustin" />
        </header>
      </div>
    );
  }
}

[...]
```

Por ahora no hace nada nuestro botoncito pero, notan algo raro? Ese evento `onClick` no es el de siempre de HTML (_porque esto es JSX, Agustín, ya lo dijiste_), este es con camelCase y representa al `onclick` de HTML. Muchos de los eventos de HTML se pueden utilizar en React escritos en camelCase (onSubmit, onLoad, onKeyPress, onChange, etc., son muchos)

Vamos con el siguiente paso, _Crear una función para cambiar nuestro estado y vincular esta función para llamarla con el botón_. Vamos a ponerle de nombre `handleClick`:

```jsx
handleClick() {
  this.setState({ nombre: "Agustin" });
}
```

Tengamos en cuenta que [existen varias formas de manejar eventos en React](https://reactjs.org/docs/handling-events.html), recomiendo usar la que vemos en este tutorial ya que no depende de si estamos en create-react-app o donde sea, debería funcionar donde sea que estemos usando React.
Bien, ahora, dónde va esta función? Adentro de nuestro componente, al mismo nivel que los demás métodos `constructor()` y `render()`.
Una vez creada, debemos hacer el `binding` de esta función, vincularla al contexto de nuestro componente, que es donde va a estar siendo llamada.
Esto lo hacemos en el `constructor` de nuestro componente:

```jsx
constructor(props){
    super(props);
    this.state = {
      nombre: "nombre",
    }
    this.handleClick = this.handleClick.bind(this);
  }
```

Ahora lo que resta es usar esta función en nuestro botón, vamos al `onClick` y llamamos a la función ahí:

```jsx
<button onClick={this.handleClick}>Hola, qué tal?</button>
```

Guardamos los cambios y si tenemos las React DevTools, podemos ver en el State de nuestro componente App cómo al tocar el botón, cambia el valor de nombre y aparece nuestro nombre.
Lo siguiente es usar este cambio de estado, mostrarlo en algún lado, lo vamos a hacer como dijimos, pasando el state como prop hacia nuestro componente `Saludo`:

```jsx
<Saludo nombre={this.state.nombre} />
```

Listo! Guardamos y podemos ver en nuestra aplicación que al hacer click en el botón, se cambia el estado de nuesto componente `App`, del cual pasamos 'nombre' como prop a nuestro componente `Saludo` y React es tan inteligente que solamente vuelve a renderizar donde ve un cambio. Si tenemos las DevTools abiertas, nos posicionamos en la pestaña Elements y desplegamos el <p> donde está renderizado nuestro componente `Saludo`, si vemos bien, al hacer click se actualiza el texto donde hubo un cambio, lo demás se mantiene igual. Genial, no?

Nuestro componente `App` debería quedar de la siguiente forma:

### App.js

```jsx
import React, { Component } from "react";
import "./App.css";

import Saludo from "./components/Saludo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "nombre"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ nombre: "Agustin" });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleClick}>Hola, qué tal?</button>
          <Saludo nombre={this.state.nombre} />
        </header>
      </div>
    );
  }
}

export default App;
```

Y así es como queda, por ejemplo, nuestro componente `Saludo` aislado y reutilizable. Cada vez que querramos en algún lugar que aparezca 'Hola {nombre}!', lo importamos y le pasamos por prop ese nombre que queremos mostrar. Es algo simple pero vamos a ver que cuanto más se complejiza, se pueden hacer cosas más copadas ;)

Con lo que vimos, ya creo que estamos listos para empezar a trabajar en nuestra app del clima.

[Vamos a hacer la app! ->](Workshop.md)
