export const Input = ({
  width = "100%",
  value,
  handleChange,
  placeholder,
  onBlur,
  onFocus,
  type = "text",
}: {
  width?: string;
  value: string;
  handleChange: Function;
  placeholder?: string;
  onBlur?: Function;
  onFocus?: Function;
  type?: string;
}) => {
  return (
    <div className="input">
      <input
        type={type}
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
