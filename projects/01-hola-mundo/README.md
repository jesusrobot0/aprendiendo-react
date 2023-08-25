# Clase 1: De cero hasta crear tus primeros componentes con estado

## ¿Qué es React?

React es una librería para desarrollar interfaces de usuario.

- Declarativo
- Basado en Componentes 🧱
- Es universal (se puede ejecutar tanto en cliente como en servidor)
- Es de Meta Platforms
- Nace en 2011 pero hasta 2013 se vuelve de código abierto y se lanza al público en general

## Historia

React nace Facebook a principios de la década de los 2010 de la mano de Jordan Walker con el objetivo de reducir la complejidad que requería desarrollar las complicadas interfaces de los productos de Facebook.

Problemas de entre los que destacaban la confusa gestión de estado y el renderizado ineficiente.

No fue un éxito instantáneo, en sus inicios React tuvo que competir contra otros frameworks desarrollados internamente en Facebook que buscaban solventar el mismo problema, tales como Bolt.js o JS.HTML.

La primera vez que se uso React ya en producción como tal fue en el "Centro Universal de Retroalimentación" que es la sección inferior de las publicaciones de Facebook que permite al usuario reaccionar, comentar y compartir.

No fue hasta la compra de Instagram cuando se uso por primera vez para construir un producto en su totalidad.

Sin embargo el punto decisivo que marcaría el futuro del framework fue cuando se opto por reescribir toda la sección de publicidad de Facebook, la parte más importante por que de ahí la empresa obtenía todo su dinero.

Esto no solo demostró que React era el framework que debían de elegir por sobre encima de todas las demás opciones sino que ayudo a refinar lo y robustecerlo para comenzar a utilizarlo a lo largo de toda la empresa.

Todo estaba yendo bien para React dentro de Facebook y entonces se decide hacerlo Open Source, sin embargo no se obtuvo la recepción que se esperaba ya que la comunidad lo odio desde el primer momento.

En parte por que no gustaba la sintaxis de JSX parecida a XHTML y también por que echaba por la borda mucha de las que se consideraban buenas prácticas a la hora de desarrollar interfaces de usuario y software en general.

La primera persona que le dio una oportunidad fuera de Facebook fue Sophie Alpert quien utilizo React para reescribir parte del código de Khan academy.

La segunda gran empresa que le dio la oportunidad fue Netflix.

Poco después se une al equipo Dan Abramov el primer integrante de la fase 2 de react y uno de los principales propulsores de lo que es React hoy en día.

## ¿Por qué aprenderlo?

