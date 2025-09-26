import { useState } from "react";
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

export default function UbicacionEquipo() {
  const [ubicacionEquipo, setUbicacionEquipo] = useState("");
  const [sanciones, setSanciones] = useState<>([]);

  return (
    <>
      <form className="containerForm">
        <label className="label">Ubicacion de equipo</label>

        <div
          className="groupInput"
          style={{ display: "flex", gap: "1rem", flexDirection: "row" }}
        >
          <select
            value={ubicacionEquipo}
            onChange={(e) => setUbicacionEquipo(e.target.value)}
          >
            <option value="">-- Selecciona un equipo --</option>
            <option value="255">Equipo 255</option>
          </select>
          <button className="button buttonSearch" type="submit">
            Asignar
          </button>
        </div>
      </form>

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
            {sanciones &&
              sanciones.map((sancion, index) => (
                <tr key={index}>
                  <td>{sancion.id_sancion}</td>
                  <td>{sancion.sancion}</td>
                  <td>{sancion.fecha_sancion}</td>
                  <td>{sancion.duracion}</td>
                  <td>{sancion.utilizar_hasta}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <form className="containerForm">
        <div className="groupInput">
          <select
            value={ubicacionEquipo}
            onChange={(e) => setUbicacionEquipo(e.target.value)}
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
