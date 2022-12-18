export const Input = ({ width = "100%", value, handleChange }: { width?: string, value: string, handleChange: Function }) => {
    return <div className="input">
        <input style={{ width }} value={value} onChange={e => handleChange(e.target.value)} />
    </div>
}

export default Input;