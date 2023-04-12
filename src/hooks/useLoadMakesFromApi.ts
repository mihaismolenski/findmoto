import { useEffect, useState } from "react";
import { fetchMakes } from "../api/search.api";

export const useLoadMakesFromApi = (): [string[]] => {
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const data = await fetchMakes();
      setTypes(data);
    };

    if (types.length === 0) {
      fetchTypes();
    }
  }, [types.length]);

  return [types];
};

export default useLoadMakesFromApi;