- [Es uno de los frameworks de desarrollo más demandados en el mundo 🔗](https://www.devjobsscanner.com/blog/the-most-demanded-frontend-frameworks-in-2022/)
- Si aprendes a desarrollar aplicaciones [web 🔗](https://es.react.dev/) con react también podrás desarrollar aplicaciones [móviles 🔗](https://reactnative.dev/) y de [escritorio 🔗](https://microsoft.github.io/react-native-windows/).
- Es ampliamente utilizado (y mantenido) por **Meta** por lo que no es un framework que va a desaparecer de la noche a la mañana.
- Aprender React vuelve más fácil aprender el resto de los frameworks.
- Futuro prometedor, no para de crecer 🚀!
- Tiene un API estable, es decir la sintaxis no cambia mucho con el tiempo, las actualizaciones son por lo general para optimizaciones que ocurren bajo el capó.
- Tiene una comunidad muy grande siempre dispuesta a ayudar 💙.

## ¿Por qué React?: Creando un botón sin React

### Vanilla Javascript 🍦

![Ejemplo de código JavaScript para crear unos botones de “me gusta”](https://i.postimg.cc/9fmvbntx/Captura-de-pantalla-2023-07-19-a-la-s-8-41-13-p-m.png)
Ejemplo de código JavaScript para crear unos botones de “me gusta”

**Al utilizar Vanilla Javascript el código que escribimos es imperativo**, esto significa que tenemos que describir detalladamente los pasos y acciones que el programa debe seguir para alcanzar el resultado deseado.

### Esto tiene dos problemas

1. El código generado es difícil de reutilizar.
2. No es escalable.

### React ⚛️

![Ejemplo con React puro](https://i.postimg.cc/Qdk2p359/Captura-de-pantalla-2023-07-19-a-la-s-9-11-07-p-m.png)
Ejemplo con React puro

Cosas puntuales sobre este código:

- **No puedes renderizar texto con HTML,** esto React lo hace para evitar que alguien inyecte código malicioso a la aplicación. Para renderizar HTML es necesario crear un elemento, para hacerlo es necesario el método `React.createElement(tag, atr, content)`

    ```jsx
    // Esto no funciona ❌
    root.render('<button>Me gusta</button>')
    
    // Esto si ✅
    const button = React.createElement('button', {"data-id": 123}, 'Me gusta')
    root.render(button)
    ```

- No puedes renderizar varios elementos en el nivel superior, esto es por que el método render solo recibe un parámetro y si se le pasa otro, no va a saber que hacer. Esto se soluciona envolviendo los elementos dentro de un elemento padre o un fragment.

  ```jsx
  const button1 = React.createElement('button', {"data-id": 123}, 'Me gusta')
  const button2 = React.createElement('button', {"data-id": 123}, 'Me gusta')
  const button3 = React.createElement('button', {"data-id": 123}, 'Me gusta')

  // Esto no funciona ❌
  root.render(button1, button2, button3)

  // Esto si ✅
  const app = React.createElement(React.Fragment, null, [button1, button2, button3])
  root.render()
  ```

### React con JSX

El código anterior ya es un poco más declarativo, pero aun sigue siendo complicado de escribir y entender y aunque esto ya es React lo cierto es que no se utiliza así cuando se trabaja con el en un caso real.

Para evitar esta complejidad se utiliza un extensión de la sintaxis de JavaScript llamada [JSX 🔗*](http://facebook.github.io/jsx/#sec-license) que permite describir la interfaz de usuario escribiendo un código muy similar a *HTML*, pero que al final se va a transpilar a un código como el que vimos en el ejemplo anterior ya que *JSX* no es soportado por el navegador.

Para lograr esta transformación de JSX a JS se utilizan herramientas como  [SWC 🔗](https://swc.rs/) o [Babel 🔗](https://babeljs.io/), pero no es necesario aprenderlas ya que los empaquetadores de aplicaciones como [webpack 🔗](https://webpack.js.org/) o [vite 🔗](https://vitejs.dev/) se encargan de configurar las por nosotros.

![Este código hace lo mismo que el ejemplo anterior.](https://i.postimg.cc/Njch9Myv/Captura-de-pantalla-2023-07-20-a-la-s-11-31-11-a-m.png)
Este código hace lo mismo que el ejemplo anterior.

Cosas que se pueden hacer con JSX

- Se pueden **incrustar expresiones** de JS dentro de JSX envolviéndolas entre corchetes `{}`.
- Para definir un atributo de más de una palabra se utiliza la nomenclatura camelCase, por ejemplo `dataId=””` o  `className=""`.
- JSX también evita la inyección de código al no renderizar código que venga dentro de un texto.

> 💡 Las expresiones son fragmentos de código que al ser evaluados devuelven un valor

## Crear una aplicación de React con Vite

```bash
pnpm create vite
```

## Componentes

- Los componentes de React son funciones re utilizables que retornan un elemento (que puede contener a otros elementos) y que puede tener estado o no.

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

- `PascalCase` para que React distinga que va a renderizar un **componente** y no un **elemento** HTML.
- Por norma general cada componente debe de ir en un archivo independiente nombrado de igual manera que el componente que exporta.

### Diferencias entre componentes y elementos

- Un componente es una función que al ejecutarla devuelve elementos (factoría de elementos)
- Los elementos HTML son lo que renderiza React

## Props

Los props son igual que los parámetros de las funciones de vanilla JS y son la base de la reutilización de Componentes en React.

- Podemos pasar como props:
  - strings
  - números
  - booleanos
  - arrays
  - objetos
  - funciones
  - elementos
  - `children` que permite pasar una gran cantidad de elementos a un componente como si fueran (y lo son) los hijos del componente.
  
    ```jsx
    // Esta es la forma de pasar el prop
    <MyComponent>
      <h1>Hello World</h1>
      <p>lorem ipsum</p>
    </MyComponent>

    // Se usa la palabra reservada children para obtener los children
    function MyComponent({children}){

    }
    ```

- Puedes establecer valores por defecto a las props para que en el caso de que no se envíen el  al componente tenga por lo menos un valor que mostrar.

  ```jsx
  function MyComponent({name = 'Unknown'}) => {
      return <h1>Hello, {name}</h1>
  }
  ```

- Solo se pueden pasar props de un componente padre a un componente hijo. Pero, al pasar un callback podemos conseguir mandar información del hijo al padre.

> 💡 Trata a los props como si fueran inmutables para no modificar la fuente de la verdad y react tenga certeza de lo que esta renderizando.

## El estado del componente

- La forma de proveer estado a un componente es utilizando el **hook** `useState()`
  
  ```jsx
  const [state, setState] = useState('')
  ```
  
  La variable **state** devuelve el valor del state
  
  La función **setState** modifica el valor del state, hay que hacer siempre actualizaciones con esta función para que React se de cuenta de que hubo un cambio y vuelva a renderizar el componente.

  El valor de espacio vacío `''` en la función `useState()` es **el valor por defecto del state** y se recomienda colocar un valor que que tenga relación en caso de que aún no se halla pasado el dato que se espera.

- Puedes inicializar un state con una prop pero no puedes esperar que el state cambie cada vez que la prop lo haga (y en consecuencia que se reflejen los cambios en el DOM) por que el estate solo se inicializa una vez, además esto se considera por lo general una **mala práctica**.
- Cada vez que el estado cambia, react re renderiza el componente para mostrar los cambios en la interfaz de usuario, pero haciendo solo las actualizaciones mínimas necesarias en el **DOM**, para conseguir esto utiliza una característica de react llamada **Virtual DOM**.
- Otra forma en la que un componente puede re renderizarse es cuando un componente padre se vuelve a renderizar **propagando los cambios en el state** hacia los hijos.

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

Al hacer un cambio en el state de un componente, este se re renderiza junto con todos sus componentes hijos.

Incluso los que no están relacionados con el state que cambio, no se hace ningún cambio en UI pero la función del componente si se ejecuta.

## Renderizado condicional

El renderizado condicional es como su nombre ya lo indica la forma de renderizar una cosa u otra en base a una condición.

Y es la clave de la reactividad de React pues permite mostrar actualizaciones en el UI en base a los cambios de estado de los componentes que por lo general son desencadenados por acciones del usuario.

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

> 💡 Se usa para renderizar un componente u otro o aplicar un estilo u otro.

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

> 💡 Una buena práctica para agregar separación entre componentes es definiendo la separación en el contenedor de los componentes y no en el componente individual, por que el día de mañana no sabes donde vas a utilizar dicho componente y puede que no ocupe esa separación en otros lugares de la interfaz.

## Renderizado de Listas

Va a haber ocasiones en las que sea necesario renderizar una lista de componentes a partir de los resultados obtenidos de un llamado a una API o un array en general.

```jsx
return (
  {usersAPI.map(({name, id}) => {
    <User key={id} name={name}/>
  })}
)
```

La prop `key` es muy importante para React ya que con ella va a poder identificar los componentes unos de otros y asi poder aplicar los cambios requeridos solo en los componentes que lo requieran.

El key debe ser único pero no aleatorio es un error usar por ejemplo `Math.random()` en el key cuando se este renderizando la lista, por que cada vez que se renderiza el componente React va a identificarlo como nuevo y lo va a volver a renderizar.

> 💡 La mejor opción para usar como `key` es un id que venga directamente de la base de datos o que por lo menos sea creado previamente.
