import styles from "./Page.module.css";

export default async function TableEquipos() {
  return (
    <section className="containerSection">
      <div>
        <table>
          <thead>
            <tr style={{ fontSize: "15px" }}>
              <th>Ubicación</th>
              <th>Nombre</th>
              <th>Plataforma</th>
              <th>Área</th>
              <th>Activo</th>
            </tr>
            <tr>
              <th>
                <select style={{ minWidth: "50px" }}>
                  <option style={{ minWidth: "50px" }}>pcnet1</option>
                </select>
              </th>
              <th>
                <select style={{ minWidth: "50px" }}>
                  <option style={{ minWidth: "50px" }}>mostrar todos</option>
                </select>
              </th>
              <th>
                <select style={{ minWidth: "50px" }}>
                  <option style={{ minWidth: "50px" }}>windows</option>
                </select>
              </th>
              <th>
                <select style={{ minWidth: "50px" }}>
                  <option style={{ minWidth: "50px" }}>mostrar Todo</option>
                </select>
              </th>
              <th>
                <select style={{ minWidth: "50px" }}>
                  <option style={{ minWidth: "50px" }}>si</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {machines.map((machine, index) => (
              <tr key={index}>
                <td>{machine.ubicacion}</td>
                <td>{machine.nombre}</td>
                <td>{machine.plataforma}</td>
                <td>{machine.area}</td>
                <td className={machine.disponible ? "disponible" : ""}>
                  {machine.disponible ? "si" : "no"}
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </section>
  );
}
//IO
