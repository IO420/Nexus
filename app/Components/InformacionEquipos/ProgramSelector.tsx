"use client";
import { useState } from "react";
import SelectAreas from "../SelectAreas";

interface DatosEquipo {
  titulo: string;
  opcion: string[];
}

// Lista de programas disponibles
const programas = [
  "3D MAX STUDIO 2014",
  "ADOBE CREATIVE SUITE",
  "ARCHICAD 20",
  "AUDACITY -win - 2.0",
  "AUTOCAD",
  "CODE-BLOCKS",
  "COREL DRAW",
  "DEV-C++",
  "EVIEWS Enterprise",
  "Google Earth",
  "INTERNERT",
  "MAPLE",
  "MATHEMATICA",
  "MATLAB",
  "Maxima",
  "miktex",
  "NETBEANS",
  "OFFICE 2016",
  "PSeint",
  "R 3.0.1",
  "R Studio",
  "SPPS Statiscs",
  "STATA 13",
  "STATGRAOHICS Centurion XVI",
];

// Mapear cada equipo a sus programas (checkboxes que deberían seleccionarse)
const caracteristicasPorEquipo: Record<string, string[]> = {
  "Equipo 1": ["3D MAX STUDIO 2014", "AUTOCAD", "MATLAB"],
  "Equipo 2": ["ADOBE CREATIVE SUITE", "COREL DRAW", "R Studio"],
  "Equipo 3": ["ARCHICAD 20", "EVIEWS Enterprise", "SPPS Statiscs"],
  "Equipo 4": ["MATHEMATICA", "MAPLE", "Maxima"],
  // Agrega más equipos según necesites
};

export default function ProgramSelector({ titulo, opcion }: DatosEquipo) {
  // Estado del equipo seleccionado
  const [equipoSeleccionado, setEquipoSeleccionado] = useState("");
  // Estado de los checkboxes (programas)
  const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>(
    programas.reduce((acc, prog) => ({ ...acc, [prog]: false }), {})
  );

  const handleChangeEquipo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const equipo = e.target.value;
    setEquipoSeleccionado(equipo);

    // Actualizar checkboxes según características del equipo
    const nuevosCheckboxes: Record<string, boolean> = {};
    programas.forEach((prog) => {
      nuevosCheckboxes[prog] =
        caracteristicasPorEquipo[equipo]?.includes(prog) || false;
    });
    setCheckboxes(nuevosCheckboxes);
  };

  // Guardar cambios (ejemplo)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Equipo:", equipoSeleccionado);
    console.log(
      "Programas seleccionados:",
      Object.keys(checkboxes).filter((p) => checkboxes[p])
    );
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>{titulo}</label>

      <select value={equipoSeleccionado} onChange={handleChangeEquipo}>
        <option value="">-- Selecciona un equipo --</option>
        {opcion.map((eq, i) => (
          <option key={i} value={eq}>
            {eq}
          </option>
        ))}
      </select>

      <div className="checkbox-grid">
        {programas.map((prog) => (
          <label key={prog}>
            <input
              type="checkbox"
              checked={checkboxes[prog]}
              onChange={() =>
                setCheckboxes({ ...checkboxes, [prog]: !checkboxes[prog] })
              }
            />
            {prog}
          </label>
        ))}
      </div>

      <button className="button buttonSearch" type="submit">
        Guardar cambios
      </button>
    </form>
  );
}
