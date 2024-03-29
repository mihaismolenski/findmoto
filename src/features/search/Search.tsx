import { useCallback, useState } from "react";

import { MotorcycleData } from "../../types/motorcycle-data";
import {
  AsideModal,
  Button,
  Input,
  MotoCard,
  MotoDetails,
  SEO,
} from "../../components";
import { useHandleEnterKey } from "../../hooks/useHandleEnterKey";
import { fetchSearchMotos } from "../../api/search.api";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filtered, setFiltered] = useState<MotorcycleData[]>([]);

  const [showMotoDetails, setShowMotoDetails] = useState(false);
  const [selectedMoto, setSelectedMoto] = useState<MotorcycleData>();

  const findMoto = useCallback(async () => {
    const sanitizedSearchValue = searchValue.trim().toLowerCase();
    if (!sanitizedSearchValue) return;

    const result = await fetchSearchMotos(sanitizedSearchValue);

    setFiltered(result);
  }, [ searchValue]);

  useHandleEnterKey(findMoto);

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
        <Button text="Find any motorcycle" handleClick={findMoto} />
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
