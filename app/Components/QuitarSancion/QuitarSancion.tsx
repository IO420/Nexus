"use client";
import { useEffect, useState } from "react";

import styles from "./Page.module.css";
import axios from "axios";

interface alumno_sancion {
  id: number;
  nombre: string;
  motivo: string;
  duracion: number;
  fecha_sancion: string;
  utilizar_equipo: number;
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

function QuitarSancion() {
  const [quitarSanciones, SetQuitarSanciones] = useState<any[]>([]);
  const [sanciones, setSanciones] = useState<any>([]);
  const [alumnoSanciones, setAlumnoSanciones] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        " https://venus.acatlan.unam.mx/asignacionTiempo_test/alumno-sancion/423019393"
      )
      .then((response) => {
        SetQuitarSanciones(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las sanciones:", error);
      });

    axios
      .get("https://venus.acatlan.unam.mx/asignacionTiempo_test/sancion")
      .then((response) => {
        setSanciones(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las sanciones:", error);
      });
  }, []);

  const calcularFechaFin = (fechaInicio: string, duracionSemanas: number) => {
    const fecha = new Date(fechaInicio);
    fecha.setDate(fecha.getDate() + duracionSemanas * 7);
    return fecha.toLocaleDateString();
  };

  return (
    <section className="containerSection">
      <div className={styles.tableContainer} style={{ margin: "1rem 0" }}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Motivo Sanción</th>
              <th>Duracion (semanas) </th>
              <th>Fecha Sanción</th>
              <th>Podria utilizar el servicio hasta</th>
            </tr>
          </thead>
          <tbody>
            {sanciones.length > 0 ? (
              quitarSanciones.map((item: any) => (
                <tr key={item.id_alumno_sancion}>
                  <td>{item.id_alumno_sancion}</td>
                  <td>{item.alumno?.nombre}</td>
                  <td>{item.sancion?.sancion}</td>
                  <td>{item.sancion?.duracion}</td>

                  <td>{new Date(item.fecha_inicio).toLocaleDateString()}</td>
                  <td>
                    {calcularFechaFin(
                      item.fecha_inicio,
                      item.sancion?.duracion
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No hay sanciones registradas</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <button className="button buttonSearch" style={{ marginTop: "1rem" }}>
        Quitar Sanción
      </button>
    </section>
  );
}

export default QuitarSancion;
