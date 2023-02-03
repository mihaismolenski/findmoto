import { MotorcycleData } from "../types/motorcycle-data";
import { getTypeName } from "../utils/utils";

export const MotoCard = ({ data, handleClick }: { data: MotorcycleData, handleClick?: Function }) => {
    const { make, model, type, year, displacement, power, torque, engine } = data;

    return (
        <div className="moto-card" onClick={() => handleClick && handleClick()}>
            <div className="moto-card-title">{make} {model}</div>
            <div className="moto-card-type"><img src="../images/motorbike.png" width="24px" height="24px" alt="engine" /> {getTypeName(type)}</div>
            <div className="moto-card-year"><img src="../images/calendar.png" width="24px" height="24px" alt="engine" /> {year}</div>
            {displacement && <div className="moto-card-cc"><img src="../images/engine.png" width="24px" height="24px" alt="engine" /> {displacement}</div>}
            {power && <div className="moto-card-power"><img src="../images/horse-power.png" width="24px" height="24px" alt="engine" /> {power}</div>}
            {!power && torque && <div className="moto-card-power"><img src="../images/horse-power.png" width="24px" height="24px" alt="engine" /> {torque}</div>}
            {(!displacement || (!power && !torque)) && <div className="moto-card-power"><img src="../images/engine_cc.png" width="24px" height="24px" alt="engine" /> {engine}</div>}
        </div>);
}

export default MotoCard;