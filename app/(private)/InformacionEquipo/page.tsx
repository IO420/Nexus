import Toggle from "@/app/Components/Global/Toggle/Toggle";
import Equipos from "@/app/Components/Equipos/equipos";
import ProgramSelector from "@/app/Components/InformacionEquipos/ProgramSelector";

import "./informacionequipo.css";

export default async function Page(props: {
  searchParams?: Promise<{
    key?: string;
    machine?: string;
  }>;
}) {
  const params = await props.searchParams;
  const key = params?.key && params.key;
  const machine = params?.machine ? params.machine : null;

  return (
    <section className="containerSection">

      <h2 className="title"> INFORMACION DE EQUIPOS </h2>

      <Toggle
        defaultView={key}
        options={[
          {
            key: "Equipos",
            label: "Equipos",
            content: <Equipos />,
          },
          {
            key: "Equipo",
            label: "Programa por equipo",
            content: (
              <ProgramSelector
                key={1}
                titulo="Programas de Equipo"
                opcion={["", "Equipo 1", "Equipo 2", "Equipo 3", "Equipo 4"]}
              />
            ),
          },
          {
            key: "Sala",
            label: "Programa por sala",
            content: (
              <ProgramSelector
                key={2}
                titulo="Programas por Sala"
                opcion={["", "PCNET1", "PCNET2", "PCNET3", "PCNET4", "PCNET4"]}
              />
            ),
          },
        ]}
      />
    </section>
  );
}
//IO
