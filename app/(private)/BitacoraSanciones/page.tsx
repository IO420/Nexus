"use client";

import Toggle from "@/app/Components/Toggle/Toggle";
import Sanciones from "@/app/Components/BitacoraSanciones/Sanciones";
import BitacoraMesas from "@/app/Components/BitacoraSanciones/BitacoraMesas";
import BitacoraAlumno from "@/app/Components/BitacoraSanciones/BitacoraAlumno";
import BitacoraEquipo from "@/app/Components/BitacoraSanciones/BitacoraEquipo";

export default function Page() {
  return (
    <section className="containerSection">
      <h2 className="title"> BITACORA Y SANCIONES </h2>

      <Toggle
        defaultView="1"
        options={[
          {
            key: "1",
            label: "Bitacora equipo",
            content: (
              <>
                <BitacoraEquipo />
              </>
            ),
          },
          {
            key: "2",
            label: "Bitacora alumno",
            content: (
              <>
                <BitacoraAlumno />
              </>
            ),
          },
          {
            key: "3",
            label: "Bitacora mesas",
            content: (
              <>
                <BitacoraMesas />
              </>
            ),
          },
          {
            key: "4",
            label: "Sanciones",
            content: (
              <>
                <Sanciones />
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
