import AlertBox from "@/app/Components/Global/AlertBox/AlertBox";
import ClearParams from "@/app/Components/Global/ClearParams/ClearParams";
import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Toggle from "@/app/Components/Global/Toggle/Toggle";
import { GetStudent } from "@/app/lib/getStudent";

import '@/app/globals.css'

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

                {student && <h1>No hay records disponibles</h1>}
              </>
            ),
          },
          {
            key: "Liberar",
            label: "Cancelar tiempo",
            content: (
              <>
                <div className="checkbox-grid">
                  <label>
                    <input type="checkbox" /> Equipo
                  </label>
                  <label>
                    <input type="checkbox" /> Cuenta
                  </label>
                </div>

                <SearchUser value={numAcount} />
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
//IO
