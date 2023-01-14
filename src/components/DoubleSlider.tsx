import ReactSlider from "react-slider";

export interface DoubleSliderProps {
    label: string;
    handleChange: Function;
    min: number;
    max: number;
    value: number[];
    step?: number;
}

export const DoubleSlider = ({
    label,
    handleChange,
    min,
    max,
    value,
    step = 50,
}: DoubleSliderProps) => {
    return (
        <div>
            <label className="double-slider-label">{label}</label>
            <ReactSlider
                className="double-slider"
                thumbClassName="double-slider-thumb"
                trackClassName="double-slider-track"
                defaultValue={[min, max]}
                min={min}
                max={max}
                step={step}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                onChange={(values: number[]) => handleChange(values)}
                value={value}
                pearling
            />
        </div>
    );
};

export default DoubleSlider;