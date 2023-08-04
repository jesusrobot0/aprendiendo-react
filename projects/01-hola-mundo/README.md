# Clase 1: De cero hasta crear tus primeros componentes con estado

## ¿Qué es React?

React es una librería para desarrollar interfaces de usuario.

- Declarativo
- Basado en Componentes 🧱
- Es universal (se puede ejecutar tanto en cliente como en servidor)
- Es de Meta Platforms
- Nace en 2011 pero hasta 2013 se vuelve de código abierto

## ¿Por qué aprenderlo?

- [Es uno de los frameworks de desarrollo más demandados en el mundo 🔗](https://www.devjobsscanner.com/blog/the-most-demanded-frontend-frameworks-in-2022/)
- Si aprendes a desarrollar aplicaciones [web 🔗](https://es.react.dev/) con react también podrás desarrollar aplicaciones [móviles 🔗](https://reactnative.dev/) y de [escritorio 🔗](https://microsoft.github.io/react-native-windows/).
- Es ampliamente utilizado (y mantenido) por Meta por lo que no es un framework que va a desaparecer de la noche a la mañana.
- Aprender React vuelve más fácil aprender el resto de los frameworks.
- Futuro prometedor, no para de crecer 🚀!
- Tiene un API estable, es decir la sintaxis no cambia mucho con el tiempo, las actualizaciones son para cosas que ocurren bajo el capó.
- Tiene una comunidad muy grande siempre dispuesta a ayudar 💙.

## ¿Por qué React?: Creando un botón sin React

### Vanilla Javascript 🍦

![Ejemplo de código JavaScript para crear unos botones de “me gusta”](https://i.postimg.cc/9fmvbntx/Captura-de-pantalla-2023-07-19-a-la-s-8-41-13-p-m.png)
Ejemplo de código JavaScript para crear unos botones de “me gusta”

**Al utilizar Vanilla Javascript el código que escribimos es imperativo**, esto significa que  tenemos que describir detalladamente los pasos y acciones que el programa debe seguir para alcanzar el resultado que queremos.

### Esto tiene dos problemas

1. El código generado es difícil de reutilizar.
2. No es escalable.

### React ⚛️

![Ejemplo con React puro](https://i.postimg.cc/Qdk2p359/Captura-de-pantalla-2023-07-19-a-la-s-9-11-07-p-m.png)
Ejemplo con React puro

Cosas puntuales sobre este código:

- **No puedes renderizar texto con HTML** esto React lo hace para evitar que alguien inyecte código a la aplicación, para renderizar HTML es necesario crear un elemento, para hacerlo utiliza el método `React.createElement(tag, atr, content)`

    ```jsx
    // Esto no funciona ❌
    root.render('<button>Me gusta</button>')
    
    // Esto si funciona ✅
    const button = React.createElement('button', {"data-id": 123}, 'Me gusta')
    root.render(button)
    ```

- No puedes renderizar varios elementos en el nivel superior, esto es por que el método render solo recibe un parámetro para funcionar y si se le pasa otro, no va a saber que hacer. Esto se soluciona envolviendo los elementos dentro de un `div` o un `fragment` .

### React con JSX

El código anterior ya es declarativo, pero aun sigue siendo complicado de escribir y entender y aunque esto ya es React lo cierto es que no se utiliza así cuando se trabaja con el en un caso real.

Para evitar esta complejidad se utiliza un extensión de la sintaxis de JavaScript llamada [JSX 🔗*](http://facebook.github.io/jsx/#sec-license) que permite describir la interfaz de usuario escribiendo un código muy similar a *HTML*, pero que al final se va a transpilar a un código como el que vimos en el ejemplo anterior ya que *JSX* no es soportado por el navegador.

Para lograr esta transformación de JSX a JS se utilizan herramientas como  [SWC 🔗](https://swc.rs/) o [Babel 🔗](https://babeljs.io/), pero no es necesario aprenderlas ya que los empaquetadores de aplicaciones como [webpack 🔗](https://webpack.js.org/) o [vite 🔗](https://vitejs.dev/) se encargan de configurar las por nosotros.

![Este código hace lo mismo que el ejemplo anterior.](https://i.postimg.cc/Njch9Myv/Captura-de-pantalla-2023-07-20-a-la-s-11-31-11-a-m.png)
Este código hace lo mismo que el ejemplo anterior.

Cosas a tener en cuenta con JSX

- Se pueden **incrustar expresiones** de JS dentro de JSX envolviéndolas entre corchetes `{}`.
- Para definir un atributo de más de una palabra se utiliza la nomenclatura camelCase, por ejemplo `dataId=””`.
- JSX evita la inyección de código al no renderizar código que venga dentro de un texto.

## Crear una aplicación de React con Vite

```bash
pnpm create vite
```

## Componentes

- Los componentes de React son funciones re utilizables que retornan un elemento (que puede envolver a otros elementos) y que puede tener estado o no.

    ```jsx
        const Button = ({text}) => {
            return (
                <button>{text}</button>
            )
        } 
        
        <React.Fragment>
                <Button text="Button 1" />
                <Button text="Button 2" />
                <Button text="Button 3" />
        </React.Fragment>
    ```

- Los componentes deben nombrarse con la nomenclatura `PascalCase` esto para que React distinga que va a renderizar un componente y no un elemento HTML.
- Por norma general cada componente debe de ir en un archivo independiente nombrado de igual manera .

### Diferencias entre componentes y elementos

- Un componente es una función que al ejecutarlo devuelve elementos (factoría de elementos)
- Los elementos son lo que renderiza React

## Props

Los props son igual que los parámetros de las funciones de vanilla JS y son la base de la reutilización de Componentes en React.

- Podemos pasar como props:
  - strings
  - números
  - booleanos
  - arrays
  - funciones
  - objetos
  - elementos
  - Hay un prop especial llamado `children` que permite pasar una gran cantidad de elementos a un componente como si fueran (y lo son) los hijos del componente.
- Puedes establecer valores por defecto a las props para que en el caso de que no se le envié al componente tenga por lo menos un valor que mostrar.

  ```jsx
  function MyComponent({name = 'Unknown'}) => {
      return <h1>Hello, {name}</h1>
  }
  ```

- Solo se pueden pasar props de un componente padre a un componente hijo pero al pasar un callback podemos conseguir mandar información del hijo al padre.

> 💡 Trata a los props como si fueran inmutables para no modificar la fuente de la verdad.

## El estado del componente - WIP 🏗️

- La forma de proveer estado a un componente es utilizando el **hook** `useState()`
  
  ```jsx
  const [state, setState] = useState('')
  ```
  
  La variable **state** devuelve el valor de dicho state y la función **setState** sirve para modificar el valor del state, hay que hacer siempre actualizaciones con dicha función para que React se de cuenta de que hubo un cambio y vuelva a renderizar el componente.

  El valor del espacio vacío `''` en la función `useState` es el **valor por defecto del state** y se recomienda colocar uno que que tenga relación con el dato que se espera.
- Puedes inicializar un state con una prop pero no puedes esperar que el state cambie cada vez que la prop lo haga (y en consecuencia se reflejen los cambios en el DOM) por el estate solo se inicializa una vez además esto se considera por lo general una mala práctica.
- Cada vez que el estado cambia, react re renderiza el componente para mostrar los cambios en la interfaz de usuario, pero haciendo solo las actualizaciones mínimas en el **DOM** para conseguirlo, para lograr esto utiliza algo que tiene React llamado **Virtual DOM**.
- Otra forma en la que un componente puede re renderizarse es cuando un componente padre se vuelve a renderizar **propagando los cambios** hacia los hijos.

  ```jsx
    function MyComponent() {
      const [name, setName] = useState('Unknown')

      return (
        <Greeting name={name}/>

        <Greeting name="midudev"/>

        <button onClick={() => setName('Jesús')}></button>
      )

    }
  ```

  Al hacer un cambio en el state de un componente, este re renderiza a todos sus componentes hijos, incluso los que no están relacionados con el state que cambio, aunque no hacen ningún cambio en UI pero la función del componente si se ejecuta.

### Renderizado condicional

El renderizado condicional es como su nombre ya lo indica la forma de renderizar una cosa u otra en base a una condición. El renderizado condicional es la clave de la reactividad de React pues muestra cambios en el UI en base a los cambios de estado de los componentes.

Se usa para renderizar un componente u otro o aplicar un estilo u otro.

```jsx
function MyComponent() {
  const [isLogged, setIsLogged] = useState(false)

  const handleLogin = () => setIsLogged(!isLogged)

  return (
    {
      isLogged 
        ? <button onClick={handleLogin}>logout</button>
        : <button onClick={handleLogin}>login</button>
    }
  )
}
```

## Estilos en React

Hay muchas formas de agregar estilos en React

- hay 3 formas nativas:
  - Estilos por clase (la forma de hacerlo de toda la vida)
  - Estilos en línea `styles={{fontSize: ‘10px’}}`
  - Módulos CSS

- Pero hay muchísimas más que no lo son:
  - Tailwind ✨
  - Styled Componentes
  - Librerías de componentes UI

> 💡 Una buena práctica para agregar separación entre componentes es estilando la separación en el contenedor y no en el componente individual, por que el día de mañana no sabes donde vas a utilizar ese componente y puede que no ocupes esa separación.
