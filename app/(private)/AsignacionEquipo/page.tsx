import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Toggle from "@/app/Components/Global/Toggle/Toggle";
import { GetStudent } from "@/app/lib/getStudent";

import CheckBoxEquipo from "@/app/Components/CheckBoxEquipo";
import Information from "@/app/Components/Global/Information/information";

import "@/app/globals.css";
import ShowError from "@/app/Components/Global/ShowError";

export default async function Page(props: {
  searchParams?: Promise<{
    numAcount?: string;
    machine?: string;
  }>;
}) {
  const params = await props.searchParams;
  const numAcount = params?.numAcount ? params.numAcount : null;
  const machine = params?.machine ? params.machine : null;

  let student: any = null;
  let errorMessage = "";

  if (numAcount) {
    const result = await GetStudent(parseInt(numAcount));

    if (result.error) {
      errorMessage = `${result.error}`;
    } else {
      student = result as Student;
    }
  }

  return (
    <section className="containerSection">
      {errorMessage && <ShowError key={Date.now()} message={errorMessage} />}

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

                {student && (
                  <>
                    <Information
                      numerocuenta={student.id_cuenta}
                      nombre={student.nombre}
                      inscrito={"WINDOWS"}
                      tiempo={"9minutos"}
                      confirmo={"si/no"}
                    />
                    <label>Seleccionar tiempo</label>
                    <select name="" id=""></select>
                    <label>Seleccione un equipo</label>
                    <select name="" id=""></select>
                    <button className="button buttonSearch">
                      Asignar Equipo
                    </button>
                  </>
                )}
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
