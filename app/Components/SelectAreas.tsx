"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SelectAreas() {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");

  useEffect(() => {
    axios
      .get("https://venus.acatlan.unam.mx/asignacionTiempo_test/area-ubicacion")
      .then((data) => {
        setAreas(data.data);
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
          <option key={index} value={area.area}>
            {area.area}
          </option>
        ))}
      </select>
    </div>
  );
}
