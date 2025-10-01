import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Toggle from "@/app/Components/Global/Toggle/Toggle";
import { GetStudent } from "@/app/lib/getStudent";

import "@/app/globals.css";
import CheckBox from "@/app/Components/CheckBox";

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

  if (numAcount) {
    const result = await GetStudent(parseInt(numAcount));

    if (result.error) {
    } else {
      student = result;
    }
  }

  return (
    <section className="containerSection">


      <h2 className="title"> ASIGNACION DE EQUIPOS </h2>

      <Toggle
        defaultView= "Asignar"
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
                <CheckBox />
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
//IO
