"use client";
import { useState } from "react";
import styles from "./Page.module.css";

interface servicios {
  folio_recibo: "100255";
  monto: "40.00";
  fecha_recibo: "10/10/2025";
  fecha_registro: "10/10/2025 05:32:20 pm";
  usuario: "modulo1";
}

function PorServicios() {
  const [recibos, setRecibos] = useState<servicios[]>([]);
  return (
    <div className={styles.tableContainer}>
      <table className={styles.machineTable}>
        <thead>
          <tr>
            <th>Folio Recibo</th>
            <th>Monto</th>
            <th>Fecha Recibo</th>
            <th>Fecha Registro</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          {recibos.map((recibo, index) => (
            <tr key={index}>
              <td>{recibo.folio_recibo}</td>
              <td>{recibo.monto}</td>
              <td>{recibo.fecha_recibo}</td>
              <td>{recibo.fecha_registro}</td>
              <td>{recibo.usuario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PorServicios;
