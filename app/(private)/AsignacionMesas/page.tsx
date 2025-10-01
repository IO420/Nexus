import AsignacionMesas from "@/app/Components/AsignacionMesas";
import CheckBox from "@/app/Components/CheckBox";
import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Toggle from "@/app/Components/Global/Toggle/Toggle";

export default function Page() {
  return (
    <section className="containerSection">
      <h2 className="title"> ASIGNACION DE MESAS </h2>

      <Toggle
        defaultView="Asignar"
        options={[
          {
            key: "Asignar",
            label: "Asignar mesa",
            content: (
              <>
                <SearchUser value={"3"} />
                <AsignacionMesas />
              </>
            ),
          },
          {
            key: "Tiempo",
            label: "Cancelar Tiempo",
            content: (
              <>
                <CheckBox />
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
