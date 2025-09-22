"use client";
import SearchUser from "@/app/Components/SearchUser/searchUser";
import Equipos from "@/app/Components/ActivosMantenimiento/Equipos";
import Toggle from "@/app/Components/Toggle/Toggle";
import Areas from "@/app/Components/ActivosMantenimiento/Areas";
import Mesas from "@/app/Components/ActivosMantenimiento/Mesas";

export default function Page(props: {
  searchParams?: Promise<{
    numAcount: string;
    success?: string;
    error?: string;
  }>;
}) {
  const params = props.searchParams;

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
                <SearchUser urlBase="ActivosMantenimiento" value={"2"} />
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
