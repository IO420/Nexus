import AsignacionMesas from "@/app/Components/AsignacionMesas";
import CheckBox from "@/app/Components/CheckBox";
import Information from "@/app/Components/Global/Information/information";
import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import ShowError from "@/app/Components/Global/ShowError";
import Toggle from "@/app/Components/Global/Toggle/Toggle";
import { GetStudent } from "@/app/lib/getStudent";

export default async function Page(props: {
  searchParams?: Promise<{
    key: string;
    numAcount: string;
  }>;
}) {
  const params = await props.searchParams;
  const key = params?.key && params.key;
  const numAcount = params?.numAcount ? params.numAcount : null;

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
      <h2 className="title"> ASIGNACION DE MESAS </h2>

      <Toggle
        defaultView="Asignar"
        options={[
          {
            key: "Asignar",
            label: "Asignar mesa",
            content: (
              <>
                <SearchUser value={numAcount} />
                {student && (
                  <>
                    <Information
                      cuenta={student.id_cuenta}
                      nombre={student.nombre}
                    />
                  {/* <div
                    className="containerForm"
                    style={{ margin: "1rem 0" }}
                  >
                    <label>Tiempo</label>
                    <div className="groupInput">
                      <select name="" id="">
                        <option value="1">Seleciona el tiempo </option>{" "}
                      </select>
                      <button className="button buttonSearch">Asignar</button>
                    </div>
                  </div> */}
                    <AsignacionMesas />
                  </>
                )}
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
