"use client";
import Toggle from "../Components/Toggle/Toggle";
import EnviarMensaje from "../Components/EviarMensaje/EnviarMensaje"; // 👈 importa bien

export default function Page() {
  return (
    <section className="containerSection">
      <h2 className="title">Enviar mensaje</h2>

      <Toggle
        defaultView="Equipo"
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
