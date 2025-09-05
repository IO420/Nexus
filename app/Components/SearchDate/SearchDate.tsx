"use client";
import { useState } from "react";

function SearchDate() {
  const [date, setDate] = useState("");

  return (
    <>
      <form className="containerForm">
        <label className="label">Fecha</label>
        <div className="groupInput">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Selecciona una fecha..."
          />
          <button className="button buttonSearch" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchDate;

//By Tyrannuss
