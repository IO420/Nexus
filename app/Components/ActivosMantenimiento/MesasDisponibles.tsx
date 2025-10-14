export default async function MesasDisponibles() {
  return (
    <section className="containerSection">
      <div>
        <table>
          <thead>
            <tr style={{ fontSize: "15px" }}>
              <th>Mesa</th>
              <th>Activo</th>
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
