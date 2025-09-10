import ProgramSelector from "../Components/ProgramSelector/ProgramSelector";
import Toggle from "../Components/Toggle/Toggle";
import "./informacionequipo.css";

export default function Page() {
  return (
    <section className="containerSection">
      <h2 className="title"> INFORMACION DE EQUIPOS </h2>

      <Toggle
        defaultView="1"
        options={[
          {
            key: "1",
            label: "Equipos",
            content: (
              <form className="containerForm">
                <div className="groupInput">
                  <input type="text" />
                  <button className="button buttonSearch">Buscar</button>
                </div>
                <label className="label">Ubicacion</label>
                <input type="text" placeholder="Coloca" />

                <label className="label">Nombre</label>
                <input type="text" placeholder="Coloca " />

                <label className="label">Plataforma</label>
                <input type="text" placeholder="Coloca " />

                <label className="label">Area Ubicacion</label>
                <input type="text" placeholder="Coloca " />

                <div className="containerButton">
                  <button className="button buttonSearch">Nuevo</button>
                  <button className="button buttonSearch">Editar</button>
                </div>
              </form>
            ),
          },
          {
            key: "2",
            label: "Programa por equipo",
            // ✅ Ahora pasamos titulo y opcion como props al componente
            content: (
              <ProgramSelector
                titulo="Programas de Equipo"
                opcion={["Equipo 1", "Equipo 2", "Equipo 3"]}
              />
            ),
          },
          {
            key: "3",
            label: "Programa por sala",
            // ✅ Aquí también pasamos un array válido de strings
            content: (
              <ProgramSelector
                titulo="Programas por Sala"
                opcion={["Sala A", "Sala B", "Sala C"]}
              />
            ),
          },
        ]}
      />
    </section>
  );
}
