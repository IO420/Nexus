"use client";
import { useState } from "react";
import SearchUser from "../Components/SearchUser/searchUser";
import Toggle from "../Components/Toggle/Toggle";
// Assuming you will create this new component

export default function Page() {
  const [tiempo, setTiempo] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <section className="containerSection">
      <h2 className="title"> ASIGNACION DE EQUIPOS </h2>

      <div className="mainContainer">
        {/* Toggle component for 'Asignar' and 'Liberar' tabs */}
        <Toggle
          defaultView="Asignar"
          options={[
            {
              key: "Asignar",
              label: "Asignar tiempo",
              content: (
                <>
                  <SearchUser />

                  <form className="containerForm"></form>
                </>
              ),
            },
            {
              key: "Liberar",
              label: "Canceñlar tiempo",
              content: (
                <>
                  <div className="checkbox-grid">
                    {" "}
                    <label>
                      <input type="checkbox" /> Mesa
                    </label>
                    <label>
                      <input type="checkbox" /> Cuenta
                    </label>
                  </div>
                  <SearchUser />
                </>
              ),
            },
          ]}
        />

        {/* This is the new component to display available tables */}
      </div>
    </section>
  );
}
