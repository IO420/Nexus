"use client";
import { useEffect, useState } from "react";
import styles from "./Page.module.css";
import SearchUser from "../../Global/SearchUser/searchUser";
import Information from "../../Global/Information/information";
import { GetStudent } from "@/app/lib/getStudent";
import { envConfig } from "@/app/lib/config";

interface sancion {
  no_cuenta: number;
  nombre: string;
  motivo: string;
  duracion: number;
  fecha_sancion: string;
  utilizar_hasta: number;
}

export default function Sanciones() {
  const [sanciones, setSanciones] = useState<sancion[]>([]);
  const [ubicacion_equipo, setUbicacionEquipo] = useState("");
  const [no_cuenta, setNo_cuenta] = useState("");

  useEffect(() => {
    fetch(`${envConfig.apiUrl}/student/${no_cuenta}`).then(
      (
        response // Revisar
      ) => response.json().then((data) => setNo_cuenta(data[0].sancion))
    );
  }, [no_cuenta]);

  return (
    <>
      <SearchUser urlBase="BitacoraSanciones" value="3" />

      {/*  <Information NoCuenta={sancion.id_cuenta} Nombre={student.nombre} /> */}

      <form className="containerForm">
        <label className="label">Ubicacion de equipo</label>

        <div
          className="groupInput"
          style={{ display: "flex", gap: "1rem", flexDirection: "row" }}
        >
          <select
            value={ubicacion_equipo}
            onChange={(e) => setUbicacionEquipo(e.target.value)}
          >
            <option value="">-- Selecciona un equipo --</option>
            <option value="255">Equipo 255</option>
          </select>
          <button className="button buttonSearch" type="submit">
            Asignar
          </button>
        </div>
      </form>

      <div className={styles.tableContainer}>
        <table className={styles.machineTable}>
          <thead>
            <tr>
              <th>Cuenta</th>
              <th>Motivo de la sancion</th>
              <th>Duracion (Semanas) </th>
              <th>Fecha Sancion</th>
              <th>Podra utilizar el servicio hasta</th>
            </tr>
          </thead>
          <tbody>
            {sanciones.map((sancion, index) => (
              <tr key={index}>
                <td>{sancion.no_cuenta}</td>
                <td>{sancion.motivo}</td>
                <td>{sancion.fecha_sancion}</td>
                <td>{sancion.duracion}</td>
                <td>{sancion.utilizar_hasta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form className="containerForm">
        <div className="groupInput">
          <select
            value={ubicacion_equipo}
            onChange={(e) => setUbicacionEquipo(e.target.value)}
          >
            <option value="">-- Selecciona una sancion --</option>
            <option value="sancion 1">No cerrar sesion (Una semana)</option>
          </select>
          <button className="button buttonSearch" type="submit">
            Aplicar sancion
          </button>
        </div>
      </form>
    </>
  );
}
