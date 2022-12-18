import { useEffect, useState } from "react";
import { MotorcycleData } from "../types/motorcycle-data";

export const useLoadDataFromJson = () => {
    const [data, setData] = useState<MotorcycleData[]>();

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
        getData()
    }, [])

    return [data];
}

export default useLoadDataFromJson;