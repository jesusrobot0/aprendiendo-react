import { useCallback, useState } from "react";
import debounce from "just-debounce-it";
import { useSearch, useMovies } from "./hooks";
import { Movies } from "./components/Movies";
import "./App.css";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({
    search,
    sort,
  });

  const debauncedGetMovies = useCallback(
    debounce((search: string, error: null | string): void => {
      getMovies({ search, error });
    }, 300),
    []
  );

  const handleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovies({ search, error });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debauncedGetMovies(newSearch, error);
  };

  // useEffect(() => console.log("Hola from fetchdata"), [getMovies]);

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <input
              type="text"
              placeholder="Magnolia, Blue Velvet, Perfect Days..."
              className={error ? "input-error" : ""}
              value={search}
              onChange={handleChange}
            />
            {error && <p className="error">{error}</p>}
          </fieldset>
          <label className="checkbox">
            Order a-z
            <input type="checkbox" onChange={handleSort} checked={sort} />
          </label>
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {loading ? (
          <p className="loading">Cargando...</p>
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    </div>
  );
}

export default App;
