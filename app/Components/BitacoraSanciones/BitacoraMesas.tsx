"use client";
import SearchDate from "../SearchDate/SearchDate";
import { useState } from "react";

import styles from "./Page.module.css";

interface tables {
  no_mesa: number;
  no_cuenta: number;
  hora_entrada: string;
  tiempo_asignado: number;
  hora_salida: string;
}

function BitacoraMesas() {
  const [tables, setTables] = useState<tables[]>([]);

  return (
    <>
      <SearchDate />
      <div className={styles.tableContainer} style={{marginTop:"1rem"}}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>Mesa</th>
              <th>Cuenta</th>
              <th>Hora Entrada</th>
              <th>Tiempo Asignado</th>
              <th>Hora Salida</th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table, index) => (
              <tr key={index}>
                <td>{table.no_mesa}</td>
                <td>{table.no_cuenta}</td>
                <td>{table.hora_entrada}</td>
                <td>{table.tiempo_asignado}</td>
                <td>{table.hora_salida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BitacoraMesas;
