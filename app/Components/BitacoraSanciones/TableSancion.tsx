import styles from "./Page.module.css";

interface alumno_sancion {
  id_alumno_sancion: number;
  fecha_inicio: string;
  alumno: alumno;
  sancion: sancion;
}

interface alumno {
  id_cuenta: number;
  nombre: string;
  credito: number;
}

interface sancion {
  id_sancion: number;
  sancion: string;
  duracion: number;
}

export default function TableSancion() {

  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>Cuenta</th>
              <th>Motivo de la sancion</th>
              <th>Duracion (Semanas) </th>
              <th>Fecha Sancion</th>
              <th>Podra utilizar el servicio hasta</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>

      <form className="containerForm">
        <div className="groupInput">
          <select
          >
            <option value="">-- Selecciona una sancion --</option>
            <option value="sancion 1">No cerrar sesion (Una semana)</option>
          </select>
          <button className="button buttonSearch" type="submit">
            Aplicar sancion
          </button>
        </div>
      </form>
    </>
  );
}
//IO
