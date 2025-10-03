"use client";
import { useState } from "react";

// Definimos la interfaz de props
interface EnviarMensajeProps {
  titulo: string;
  opciones: string[];
}

const EnviarMensaje = ({ titulo, opciones }: EnviarMensajeProps) => {
  const [seleccion, setSeleccion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [customMsg, setCustomMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar el envío (guardar en estado global, enviar a backend, etc.)
  };

  return (
    <form className="containerForm" onSubmit={handleSubmit}>
      {/* Selección principal */}
      <label className="label">{titulo}</label>
      <div className="groupInput">
        <select
          value={seleccion}
          onChange={(e) => setSeleccion(e.target.value)}
        >
          <option value="">-- {titulo} --</option>
          {opciones.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Selección de mensaje */}
      <label className="label">Seleccione el mensaje</label>
      <div className="groupInput">
        <select value={mensaje} onChange={(e) => setMensaje(e.target.value)}>
          <option value="">-- Seleccione el mensaje --</option>
          {[
            { value: "cerrar", label: "No olvides cerrar sesión" },
            { value: "alerta1", label: "⚠️ Atención" },
            { value: "alerta2", label: "🔔 Aviso importante" },
            { value: "alerta3", label: "✅ Confirmación" },
          ].map((msg, idx) => (
            <option key={idx} value={msg.value}>
              {msg.label}
            </option>
          ))}
        </select>
        <input type="checkbox" style={{minWidth:"20px", width:"20px",maxWidth:"30px"}}/>
      </div>

      {/* Mensaje personalizado */}
      <label className="label">Mensaje personalizado</label>
      <div className="groupInput">
        <input
          type="text"
          value={customMsg}
          onChange={(e) => setCustomMsg(e.target.value)}
          placeholder="Escribe tu mensaje..."
        />
        <input type="checkbox" style={{minWidth:"20px", width:"20px",maxWidth:"30px"}}/>
      </div>


      {/* Botón de enviar */}
      <button className="button buttonSearch" type="submit" style={{marginTop:"1rem"}}>
        Mandar mensaje
      </button>
    </form>
  );
};

export default EnviarMensaje;
