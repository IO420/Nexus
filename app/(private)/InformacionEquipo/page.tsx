import Toggle from "@/app/Components/Global/Toggle/Toggle";
import Equipos from "@/app/Components/Equipos/equipos";
import AlertBox from "@/app/Components/Global/AlertBox/AlertBox";
import ProgramSelector from "@/app/Components/InformacionEquipos/ProgramSelector";

import "./informacionequipo.css";
import ClearParams from "@/app/Components/Global/ClearParams/ClearParams";

export default async function Page(props: {
  searchParams?: Promise<{
    key?:string;
    machine?: string;
    success?: string;
    error?: string;
  }>;
}) {
  const params = await props.searchParams;
  const key = params?.key && params.key;
  const machine = params?.machine ? params.machine : null;
  const showSuccess = params?.success ? params.success : null;
  const showError = params?.error ? params.error : null;

  return (
    <section className="containerSection">
      {showError && (
        <>
          <AlertBox key={Date.now()} message={showError} type="error" />
          <ClearParams paramsToClear={["error"]} />
        </>
      )}

      {showSuccess && (
        <>
          <AlertBox key={Date.now()} message={showSuccess} type="success" />
          <ClearParams paramsToClear={["success"]} />
        </>
      )}

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
