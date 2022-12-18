import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useLoadDataFromJson from "../../hooks/useLoadDataFromJson";
import { MotorcycleData } from "../../types/motorcycle-data";

export const Search = () => {
    const [data] = useLoadDataFromJson();
    const [searchValue, setSearchValue] = useState("");
    const [filtered, setFiltered] = useState<MotorcycleData[]>([]);

    const findMoto = () => {
        const sanitizedSearchValue = searchValue.trim().toLowerCase();
        if (!sanitizedSearchValue) return;

        setFiltered(data?.filter(m =>
            (sanitizedSearchValue.includes(m.make.trim().toLowerCase()) && sanitizedSearchValue.includes(m.model.trim().toLowerCase()))
            || m.model.trim().toLowerCase().includes(sanitizedSearchValue)
            || `${m.make.trim().toLowerCase()} ${m.model.trim().toLowerCase()}`.includes(sanitizedSearchValue)
            || `${m.model.trim().toLowerCase()} ${m.make.trim().toLowerCase()}`.includes(sanitizedSearchValue))
            || []);
    }

    return (
        <div className="search">
            <div className="search-center">
                <Input value={searchValue} handleChange={(value: string) => setSearchValue(value)} />
                <Button text="Find moto" handleClick={findMoto} />
                <div>
                    {filtered.map((m, index) => {
                        return <div key={index}>{m.make} {m.model}</div>
                    })}
                </div>
            </div>
        </div>);
}

export default Search;