"use client";
import { SetStateAction, useState } from "react";
export default function AsignacionMesas() {
  const [tiempo, setTiempo] = useState("");
  return (
    <form className="containerForm">
      <label className="label">Mesas disponibles</label>
      <div className="groupInput">
        <select value={tiempo} onChange={(e) => setTiempo(e.target.value)}>
          <option value="">-- Mesas disponibles --</option>
          <option value="15">1 </option>
          <option value="30">3 </option>
          <option value="45">4 </option>
          <option value="60">22 </option>
          <option value="90">15 </option>
          <option value="120">20 </option>
        </select>
        <button className="button buttonSearch" type="submit">
          Actualizar
        </button>
      </div>
    </form>
  );
}
