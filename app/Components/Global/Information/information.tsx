interface InformationProps {
  [key: string]: string | number | undefined;
}

export default function Information(props: InformationProps) {
  const entries = Object.entries(props).filter(([_, value]) => value !== undefined);

  if (entries.length === 0) return null; 

  return (
    <div className="information">
      <ul>
        {entries.map(([key, value]) => (
          <li key={key}>
            <b>{key}: </b>{value}
          </li>
        ))}
      </ul>
    </div>
  );
} 
//IO