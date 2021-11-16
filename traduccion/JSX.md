## JSX

El siguiente tema es JSX (JavaScript eXtended), que no es más que _syntactic sugar_, una forma de escribir Javascript que es más amena y comprensible para el programador.
Aquí vamos a ver cómo queda traducido en React puro y qué cosas se pueden (y no) hacer.

Podríamos decir (de forma muy discutible) que esto es JSX:

```jsx
<div id="Hola">Hola Mundo!</div>
```

Bueno, no, no es JSX, es HTML, está bien, pero esto **sí es JSX**:

```jsx
const HolaMundo = <div id="hola">Hola Mundo!</div>;
```

Y se traduce en:

```javascript
const HolaMundo = React.createElement("div", { id: "hola" }, "Hola Mundo!");
```

Si vamos a la docu de React, vemos los argumentos de [createElement()](https://reactjs.org/docs/react-api.html#createelement):

```javascript
React.createElement(tipo, [props], [...children]);
```

Donde _tipo_ va a ser el tipo de elemento de HTML que vamos a generar, _props_ son las propiedades de nuestro elemento y _children_ los hijos de nuestro elemento.

**SUPER IMPORTANTE:** Al ser **class** y **for** palabras reservadas de Javascript, al escribir JSX se reemplazan por **className** y **htmlFor**. Quizás molesta un poco al principio pero uno se termina acostumbrando a esta nomenclatura.

#### Qué son los Children?

Children, como la traducción lo indica, son los hijos de nuestro elemento. Esto en HTML (o JSX 😜) es algo "simple" que hacemos a menudo, pero hacerlo en React puro queda medio ilegible a mi parecer:

```jsx
const HolaMundo = (
  <div id="hola">
    Hola
    <div className="mundo">Mundo!</div>
  </div>
);
```

Simple, no? Un div adentro de otro y todos felices, pero veamos en qué se traduce

```javascript
const HolaMundo = React.createElement("div", { id: "hola" }, [
  "Hola ",
  React.createElement("div", { className: "mundo" }, "Mundo!")
]);
```

En este caso particular, tendríamos como _children_ un arreglo que incluye el string "Hola " y el elemento de tipo _div_ que dice "Mundo!".

No sé ustedes, pero a mí me parece que JSX es más compacto, y más amigable al ser parecido a HTML, aunque sobre gustos no hay nada escrito...
