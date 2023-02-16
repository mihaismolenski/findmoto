import { useCallback, useEffect, useState } from "react";
import { MotorcycleDataProps } from "../../App";
import Button from "../../components/Button";
import SearchInput from "../../components/SearchInput";
import { MotorcycleData } from "../../types/motorcycle-data";
import { getLogo, getTypeName } from "../../utils/utils";
import CompareRow from "./CompareRow";
import SEO from "../../components/SEO";

export const Compare = ({ data }: MotorcycleDataProps) => {
  const [selected, setSelected] = useState<MotorcycleData[]>([]);
  const [compareItems, setCompareItems] = useState<MotorcycleData[]>([]);

  const compare = useCallback(() => {
    setCompareItems(selected);
  }, [selected]);

  const removeFromSelected = (m: MotorcycleData) => {
    setSelected(
      selected.filter(
        (x) => x.model !== m.model || x.make !== m.make || x.year !== m.year
      )
    );
  };

  useEffect(() => {
    const handleEnterKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        compare();
      }
    };
    window.addEventListener("keypress", handleEnterKeyPress);
    return () => window.removeEventListener("keypress", handleEnterKeyPress);
  }, [compare]);

  return (
    <div className="compare">
      <SEO
        title="Compare different bikes - FindYourMotorcycle"
        description="Compare specifications for different motorcycles. You can select between two and up to five motorcycles."
      />
      <div className="compare-form">
        <SearchInput
          initialData={data}
          onSelectionChange={(m: MotorcycleData) =>
            setSelected([...selected, m])
          }
          disabled={selected.length >= 5}
        />
        {selected.length > 0 && (
          <div className="compare-form-selected">
            {selected.map((m, index) => {
              return (
                <div
                  className="compare-form-selected-item"
                  key={index}
                  onClick={() => removeFromSelected(m)}
                >
                  {m.make} {m.model} {m.year}{" "}
                  <span className="remove-icon">X</span>
                </div>
              );
            })}
          </div>
        )}
        <Button text="Compare motorcycles" handleClick={compare} />
      </div>
      {compareItems.length >= 2 && (
        <div className="compare-table-overflow">
          <table className="compare-table">
            <thead>
              <CompareRow
                label=" "
                values={compareItems.map((m) => (
                  <div className="compare-header-item">
                    <div>
                      {m.make} {m.model} {m.year}
                    </div>
                    <img alt="manufacturer" src={getLogo(m.make)} />
                  </div>
                ))}
              />
            </thead>
            <tbody>
              <CompareRow
                label="Year"
                values={compareItems.map((m) => m.year)}
                icon="../images/calendar.png"
              />
              <CompareRow
                label="Type"
                values={compareItems.map((m) => getTypeName(m.type))}
                icon="../images/motorbike.png"
              />
              <CompareRow
                label="Engine"
                values={compareItems.map((m) => m.engine)}
                icon="../images/engine_cc.png"
              />
              <CompareRow
                label="Displacement"
                values={compareItems.map((m) => m.displacement)}
                icon="../images/engine.png"
              />
              <CompareRow
                label="Power"
                values={compareItems.map((m) => m.power)}
                icon="../images/horse-power.png"
              />
              <CompareRow
                label="Torque"
                values={compareItems.map((m) => m.torque)}
                icon="../images/torque.png"
              />
              <CompareRow
                label="Valves per cylinder"
                values={compareItems.map((m) => m.valves_per_cylinder)}
                icon="../images/piston.png"
              />
              <CompareRow
                label="Fuel system"
                values={compareItems.map((m) => m.fuel_system)}
                icon="../images/injection.png"
              />
              <CompareRow
                label="Fuel control"
                values={compareItems.map((m) => m.fuel_control)}
                icon="../images/fuel_control.png"
              />
              <CompareRow
                label="Ignition"
                values={compareItems.map((m) => m.ignition)}
                icon="../images/ignition.png"
              />
              <CompareRow
                label="Lubrication"
                values={compareItems.map((m) => m.lubrication)}
                icon="../images/oil.png"
              />
              <CompareRow
                label="Cooling"
                values={compareItems.map((m) => m.cooling)}
                icon="../images/cooling.png"
              />
              <CompareRow
                label="Bore stroke"
                values={compareItems.map((m) => m.bore_stroke)}
                icon="../images/bore_stroke.png"
              />
              <CompareRow
                label="Compression"
                values={compareItems.map((m) => m.compression)}
                icon="../images/compression.png"
              />
              <CompareRow
                label="Gearbox"
                values={compareItems.map((m) => m.gearbox)}
                icon="../images/gearbox.png"
              />
              <CompareRow
                label="Transmission"
                values={compareItems.map((m) => m.transmission)}
                icon="../images/transmission.png"
              />
              <CompareRow
                label="Clutch"
                values={compareItems.map((m) => m.clutch)}
                icon="../images/clutch.png"
              />
              <CompareRow
                label="Frame"
                values={compareItems.map((m) => m.frame)}
                icon="../images/frame.png"
              />
              <CompareRow
                label="Fuel consumption"
                values={compareItems.map((m) => m.fuel_consumption)}
                icon="../images/fuel_consumption.png"
              />
              <CompareRow
                label="Emission"
                values={compareItems.map((m) => m.emission)}
                icon="../images/emission.png"
              />
              <CompareRow
                label="Fuel capacity"
                values={compareItems.map((m) => m.fuel_capacity)}
                icon="../images/fuel.png"
              />
              <CompareRow
                label="Starter"
                values={compareItems.map((m) => m.starter)}
                icon="../images/starter.png"
              />
              <CompareRow
                label="Front tire"
                values={compareItems.map((m) => m.front_tire)}
                icon="../images/tire.png"
              />
              <CompareRow
                label="Rear tire"
                values={compareItems.map((m) => m.rear_tire)}
                icon="../images/tire.png"
              />
              <CompareRow
                label="Front brakes"
                values={compareItems.map((m) => m.front_brakes)}
                icon="../images/brakes.png"
              />
              <CompareRow
                label="Rear brakes"
                values={compareItems.map((m) => m.rear_brakes)}
                icon="../images/brakes.png"
              />
              <CompareRow
                label="Front wheel travel"
                values={compareItems.map((m) => m.front_wheel_travel)}
                icon="../images/wheeltravel.png"
              />
              <CompareRow
                label="Rear wheel travel"
                values={compareItems.map((m) => m.rear_wheel_travel)}
                icon="../images/wheeltravel.png"
              />
              <CompareRow
                label="Front suspension"
                values={compareItems.map((m) => m.front_suspension)}
                icon="../images/suspension.png"
              />
              <CompareRow
                label="Rear suspension"
                values={compareItems.map((m) => m.rear_suspension)}
                icon="../images/suspension.png"
              />
              <CompareRow
                label="Weight"
                values={compareItems.map((m) => m.total_weight)}
                icon="../images/weight.png"
              />
              <CompareRow
                label="Seat height"
                values={compareItems.map((m) => m.seat_height)}
                icon="../images/seat.png"
              />
              <CompareRow
                label="Height"
                values={compareItems.map((m) => m.total_height)}
                icon="../images/height.png"
              />
              <CompareRow
                label="Length"
                values={compareItems.map((m) => m.total_length)}
                icon="../images/length.png"
              />
              <CompareRow
                label="Width"
                values={compareItems.map((m) => m.total_width)}
                icon="../images/width.png"
              />
              <CompareRow
                label="Ground clearance"
                values={compareItems.map((m) => m.ground_clearance)}
                icon="../images/ground_clearance.png"
              />
              <CompareRow
                label="Wheelbase"
                values={compareItems.map((m) => m.wheelbase)}
                icon="../images/wheelbase.png"
              />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Compare;
