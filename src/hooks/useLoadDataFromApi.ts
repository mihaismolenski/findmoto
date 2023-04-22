import { fetchData } from "../api/data.api";
import { MotorcycleData } from "../types/motorcycle-data";
import useExportJson from "./useExportJson";

export const useLoadDataFromApi = () => {
  const [exportJson] = useExportJson();
  const makes: string[] = [
    "Aprilia",
    "Bajaj",
    "Benelli",
    "Beta",
    "Big dog",
    "Bimota",
    "BMW",
    "Boss Hoss",
    "Buell",
    "California",
    "Can-Am",
    "CF Moto",
    "Cobra",
    "CSC Motorcycles",
    "Ducati",
    "E-Ton",
    "Gas Gas",
    "Harley-Davidson",
    "Hero",
    "Honda",
    "Husqvarna",
    "Hyosung",
    "Ice Bear",
    "Indian",
    "Johnny Pag",
    "Kayo",
    "Kawasaki",
    "KTM",
    "Kymco",
    "Lehman",
    "Moto Guzzi",
    "MV Agusta",
    "Norton",
    "Polaris",
    "Royal",
    "Sherco",
    "Suzuki",
    "Sym",
    "Tank Sports",
    "TGB",
    "TM Racing",
    "Triumph",
    "Ural",
    "Vespa",
    "Victory",
    "Yamaha",
    "Zero",
    "Zongshen"
  ];

  const loadData = async () => {
    let data: MotorcycleData[] = [];
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
