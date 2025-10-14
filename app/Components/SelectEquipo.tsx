"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface proms {
  url: string;
}

export default function SelectEquipo(props: proms) {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((data) => setAreas(data.data))
      .catch((error) => console.error("Error al traer las áreas:", error));
  }, []);

  return (
    <div>
      <label htmlFor="areaSelect">Selecciona un equipo:</label>
      <select
        id="areaSelect"
        value={selectedArea}
        onChange={(e) => setSelectedArea(e.target.value)}
      >
        <option value="">-- Selecciona una opción --</option>
        {areas.map((area: any, index) => (
          <option key={index} value={area.nombre_equipo}>
            {area.nombre_equipo}
          </option>
        ))}
      </select>
    </div>
  );
}
