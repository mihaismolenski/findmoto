export const Textarea = ({
  width = "100%",
  value,
  handleChange,
  placeholder,
}: {
  width?: string;
  value: string;
  handleChange: Function;
  placeholder?: string;
}) => {
  return (
    <div className="textarea">
      <textarea
        style={{ width }}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        maxLength={1000}
      />
    </div>
  );
};

export default Textarea;
