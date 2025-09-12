"use client";

import { useState } from "react";
import styles from "./Page.module.css"; // importamos el css
import Toggle from "@/app/Components/Toggle/Toggle";
import SearchDateBetween from "@/app/Components/SearchDateBetween/SearchDateBetween";

export default function Page() {
  const [reportes] = useState([
    {
      Servicio: "Plotter",
      Total: "$1440.00",
    },
  ]);

  const [recibos] = useState([
    {
      folio_recibo: "100255",
      monto: "40.00",
      fecha_recibo: "10/10/2025",
      fecha_registro: "10/10/2025 05:32:20 pm",
      usuario: "modulo1",
    },
  ]);

  return (
    <section className="containerSection">
      <h2 className="title"> REPORTES </h2>

      <Toggle
        defaultView="1"
        options={[
          {
            key: "1",
            label: "Por recibo",
            content: (
              <>
                <div className={styles.tableContainer}>
                  <SearchDateBetween />
                  <table className={styles.machineTable}>
                    <thead>
                      <tr>
                        <th>Folio Recibo</th>
                        <th>Monto</th>
                        <th>Fecha Recibo</th>
                        <th>Fecha Registro</th>
                        <th>Usuario</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recibos.map((recibo, index) => (
                        <tr key={index}>
                          <td>{recibo.folio_recibo}</td>
                          <td>{recibo.monto}</td>
                          <td>{recibo.fecha_recibo}</td>
                          <td>{recibo.fecha_registro}</td>
                          <td>{recibo.usuario}</td>
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
            label: "Por Servicio",
            content: (
              <>
                <div className={styles.tableContainer}>
                  <SearchDateBetween />
                  <table className={styles.machineTable}>
                    <thead>
                      <tr>
                        <th>Servicio</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportes.map((reporte, index) => (
                        <tr key={index}>
                          <td>{reporte.Servicio}</td>
                          <td>{reporte.Total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
