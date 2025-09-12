"use client";

import { useState } from "react";
import styles from "./Page.module.css"; // importamos el css

export default function Page() {
  const [machines] = useState([
    {
      ubicacion: "Laboratorio 1",
      nombre: "PC-01",
      plataforma: "Windows 10",
      area: "Diseño",
      disponible: true,
    },
    {
      ubicacion: "Laboratorio 2",
      nombre: "PC-15",
      plataforma: "Linux",
      area: "Programación",
      disponible: false,
    },
    {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    },
    {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    },
    {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    },
    {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    },
    {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    },
    {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    },
    {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    },
    {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    },
    {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    },
    {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    },
    {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    }, {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    }, {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    }, {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    }, {
      ubicacion: "Laboratorio 3",
      nombre: "PC-23",
      plataforma: "MacOS",
      area: "Edición",
      disponible: true,
    },
  ]);

  return (
    <section className='containerSection'>
      <h2 className='title'> MONITOR DE MÁQUINAS DISPONIBLES </h2>

      <div className={styles.actions}>
        <button className={styles.resetButton}>
          Actualizar informacion
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>Ubicación</th>
              <th>Nombre Equipo</th>
              <th>Plataforma</th>
              <th>Área</th>
              <th>Disponible</th>
            </tr>
          </thead>
          <tbody>
            {machines.map((machine, index) => (
              <tr key={index}>
                <td>{machine.ubicacion}</td>
                <td>{machine.nombre}</td>
                <td>{machine.plataforma}</td>
                <td>{machine.area}</td>
                <td className={machine.disponible ? "disponible" : ""}>
                  {machine.disponible ? "si" : "no"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
//IO