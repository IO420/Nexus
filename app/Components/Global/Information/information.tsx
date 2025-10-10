interface InformationProps {
  [key: string]: string | number | undefined;
}

export default function Information(props: InformationProps) {
  const entries = Object.entries(props).filter(
    ([_, value]) => value !== undefined
  );

  if (entries.length === 0) return null;

  return (
    <div className="information">
      <ul className="informationList">
        {entries.map(([key, value]) => (
          <li key={key} className="informationItem">
            <span className="informationKey">{key}</span>
            <span className="informationValue">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
//IO
