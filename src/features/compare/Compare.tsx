import { useState } from "react";
import { MotorcycleDataProps } from "../../App";
import Button from "../../components/Button";
import SearchInput from "../../components/SearchInput";
import { MotorcycleData } from "../../types/motorcycle-data";
import CompareRow from "./CompareRow";

export const Compare = ({ data, types }: MotorcycleDataProps) => {
  const [selected, setSelected] = useState<MotorcycleData[]>([]);
  const [compareItems, setCompareItems] = useState<MotorcycleData[]>([]);

  const compare = () => {
    setCompareItems(selected);
  };

  return (
    <div className="compare">
      <div className="compare-form">
        <SearchInput
          initialData={data}
          onSelectionChange={(m: MotorcycleData) =>
            setSelected([...selected, m])
          }
        />
        {selected.length > 0 && (
          <div className="compare-form-selected">
            {selected.map((m, index) => {
              return (
                <div className="compare-form-selected-tem" key={index}>
                  {m.make} {m.model} {m.year}
                </div>
              );
            })}
          </div>
        )}
        <Button text="Compare" handleClick={compare} />
      </div>
      {compareItems.length >= 2 && (
        <div className="compare-table-overflow">
          <table className="compare-table">
            <thead>
              <CompareRow
                label=" "
                values={compareItems.map(
                  (m) => `${m.make} ${m.make} ${m.year}`
                )}
              />
            </thead>
            <tbody>
              <CompareRow
                label="Year"
                values={compareItems.map((m) => m.year)}
              />
              <CompareRow
                label="Engine"
                values={compareItems.map((m) => m.engine)}
              />
              <CompareRow
                label="Displacement"
                values={compareItems.map((m) => m.displacement)}
              />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Compare;
