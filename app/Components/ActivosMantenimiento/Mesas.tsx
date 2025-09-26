"use client";
import { useState } from "react";

function Mesas() {
  const [mesa, setMesa] = useState(""); // Mesa seleccionada
  const [mantenimiento, setMantenimiento] = useState(false); // Checkbox Mantenimiento
  const [mensaje, setMensaje] = useState(""); // Mensaje dinámico

  const handleConfirmar = (e: React.FormEvent) => {
    e.preventDefault();

    if (!mesa) {
      setMensaje("Selecciona una mesa antes de confirmar");
      return;
    }

    const estado = mantenimiento ? "en mantenimiento" : "disponible";
    setMensaje(`Mesa ${mesa} confirmada como ${estado}`);

    console.log({
      mesa,
      mantenimiento,
    });
  };

  return (
    <form className="containerForm" onSubmit={handleConfirmar}>
      <label className="label">Mesas disponibles:</label>
      <div className="groupInput">
        {/* Select de mesas */}
        <select value={mesa} onChange={(e) => setMesa(e.target.value)}>
          <option value="">-- Mesas disponibles --</option>
          <option value="1">1</option>
          <option value="4">4</option>
          <option value="7">7</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>

        {/* Checkbox Mantenimiento */}
        <div className="checkbox" style={{ marginTop: "10px" }}>
          <label>
            <input
              type="checkbox"
              checked={mantenimiento}
              onChange={(e) => setMantenimiento(e.target.checked)}
            />
            Mantenimiento
          </label>
        </div>

        {/* Botón Confirmar */}
        <button
          className="button buttonSearch"
          type="submit"
          style={{ marginTop: "15px" }}
        >
          Confirmar
        </button>
      </div>

      {/* Mensaje dinámico */}
      {mensaje && <p style={{ marginTop: "20px" }}>{mensaje}</p>}
    </form>
  );
}

export default Mesas;
