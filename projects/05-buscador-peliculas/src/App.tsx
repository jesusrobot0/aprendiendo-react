import "./App.css";

function App() {
  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Magnolia, Blue Velvet, Perfect Days..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <p>Aquí van los resultados</p>
      </main>
    </div>
  );
}

export default App;
