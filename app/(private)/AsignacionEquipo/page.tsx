import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Toggle from "@/app/Components/Global/Toggle/Toggle";
import { GetStudent } from "@/app/lib/getStudent";

import CheckBoxEquipo from "@/app/Components/CheckBoxEquipo";
import Information from "@/app/Components/Global/Information/information";
import ShowError from "@/app/Components/Global/ShowError";

import "@/app/globals.css";

export default async function Page(props: {
  searchParams?: Promise<{
    key?:string
    numAcount?: string;
    machine?: string;
  }>;
}) {
  const params = await props.searchParams;
  const key = params?.key && params.key;
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
        defaultView={key}
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
                    />
                    <Information
                      inscrito={"WINDOWS"}
                      tiempo={"9minutos"}
                      confirmo={"si/no"}
                    />
                    {/* <div className="containerForm">
                      <label style={{ marginTop: "1rem" }}>
                        Seleccionar tiempo
                      </label>
                      <select></select>
                      <label style={{ marginTop: "1rem" }}>
                        Seleccione un equipo
                      </label>
                      <div className="groupInput">
                        <select></select>
                        <button className="button buttonSearch">
                          Asignar Equipo
                        </button>
                      </div>
                    </div> */}
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
