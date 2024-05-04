# Buscador de películas

## Enunciado de la prueba técnica

Crea una aplicación para buscar películas

API a usar:

- <https://www.omdbapi.com/>
- API_KEY:

Requerimientos:

- ✅ Necesita mostrar un input para buscar la película y un botón para buscar.
- ✅ Lista las películas encontradas y muestra el título, año y poster.
- ✅ Hacer que el formulario funcione.
- ✅ Hacer fetching de datos a la API
- ✅ Haz que las películas se muestren en un grid responsive.

Primera iteración:

- ✅ Evitar que se haga la misma búsqueda dos veces seguidas.
- ✅ Haz que la búsqueda se haga automaticamente al escribir.
- ✅ Evita que se haga la búsqueda continuamente al escribir (debounce)

## Tips para abordar una entrevista técnica

- Mostrar avances constantemente desde el minuto uno, aunque sean pequeñitos.
- Antes de comenzar a escribir la petición a la API revisa la documentación.
- No veas la forma del objeto de la respuesta con console.log, usa un software especializado.
- Crea un mocking de datos antes de hacer el fetch, para avanzar más rapido. Ya luego haces el fetch.
- Cuando vayas haciendo la prueba técnica ve comentandole al entrevistador lo vas haciendo, esto le da mas contexto para que entienda mejor lo que estas haciendo, si no te sientes preparado para hacer esto pudes prácticar previamente haciendolo con algún amigo.

## El hook useRef()

### ¿Qué es?

Es un hook que te permite crear una referencía mutable, que persiste durante todo el ciclo de vida del componente. Lo que es muy util para guardar cualquier valor que puedas mutar, como un identificador, un elemento del DOM, un contador, etc. Y que cada vez que cambia no vulve a renderizar el componente y eso es lo que lo vuelve completamente diferente al useState que cada vez que cambia renderiza el componente.

## Menejo de formularios

### Formularios no controlados

Esto quiere decir que estamos gestionando el formulario atravéz del DOM. Lo bueno de hacerlo de esta forma es que es la manera más fácil y sencilla. La recomendación de midu es que la mayoría de las veces lo hagamos de esta manera ya que es más fácil y rápido además de que vamos aprender más JS.

#### useRef

```js
import { useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const inputElement = inputRef.current;
    const inputValue = inputElement?.value;
    console.log(inputValue);
  };

  return (
    <>
      <form className="form">
        <input
          type="text"
          placeholder="Magnolia, Blue Velvet, Perfect Days..."
          ref={inputRef}
        />
        <button type="submit" onClick={handleClick}>
          Buscar
        </button>
      </form>
    </>
  );
}

export default App;

```

#### FormData (Vanilla JS)

```js
function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    console.log(fields);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Magnolia, Blue Velvet, Perfect Days..."
        />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
}

export default App;
```

### Formularios controlados

Quiere decir que React va a controlar que es lo que se escriben en nuestros inputs, como lo hace, cuando lo hace y todo esto gracias al estado. Esto implica por lo tanto crear un estado para tener el control de lo que se esta dibujando en el input. La principal deventaja es que es mucho más lento que la forma anterior ya que cada vez que cambia el input se renderiza nuevamente el componente. Y la ventaja numero uno es que facilita la validación de formularios, que no es que no se pueda de la forma no controlada, solo que de esta forma es más fácil.

```js
import { useEffect, useState } from "react";

const MINIMUM_CHARACTERS_QUERY = 3;

function App() {
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Con el input controlado podemos hacer este tipo de pre-validaciones sin tanto rollo
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    setQuery(newQuery);
  };

  useEffect(() => {
    if (query === "") {
      setError("No se puede buscar una película vacía");
      return;
    }

    if (query?.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (query?.length! < MINIMUM_CHARACTERS_QUERY) {
      setError("La búsqueda debe tener al menos tres caracteres");
      return;
    }

    setError(null);
  }, [query]);

  return (
    <>
        <form className="form">
          <input
            type="text"
            placeholder="Magnolia, Blue Velvet, Perfect Days..."
            value={query}
            onChange={handleChange}
            style={{
              border: "2px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default App;
```

## Custom Hooks

Sirven para extraer lógica del componente.

¿Cuándo utilizarlos?

Cuando la lógica que estas extrayendo contenga un hook. Cuando quieras extraer otro tipo de lógica puedes hacerlo en un helper. Por lo general cuando utilices un useEffect es signo de que esa lógica se puede convertir en un customHook.

## useMemo

Es para poder memorizar computaciones que hemos hecho que queremos evitar que se hagan a no ser que cambien las dependencias que nosotros le hayamos indicado que les de seguimiento.

¿Cuando utilizarlo?

Cuando realmente estes haciendo un cálculo que afecte el rendimiento de tu componente, no es para volverse loco y usarlo en todos lados. No comiences a optimizar si no sabes medir el performance.

```js
const sortedMovies = useMemo(() => {
  return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies;
}, [sort, movies]);
```

## useCallback

Es exactamente lo mismo que useMemo solo que mejora la sintaxis para usarse con funciones.

El ejemplo de abajo se puede hacer perfectamente con useMemo solo que en vez de hacerlo de esta forma seria retornando la función.

```js
const getMovies = useCallback(async ({ search }: { search: string }) => {
  if (previousSearch.current === search) return;

  try {
    setLoading(true);
    setError(null);
    previousSearch.current = search;
    const newMovies = await searchMovies({ search });
    setMovies(newMovies);
  } catch (error: any) {
    setError(error.message);
  } finally {
    setLoading(false); // Se ejecuta tanto en try como en catch
  }
}, []);
```
