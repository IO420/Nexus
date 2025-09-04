'use client'
import { useState } from "react";
import SearchUser from "../Components/SearchUser/searchUser";
import Toggle from "../Components/Toggle/Toggle";

export default function Page() {
  const [tiempo, setTiempo] = useState("");

  return (
    <section className='containerSection'>
      <h2 className='title'> ASIGNACION DE MESAS </h2>

      <Toggle
        defaultView="AsigTime"
        options={[
          {
            key: "AsigTime",
            label: "Asignar mesa",
            content: <>
              <SearchUser />

              <form className="containerForm">
                <label className="label">Tiempo</label>

                <div className="groupInput">
                  <select
                    value={tiempo}
                    onChange={(e) => setTiempo(e.target.value)}
                  >
                    <option value="">-- Selecciona un tiempo --</option>
                    <option value="15">15 minutos</option>
                    <option value="30">30 minutos</option>
                    <option value="45">45 minutos</option>
                    <option value="60">1 hora</option>
                    <option value="90">1 hora 30 minutos</option>
                    <option value="120">2 horas</option>
                  </select>
                  <button
                    className='button buttonSearch'
                    type='submit'
                  >Asignar
                  </button>
                </div>
              </form>
            </>,
          },
          {
            key: "Liberarmesa",
            label: "Liberar mesa",
            content: <></>,
          },
        ]}
      />

    </section>

  );
}
//IO