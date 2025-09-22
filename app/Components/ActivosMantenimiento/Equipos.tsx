"use client";
import { useState } from "react";

function Equipos() {
  const [tiempo, setTiempo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Equipo asignado con tiempo:", tiempo);
  };

  return (
    <form className="containerForm" onSubmit={handleSubmit}>
      <label className="label">Equipos disponibles</label>
      <div className="groupInput">
        <select value={tiempo} onChange={(e) => setTiempo(e.target.value)}>
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
  );
}

export default Equipos;
