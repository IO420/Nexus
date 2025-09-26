import Toggle from "@/app/Components/Global/Toggle/Toggle";
import ProgramSelector from "@/app/Components/Equipo/ProgramSelector/ProgramSelector";
import Equipos from "@/app/Components/Equipo/Equipos/equipos";

import "./informacionequipo.css";

export default function Page() {
  return (
    <section className="containerSection">
      <h2 className="title"> INFORMACION DE EQUIPOS </h2>

      <Toggle
        defaultView="1"
        options={[
          {
            key: "1",
            label: "Equipos",
            content: <Equipos key={2} />,
          },
          {
            key: "2",
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
            key: "3",
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
