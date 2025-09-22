"use client";
import { useState } from "react";
import styles from "./Page.module.css";

interface sancion {
  id: number;
  nombre: string;
  motivo: string;
  duracion: number;
  fecha_sancion: string;
  utilizar_equipo: number;
}

function QuitarSancion() {
  const [sanciones, setSanciones] = useState<sancion[]>([]);
  return (
    <section className="containerSection">
      <div className={styles.tableContainer}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Motivo Sancion</th>
              <th>Duracion (semanas) </th>
              <th>Fecha Sancion</th>
              <th>Podria utilizar el servicio hasta</th>
            </tr>
          </thead>
          <tbody>
            {sanciones.map((sancion, index) => (
              <tr key={index}>
                <td>{sancion.id}</td>
                <td>{sancion.nombre}</td>
                <td>{sancion.motivo}</td>
                <td>{sancion.duracion}</td>
                <td>{sancion.fecha_sancion}</td>
                <td>{sancion.utilizar_equipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="button buttonSearch">Quitar Sancion</button>
    </section>
  );
}

export default QuitarSancion;
