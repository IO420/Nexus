import Areas from "@/app/Components/ActivosMantenimiento/Areas";
import Mesas from "@/app/Components/ActivosMantenimiento/Mesas";
import Equipos from "@/app/Components/Equipos/equipos";
import AlertBox from "@/app/Components/Global/AlertBox/AlertBox";
import ClearParams from "@/app/Components/Global/ClearParams/ClearParams";
import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Toggle from "@/app/Components/Global/Toggle/Toggle";

export default async function Page(props: {
  searchParams?: Promise<{
    numAcount?: string;
    machine?: string;
    success?: string;
    error?: string;
  }>;
}) {
  const params = await props.searchParams;
  const numAcount = params?.numAcount ? params.numAcount : null;
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

      <h2 className="title">EQUIPOS ACTIVOS Y EN MANTENIMIENTO</h2>

      <Toggle
        defaultView="Equipos"
        options={[
          {
            key: "Equipos",
            label: "Equipos",
            content: (
              <>
                <SearchUser urlBase="ActivosMantenimiento" value={numAcount} />
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
