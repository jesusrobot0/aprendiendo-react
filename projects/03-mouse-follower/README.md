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
