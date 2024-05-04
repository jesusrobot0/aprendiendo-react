import { useEffect, useRef, useState } from "react";

const MINIMUM_CHARACTERS_QUERY = 3;
const INITIAL_SEARCH = "";

export function useSearch() {
  const [search, updateSearch] = useState(INITIAL_SEARCH);
  const [error, setError] = useState<string | null>(null);
  const isFirstInput = useRef<boolean>(true); // flag (valor) persistente entre renders

  useEffect(() => {
    // Evitar que esta lógica se aplique en el primer input del user
    if (isFirstInput.current) {
      isFirstInput.current = search === INITIAL_SEARCH;
      return;
    }

    if (search === INITIAL_SEARCH) {
      setError("No se puede buscar una película vacía");
      return;
    }

    if (search?.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (search?.length < MINIMUM_CHARACTERS_QUERY) {
      setError("La búsqueda debe tener al menos tres caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
