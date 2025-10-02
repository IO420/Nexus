import AsignacionMesas from "@/app/Components/AsignacionMesas";
import CheckBox from "@/app/Components/CheckBox";
import Information from "@/app/Components/Global/Information/information";
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
                <Information cuenta={"12345"} nombre={"Alberto"} />
                <label>Tiempo</label>
                <select name="" id="">
                  <option value="1">Seleciona el tiempo </option>{" "}
                </select>
                <button className="button buttonSearch">Asignar</button>
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
