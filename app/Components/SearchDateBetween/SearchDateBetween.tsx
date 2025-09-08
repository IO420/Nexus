"use client";
import { Margarine } from "next/font/google";
import { useState } from "react";

function SearchDateBetween() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Fecha inicio:", startDate);
    console.log("Fecha fin:", endDate);
    // Aquí puedes hacer la lógica para buscar entre fechas
  };

  return (
    <>
      <form className="containerForm" onSubmit={handleSubmit}>
        <label className="label">Desde</label>
        <div className="groupInput">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Fecha inicio"
          />
        </div>
        <label className="label">Hasta</label>
        <div className="groupInput">
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="Fecha fin"
          />
        </div>
        <button
          className="button buttonSearch "
          type="submit"
          style={{ margin: "1rem 0 " }}
        >
          Buscar
        </button>
      </form>
    </>
  );
}

export default SearchDateBetween;

// By Tyrannuss
