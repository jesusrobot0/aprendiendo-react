import { Search } from "../interfaces/search-results";

interface Props {
  movies: Search[];
}

export function ListOfMovies({ movies }: Props) {
  return (
    <ul className="movies">
      {movies.map(({ title, poster, year, id }) => (
        <li key={`results-list-item-with-id-${id}`} className="movie">
          <img src={poster} alt={`Poster of the movie ${title}`} />
          <h2>{title}</h2>
          <p>{year}</p>
        </li>
      ))}
    </ul>
  );
}
