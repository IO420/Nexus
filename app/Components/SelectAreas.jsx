"use clien";
import React, { useEffect, useState } from "react";

export default function SelectAreas() {
  const [areas, setAreas] = useState([]); // aquí guardaremos los datos del servidor
  const [selectedArea, setSelectedArea] = useState("");

  // useEffect se ejecuta una vez al montar el componente
  useEffect(() => {
    fetch("https://venus.acatlan.unam.mx/asignacionTiempo_test/area-ubicacion")
      .then((response) => response.json())
      .then((data) => {
        console.log("Áreas obtenidas:", data);
        setAreas(data);
      })
      .catch((error) => {
        console.error("Error al traer las áreas:", error);
      });
  }, []);

  const handleChange = (e) => {
    setSelectedArea(e.target.value);
    console.log("Área seleccionada:", e.target.value);
  };

  return (
    <div>
      <label htmlFor="areaSelect">Selecciona un área:</label>
      <select id="areaSelect" value={selectedArea} onChange={handleChange}>
        <option value="">-- Selecciona una opción --</option>
        {areas.map((area) => (
          <option key={area.id_area} value={area.id_area}>
            {area.nombre_area}
          </option>
        ))}
      </select>
    </div>
  );
}
