import Areas from "@/app/Components/ActivosMantenimiento/Areas";
import MesasDisponibles from "@/app/Components/ActivosMantenimiento/MesasDisponibles";
import TableEquipos from "@/app/Components/Equipos/tableequipos";
import Toggle from "@/app/Components/Global/Toggle/Toggle";

export default async function Page(props: {
  searchParams?: Promise<{
    numAcount?: string;
    machine?: string;
  }>;
}) {
  const params = await props.searchParams;
  const numAcount = params?.numAcount ? params.numAcount : null;

  return (
    <section className="containerSection">

      <h2 className="title">EQUIPOS ACTIVOS Y EN MANTENIMIENTO</h2>

      <Toggle
        defaultView="Equipos"
        options={[
          {
            key: "Equipos",
            label: "Equipos",
            content: (
              <>
                <TableEquipos />
              </>
            ),
          },
          {
            key: "Areas",
            label: "Areas",
            content: (
              <>
                <Areas />
              </>
            ),
          },
          {
            key: "Mesas",
            label: "Mesas",
            content: (
              <>
                <MesasDisponibles/>
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
//IO
