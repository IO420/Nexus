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
                  <button className="button buttonSearch">
                    Buscar
                  </button>
                </div>
                <label className="label">Ubicacion</label>
                <input
                  type="text"
                  //value={user}
                  //onChange={(e) => setUser(e.target.value)}
                  placeholder="Coloca un número de cuenta..."
                />

                <label className="label">Nombre</label>
                <input
                  type="text"
                  //value={user}
                  //onChange={(e) => setUser(e.target.value)}
                  placeholder="Coloca "
                />

                <label className="label">Plataforma</label>
                <input
                  type="text"
                  //value={user}
                  //onChange={(e) => setUser(e.target.value)}
                  placeholder="Coloca "
                />

                <label className="label">Area Ubicacion</label>
                <input
                  type="text"
                  //value={user}
                  //onChange={(e) => setUser(e.target.value)}
                  placeholder="Coloca "
                />

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
              <ProgramSelector/>
            ),
          },
          {
            key: "3",
            label: "Programa por sala",
            content: (
              <div>
                <form className="form-container">
                  <label htmlFor="salas ">Salas </label>
                  <select id="salas">
                    <option value="">Seleccione una sala</option>
                    <option value="sala1">Sala 1</option>
                    <option value="sala2">Sala 2</option>
                    <option value="sala3">Sala 3</option>
                  </select>

                  <div className="checkbox-grid">
                    <label>
                      <input type="checkbox" /> 3D MAX STUDIO 2014
                    </label>
                    <label>
                      <input type="checkbox" /> ADOBE CREATIVE SUITE
                    </label>
                    <label>
                      <input type="checkbox" /> ARCHICAD 20
                    </label>
                    <label>
                      <input type="checkbox" /> AUDACITY - win - 2.0
                    </label>
                    <label>
                      <input type="checkbox" /> AUTOCAD
                    </label>
                    <label>
                      <input type="checkbox" /> CODE-BLOCKS
                    </label>
                    <label>
                      <input type="checkbox" /> COREL DRAW
                    </label>
                    <label>
                      <input type="checkbox" /> DEV-C++
                    </label>
                    <label>
                      <input type="checkbox" /> EVIEWS Enterprise
                    </label>
                    <label>
                      <input type="checkbox" /> Google Earth
                    </label>
                    <label>
                      <input type="checkbox" /> INTERNET
                    </label>
                    <label>
                      <input type="checkbox" /> MAPLE
                    </label>
                    <label>
                      <input type="checkbox" /> MATHEMATICA
                    </label>
                    <label>
                      <input type="checkbox" /> MATLAB
                    </label>
                    <label>
                      <input type="checkbox" /> Maxima
                    </label>
                    <label>
                      <input type="checkbox" /> miktex
                    </label>
                    <label>
                      <input type="checkbox" /> NETBEANS
                    </label>
                    <label>
                      <input type="checkbox" /> OFFICE 2016
                    </label>
                    <label>
                      <input type="checkbox" /> PSeInt
                    </label>
                    <label>
                      <input type="checkbox" /> R 3.0.1
                    </label>
                    <label>
                      <input type="checkbox" /> RStudio
                    </label>
                    <label>
                      <input type="checkbox" /> SPSS Statistics
                    </label>
                    <label>
                      <input type="checkbox" /> STATA 13
                    </label>
                    <label>
                      <input type="checkbox" /> STATGRAPHICS Centurion XVI
                    </label>
                  </div>

                  <button className="button buttonSearch">Guardar cambios</button>
                </form>
              </div>
            ),
          },
        ]}
      />
    </section>
  );
}
//IO
