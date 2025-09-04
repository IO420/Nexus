import SearchUser from "../Components/SearchUser/searchUser";
import Toggle from "../Components/Toggle/Toggle";

export default function Page() {
  return (
    <section className='containerSection'>
      <h2 className='title'> ASIGNACION DE EQUIPOS </h2>

      <Toggle
        defaultView="AsigTime"
        options={[
          {
            key: "AsigTime",
            label: "Asignar tiempo",
            content: <SearchUser />,
          },
          {
            key: "CancelTime",
            label: "Cancelar tiempo",
            content:<></>,
          },
        ]}
      />
    </section>

  );
}
//IO