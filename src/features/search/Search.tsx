import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import MotoCard from "../../components/MotoCard";
import useLoadDataFromJson from "../../hooks/useLoadDataFromJson";
import { MotorcycleData } from "../../types/motorcycle-data";

export const Search = () => {
    const [data, types] = useLoadDataFromJson();
    const [searchValue, setSearchValue] = useState("");
    const [filtered, setFiltered] = useState<MotorcycleData[]>([]);

    const findMoto = () => {
        const sanitizedSearchValue = searchValue.trim().toLowerCase();
        if (!sanitizedSearchValue) return;

        setFiltered(data.filter(m =>
            (sanitizedSearchValue.includes(m.make.trim().toLowerCase()) && sanitizedSearchValue.includes(m.model.trim().toLowerCase()))
            || m.model.trim().toLowerCase().includes(sanitizedSearchValue)
            || `${m.make.trim().toLowerCase()} ${m.model.trim().toLowerCase()}`.includes(sanitizedSearchValue)
            || `${m.model.trim().toLowerCase()} ${m.make.trim().toLowerCase()}`.includes(sanitizedSearchValue))
            || []);
    }

    return (
        <div className="search">
            <div className="search-form">
                <Input value={searchValue} handleChange={(value: string) => setSearchValue(value)} placeholder="Yamaha R6 GYTR"/>
                <Button text="Find moto" handleClick={findMoto} />
            </div>
                <div className="search-results">
                    {filtered.slice(0, 30).map((m, index) => {
                        return <MotoCard key={index} data={m}/>
                    })}
                </div>
        </div>);
}

export default Search;