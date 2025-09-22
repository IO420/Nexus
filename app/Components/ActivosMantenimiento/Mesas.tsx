"use client";
import { useState } from "react";

function Mesas() {
  const [tiempo, setTiempo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Equipo asignado con tiempo:", tiempo);
  };

  return (
    <form className="containerForm" onSubmit={handleSubmit}>
      <label className="label">Mesas disponibles</label>
      <div className="groupInput">
        <select value={tiempo} onChange={(e) => setTiempo(e.target.value)}>
          <option value="">-- Mesas disponibles --</option>
          <option value="15">1</option>
          <option value="30">4</option>
          <option value="45">7</option>
          <option value="60">10</option>
          <option value="90">15</option>
        </select>

        <div className="checkbox">
          <input type="checkbox" />
          <label>Mantenimiento</label>
        </div>

        <button className="button buttonSearch" type="submit">
          Confirmar
        </button>
      </div>
    </form>
  );
}
export default Mesas;
