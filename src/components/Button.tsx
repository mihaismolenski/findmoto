export const Button = ({ text, handleClick, height = "52px" }: { text: string, handleClick: Function, height?: string }) => {
    return <button className="button" style={{height}} onClick={() => handleClick()}>{text}</button>
}

export default Button;