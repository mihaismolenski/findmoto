import { useState } from "react";
import { MotorcycleDataProps } from "../../App";
import Button from "../../components/Button";
import Input from "../../components/Input";
import MotoCard from "../../components/MotoCard";
import Type from "../../components/Type";
import { MotorcycleData } from "../../types/motorcycle-data";

export const Home = ({data, types}: MotorcycleDataProps) => {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [results, setResults] = useState<MotorcycleData[]>([]);
    const [cc, setCc] = useState<string>("");
    const [year, setYear] = useState<string>("");

    const isTypeSelected = (type: string) => {
        return selectedTypes.findIndex(t => t === type) >= 0;
    }

    const toggleType = (type: string, value: boolean) => {
        let copy = [...selectedTypes];
        if (value) {
            copy = [...copy, type];
        } else {
            const index = selectedTypes.findIndex(t => t === type);
            copy.splice(index, 1);
        }

        setSelectedTypes(copy);
    }

    const getCcForMoto = (displacement: string): number => {
        return displacement ? Number(displacement.split("ccm")[0].trim()) : 0;
    }

    const search = () => {
        let r = data.filter(moto => selectedTypes.findIndex((t: string) => t === moto.type) >= 0
            && getCcForMoto(moto.displacement) + 10 > Number(cc)
            && getCcForMoto(moto.displacement) - 10 < Number(cc)
            && moto.year === year);
        setResults(r);
    }

    return (
        <div className="home">
            <div className="home-center">
                <div className="home-types">
                    {types.map((t, index) => {
                        return <Type name={t} key={index} selected={isTypeSelected(t)} onChange={(value: boolean) => toggleType(t, value)} />
                    })}
                </div>
                <div className="home-search">
                    <Input value={cc} handleChange={(value: string) => setCc(value)} placeholder="Engine displacement (cc)"/>
                    <Input value={year} handleChange={(value: string) => setYear(value)} placeholder="Year"/>
                    <Button text="Find best bike for me" handleClick={() => search()} />
                </div>
                <div className="home-results">{results.slice(0, 6).map((m, index) => {
                    return <MotoCard key={index} data={m}/>
                })}</div>
            </div>
        </div>);
}

export default Home;