import { fetchData } from "../api/data.api";
import { MotorcycleData } from "../types/motorcycle-data";
import useExportJson from "./useExportJson";
import { fetchMakes } from "../api/search.api";

export const useLoadDataFromApi = () => {
  const [exportJson] = useExportJson();

  const loadData = async () => {
    let data: MotorcycleData[] = [];
    const makes = await fetchMakes();

    for (let index = 0; index < makes.length; index++) {
      let offset = 0;
      let pageData: MotorcycleData[] = [];

      do {
        pageData = await fetchData(makes[index], offset);
        offset += 30;
        data = data.concat(pageData);
      } while (pageData.length === 30);
    }

    exportJson(JSON.stringify(data));
  };

  return [loadData];
};

export default useLoadDataFromApi;