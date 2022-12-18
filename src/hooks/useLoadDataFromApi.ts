import { fetchData } from "../api/data.api";
import { MotorcycleData } from "../types/motorcycle-data";
import useExportJson from "./useExportJson";

export const useLoadDataFromApi = () => {
    const [exportJson] = useExportJson();
    const makes: string[] = [
        "Aprilia",
        "Bajaj",
        "Benelli",
        "Bimota",
        "BMW",
        "Ducati",
        "Harley-Davidson",
        "Hero",
        "Honda",
        "Indian",
        "Kawasaki",
        "KTM",
        "Moto Guzzi",
        "MV Agusta",
        "Norton",
        "Royal",
        "Suzuki",
        "Triumph",
        "Victory",
        "Yamaha",
    ];

    const loadData = async () => {
        let data: MotorcycleData[] = [];
        for (var index = 0; index < makes.length; index++) {
            let offset = 0;
            let pageData: MotorcycleData[] = [];

            do {
                pageData = await fetchData(makes[index], offset);
                offset += 30;
                data = data.concat(pageData);
            } while (pageData.length === 30);
        }

        exportJson(JSON.stringify(data));
    }

    return [loadData];
}

export default useLoadDataFromApi;