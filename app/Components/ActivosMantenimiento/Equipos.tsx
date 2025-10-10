"use client";
import { useState } from "react";

function Equipos() {
  const [cuenta, setCuenta] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleBuscar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cuenta) {
      setMensaje("Ingresa un número de cuenta antes de buscar");
      return;
    }
    setMensaje(`Buscando información del No. de cuenta: ${cuenta}`);
  };

  const handleAsignar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!tiempo) {
      setMensaje("Selecciona un equipo antes de asignar");
      return;
    }
    setMensaje(`Equipo asignado con tiempo: ${tiempo} minutos`);
  };

  return (
    <div className="containerForm">
      {/* Formulario Buscar */}
      <form onSubmit={handleBuscar} className="groupInput">
        <label className="label">No. de cuenta:</label>
        <input
          type="text"
          value={cuenta}
          onChange={(e) => setCuenta(e.target.value)}
          placeholder="Ingresa el número de cuenta"
        />
        <button className="button buttonSearch" type="submit">
          Buscar
        </button>
      </form>

      {/* Formulario Asignar */}
      <form
        onSubmit={handleAsignar}
        className="groupInput"
        style={{ marginTop: "20px" }}
      >
        <label className="label">Equipos disponibles:</label>
        <select value={tiempo} onChange={(e) => setTiempo(e.target.value)}>
          <option value="">-- Selecciona un equipo --</option>
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
      </form>

      {mensaje && <p style={{ marginTop: "20px" }}>{mensaje}</p>}
    </div>
  );
}

export default Equipos;
