
import ClearParams from "@/app/Components/Global/ClearParams/ClearParams";
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
                <ClearParams paramsToClear={["numAcount"]} />

                <SearchUser key={2} value={"0"} />

              </>
            ),
          },
          {
            key: "Tiempo",
            label: "Cancelar Tiempo",
            content: (
              <>
                <ClearParams paramsToClear={["numAcount"]} />

              </>
            ),
          },
        ]}
      />
    </section>
  );
}
