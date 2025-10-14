"use client";
import { useState } from "react";
import styles from "./Page.module.css";

interface reportes {
  Servicio: "Plotter";
  Total: "$1440.00";
}

function PorRecibos() {
  const [reportes, SetQuitarSanciones] = useState<reportes[]>([]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {reportes.map((reporte, index) => (
            <tr key={index}>
              <td>{reporte.Servicio}</td>
              <td>{reporte.Total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PorRecibos;
