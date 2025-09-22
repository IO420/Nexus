import ProgramSelector from "@/app/Components/ProgramSelector/ProgramSelector";
import Toggle from "@/app/Components/Toggle/Toggle";

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
                <select>
                  <option value="0">Elige</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                  <option value="4">5</option>
                  <option value="5">6</option>
                </select>

                <label className="label">Area Ubicacion</label>
                <select>
                  <option value="0">Elige</option>
                  <option value="1">mmmmm</option>
                  <option value="2">mmmmm</option>
                  <option value="3">mmmmm</option>
                  <option value="4">mmmmm</option>
                  <option value="5">mmmmm</option>
                </select>
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
