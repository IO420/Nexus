"use client";
import SearchUser from "@/app/Components/SearchUser/searchUser";
import Toggle from "@/app/Components/Toggle/Toggle";

export default function Page() {
  return (
    <section className="containerSection">
      <h2 className="title"> ASIGNACION DE EQUIPOS </h2>

      <Toggle
        defaultView="Asignar"
        options={[
          {
            key: "Asignar",
            label: "Asignar tiempo",
            content: (
              <>
                <SearchUser urlBase="AsignacionEquipo" value={"2"} />

                <form className="containerForm"></form>
              </>
            ),
          },
          {
            key: "Liberar",
            label: "Cancelar tiempo",
            content: (
              <>
                <div className="checkbox-grid">
                  <label>
                    <input type="checkbox" /> Equipo
                  </label>
                  <label>
                    <input type="checkbox" /> Cuenta
                  </label>
                </div>
                <SearchUser urlBase="AsignacionEquipo" value={"2"} />
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
