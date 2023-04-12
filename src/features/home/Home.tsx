import { useCallback, useState } from "react";

import { MotorcycleData } from "../../types/motorcycle-data";
import {
  AsideModal,
  Button,
  DoubleSlider,
  MotoCard,
  MotoDetails,
  SEO,
  Type,
} from "../../components";
import { useHandleEnterKey } from "../../hooks/useHandleEnterKey";
import { fetchSuggestMotos } from "../../api/search.api";

export const Home = ({ types }: {types: string[]}) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [results, setResults] = useState<MotorcycleData[]>([]);
  const [cc, setCc] = useState<number[]>([400, 800]);
  const [years, setYears] = useState<number[]>([
    2010,
    new Date().getFullYear(),
  ]);
  const [power, setPower] = useState<number[]>([50, 120]);
  const [showMotoDetails, setShowMotoDetails] = useState(false);
  const [selectedMoto, setSelectedMoto] = useState<MotorcycleData>();

  const isTypeSelected = (type: string) => {
    return selectedTypes.findIndex((t) => t === type) >= 0;
  };

  const toggleType = (type: string, value: boolean) => {
    let copy = [...selectedTypes];
    if (value) {
      copy = [...copy, type];
    } else {
      const index = selectedTypes.findIndex((t) => t === type);
      copy.splice(index, 1);
    }

    setSelectedTypes(copy);
  };

  const search = useCallback(async () => {
    const r = await fetchSuggestMotos(selectedTypes, cc, power, years);
    setResults(r);
  }, [cc, power, selectedTypes, years]);

  useHandleEnterKey(search);

  return (
    <div className="home">
      <SEO
        title="Find the perfect motorcycle for you - FindYourMotorcycle"
        description="Do you want to buy your first bike, but not sure which one to get? Are you an experience biker, but want to try something new? We can help you, by suggesting different motorcycles based on your needs!"
      />
      <div className="home-center">
        <div className="home-types">
          {types.map((t, index) => {
            return (
              <Type
                name={t}
                key={index}
                selected={isTypeSelected(t)}
                onChange={(value: boolean) => toggleType(t, value)}
              />
            );
          })}
        </div>
        <div className="home-search">
          <DoubleSlider
            label="Engine displacement (cc)"
            min={125}
            max={2500}
            handleChange={(val: number[]) => setCc(val)}
            value={cc}
            step={25}
          />
          <DoubleSlider
            label="Horse Power"
            min={30}
            max={310}
            handleChange={(val: number[]) => setPower(val)}
            value={power}
            step={5}
          />
          <DoubleSlider
            label="Year"
            min={1970}
            max={new Date().getFullYear()}
            handleChange={(val: number[]) => setYears(val)}
            value={years}
            step={1}
          />
          <Button text="Find best bike for me" handleClick={() => search()} />
        </div>
        <div className="home-results">
          {results.slice(0, 6).map((m, index) => {
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

export default Home;
