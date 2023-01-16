import { useEffect, useState } from "react";
import { MotorcycleData } from "../types/motorcycle-data";

export const useLoadDataFromJson = (): [MotorcycleData[], string[]] => {
    const [data, setData] = useState<MotorcycleData[]>([]);
    const [types, setTypes] = useState<string[]>([]);

    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => response.json())
            .then((response) => setData(response));
    };
    
    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        let t: {[key:string] : string} = {};
        data.forEach(m => {
            t[m.type] = m.type;
        })
        setTypes(Object.keys(t).sort((l, r) => l > r ? 1 : -1));
    }, [data]);

    return [data, types];
}

export default useLoadDataFromJson;