import { MotorcycleData } from "../types/motorcycle-data";
import { getTypeName } from "../utils/utils";

export const MotoCard = ({ data }: { data: MotorcycleData }) => {
    const { make, model, type, year, displacement, power } = data;
    
    return (
        <div className="moto-card">
            <div className="moto-card-content">
                <div className="moto-card-title">{make} {model}</div>
                <div className="moto-card-type">{getTypeName(type)}</div>
                <div className="moto-card-year">{year}</div>
                <div className="moto-card-year">{displacement}</div>
                <div className="moto-card-year">{power}</div>
            </div>
        </div>);
}

export default MotoCard;