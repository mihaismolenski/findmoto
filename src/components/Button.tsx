export const Button = ({ text, handleClick }: { text: string, handleClick: Function }) => {
    return <button className="button" onClick={() => handleClick()}>{text}</button>
}

export default Button;