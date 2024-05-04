const API_KEY = "baaceccb";

export async function searchMovies({ search }: { search: string }) {
  if (search === "") return null;

  const endpoint = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;

  try {
    const response = await fetch(endpoint);
    const json = await response.json();

    /**
     * Con esto evitamos depender del contrato de la API
     * por que si el día de mañana cambia una propiedad
     * solo tenemos que cambiarla aquí y no en todos los
     * componentes donde se refieren sus datos.
     */
    return json.Search?.map((movie: any) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type,
    }));
  } catch (error) {
    throw new Error("Error Searching Movies");
  }
}
