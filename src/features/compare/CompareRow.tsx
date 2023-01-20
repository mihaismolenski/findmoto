export interface CompareRowProps {
  label?: string;
  values: string[];
  icon?: string;
}

export const CompareRow = ({ label, values, icon }: CompareRowProps) => {
  return (
    <tr>
      <td>
        <div className="compare-row-label">
          {icon && <img src={icon} width="24px" height="24px" alt="icon" />}
          {label || "-"}
        </div>
      </td>
      {values.map((v, index) => {
        return <td key={`body-${index}`}>{v}</td>;
      })}
    </tr>
  );
};

export default CompareRow;
