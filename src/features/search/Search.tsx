import { useCallback, useEffect, useState } from "react";
import { MotorcycleDataProps } from "../../App";
import AsideModal from "../../components/AsideModal";
import Button from "../../components/Button";
import Input from "../../components/Input";
import MotoCard from "../../components/MotoCard";
import MotoDetails from "../../components/MotoDetails";
import { MotorcycleData } from "../../types/motorcycle-data";
import SEO from "../../components/SEO";

const { search } = require("fast-fuzzy");

export const Search = ({ data }: MotorcycleDataProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [filtered, setFiltered] = useState<MotorcycleData[]>([]);

  const [showMotoDetails, setShowMotoDetails] = useState(false);
  const [selectedMoto, setSelectedMoto] = useState<MotorcycleData>();

  const findMoto = useCallback(() => {
    const sanitizedSearchValue = searchValue.trim().toLowerCase();
    if (!sanitizedSearchValue) return;

    const result: MotorcycleData[] = search(sanitizedSearchValue, data, {
      keySelector: (m: MotorcycleData) => `${m.make} ${m.model} ${m.year}`,
    });
    setFiltered(result);
  }, [data, searchValue]);

  useEffect(() => {
    const handleEnterKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        findMoto();
      }
    };
    window.addEventListener("keypress", handleEnterKeyPress);
    return () => window.removeEventListener("keypress", handleEnterKeyPress);
  }, [findMoto]);

  return (
    <div className="search">
      <SEO
        title="Search for any motorcycle - FindYourMotorcycle"
        description="Do you need more details about a certain type of motorcycle? You can search it right here, right now!"
      />
      <div className="search-form">
        <Input
          value={searchValue}
          handleChange={(value: string) => setSearchValue(value)}
          placeholder="Yamaha R6..."
        />
        <Button text="Find moto" handleClick={findMoto} />
      </div>
      <div className="search-results">
        {filtered.slice(0, 30).map((m, index) => {
          return (
            <MotoCard
              key={index}
              data={m}
              handleClick={() => {
                setShowMotoDetails(true);
                setSelectedMoto(m);
              }}
            />
          );
        })}
      </div>
      <AsideModal
        visible={showMotoDetails}
        handleClose={() => setShowMotoDetails(false)}
      >
        {selectedMoto && (
          <MotoDetails
            data={selectedMoto}
            handleClose={() => setShowMotoDetails(false)}
          />
        )}
      </AsideModal>
    </div>
  );
};

export default Search;
