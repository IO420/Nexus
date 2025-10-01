import EnviarMensaje from "@/app/Components/EviarMensaje/EnviarMensaje";
import AlertBox from "@/app/Components/Global/AlertBox/AlertBox";
import ClearParams from "@/app/Components/Global/ClearParams/ClearParams";
import Toggle from "@/app/Components/Global/Toggle/Toggle";

export default async function Page(props: {
  searchParams?: Promise<{
    key:string;
    success?: string;
    error?: string;
  }>;
}) {
  const params = await props.searchParams;
  const key = params?.key && params.key ;
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

      <h2 className="title">Enviar mensaje</h2>

      <Toggle
        defaultView={key}
        options={[
          {
            key: "Equipo",
            label: "Equipo",
            content: (
              <EnviarMensaje
                titulo="Seleccione un equipo"
                opciones={["1", "2", "3", "4", "5", "6"]}
              />
            ),
          },
          {
            key: "Sala",
            label: "Sala",
            content: (
              <EnviarMensaje
                titulo="Seleccione una sala"
                opciones={["PECERA", "PCNET1", "PCNET2", "PCNET3"]}
              />
            ),
          },
        ]}
      />
    </section>
  );
}
