import styles from "./Page.module.css";

export default async function Page(props: {
  searchParams?: Promise<{
    numAcount: string;
    success?: string;
    error?: string;
  }>;
}) {
  const params = await props.searchParams;
  const numAcount = params?.numAcount ? params.numAcount : null;
  const showSuccess = params?.success ? params.success : null;
  const showError = params?.error ? params.error : null;

  return (
    <section className='containerSection'>
      <h2 className='title'> MONITOR DE MÁQUINAS DISPONIBLES </h2>

      <div className={styles.actions}>
        <button className={styles.resetButton}>
          Actualizar informacion
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>Ubicación</th>
              <th>Nombre Equipo</th>
              <th>Plataforma</th>
              <th>Área</th>
              <th>Disponible</th>
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