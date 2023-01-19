import { useState } from "react";
import { MotorcycleDataProps } from "../../App";
import Button from "../../components/Button";
import SearchInput from "../../components/SearchInput";
import { MotorcycleData } from "../../types/motorcycle-data";

export const Compare = ({ data, types }: MotorcycleDataProps) => {
  const [selected, setSelected] = useState<MotorcycleData[]>([]);

  const compare = () => {};

  return (
    <div className="compare">
      <div className="compare-form">
        {selected.map((m, index) => {
            return <div key={index}>{m.make} {m.model} {m.year}</div>
        })}
        <SearchInput
          initialData={data}
          onSelectionChange={(m: MotorcycleData) =>
            setSelected([...selected, m])
          }
        />
        <Button text="Compare" handleClick={compare} />
      </div>
    </div>
  );
};

export default Compare;
