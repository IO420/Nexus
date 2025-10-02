import AlertBox from "@/app/Components/Global/AlertBox/AlertBox";
import ClearParams from "@/app/Components/Global/ClearParams/ClearParams";
import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Toggle from "@/app/Components/Global/Toggle/Toggle";
import { GetStudent } from "@/app/lib/getStudent";

import "@/app/globals.css";
import SearchBoxEquipo from "@/app/Components/SearchEquipo";
import CheckBox from "@/app/Components/CheckBox";
import CheckBoxEquipo from "@/app/Components/CheckBoxEquipo";
import Information from "@/app/Components/Global/Information/information";

export default async function Page(props: {
  searchParams?: Promise<{
    numAcount?: string;
    machine?: string;
    success?: string;
    error?: string;
  }>;
}) {
  const params = await props.searchParams;
  const numAcount = params?.numAcount ? params.numAcount : null;
  const machine = params?.machine ? params.machine : null;
  const showSuccess = params?.success ? params.success : null;
  const showError = params?.error ? params.error : null;

  let student: any = null;

  if (numAcount) {
    const result = await GetStudent(parseInt(numAcount));

    if (result.error) {
    } else {
      student = result;
    }
  }

  return (
    <section className="containerSection">
      {showError && (
        <>
          <AlertBox key={Date.now()} message={showError} type="error" />
          <ClearParams paramsToClear={["error"]} />
        </>
      )}

      {showSuccess && (
        <>
          <AlertBox key={Date.now()} message={showSuccess} type="success" />
          <ClearParams paramsToClear={["success"]} />
        </>
      )}

      <h2 className="title"> ASIGNACION DE EQUIPOS </h2>

      <Toggle
        defaultView="Asignar"
        options={[
          {
            key: "Asignar",
            label: "Asignar tiempo",
            content: (
              <>
                <SearchUser value={numAcount} />

                <Information
                  numerocuenta={"12345"}
                  nombre={"Carlos"}
                  inscrito={"WINDOWS"}
                  tiempo={"9minutos"}
                  confirmo={"si/no"}
                />
                <label>Seleccionar tiempo</label>
                <select name="" id=""></select>
                <label>Seleccione un equipo</label>
                <select name="" id=""></select>
                <button className="button buttonSearch">Asignar Equipo</button>
              </>
            ),
          },
          {
            key: "Liberar",
            label: "Cancelar tiempo",
            content: (
              <>
                <CheckBoxEquipo />
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
//IO
