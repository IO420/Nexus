"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface Alumno {
  id_cuenta: number;
  nombre: string;
  credito: number;
}

interface Sancion {
  id_sancion: number;
  sancion: string;
  duracion: number;
}

interface AlumnoSancion {
  id_alumno_sancion: number;
  fecha_inicio: string;
  sancion: Sancion;
}

export default function TableSancion({ idCuenta }: { idCuenta: number }) {
  const [sanciones, setSanciones] = useState<Sancion[]>([]);
  const [alumno, setAlumno] = useState<Alumno | null>(null);
  const [alumnoSanciones, setAlumnoSanciones] = useState<AlumnoSancion[]>([]);
  const [selectedSancion, setSelectedSancion] = useState("");

  useEffect(() => {
    if (!idCuenta) return;

    // Obtener sanciones del alumno
    axios
      .get(
        `https://venus.acatlan.unam.mx/asignacionTiempo_test/alumno-sancion/${idCuenta}`
      )
      .then((res) => {
        setAlumno(res.data.student);
        setAlumnoSanciones(
          res.data.alusancion?.length ? res.data.alusancion : []
        );
      })
      .catch((err) =>
        toast.error("Error al obtener las sanciones del alumno:", err)
      );

    // Obtener catálogo de sanciones
    axios
      .get("https://venus.acatlan.unam.mx/asignacionTiempo_test/sancion")
      .then((res) => setSanciones(res.data))
      .catch((err) =>
        toast.error("Error al obtener el catálogo de sanciones:", err)
      );
  }, [idCuenta]);

  const calcularFechaFin = (fechaInicio: string, duracionSemanas: number) => {
    const fecha = new Date(fechaInicio);
    fecha.setDate(fecha.getDate() + duracionSemanas * 7);
    return fecha.toLocaleDateString();
  };

  return (
    <>
      <div style={{ margin: "1rem 0" }}>
        <table>
          <thead>
            <tr>
              <th>Cuenta</th>
              <th>Motivo de la sanción</th>
              <th>Duración (Semanas)</th>
              <th>Fecha Sanción</th>
              <th>Podrá utilizar el servicio hasta</th>
            </tr>
          </thead>
          <tbody>
            {alumnoSanciones.length > 0 ? (
              alumnoSanciones.map((item) => (
                <tr key={item.id_alumno_sancion}>
                  <td>{alumno?.id_cuenta}</td>
                  <td>{item.sancion.sancion}</td>
                  <td>{item.sancion.duracion}</td>
                  <td>{new Date(item.fecha_inicio).toLocaleDateString()}</td>
                  <td>
                    {calcularFechaFin(item.fecha_inicio, item.sancion.duracion)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>No hay sanciones registradas</td>
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
            {sanciones.map((sancion) => (
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
        onClick={() => alert(`Sanción ${selectedSancion} aplicada`)}
      >
        Aplicar sanción
      </button>
    </>
  );
}
