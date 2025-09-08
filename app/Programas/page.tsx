import SearchUser from "../Components/SearchUser/searchUser";
import "./programas.css";

export default function Page() {
  return (
    <section className="containersection">
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

        <button className="button buttonSearch">Cancelar</button>
      </div>
    </section>
  );
}
//IO
