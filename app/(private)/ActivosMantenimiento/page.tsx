import Areas from "@/app/Components/ActivosMantenimiento/Areas";
import Mesas from "@/app/Components/ActivosMantenimiento/Mesas";
import Equipos from "@/app/Components/Equipos/equipos";
import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
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
                <SearchUser value={numAcount} />
                <Equipos />
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
            label: "Liberar mesa",
            content: (
              <>
                <Mesas />
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
//IO
