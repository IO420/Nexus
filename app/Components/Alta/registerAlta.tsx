"use client";
import apiClient from "@/app/lib/apiClient";

import { useEffect, useState } from "react";

export default function RegisterAlta() {
  const [listMajor, setListMajor] = useState([]);
  const [major, setMajor] = useState("");

  useEffect(() => {
    const fetchCarreras = async () => {
      try {
        const response = await apiClient.get("/carrera");

        const sortedCarreras = response.data.sort((a: any, b: any) =>
          a.carrera.localeCompare(b.carrera)
        );

        setListMajor(sortedCarreras);
      } catch (error) {
        console.error("Error al obtener carreras:", error);
      }
    };
    fetchCarreras();
  }, []);

  return (
    <form className="containerAlta gap gridAlta">
      <div className="containerForm">
        <label className="label">No.Cuenta</label>
        <input
          type="text"
          //value={user}
          //onChange={(e) => setUser(e.target.value)}
          placeholder="Coloca un número de cuenta..."
        />
      </div>

      <div className="containerForm">
        <label className="label">Nombre</label>
        <input
          type="text"
          //value={user}
          //onChange={(e) => setUser(e.target.value)}
          placeholder="Coloca el nombre"
        />
      </div>

      <div className="containerForm">
        <label className="label">Apellido Paterno</label>
        <input
          type="text"
          //value={user}
          //onChange={(e) => setUser(e.target.value)}
          placeholder="Coloca el apellido paterno"
        />
      </div>

      <div className="containerForm">
        <label className="label">Apellido Materno</label>
        <input
          type="text"
          //value={user}
          //onChange={(e) => setUser(e.target.value)}
          placeholder="Coloca el apellido materno"
        />
      </div>

      <div className="containerForm">
        <label className="label">Fecha Nacimiento</label>
        <input
          type="text"
          //value={user}
          //onChange={(e) => setUser(e.target.value)}
          placeholder="Coloca fecha empezando por año"
        />
      </div>

      <div className="containerForm">
        <label className="label">Carrera</label>
        <select value={major} onChange={(e) => setMajor(e.target.value)}>
          <option value="">Selecciona la carrera</option>
          {listMajor.map((carrera: any, index) => (
            <option key={index} value={carrera.id_carrera}>
              {carrera.carrera}
            </option>
          ))}
        </select>
      </div>

      <button className="button buttonSearch">registrar</button>
    </form>
  );
}
