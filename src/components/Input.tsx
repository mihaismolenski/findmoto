export const Input = ({
  width = "100%",
  value,
  handleChange,
  placeholder,
  onBlur,
  onFocus,
}: {
  width?: string;
  value: string;
  handleChange: Function;
  placeholder?: string;
  onBlur?: Function;
  onFocus?: Function;
}) => {
  return (
    <div className="input">
      <input
        style={{ width }}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        onBlur={() => onBlur && onBlur()}
        onFocus={() => onFocus && onFocus()}
      />
    </div>
  );
};

export default Input;
