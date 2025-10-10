export default function SearchTable() {
  return (
    <form className="containerForm">
        <label>Numero de Mesa</label>
        <div className="groupInput">
          <input type="text" placeholder="Coloca el numero de Mesa" />
          <button className="buttonSearch button">Buscar</button>
        </div>
    </form>
  );
}
