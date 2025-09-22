"use client";
import { useState } from "react";

function Areas() {
  const [tiempo, setTiempo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Equipo asignado con tiempo:", tiempo);
  };

  return (
    <form className="containerForm" onSubmit={handleSubmit}>
      <label className="label">Áreas disponibles</label>
      <div className="groupInput">
        <select value={tiempo} onChange={(e) => setTiempo(e.target.value)}>
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
  );
}
export default Areas;
