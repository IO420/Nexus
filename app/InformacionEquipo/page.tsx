import SearchUser from "../Components/SearchUser/searchUser";
import Toggle from "../Components/Toggle/Toggle";

export default function Page() {
  return (
    <section className='containerSection'>
      <h2 className='title'> INFORMACION DE EQUIPOS </h2>

      <Toggle
        defaultView="1"
        options={[
          {
            key: "1",
            label: "Equipos",
            content: <div className='containerInput'>
              <label className='label'>Ubicacion</label>
              <input
                type='text'
                //value={user}
                //onChange={(e) => setUser(e.target.value)}
                placeholder='Coloca un número de cuenta...'
              />

              <label className='label'>Nombre</label>
              <input
                type='text'
                //value={user}
                //onChange={(e) => setUser(e.target.value)}
                placeholder='Coloca '
              />

              <label className='label'>Plataforma</label>
              <input
                type='text'
                //value={user}
                //onChange={(e) => setUser(e.target.value)}
                placeholder='Coloca '
              />

              <label className='label'>Area Ubicacion</label>
              <input
                type='text'
                //value={user}
                //onChange={(e) => setUser(e.target.value)}
                placeholder='Coloca '
              />

              <button
                className="button buttonSearch"
              >
                Nuevo
              </button>

              <button
                className="button buttonSearch"
              >
                Editar
              </button>
            </div>,
          },
          {
            key: "2",
            label: "Programa por equipo",
            content: <></>,
          },
        ]}
      />
    </section>

  );
}
//IO