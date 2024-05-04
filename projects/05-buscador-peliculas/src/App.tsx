import { useCallback, useEffect, useState } from "react";
import debounce from "just-debounce-it";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { Movies } from "./components/Movies";
import "./App.css";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  // let counter = useRef(0); // Valor que persiste entre renders
  // counter.current++;
  // console.log(counter.current);

  const debauncedGetMovies = useCallback(
    debounce((search: string) => {
      getMovies({ search });
    }, 300),
    []
  );

  const handleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debauncedGetMovies(newSearch);
  };

  useEffect(() => console.log("Hola from fetchdata"), [getMovies]);

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
