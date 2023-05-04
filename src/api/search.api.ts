import { MotorcycleData } from "../types/motorcycle-data";

const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_PRODUCTION_URL
    : process.env.REACT_APP_API_URL;

export const fetchMakes = (): Promise<string[]> => {
  return fetch(`${apiUrl}/makes`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => data);
};

export const fetchTypes = (): Promise<string[]> => {
  return fetch(`${apiUrl}/types`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => data);
};

export const fetchSuggestMotos = (
  types: string[],
  cc: number[],
  power: number[],
  year: number[]
): Promise<MotorcycleData[]> => {
  return fetch(
    `${apiUrl}/suggest?types=${types.join(",")}&cc=${cc.join(
      ","
    )}&power=${power.join(",")}&years=${year.join(",")}`,
    { method: "GET" }
  )
    .then((response) => response.json())
    .then((data) => data);
};

export const fetchSearchMotos = (
  keyword: string
): Promise<MotorcycleData[]> => {
  return fetch(`${apiUrl}/search?keyword=${keyword}`)
    .then((response) => response.json())
    .then((data) => data);
};

export const fetchFilterMotos = (
  keyword: string
): Promise<MotorcycleData[]> => {
  return fetch(`${apiUrl}/filter?keyword=${keyword}`)
    .then((response) => response.json())
    .then((data) => data);
};

export const sendEmail = (
  email: string,
  message: string
): Promise<MotorcycleData[]> => {
  return fetch(`${apiUrl}/sendEmail`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, message }),
  })
    .then((response) => response.json())
    .then((data) => data);
};
