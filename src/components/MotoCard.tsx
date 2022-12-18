import { MotorcycleData } from "../types/motorcycle-data";

export const MotoCard = ({ data }: { data: MotorcycleData }) => {
    const { make, model, type, year } = data;
    
    return (
        <div className="moto-card">
            <div className="moto-card-content">
                <div className="moto-card-title">{make} {model}</div>
                <div className="moto-card-type">{type}</div>
                <div className="moto-card-year">{year}</div>
            </div>
        </div>);
}

export default MotoCard;