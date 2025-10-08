"use client";
import { useEffect, useState } from "react";

export default function SelectAreas() {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");

  useEffect(() => {
    fetch("https://venus.acatlan.unam.mx/asignacionTiempo_test/area-ubicacion")
      .then((response) => response.json())
      .then((data) => {
        setAreas(data);
      })
      .catch((error) => {
        console.error("Error al traer las áreas:", error);
      });
  }, []);

  return (
    <div>
      <label htmlFor="areaSelect">Selecciona un área:</label>
      <select
        id="areaSelect"
        value={selectedArea}
        onChange={(e) => setSelectedArea(e.target.value)}
      >
        <option value="">-- Selecciona una opción --</option>
        {areas.map((area: any, index) => (
          <option key={index} value={area.id_area}>
            {area.id_area}
          </option>
        ))}
      </select>
    </div>
  );
}
