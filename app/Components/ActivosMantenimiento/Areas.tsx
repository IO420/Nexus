"use client";
import { useState } from "react";

export default function Areas() {
  const [area, setArea] = useState(""); // Área seleccionada
  const [activo, setActivo] = useState(false); // Checkbox Activo
  const [mantenimiento, setMantenimiento] = useState(false); // Checkbox Mantenimiento
  const [mensaje, setMensaje] = useState(""); // Mensaje dinámico

  const handleActualizar = (e: React.FormEvent) => {
    e.preventDefault();

    if (!area) {
      setMensaje("Selecciona un área antes de actualizar");
      return;
    }

    // Crear mensaje dinámico
    const estado = [];
    if (activo) estado.push("Activo");
    if (mantenimiento) estado.push("Mantenimiento");
    const estadosSeleccionados = estado.length
      ? estado.join(" y ")
      : "Sin estado";

    setMensaje(`Área ${area} actualizada con estado: ${estadosSeleccionados}`);

    // Aquí puedes enviar los datos al backend si quieres
    console.log({
      area,
      activo,
      mantenimiento,
    });
  };

  return (
    <form className="containerForm" onSubmit={handleActualizar}>
      <label className="label">Áreas disponibles:</label>
      <div className="groupInput">
        {/* Select de áreas */}
        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="">-- Áreas disponibles --</option>
          <option value="PECERA">PECERA</option>
          <option value="JAULA">JAULA</option>
          <option value="HUACAL">HUACAL</option>
          <option value="PCNET1">PCNET1</option>
          <option value="PCNET2">PCNET2</option>
        </select>

        {/* Checkboxes */}
        <div className="checkbox" style={{ marginTop: "10px" }}>
          <label style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              checked={activo}
              onChange={(e) => setActivo(e.target.checked)}
            />
            Activo
          </label>
          <label>
            <input
              type="checkbox"
              checked={mantenimiento}
              onChange={(e) => setMantenimiento(e.target.checked)}
            />
            Mantenimiento
          </label>
        </div>

        {/* Botón Actualizar */}
        <button
          className="button buttonSearch"
          type="submit"
          style={{ marginTop: "15px" }}
        >
          Actualizar
        </button>
      </div>

      {/* Mensaje dinámico */}
      {mensaje && <p style={{ marginTop: "20px" }}>{mensaje}</p>}
    </form>
  );
}
