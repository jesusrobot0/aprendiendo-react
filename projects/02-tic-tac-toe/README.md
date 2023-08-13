# Clase 2: Crea un videojuego y una aplicación para aprender useState y useEffect

## Enviar datos de un componente hijo a un componente padre

La forma de hacerlo es pasando como **prop** al componente hijo una función que reciba como parámetro el dato que queremos obtener el componente padre

```jsx
import { useState } from "react";

function Option({ id, onSelectOption }) {
  return <button onClick={() => onSelectOption(id)}>Option {id}</button>;
}

export default function App() {
  const [optionSelected, setOptionSelected] = useState("option not selected");

  const selectOption = (id) => {
    setOptionSelected(id);
  };

  return (
    <>
      <p>the selected option is: {optionSelected}</p>
      <Option id={1} onSelectOption={selectOption} />
      <Option id={2} onSelectOption={selectOption} />
      <Option id={3} onSelectOption={selectOption} />
    </>
  );
}

```

## El state es inmutable

Siempre que vayas a hacer una actualización en el **state** aparte de usar exclusivamente la función **set**, debes de asegurarte que los datos que envías al state siempre sean nuevos.

Si vas a modificar un objeto o un array envía siempre una copia del state original con las modificaciones que necesites. Esto para evitar errores de renderizado.

### Como hacer una copia de un array

```jsx
const newArray = [...state]

setState(newArray)
```

### Como hacer una copia de un objeto

```jsx
const newObject = {...state}

setState(newObject)
```

> Para hacer una copia de un objeto o array puedes usar el spread operator `...`

## Las actualizaciones en el state son asíncronas

Por lo cual no puedes fiarte de que el valor del state sea el más reciente, por lo que si estas haciendo algún calculo con el state mejor hazlo con la copia del state que haz creado para actualizarlo.

O acceder a su valor anterior desde la función set

```jsx
setState(prev => prev + 1)
```
