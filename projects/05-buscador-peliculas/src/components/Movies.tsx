import { ListOfMovies } from "./ListOfMovies";
import { NoMoviesResults } from "./NoMoviesResults";
import { Search } from "../interfaces/search-results";

interface Props {
  movies: Search[];
}

export function Movies({ movies }: Props) {
  const hasMovies = movies?.length > 1;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
