"use client";
import { useState } from "react";

import styles from "./Page.module.css";

interface quitarSanciones {
  id: number;
  nombre: string;
  motivo: string;
  duracion: number;
  fecha_sancion: string;
  utilizar_equipo: number;
}

function QuitarSancion() {
  const [quitarSanciones, SetQuitarSanciones] = useState<quitarSanciones[]>([]);
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
            {quitarSanciones.map((quitarSanciones, index) => (
              <tr key={index}>
                <td>{quitarSanciones.id}</td>
                <td>{quitarSanciones.nombre}</td>
                <td>{quitarSanciones.motivo}</td>
                <td>{quitarSanciones.duracion}</td>
                <td>{quitarSanciones.fecha_sancion}</td>
                <td>{quitarSanciones.utilizar_equipo}</td>
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
