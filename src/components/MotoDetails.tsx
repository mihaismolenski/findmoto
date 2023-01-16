import { MotorcycleData } from "../types/motorcycle-data";
import { getTypeName } from "../utils/utils";
import Button from "./Button";
import { YoutubeVideos } from "./YoutubeVideos";

export interface MotoDetailsProps {
    data: MotorcycleData;
    handleClose: Function;
}

export const MotoDetails = ({ data, handleClose }: MotoDetailsProps) => {
    const {
        make,
        model,
        year,
        displacement,
        power,
        type,
        total_weight,
        seat_height,
        total_height,
        total_length,
        total_width,
        ground_clearance,
        wheelbase,
        gearbox,
        transmission,
        clutch,
        starter,
        fuel_capacity,
        frame,
        front_suspension,
        front_wheel_travel,
        rear_suspension,
        rear_wheel_travel,
        front_tire,
        rear_tire,
        front_brakes,
        rear_brakes,
        engine,
        torque,
        compression,
        bore_stroke,
        valves_per_cylinder,
        fuel_system,
        fuel_control,
        ignition,
        lubrication,
        cooling,
        fuel_consumption,
        emission } = data;

    return <div className="moto-details">
        <Button text="Back" handleClick={handleClose} height="42px" />
        <div className="moto-details-title">{make} {model}</div>

        <fieldset className="moto-details-box">
            <legend className="moto-details-label">General</legend>
            {year && <div className="moto-details-spec"><img src="../images/calendar.png" width="24px" height="24px" alt="engine" /><b>Year:</b> {year}</div>}
            {type && <div className="moto-details-spec"><img src="../images/motorbike.png" width="24px" height="24px" alt="engine" /> <b>Type:</b>{getTypeName(type)}</div>}
            {frame && <div className="moto-details-spec"><img src="../images/frame.png" width="24px" height="24px" alt="engine" /> <b>Frame:</b> {frame}</div>}
            {fuel_consumption && <div className="moto-details-spec"><img src="../images/fuel_consumption.png" width="24px" height="24px" alt="engine" /> <b>Fuel consumption:</b> {fuel_consumption}</div>}
            {emission && <div className="moto-details-spec"><img src="../images/emission.png" width="24px" height="24px" alt="engine" /> <b>Emission:</b> {emission}</div>}
            {fuel_capacity && <div className="moto-details-spec"><img src="../images/fuel.png" width="24px" height="24px" alt="engine" /> <b>Fuel capacity:</b> {fuel_capacity}</div>}
            {starter && <div className="moto-details-spec"><img src="../images/starter.png" width="24px" height="24px" alt="engine" /> <b>Starter:</b> {starter}</div>}
        </fieldset>


        <fieldset className="moto-details-box">
            <legend className="moto-details-label">Engine</legend>
            {engine && <div className="moto-details-spec"><img src="../images/engine_cc.png" width="24px" height="24px" alt="engine" /><b>Layout:</b> {engine}</div>}
            {displacement && <div className="moto-details-spec"><img src="../images/engine.png" width="24px" height="24px" alt="engine" /><b>Displacement:</b> {displacement}</div>}
            {power && <div className="moto-details-spec"><img src="../images/horse-power.png" width="24px" height="24px" alt="engine" /><b>Power:</b> {power}</div>}
            {torque && <div className="moto-details-spec"><img src="../images/torque.png" width="24px" height="24px" alt="engine" /><b>Torque:</b> {torque}</div>}
            {valves_per_cylinder && <div className="moto-details-spec"><img src="../images/piston.png" width="24px" height="24px" alt="engine" /><b>Valves per cylinder:</b> {valves_per_cylinder}</div>}
            {fuel_system && <div className="moto-details-spec"><img src="../images/injection.png" width="24px" height="24px" alt="engine" /><b>Fuel system:</b> {fuel_system}</div>}
            {fuel_control && <div className="moto-details-spec"><img src="../images/fuel_control.png" width="24px" height="24px" alt="engine" /><b>Fuel control:</b> {fuel_control}</div>}
            {ignition && <div className="moto-details-spec"><img src="../images/ignition.png" width="24px" height="24px" alt="engine" /><b>Ignition:</b> {ignition}</div>}
            {lubrication && <div className="moto-details-spec"><img src="../images/oil.png" width="24px" height="24px" alt="engine" /><b>Lubrication:</b> {lubrication}</div>}
            {cooling && <div className="moto-details-spec"><img src="../images/cooling.png" width="24px" height="24px" alt="engine" /><b>Cooling:</b> {cooling}</div>}
            {bore_stroke && <div className="moto-details-spec"><img src="../images/bore_stroke.png" width="24px" height="24px" alt="engine" /><b>Bore stroke:</b> {bore_stroke}</div>}
            {compression && <div className="moto-details-spec"><img src="../images/compression.png" width="24px" height="24px" alt="engine" /><b>Compression:</b> {compression}</div>}
        </fieldset>

        <fieldset className="moto-details-box">
            <legend className="moto-details-label">Transmission </legend>
            {gearbox && <div className="moto-details-spec"><img src="../images/gearbox.png" width="24px" height="24px" alt="engine" /> <b>Gearbox:</b> {gearbox}</div>}
            {transmission && <div className="moto-details-spec"><img src="../images/transmission.png" width="24px" height="24px" alt="engine" /> <b>Transmission:</b> {transmission}</div>}
            {clutch && <div className="moto-details-spec"><img src="../images/clutch.png" width="24px" height="24px" alt="engine" /> <b>Clutch:</b> {clutch}</div>}
        </fieldset>

        <fieldset className="moto-details-box">
            <legend className="moto-details-label">Wheels, Brakes & Suspension</legend>
            {front_tire && <div className="moto-details-spec"><img src="../images/tire.png" width="24px" height="24px" alt="engine" /> <b>Front tire:</b> {front_tire}</div>}
            {rear_tire && <div className="moto-details-spec"><img src="../images/tire.png" width="24px" height="24px" alt="engine" /> <b>Rear tire:</b> {rear_tire}</div>}
            {front_brakes && <div className="moto-details-spec"><img src="../images/brakes.png" width="24px" height="24px" alt="engine" /> <b>Front brakes:</b> {front_brakes}</div>}
            {rear_brakes && <div className="moto-details-spec"><img src="../images/brakes.png" width="24px" height="24px" alt="engine" /> <b>Rear brakes:</b> {rear_brakes}</div>}
            {front_wheel_travel && <div className="moto-details-spec"><img src="../images/wheeltravel.png" width="24px" height="24px" alt="engine" /> <b>Front wheel travel:</b> {front_wheel_travel}</div>}
            {rear_wheel_travel && <div className="moto-details-spec"><img src="../images/wheeltravel.png" width="24px" height="24px" alt="engine" /> <b>Rear wheel travel:</b> {rear_wheel_travel}</div>}
            {front_suspension && <div className="moto-details-spec"><img src="../images/suspension.png" width="24px" height="24px" alt="engine" /> <b>Front suspension:</b> {front_suspension}</div>}
            {rear_suspension && <div className="moto-details-spec"><img src="../images/suspension.png" width="24px" height="24px" alt="engine" /> <b>Rear suspension:</b> {rear_suspension}</div>}

        </fieldset>

        <fieldset className="moto-details-box">
            <legend className="moto-details-label">Size</legend>
            {total_weight && <div className="moto-details-spec"><img src="../images/weight.png" width="24px" height="24px" alt="engine" /> <b>Weight:</b> {total_weight}</div>}
            {seat_height && <div className="moto-details-spec"><img src="../images/seat.png" width="24px" height="24px" alt="engine" /> <b>Seat height:</b> {seat_height}</div>}
            {total_height && <div className="moto-details-spec"><img src="../images/height.png" width="24px" height="24px" alt="engine" /> <b>Height:</b> {total_height}</div>}
            {total_length && <div className="moto-details-spec"><img src="../images/length.png" width="24px" height="24px" alt="engine" /> <b>Length:</b> {total_length}</div>}
            {total_width && <div className="moto-details-spec"><img src="../images/width.png" width="24px" height="24px" alt="engine" /> <b>Width:</b> {total_width}</div>}
            {ground_clearance && <div className="moto-details-spec"><img src="../images/ground_clearance.png" width="24px" height="24px" alt="engine" /> <b>Ground clearance:</b> {ground_clearance}</div>}
            {wheelbase && <div className="moto-details-spec"><img src="../images/wheelbase.png" width="24px" height="24px" alt="engine" /> <b>Wheelbase:</b> {wheelbase}</div>}
        </fieldset>


        <YoutubeVideos search={`${make} ${model} ${year}`} count={2} />
    </div>
}

export default MotoDetails;