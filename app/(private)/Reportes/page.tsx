"use client";

import styles from "./Page.module.css";
import Toggle from "@/app/Components/Global/Toggle/Toggle";
import SearchDateBetween from "@/app/Components/SearchDateBetween/SearchDateBetween";
import Porservicio from "@/app/Components/Reportes/porServicio";
import PorServicios from "@/app/Components/Reportes/porServicio";
import PorRecibos from "@/app/Components/Reportes/porRecibo";

export default function Page() {
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
                <SearchDateBetween />
                <PorRecibos />
              </>
            ),
          },

          {
            key: "2",
            label: "Por Servicio",
            content: (
              <>
                <SearchDateBetween />
                <PorServicios />
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
//IO
