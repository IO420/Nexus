"use client";
import { useState } from "react";
import SearchUser from "../../Components/SearchUser/searchUser";
import styleprograms from "./programas.module.css";

export default function Page() {
  const [Editar, setEditar] = useState(true);
  const [Nuevo, setNuevo] = useState(true);

  const handleNuevo = () => {
    setNuevo(false);
  };
  const handleEditar = () => {
    setEditar(false);
  };

  return (
    <>
      {Editar ? (
        <section className="containersection">
          <h3 className="title"> ID </h3>
          <label className="label">Programas</label>
          <input
            type="text"
            //value={user}
            //onChange={(e) => setUser(e.target.value)}
            placeholder="Coloca "
          />
          <div className="margin">
            <button className="button buttonSearch" onClick={handleEditar}>
              Editar
            </button>
            <button
              className={`button buttonSearch ${styleprograms.button}`}
              onClick={handleNuevo}
            >
              Nuevo
            </button>
          </div>
        </section>
      ) : (
        <section className="containersection">
          <div>ID</div>
          <h2 className="title"> PROGRAMAS </h2>
          <label className="label">Programas</label>
          <input
            type="text"
            //value={user}
            //onChange={(e) => setUser(e.target.value)}
            placeholder="Coloca "
          />
          <div className="margin">
            <button className="button buttonSearch">Insertar</button>

            <button className={`button buttonSearch ${styleprograms.button}`}>
              Cancelar
            </button>
          </div>
        </section>
      )}

      {!Nuevo && (
        <section className="containersection">
          <label className="label">Programas</label>
          <input
            type="text"
            //value={user}
            //onChange={(e) => setUser(e.target.value)}
            placeholder="Coloca "
          />
          <div className="margin">
            <button className="button buttonSearch">Insertar</button>

            <button className={`button buttonSearch ${styleprograms.button}`}>
              Cancelar
            </button>
          </div>
        </section>
      )}
    </>
  );
}
