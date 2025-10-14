import styles from "./Page.module.css";

interface Alumno {
  id_cuenta: number;
  nombre: string;
  credito: number;
}

interface Sancion {
  id_sancion: number;
  sancion: string;
  duracion: number;
}

interface AlumnoSancion {
  id_alumno_sancion: number;
  fecha_inicio: string;
  sancion: Sancion;
}

interface DataProps {
  student: Alumno;
  alusancion: AlumnoSancion[];
}

interface Props {
  data: DataProps | null;
}

function QuitarSancion({ data }: Props) {
  const calcularFechaFin = (fechaInicio: string, duracionSemanas: number) => {
    const fecha = new Date(fechaInicio);
    fecha.setDate(fecha.getDate() + duracionSemanas * 7);
    return fecha.toLocaleDateString();
  };

  return (
    <section className="containerSection">
      <div className={styles.tableContainer} style={{ margin: "1rem 0" }}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Motivo Sanción</th>
              <th>Duración (semanas)</th>
              <th>Fecha Sanción</th>
              <th>Podría utilizar el servicio hasta</th>
            </tr>
          </thead>
          <tbody>
            {data && data.alusancion.length > 0 ? (
              data.alusancion.map((item) => (
                <tr key={item.id_alumno_sancion}>
                  <td>{item.id_alumno_sancion}</td>
                  <td>{data.student.nombre}</td>
                  <td>{item.sancion.sancion}</td>
                  <td>{item.sancion.duracion}</td>
                  <td>{new Date(item.fecha_inicio).toLocaleDateString()}</td>
                  <td>
                    {calcularFechaFin(item.fecha_inicio, item.sancion.duracion)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No hay sanciones registradas</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default QuitarSancion;
