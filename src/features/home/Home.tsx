import { useCallback, useEffect, useState } from "react";
import { MotorcycleDataProps } from "../../App";
import AsideModal from "../../components/AsideModal";
import Button from "../../components/Button";
import DoubleSlider from "../../components/DoubleSlider";
import MotoCard from "../../components/MotoCard";
import MotoDetails from "../../components/MotoDetails";
import Type from "../../components/Type";
import { MotorcycleData } from "../../types/motorcycle-data";
import { shuffle } from "../../utils/utils";
import SEO from "../../components/SEO";

export const Home = ({ data, types }: MotorcycleDataProps) => {
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

  const getCcForMoto = (displacement: string): number => {
    return displacement ? Number(displacement.split("ccm")[0].trim()) : 0;
  };

  const getPowerForMoto = (power: string): number => {
    return power ? Number(power.split("HP")[0].trim()) : 0;
  };

  const search = useCallback(() => {
    let r: MotorcycleData[] = shuffle([...data]);

    if (selectedTypes.length > 0) {
      r = r.filter(
        (moto) => selectedTypes.findIndex((t: string) => t === moto.type) >= 0
      );
    }
    r = r.filter(
      (moto) =>
        getCcForMoto(moto.displacement) >= cc[0] &&
        getCcForMoto(moto.displacement) <= cc[1]
    );
    r = r.filter(
      (moto) =>
        (getPowerForMoto(moto.power) >= power[0] &&
          getPowerForMoto(moto.power) <= power[1]) ||
        !moto.power
    );
    r = r.filter(
      (moto) => Number(moto.year) >= years[0] && Number(moto.year) <= years[1]
    );

    setResults(r);
  }, [cc, power, data, selectedTypes, years]);

  useEffect(() => {
    const handleEnterKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        search();
      }
    };
    window.addEventListener("keypress", handleEnterKeyPress);
    return () => window.removeEventListener("keypress", handleEnterKeyPress);
  }, [search]);

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
