export const Input = ({ width = "100%", value, handleChange, placeholder }: { width?: string, value: string, handleChange: Function, placeholder?: string }) => {
    return <div className="input">
        <input style={{ width }} value={value} onChange={e => handleChange(e.target.value)} placeholder={placeholder} />
    </div>
}

export default Input;