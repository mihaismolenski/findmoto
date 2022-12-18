// CHECK https://api-ninjas.com/profile

import { MotorcycleData } from "../types/motorcycle-data";

export const fetchData = (make: string, offset: number): Promise<MotorcycleData[]> => {
    return fetch(`https://api.api-ninjas.com/v1/motorcycles?make=${make}&offset=${offset}`, {
        headers: { "X-Api-Key": "dDtFC7ocJ8aSgWDF8tgK2A==aKFvCqV4cvReNzd2" }
    })
        .then((response) => response.json())
        .then((data) => data);
}