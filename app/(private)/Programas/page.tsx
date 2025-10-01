"use client";
import { useState } from "react";
import styleprograms from "./programas.module.css";

export default function Page() {
  const [modo, setModo] = useState("ver");

  const handleNuevo = () => {
    setModo("nuevo");
  };

  const handleEditar = () => {
    setModo("editar");
  };

  const handleCancelar = () => {
    setModo("ver");
  };

  return (
    <section className="containerSection">
      {modo === "ver" && (
        <section className="containersection">
          <h3 className="title">PROGRAMAS</h3>
          <label className="label">ID:2</label>
          <h2>Programa</h2>
          <select>
            <option value="0"></option>
            <option value="1">ADOBE CREATIVE SUITE</option>
            <option value="2">mmmmm</option>
            <option value="3">mmmmm</option>
            <option value="4">mmmmm</option>
            <option value="5">mmmmm</option>
          </select>
          <div className="margin">
            <button className="button buttonSearch" onClick={handleEditar}>
              Editar
            </button>
            <button
              className={`button buttonSearch ${styleprograms.button}`}
              onClick={handleNuevo}
            >
              Nuevo
            </button>
          </div>
        </section>
      )}

      {modo === "editar" && (
        <section className="containersection">
          <h2 className="title">Editar Programa:</h2>
          <label className="label">ID:2</label>
          <select>
            <option value="0">Elige</option>
            <option value="1">ADOBE CREATIVE</option>
            <option value="2">.....</option>
            <option value="3">.....</option>
            <option value="4">.....</option>
            <option value="5">.....</option>
          </select>
          <div className="margin">
            <button className="button buttonSearch">Guardar</button>
            <button
              className={`button buttonCancel ${styleprograms.button}`}
              onClick={handleCancelar}
            >
              Cancelar
            </button>
          </div>
        </section>
      )}

      {modo === "nuevo" && (
        <section className="containersection">
          <h2 className="title">Nuevo Programa</h2>
          <label className="label">Programa</label>
          <input type="text" placeholder="Coloca el programa " />
          <div className="margin">
            <button className="button buttonSearch">Insertar</button>
            <button
              className={`button buttonCancel ${styleprograms.button}`}
              onClick={handleCancelar}
            >
              Cancelar
            </button>
          </div>
        </section>
      )}
    </section>
  );
}
