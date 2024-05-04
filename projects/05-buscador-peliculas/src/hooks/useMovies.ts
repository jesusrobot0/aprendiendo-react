import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";
import { Search } from "../interfaces/search-results";

interface Args {
  search: string;
  sort: boolean;
}

export function useMovies({ search, sort }: Args) {
  const [movies, setMovies] = useState<Search[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

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

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading, error };
}
