import {  useRef, useState } from "react";
import { useHandleClickOutside } from "../hooks/useHandleClickOutside";
import { MotorcycleData } from "../types/motorcycle-data";
import Input from "./Input";
import { fetchFilterMotos } from "../api/search.api";

export const SearchInput = ({
  onSelectionChange,
  disabled,
}: {
  onSelectionChange: Function;
  disabled: boolean;
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filtered, setFiltered] = useState<MotorcycleData[]>([]);
  const ref = useRef(null);

  useHandleClickOutside(ref, () => setShowResults(false));

  const filterData = async (value: string) => {
    setSearchValue(value);

    const sanitizedSearchValue = value.trim().toLowerCase();
    if (!sanitizedSearchValue) return;

    const result = await fetchFilterMotos(sanitizedSearchValue);
    setFiltered(result);
  };

  const selectMoto = (m: MotorcycleData) => {
    onSelectionChange(m);

    setShowResults(false);
    setSearchValue("");
    setFiltered([]);
  };

  return (
    <div className="search-input" ref={ref}>
      <Input
        value={searchValue}
        handleChange={filterData}
        placeholder="Kawasaki Versys..."
        onFocus={() => setShowResults(true)}
        disabled={disabled}
      />
      {showResults &&
        searchValue &&
        searchValue.length >= 2 &&
        filtered.length > 0 && (
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
