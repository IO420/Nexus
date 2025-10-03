import EnviarMensaje from "@/app/Components/EviarMensaje/EnviarMensaje";
import Toggle from "@/app/Components/Global/Toggle/Toggle";

export default async function Page(props: {
  searchParams?: Promise<{
    key:string;
  }>;
}) {
  const params = await props.searchParams;
  const key = params?.key && params.key ;

  return (
    <section className="containerSection">

      <h2 className="title">Enviar mensaje</h2>

      <Toggle
        defaultView={key}
        options={[
          {
            key: "Equipo",
            label: "Equipo",
            content: (
              <EnviarMensaje
              key={1}
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
              key={2}
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
