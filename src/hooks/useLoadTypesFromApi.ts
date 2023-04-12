import { useEffect, useState } from "react";
import { fetchTypes } from "../api/search.api";

export const useLoadTypesFromApi = (): [string[]] => {
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };

    if (types.length === 0) {
        fetchData();
    }
  }, [types.length]);

  return [types];
};

export default useLoadTypesFromApi;
