"use client";
import { useState } from "react";
import SearchUser from "../Components/SearchUser/searchUser";
import styles from "./Page.module.css"; // importamos el css

export default function Page() {
  const [sanciones] = useState([
    {
      id: "1",
      nombre: "Jose Garcia",
      mmotivo: "No cerrar sancion",
      duracion: "2",
      fecha_sancion: "10/09/2025 a las 02:45:26 PM",
      utilizar_equipo: "13/09/2025",
    },
  ]);
  return (
    <section className="containerSection">
      <h2 className="title"> Quitar Sanciones </h2>
      <SearchUser />
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
                <td>{sancion.mmotivo}</td>
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
//IO
