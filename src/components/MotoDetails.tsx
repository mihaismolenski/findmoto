import { MotorcycleData } from "../types/motorcycle-data";
import { getTypeName } from "../utils/utils";
import Button from "./Button";
import { YoutubeVideos } from "./YoutubeVideos";

export interface MotoDetailsProps {
    data: MotorcycleData;
    handleClose: Function;
}

export const MotoDetails = ({ data, handleClose }: MotoDetailsProps) => {
    const { make, model, year, displacement, power, type } = data;

    return <div className="moto-details">
        <Button text="Back" handleClick={handleClose} height="42px" />
        <div className="moto-details-title">{make} {model}</div>
        <div className="moto-details-spec"><img src="../motorbike.png" width="24px" height="24px" alt="engine" /> {getTypeName(type)}</div>
        <div className="moto-details-spec"><img src="../calendar.png" width="24px" height="24px" alt="engine" /> {year}</div>
        <div className="moto-details-spec"><img src="../engine.png" width="24px" height="24px" alt="engine" /> {displacement}</div>
        <div className="moto-details-spec"><img src="../horse-power.png" width="24px" height="24px" alt="engine" /> {power}</div>
        <YoutubeVideos search={`${make} ${model} ${year}`} count={2} />
    </div>
}

export default MotoDetails;