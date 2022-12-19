export const Type = ({ name, selected, onChange }: { name: string, selected: boolean, onChange: Function }) => {
    return <div className={`type ${selected ? "selected" : ""}`} onClick={() => onChange(!selected)}>{name}</div>
}

export default Type;