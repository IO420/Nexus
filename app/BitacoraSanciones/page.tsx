"use client";

import { useState } from "react";
import SearchDate from "../Components/SearchDate/SearchDate";
import SearchUser from "../Components/SearchUser/searchUser";
import Toggle from "../Components/Toggle/Toggle";
import styles from "./Page.module.css"; // importamos el css
import Information from "../Components/Information/information";

export default function Page() {
  const [usuario_sanciones] = useState([
    {
      no_cuenta: "425530275 ",
      motivo: "Motivos",
      duracion: "5",
      fecha_sancion: "15/10/2025",
      utilizar_hasta: "25/10/2025",
    },
  ]);

  const [machines] = useState([
    {
      hora_entrada: "10 ",
      min_utilizados: "20",
      hora_salida: "10:15",
      cuenta_asociada: "15",
    },
  ]);
  const [tables] = useState([
    {
      no_mesa: "10 ",
      no_cuenta: "425530275",
      hora_entrada: "10:15",
      tiempo_asignado: "15",
      hora_salida: "10:30",
    },
  ]);

  const [alumnos] = useState([
    {
      tiempo_entrada: "10:10 ",
      tiempo_asignado: "15",
      Ubicacion_equipo: "2",
    },
  ]);
  const [ubicacion_equipo, setUbicacionEquipo] = useState("");
  return (
    <section className="containerSection">
      <h2 className="title"> BITACORA Y SANCIONES </h2>

      <Toggle
        defaultView="1"
        options={[
          {
            key: "1",
            label: "Bitacora de equipo",
            content: (
              <>
                <SearchDate />

                <form className="containerForm">
                  <label className="label">Ubicacion de equipo</label>

                  <div className="groupInput">
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
                        <th>Hora Entrada</th>
                        <th>Minutos utilizados</th>
                        <th>Hora salida</th>
                        <th>Cuenta asociada</th>
                      </tr>
                    </thead>
                    <tbody>
                      {machines.map((machine, index) => (
                        <tr key={index}>
                          <td>{machine.hora_entrada}</td>
                          <td>{machine.min_utilizados}</td>
                          <td>{machine.hora_salida}</td>
                          <td>{machine.cuenta_asociada}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ),
          },
          {
            key: "2",
            label: "Bitacora de alumno",
            content: (
              <div className={styles.tableContainer}>
                <SearchDate />
                <table className={styles.machineTable}>
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
              </div>
            ),
          },
          {
            key: "3",
            label: "Bitacora mesas",
            content: (
              <div className={styles.tableContainer}>
                <SearchDate />
                <table className={styles.machineTable}>
                  <thead>
                    <tr>
                      <th>Mesa</th>
                      <th>Cuenta</th>
                      <th>Hora Entrada</th>
                      <th>Tiempo Asignado</th>
                      <th>Hora Salida</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tables.map((table, index) => (
                      <tr key={index}>
                        <td>{table.no_mesa}</td>
                        <td>{table.no_cuenta}</td>
                        <td>{table.hora_entrada}</td>
                        <td>{table.tiempo_asignado}</td>
                        <td>{table.hora_salida}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ),
          },
          {
            key: "4",
            label: "Sanciones",
            content: (
              <>
                <div className={styles.tableContainer}>
                  <SearchUser></SearchUser>
                  <Information NoCuenta="id cuenta" Nombre="id nombre" />
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
                      <form className="containerForm">
                        <label className="label">Ubicacion de equipo</label>

                        <div className="groupInput">
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
                      {usuario_sanciones.map((sancion, index) => (
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

                  <form className="containerForm">
                    <div className="groupInput">
                      <select
                        value={ubicacion_equipo}
                        onChange={(e) => setUbicacionEquipo(e.target.value)}
                      >
                        <option value="">-- Selecciona una sancion --</option>
                        <option value="sancion 1">
                          No cerrar sesion (Una semana)
                        </option>
                      </select>
                      <button className="button buttonSearch" type="submit">
                        Aplicar sancion
                      </button>
                    </div>
                  </form>
                </div>
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
//IO

// by Tyrannuss
