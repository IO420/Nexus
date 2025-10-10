import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Information from "@/app/Components/Global/Information/information";
import Receipt from "@/app/Components/Receipt/Receipt";
import Selection from "@/app/Components/Selection/Selection";
import ShowError from "@/app/Components/Global/ShowError";
import { GetStudent } from "@/app/lib/getStudent";

import "./inscripcion.css";
import Table from "@/app/Components/Global/table";

export default async function Page(props: {
  searchParams?: Promise<{
    numAcount: string;
  }>;
}) {
  const params = await props.searchParams;
  const numAcount = params?.numAcount ? params.numAcount : null;

  let student: any = null;
  let errorMessage = "";
  if (numAcount) {
    const result = await GetStudent(parseInt(numAcount));

    if (result.error) {
      errorMessage = `${result.error}`;
    } else {
      student = result;
    }
  }

  const headers = ["Inscrito", "Tiempo", "Confirmó"];
  const data = [
    {
      Inscrito: "WINDOWS",
      Tiempo: "9 minutos",
      Confirmó: "si",
    },
    {
      Inscrito: "WINDOWS",
      Tiempo: "9 minutos",
      Confirmó: "si/no",
    },
    {
      Inscrito: "WINDOWS",
      Tiempo: "9 minutos",
      Confirmó: "si/no",
    },
  ];

  return (
    <section className="containerSection">
      {errorMessage && <ShowError key={Date.now()} message={errorMessage} />}

      <h2 className="title"> INSCRIPCIÓN </h2>

      <div className="containeInformation">
        <div className="firstPartInformation">
          <SearchUser value={numAcount} />

          {student && (
            <Information
              NoCuenta={student.id_cuenta}
              Nombre={student.nombre}
              Carrera={student.carrera.carrera}
              Credito={student.credito}
            />
          )}
        </div>

        {student && <Table headers={headers} data={data} />}
      </div>

      {student && (
        <>
          <section className="inscripcion">
            <Selection />

            <select
              style={{
                marginBottom: "1rem",
                maxWidth: "100px",
                minWidth: "100px",
              }}
            >
              <option value="0">con pago</option>
              <option value="1">sin pago</option>
            </select>

            <Receipt numAcount={student.id_cuenta} />
          </section>
        </>
      )}
    </section>
  );
}
//IO
