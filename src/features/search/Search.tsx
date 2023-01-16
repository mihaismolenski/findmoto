import { useState } from "react";
import { MotorcycleDataProps } from "../../App";
import AsideModal from "../../components/AsideModal";
import Button from "../../components/Button";
import Input from "../../components/Input";
import MotoCard from "../../components/MotoCard";
import MotoDetails from "../../components/MotoDetails";
import { MotorcycleData } from "../../types/motorcycle-data";
import { shuffle } from "../../utils/utils";

export const Search = ({ data }: MotorcycleDataProps) => {
    const [searchValue, setSearchValue] = useState("");
    const [filtered, setFiltered] = useState<MotorcycleData[]>([]);

    const [showMotoDetails, setShowMotoDetails] = useState(false);
    const [selectedMoto, setSelectedMoto] = useState<MotorcycleData>();

    const findMoto = () => {
        const sanitizedSearchValue = searchValue.trim().toLowerCase();
        if (!sanitizedSearchValue) return;

        setFiltered(shuffle(data.filter(m =>
            (sanitizedSearchValue.includes(m.make.trim().toLowerCase()) && sanitizedSearchValue.includes(m.model.trim().toLowerCase()))
            || m.model.trim().toLowerCase().includes(sanitizedSearchValue)
            || `${m.make.trim().toLowerCase()} ${m.model.trim().toLowerCase()}`.includes(sanitizedSearchValue)
            || `${m.model.trim().toLowerCase()} ${m.make.trim().toLowerCase()}`.includes(sanitizedSearchValue))
            || []));
    }

    return (
        <div className="search">
            <div className="search-form">
                <Input value={searchValue} handleChange={(value: string) => setSearchValue(value)} placeholder="Yamaha R6 GYTR" />
                <Button text="Find moto" handleClick={findMoto} />
            </div>
            <div className="search-results">
                {filtered.slice(0, 30).map((m, index) => {
                    return <MotoCard key={index} data={m} handleClick={() => { setShowMotoDetails(true); setSelectedMoto(m); }} />
                })}
            </div>
            <AsideModal visible={showMotoDetails} handleClose={() => setShowMotoDetails(false)}>
                {selectedMoto && <MotoDetails data={selectedMoto} handleClose={() => setShowMotoDetails(false)} />}
            </AsideModal>
        </div>);
}

export default Search;
