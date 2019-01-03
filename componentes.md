# Componentes

Arranquemos por acá, los componentes \(como el que vimos en las slides\) tienen como finalidad separar en pedazos las cosas que forman parte de la interfaz y permitir la reutilización de código mediante props. Hay dos tipo de Componentes:

## De Clase \(también llamados 'stateful' = 'con estado'\)

```javascript
class HolaMundo extends React.Component {
  render() {
    return <div>Hola Mundo!</div>;
  }
}
```

## Funcional \(también llamados 'stateless' = 'sin estado'\)

```javascript
const HolaMundo = () => {
  return <div>Hola Mundo!</div>;
};
```

Tienen algunas diferencias que vamos a terminar de entender mientras avancemos, pero la diferencia principal es que los Componentes de clase poseen estado \('state'\) y los funcionales no. \(Esto cambiaría si se aceptan los Hooks, pero eso lo veremos en un futuro, por ahora aceptamos que es la diferencia principal que tienen\) Para poder utilizar este componente dentro de otro componente, se hace de la siguiente forma utilizando JSX \(sí, tranquilos, ya vamos a ir viendo state y JSX y todo, paciencia 😁\):

```javascript
<HelloWorld />
```

Es tan simple? Sí, es simple, después se complejiza según la implementación que hagamos.

**IMPORTANTE:** Cada componente solamente puede retornar **un solo** elemento, por ejemplo:

Bien 👍

```javascript
const HolaMundo = () => {
  return <div>Hola Mundo!</div>;
};
```

Mal 👎

```javascript
const HolaMundo = () => {
  return (
      <div>Hola</div>
      <div>Mundo!</div>
  );
};
```

Una forma de solucionarlo es encerrar esos dos _div_ en un _div_ padre, no es lo óptimo pero por ahora nos saca del paso. Una solución propuesta por React es [Fragments](https://reactjs.org/docs/fragments.html), creo que es algo complejo para explicar ahora que estamos arrancando pero está bueno tener el link a mano para después.

