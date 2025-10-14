"use client";
import SearchDate from "../SearchDate/SearchDate";
import { useState } from "react";

import styles from "./Page.module.css";

interface equipos {
  hora_entrada: string;
  min_utilizados: number;
  hora_salida: string;
  cuenta_asociada: number;
}

function BitacoraEquipo() {
  const [equipo, setEquipo] = useState<equipos[]>([]);
  const [ubicacion_equipo, setUbicacionEquipo] = useState("");
  return (
    <>
      <form className="containerForm">
        <label className="label">Ubicacion de equipo</label>

        <div className="groupInput">
          <select
            value={ubicacion_equipo}
            onChange={(e) => setUbicacionEquipo(e.target.value)}
          >
            <option value="">-- Selecciona un equipo --</option>
            <option value="255">Equipo 255</option>
          </select>
        </div>
      </form>
      <SearchDate />
      <div className={styles.tableContainer} style={{ marginTop: "1rem" }}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>Hora Entrada</th>
              <th>Minutos utilizados</th>
              <th>Hora salida</th>
              <th>Cuenta asociada</th>
            </tr>
          </thead>
          <tbody>
            {equipo.map((equipo, index) => (
              <tr key={index}>
                <td>{equipo.hora_entrada}</td>
                <td>{equipo.min_utilizados}</td>
                <td>{equipo.hora_salida}</td>
                <td>{equipo.cuenta_asociada}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BitacoraEquipo;
