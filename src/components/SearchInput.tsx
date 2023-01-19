import { useEffect, useState } from "react";
import { MotorcycleData } from "../types/motorcycle-data";
import Input from "./Input";

export const SearchInput = ({
  initialData,
  onSelectionChange,
}: {
  initialData: MotorcycleData[];
  onSelectionChange: Function;
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filtered, setFiltered] = useState<MotorcycleData[]>([]);
  const [data, setData] = useState<MotorcycleData[]>(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const filterData = (value: string) => {
    setSearchValue(value);

    const sanitizedSearchValue = value.trim().toLowerCase();
    if (!sanitizedSearchValue) return;

    setFiltered(
      (
        data.filter(
          (m) =>
            (sanitizedSearchValue.includes(m.make.trim().toLowerCase()) &&
              sanitizedSearchValue.includes(m.model.trim().toLowerCase())) ||
            m.model.trim().toLowerCase().includes(sanitizedSearchValue) ||
            `${m.make.trim().toLowerCase()} ${m.model
              .trim()
              .toLowerCase()}`.includes(sanitizedSearchValue) ||
            `${m.model.trim().toLowerCase()} ${m.make
              .trim()
              .toLowerCase()}`.includes(sanitizedSearchValue)
        ) || []
      ).slice(0, 200)
    );
  };

  const selectMoto = (m: MotorcycleData) => {
    onSelectionChange(m);
    setData(data.filter(x => x.model !== m.model || x.make !== m.make || x.year !== m.year ));
    setShowResults(false);
    setSearchValue("");
    setFiltered([]);
  };

  return (
    <div className="search-input">
      <Input
        value={searchValue}
        handleChange={filterData}
        placeholder="Yamaha R6 GYTR..."
        onFocus={() => setShowResults(true)}
      />
      {showResults && searchValue && searchValue.length > 2 && filtered.length > 0 && (
        <div className="search-input-results">
          {filtered.map((f, index) => {
            return (
              <div
                className="search-input-results-row"
                key={index}
                onClick={() => selectMoto(f)}
              >
                {f.make} {f.model} {f.year}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
