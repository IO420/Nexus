"use client";
import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Toggle from "@/app/Components/Global/Toggle/Toggle";
import { useState } from "react";

export default function Page() {
  const [tiempo, setTiempo] = useState("");

  return (
    <section className="containerSection">
      <h2 className="title"> ASIGNACION DE MESAS </h2>

      <Toggle
        defaultView="Asignar"
        options={[
          {
            key: "Asignar",
            label: "Asignar mesa",
            content: (
              <>
                <SearchUser value={"3"} />

                <form className="containerForm">
                  <label className="label">Mesas disponibles</label>
                  <div className="groupInput">
                    <select
                      value={tiempo}
                      onChange={(e) => setTiempo(e.target.value)}
                    >
                      <option value="">-- Mesas disponibles --</option>
                      <option value="15">1 </option>
                      <option value="30">3 </option>
                      <option value="45">4 </option>
                      <option value="60">22 </option>
                      <option value="90">15 </option>
                      <option value="120">20 </option>
                    </select>
                    <button className="button buttonSearch" type="submit">
                      Asignar
                    </button>
                  </div>
                </form>
              </>
            ),
          },
          {
            key: "Liberar",
            label: "Liberar mesa",
            content: (
              <>
                <div className="checkbox-grid">
                  <label>
                    <input type="checkbox" /> Mesa
                  </label>
                  <label>
                    <input type="checkbox" /> Cuenta
                  </label>
                </div>
                <SearchUser value={"3"} />
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
