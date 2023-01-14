import { MotorcycleData } from "../types/motorcycle-data";
import { getTypeName } from "../utils/utils";

export const MotoCard = ({ data }: { data: MotorcycleData }) => {
    const { make, model, type, year, displacement, power } = data;

    return (
        <div className="moto-card">
            <div className="moto-card-content">
                <div className="moto-card-title">{make} {model}</div>
                <div className="moto-card-type"><img src="../motorbike.png" width="24px" height="24px" alt="engine"/> {getTypeName(type)}</div>
                <div className="moto-card-year"><img src="../calendar.png" width="24px" height="24px" alt="engine"/> {year}</div>
                <div className="moto-card-cc"><img src="../engine.png" width="24px" height="24px" alt="engine"/> {displacement}</div>
                <div className="moto-card-power"><img src="../horse-power.png" width="24px" height="24px" alt="engine"/> {power}</div>
            </div>
        </div>);
}

export default MotoCard;