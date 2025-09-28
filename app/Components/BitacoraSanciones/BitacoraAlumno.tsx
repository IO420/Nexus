"use client";
import SearchDate from "../SearchDate/SearchDate";
import { useState } from "react";

import styles from "./Page.module.css";

interface alumnos {
  tiempo_entrada: string;
  tiempo_asignado: string;
  Ubicacion_equipo: number;
}

function BitacoraAlumno() {
  const [alumnos, setAlumnos] = useState<alumnos[]>([]);
  return (
    <>
      <SearchDate />
      <div className={styles.tableContainer}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>Tiempo Entrada</th>
              <th>Tiempo Asignado</th>
              <th>Ubicacion del equipo</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno, index) => (
              <tr key={index}>
                <td>{alumno.tiempo_entrada}</td>
                <td>{alumno.tiempo_asignado}</td>
                <td>{alumno.Ubicacion_equipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BitacoraAlumno;
