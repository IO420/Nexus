"use client";
import SearchUser from "@/app/Components/SearchUser/searchUser";
import Toggle from "@/app/Components/Toggle/Toggle";
import { useState } from "react";

export default function Page() {
  const [tiempo, setTiempo] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <section className="containerSection">
      <h2 className="title">EQUIPOS ACTIVOS Y EN MANTENIMIENTO</h2>

      <div className="mainContainer">
        <Toggle
          defaultView="Equipos"
          options={[
            {
              key: "Equipos",
              label: "Equipos",
              content: (
                <>
                  <SearchUser />

                  <form className="containerForm">
                    <label className="label">Equipos disponibles</label>
                    <div className="groupInput">
                      <select
                        value={tiempo}
                        onChange={(e) => setTiempo(e.target.value)}
                      >
                        <option value="">-- Equipos disponibles --</option>
                        <option value="15">1</option>
                        <option value="30">2</option>
                        <option value="45">3</option>
                        <option value="60">4</option>
                        <option value="90">5</option>
                        <option value="120">6</option>
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
              key: "Areas",
              label: "Areas",
              content: (
                <>
                  <form className="containerForm">
                    <label className="label">Áreas disponibles</label>
                    <div className="groupInput">
                      <select
                        value={tiempo}
                        onChange={(e) => setTiempo(e.target.value)}
                      >
                        <option value="">-- Áreas disponibles --</option>
                        <option value="15">PECERA</option>
                        <option value="30">JAULA</option>
                        <option value="45">HUACAL</option>
                        <option value="60">PCNET1</option>
                        <option value="90">PCNET2</option>
                      </select>

                      <div className="checkbox-grid">
                        <label>
                          <input type="checkbox" />
                          Activo
                        </label>
                        <label>
                          <input type="checkbox" />
                          Mantenimiento
                        </label>
                      </div>

                      <button className="button buttonSearch" type="submit">
                        Actualizar
                      </button>
                    </div>
                  </form>
                </>
              ),
            },
            {
              key: "Mesas",
              label: "Liberar mesa",
              content: (
                <>
                  <form className="containerForm">
                    <label className="label">Mesas disponibles</label>
                    <div className="groupInput">
                      <select
                        value={tiempo}
                        onChange={(e) => setTiempo(e.target.value)}
                      >
                        <option value="">-- Mesas disponibles --</option>
                        <option value="15">1</option>
                        <option value="30">4</option>
                        <option value="45">7</option>
                        <option value="60">10</option>
                        <option value="90">15</option>
                      </select>

                      <div className="checkbox">
                          <input type="checkbox" />
                        <label>
                          Mantenimiento
                        </label>
                      </div>

                      <button className="button buttonSearch" type="submit">
                        Confirmar
                      </button>
                    </div>
                  </form>
                </>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
