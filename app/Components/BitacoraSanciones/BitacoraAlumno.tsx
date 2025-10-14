"use client";
import { useState } from "react";

interface alumnos {
  tiempo_entrada: string;
  tiempo_asignado: string;
  Ubicacion_equipo: number;
}

function BitacoraAlumno() {
  const [alumnos, setAlumnos] = useState<alumnos[]>([]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Tiempo Entrada</th>
            <th>Tiempo Asignado</th>
            <th>Ubicacion del equipo</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, index) => (
            <tr key={index}>
              <td>{alumno.tiempo_entrada}</td>
              <td>{alumno.tiempo_asignado}</td>
              <td>{alumno.Ubicacion_equipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BitacoraAlumno;
