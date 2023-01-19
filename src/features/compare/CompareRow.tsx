export interface CompareRowProps {
  label: string;
  values: string[];
}

export const CompareRow = ({ label, values }: CompareRowProps) => {
  return (
    <tr>
      <td>{label}</td>
      {values.map((v, index) => {
        return <td key={`body-${index}`}>{v}</td>;
      })}
    </tr>
  );
};

export default CompareRow;
