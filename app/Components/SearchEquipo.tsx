export default function SearchEquipo() {
  return (
    <form className="containerForm">
      {" "}
      <label>Numero de Equipo</label>
      <div className="groupInput">
        <input type="text" placeholder="Coloca el numero del Equipo" />
        <button className="buttonSearch button">Buscar</button>
      </div>
    </form>
  );
}
