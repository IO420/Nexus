"use client";
export default function SearchEquipo() {
  return (
    <form className="containerForm">
      <label>Numero de equipo</label>
      <div className="groupInput">
        <input type="text" placeholder="Coloca el numero de equipo"/>
        <button className="button buttonSearch">Buscar</button>
      </div>
    </form>
  );
}
