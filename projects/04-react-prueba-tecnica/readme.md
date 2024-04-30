# Data Fetching

## Consejos para entrevistas de Junior y Trainee

Normalmente en cualquier prueba técnica para estos tipos de perfil te van a dar como mínimo un API para consumir pero normalmente son dos o puede que también te pidan hacer algo extra como un infinite scroll o validación de datos, etc.

### Ejemplo de prueba técnica

```markdown
# Prueba técnica para Juniors y Trainees de React en Live Coding.

## APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

## Enunciado

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.
```

Entonces lo que hay que demostrar en este tipo de pruebas es que sabes:

1. Hacer fetching de datos
2. Sabes manejar dos (o más) estados donde uno depende de otro.

### Consejos para entrevistas

- no olvides cómo configurar el linter
- Siempre ve mostrando cambios o progresos en tu prueba
- Aprende a hacer fetching de datos con fetch ya que en una entrevista por lo general no te van a a dejar utilizar herramientas que te ayuden a hacer esto, como React Query, axios, swr o Apollo
- si en una entrevista te dejan googlear no busques directamente la solución, mejor busca la documentación eso habla bien de ti , que no estás tan perdido y sobre todo que sabes usarla
- hay mucha gente que dice q usar console.log en entrevistas te elimina, no uses debuggear a menos que sepas realmente lo que estás haciendo y en el caso de un api es como muy over kill, en ese caso ve la respuesta json en el navegador o que carajos usa console.log para ver, como te sientas más cómodo
- demuestra sensibilidad por la accesibilidad

> 💡 Por lo general si al terminar la prueba queda un poco de tiempo te van a preguntar ¿y ahora que harías?, es normal decir cosas como agregaría estilos o más features, pero no, si tienes más tiempo lo primero que debes de decir es que quieres hacer el test más importante que debe de tener la app: el **test end-to-end**.

## Cómo inicializar un proyecto de React desde cero utilizando Vite

Otra cosa muy común en este tipo de entrevistas es que te digan que inicialices tu proyecto desde cero, así se hace:

1. Inicializa un proyecto con vite utilizando vanilla JS

   ```bash
   pnpm create vite
   ```

2. Instala el plugin de React para vite

   ```bash
   pnpm add @vitejs/plugin-react -E
   ```

3. Instala react

   ```bash
   pnpm add react react-dom -E
   ```

4. Configura vite en el archivo `vite.config.js`

   ```jsx
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";

   export default defineConfig({
     plugins: [react()],
   });
   ```

5. Crea el punto de entrada de la app en `main.jsx`

   ```jsx
   import React from "react";
   import { createRoot } from "react-dom/client";
   import { App } from "./src/App";

   // Le decimos a React donde queremos renderizar la app
   const root = createRoot(document.getElementById("app"));

   // Renderizamos la app
   root.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
   );
   ```

   Es muy importante terminar el archivo de entrada con extensión `.jsx` por que es la forma en que vite soporta la sintaxis de JSX, recuerda cambiar la extensión también en la importación del documento en el `index.html`.

## Instala un linter y un formateador (WIP)

## Fetching de datos básico en react

Por lo general siempre va a ser una buena idea hacer la petición dentro de un `useEffect` para evitar llamadas de más.

```jsx
useEffect(() => {
  fetch("your_endpoint")
    .then((response) => response.json())
    .then((data) => setState(data));
}, []);
```

En este caso se va hacer una petición cada vez que el componente se renderize.

### Fetching con async/await

El efecto no puede ser asíncrono, pero si puedes hacer esto:

```jsx
useEffect(() => {
  async function getData() {
    const response = await fetch(YOUR_ENDPOINT);
    const data = await response.json();

    setState(data);
  }
  getData();
}, []);
```

> 💡 setea al state la mínima información y luego calcula lo que quieres renderizar

## Custom Hooks

Los custom hooks son funciones que no retornan elementos, sino el resultado de cierta lógica que involucra hooks.

Los hooks se nombran con el prefijo `use` y son una forma de extraer lógica de los componentes para dejarlos limpios y super fácil de entender.
