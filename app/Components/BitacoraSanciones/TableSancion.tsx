"use client";

import { useEffect, useState } from "react";
import styles from "./Page.module.css";
import axios from "axios";

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
  const [sanciones, setSanciones] = useState<any>();
  const [button, setButton] = useState<boolean>(false);

  // useEffect(() => {
  //   const getSanciones = async () => {
  //     const response = await axios.get("");
  //     setSanciones(response);
  //   };
  //   getSanciones();
  // }, [button]);

  const handlebutton = () => {
    setButton(!button);
  };
  
  return (
    <>
      <h1>{sanciones}</h1>
      <div className={styles.tableContainer}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>Cuenta</th>
              <th>Motivo de la sanción</th>
              <th>Duracion (Semanas) </th>
              <th>Fecha Sanción</th>
              <th>Podra utilizar el servicio hasta</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      <form className="containerForm">
        <div className="groupInput">
          <select>
            <option value="">-- Selecciona una sanción --</option>
            <option value="sancion 1">No cerrar sesion (Una semana)</option>
          </select>
        </div>
      </form>
      <button className="button buttonSearch" onClick={handlebutton}>
        Aplicar sanción
      </button>
    </>
  );
}
//IO
