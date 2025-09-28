"use client";
import axios from "axios";
import { envConfig } from "@/app/lib/config";
import { useState } from "react";

interface Data {
  nombre_equipo: string;
  id_equipo: number;
  id_plataforma: number;
  id_area_ubicacion: number;
}

export default function Equipos() {
  const [Equipo, setEquipo] = useState("");
  const [Data, setData] = useState<Data | any>();

  const handleSubmit = async () => {
    const response = await axios.get(
      `${envConfig.apiUrl}/InformacionEquipo/${Equipo}`
    );

    if (!response) {
      return;
    }

    setData(response);
  };

  return (
    <form className="containerForm">
      <div className="groupInput">
        <input
          placeholder="Numero de Equipo a buscar..."
          value={Equipo}
          onChange={(e) => {
            setEquipo(e.target.value);
          }}
        />

        <button className="button buttonSearch" onClick={handleSubmit}>
          Buscar
        </button>
      </div>

      {Data && (
        <div>
          <label className="label">Ubicacion</label>
          <input
            type="text"
            placeholder="Coloca"
            value={Data.id_area_ubicacion}
          />

          <label className="label">Nombre</label>
          <input type="text" placeholder="Coloca " value={Data.nombre_equipo} />

          <label className="label">Plataforma</label>
          <select>
            <option value="0">Elige</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">6</option>
          </select>

          <label className="label">Area Ubicacion</label>
          <select>
            <option value="0">Elige</option>
            <option value="1">mmmmm</option>
            <option value="2">mmmmm</option>
            <option value="3">mmmmm</option>
            <option value="4">mmmmm</option>
            <option value="5">mmmmm</option>
          </select>
          <div className="containerButton">
            <button className="button buttonSearch">Nuevo</button>
            <button className="button buttonSearch">Editar</button>
          </div>
        </div>
      )}
    </form>
  );
}
