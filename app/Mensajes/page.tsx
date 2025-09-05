"use client";
import { useState } from "react";
import SearchUser from "../Components/SearchUser/searchUser";
import Toggle from "../Components/Toggle/Toggle";

export default function Page() {
  const [tiempo, setTiempo] = useState(""); // <-- AQUÍ defines el estado
  return (
    <section className="containerSection">
      <h2 className="title"> Enviar mensaje </h2>

      <Toggle
        defaultView="AsigTime"
        options={[
          {
            key: "AsigTime",
            label: "Equipo",
            content: (
              <>
                <form className="containerForm">
                  <label className="label">Seleccione un equipo</label>
                  <div className="groupInput">
                    <select
                      value={tiempo}
                      onChange={(e) => setTiempo(e.target.value)}
                    >
                      <option value="">-- Seleccione un equipo--</option>
                      <option value="15">1 </option>
                      <option value="30">2 </option>
                      <option value="45">3 </option>
                      <option value="60">4 </option>
                      <option value="90">5 </option>
                      <option value="120">6 </option>
                    </select>
                  </div>
                </form>
                <form className="containerForm">
                  <label className="label">Seleccione el mensaje</label>
                  <div className="groupInput">
                    <select
                      value={tiempo}
                      onChange={(e) => setTiempo(e.target.value)}
                    >
                      <option value="">-- Seleccione el mensaje--</option>
                      <option value="15">No olvides cerrar sesión </option>
                      <option value="30">???????????????????????? </option>
                      <option value="45">¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡</option>
                      <option value="60">???????????????????????? </option>
                      <option value="90">???????????????????????? </option>
                      <option value="120">¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ </option>
                    </select>
                  </div>
                </form>
                <form className="containerForm">
                  <label className="label">Mensaje perzonalizado</label>
                  <div className="groupInput">
                    <input type="text" />
                    <button className="button buttonSearch" type="submit">
                      Mandar mensaje
                    </button>
                  </div>
                </form>
              </>
            ),
          },

          {
            key: "CancelTime",
            label: "Sala",
            content: (
              <>
                <form className="containerForm">
                  <label className="label">Seleccione un equipo</label>
                  <div className="groupInput">
                    <select
                      value={tiempo}
                      onChange={(e) => setTiempo(e.target.value)}
                    >
                      <option value="">-- Seleccione una Sala--</option>
                      <option value="15">PECERA </option>
                      <option value="30">PCNET1 </option>
                      <option value="45">PCNET2 </option>
                      <option value="60">PCNET3</option>
                      <option value="90">______ </option>
                      <option value="120">______</option>
                    </select>
                  </div>
                </form>
                <form className="containerForm">
                  <label className="label">Seleccione el mensaje</label>
                  <div className="groupInput">
                    <select
                      value={tiempo}
                      onChange={(e) => setTiempo(e.target.value)}
                    >
                      <option value="">-- Seleccione el mensaje--</option>
                      <option value="15">No olvides cerrar sesión </option>
                      <option value="30">???????????????????????? </option>
                      <option value="45">¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡</option>
                      <option value="60">???????????????????????? </option>
                      <option value="90">???????????????????????? </option>
                      <option value="120">¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ </option>
                    </select>
                  </div>
                </form>
                <form className="containerForm">
                  <label className="label">Mensaje perzonalizado</label>
                  <div className="groupInput">
                    <input type="text" />
                    <button className="button buttonSearch" type="submit">
                      Mandar mensaje
                    </button>
                  </div>
                </form>
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
//IO
