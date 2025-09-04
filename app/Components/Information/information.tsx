'use client';

interface InformationProps {
  [key: string]: string | number | undefined;
}

export default function Information(props: InformationProps) {
  // Obtenemos las entradas (key + value) y filtramos los que sean undefined
  const entries = Object.entries(props).filter(([_, value]) => value !== undefined);

  if (entries.length === 0) return null; // no mostrar nada si no hay datos

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