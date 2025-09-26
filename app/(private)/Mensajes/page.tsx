"use client";

import EnviarMensaje from "@/app/Components/Equipo/EviarMensaje/EnviarMensaje";
import Toggle from "@/app/Components/Global/Toggle/Toggle";

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
