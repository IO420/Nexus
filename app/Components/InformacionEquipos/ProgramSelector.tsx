"use client";
import { useEffect, useState } from "react";
import SelectAreas from "../SelectAreas";
import { url } from "inspector";
import SelectEquipo from "../SelectEquipo";
import axios from "axios";

interface DatosEquipo {
  titulo: string;
  opcion: string[];
  tipo: "equipo" | "sala"; // Nuevo prop para diferenciar
}

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

export default function ProgramSelector({ titulo, opcion, tipo }: DatosEquipo) {
  const [seleccion, setSeleccion] = useState("");
  const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>(
    programas.reduce((acc, prog) => ({ ...acc, [prog]: false }), {})
  );

  useEffect(() => {
    const response = axios.get(
      "https://venus.acatlan.unam.mx/asignacionTiempo_test/equipo"
    );
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSeleccion(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      tipo === "sala" ? "Sala:" : "Equipo:",
      seleccion,
      "\nProgramas seleccionados:",
      Object.keys(checkboxes).filter((p) => checkboxes[p])
    );
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>{titulo}</label>

      {/* 👇 Mostrar Select diferente según el tipo */}
      {tipo === "sala" ? (
        <SelectAreas url="https://venus.acatlan.unam.mx/asignacionTiempo_test/area-ubicacion" />
      ) : (
        <SelectEquipo url="https://venus.acatlan.unam.mx/asignacionTiempo_test/equipo" />
      )}

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
