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
  const [sanciones, setSanciones] = useState<any>([]);
  const [button, setButton] = useState<boolean>(false);
  const [selectedSancion, setSelectedSancion] = useState("");
  const [alumnoSanciones, setAlumnoSanciones] = useState<any>([]);
  /*
  useEffect(() => {
    const getSanciones = async () => {
      const response = await axios.get("");
      setSanciones(response);
    };
    getSanciones();
  }, [button]);



                  <td>{new Date(item.fecha_inicio).toLocaleDateString()}</td>
                <td>
                  {calcularFechaFin(item.fecha_inicio, item.sancion?.duracion)}
                </td>

                https://venus.acatlan.unam.mx/asignacionTiempo_test/alumno-sancion/320154041
                .get("https://venus.acatlan.unam.mx/asignacionTiempo_test/sancion")
*/
  useEffect(() => {
    axios
      .get(
        "  https://venus.acatlan.unam.mx/asignacionTiempo_test/alumno-sancion/320154041"
      )
      .then((response) => {
        setAlumnoSanciones(response.data);
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

  const handlebutton = () => {
    setButton(!button);
  };

  const calcularFechaFin = (fechaInicio: string, duracionSemanas: number) => {
    const fecha = new Date(fechaInicio);
    fecha.setDate(fecha.getDate() + duracionSemanas * 7);
    return fecha.toLocaleDateString();
  };

  return (
    <>
      <div className={styles.tableContainer} style={{ margin: "1rem 0" }}>
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
          <tbody>
            {sanciones.length > 0 ? (
              alumnoSanciones.map((item: any) => (
                <tr key={item.id_alumno_sancion}>
                  <td>{item.alumno?.id_cuenta}</td>
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

      <form className="containerForm">
        <div className="groupInput">
          <select
            value={selectedSancion}
            onChange={(e) => setSelectedSancion(e.target.value)}
          >
            <option value="">-- Selecciona una sanción --</option>
            {sanciones.map((sancion: any) => (
              <option key={sancion.id_sancion} value={sancion.id_sancion}>
                {sancion.sancion} ({sancion.duracion} semana/s)
              </option>
            ))}
          </select>
        </div>
      </form>
      <button
        className="button buttonSearch"
        style={{ margin: "1rem 0" }}
        onClick={handlebutton}
      >
        Aplicar sanción
      </button>
    </>
  );
}
//IO
