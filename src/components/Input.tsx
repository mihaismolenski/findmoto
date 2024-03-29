export const Input = ({
  width = "100%",
  value,
  handleChange,
  placeholder,
  onBlur,
  onFocus,
  type = "text",
  disabled = false,
}: {
  width?: string;
  value: string;
  handleChange: Function;
  placeholder?: string;
  onBlur?: Function;
  onFocus?: Function;
  type?: string;
  disabled?: boolean;
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
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
