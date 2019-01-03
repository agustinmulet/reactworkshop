# react

export { default as theme } from "./theme"; import { Appear, Image, Notes } from "mdx-deck";

import Iconito from "./Iconito";

## \(Mini\) Intro + Workshop

## React

## Sobre mi

Frontend developer

 @AgustinDMulet

## ¿Qué es react?

* Biblioteca de frontend encargada de la "V" \(Vista\) del MVC
* Basada en Componentes
* Enfocada en JS \(Angular y Vue se enfocan en HTML\)
* One-way data binding \(Los datos fluyen de forma unidireccional\)

 Es una biblioteca de Javascript para desarrollo de interfaces hecha por ingenieros de Facebook en 2013 basada en componentes \(codigo reutilizable\). Posee ventajas en performance respecto a jQuery por ejemplo gracias al virtual DOM. Está enfocada por el lado de JS y no por el lado de HTML como AngularJS y Vue y la data fluye de forma unidireccional, de componente padre a hijo.

## Bases para entender React

* Componentes
* JSX
* Props
* State

#### Separemos en componentes

#### Separemos en componentes

 Acá podemos observar que el componente Twit es reutilización de código, se repite una y otra vez pero solamente lo escribimos una vez y después lo utilizamos escribiendo su nombre en JSX.

### Árbol de jerarquías

Donde ListadoTwits es un componente al que podemos denominar de tipo "contenedor" y Twit sería del tipo "presentacional". El componente "contenedor" se encarga de cómo funcionan las cosas y tienen state. Los componentes "presentacionales" se encarga de cómo se ven \(y mostrar\) las cosas, y reciben data por props.

 El componente de tipo contenedor se encarga de conseguir la data, en nuestro caso es un arreglo con objetos tuits digamos, cada objeto tiene la data necesaria para después pasarla por props a cada Twit. Por ejemplo van a tener nombre de usuario, URL de imagen, texto del mensaje, etc. Qué son state y props lo vamos a ver en el workshop :\)

### Ejemplo de componente

```jsx
import React from "react";

class MensajeHola extends React.Component {
  state = {
    dia: "jueves"
  };
  render() {
    return (
      <div>
        Hola {this.props.name}! Hoy es {this.state.dia}
      </div>
    );
  }
}

export default MensajeHola;
```

## ¡Gracias!

#### La seguimos en el repo

[Repo del Workshop](https://github.com/agustinmulet/reactworkshop)

