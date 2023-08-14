# Hook useEffect

El `useEffect` es probablemente después de `useState` el segundo **hook** mas importante de React.

## ¿Qué hace useEffect?

Permite ejecutar código arbitrario cuando el componente se monta en el DOM, cuando se desmonta y cada vez que cambian las dependencias que nosotros le digamos.

```jsx
useEffect(() => {
  // Código a ejecutar
}, [/*Lista de dependencias*/])
```

## ¿Cuando se ejecuta?

Si no se le pasa la lista de dependencias, se va a ejecutar cada vez que se renderiza el componente

```jsx
useEffect(() => {
  console.log('Me ejecuto cada vez que se renderiza el componente')
})
```

Si se le pasa la lista de dependencias vacía, se va a ejecutar solo cuando se renderiza una vez el componente

```jsx
useEffect(() => {
  console.log('Me ejecuto solo una vez')
}, [])
```

Si se le pasa una o varia dependencias, se va a ejecutar cada vez que esta o estas cambien

```jsx
useEffect(() => {
  console.log('Me ejecuto cada vez que el state cambie')
}, [state])
```

## Función cleanup

Dentro de la función que ejecuta `useEffect` podemos retornar una función para limpiar el efecto, esta función también llamada **cleanUp** se ejecuta antes de que se desmonte el componente y cada vez que cambien las dependencias antes de ejecutar el evento de nuevo.

Es importante limpiar los efectos secundarios por que de no hacerlo podemos tener problemas graves como:

- Ralentización de la aplicación.
- Fallos en la computadora cliente

```jsx
useEffect(() => {
  console.log('Me ejecuto cada vez que el state cambie')

  return () => {
    console.log('Me ejecuto cada vez que el state cambie y al desmontar el componente')
  }
}, [state])
```

Lo más seguro es que queramos limpiar un efecto secundario en los siguientes casos:

- Una solicitud de llamada a un API
- Al usar timers como `setTimeout` o `setInterval`
- Limpieza de `eventListeners`
- Limpieza de sockets web
