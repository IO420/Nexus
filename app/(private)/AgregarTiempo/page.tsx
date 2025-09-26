import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Information from "@/app/Components/Global/Information/information";
import Receipt from "@/app/Components/Receipt/Receipt";
import AlertBox from "@/app/Components/Global/AlertBox/AlertBox";

import { GetStudent } from "@/app/lib/getStudent";

import "./addTime.css";

export default async function Page(props: {
  searchParams?: Promise<{
    numAcount: string;
    success?: string;
    error?: string;
  }>;
}) {
  const params = await props.searchParams;
  const numAcount = params?.numAcount ? params.numAcount : null;
  const showSuccess = params?.success ? params.success : null;
  let showError = params?.error ? params.error : null;

  let student: any = null;
  if (numAcount) {
    const result = await GetStudent(parseInt(numAcount));

    if (result.error) {
      showError = "Alumno no encontrado";
    } else {
      student = result;
    }
  }

  return (
    <section className="containerSection">
      {showError && (
        <AlertBox key={Date.now()} message={showError} type="error" />
      )}

      {showSuccess && (
        <AlertBox message="Recibo guardado correctamente" type="success" />
      )}

      <h2 className="title"> AGREGAR TIEMPO </h2>

      <SearchUser urlBase="AgregarTiempo" value={numAcount} />

      {student ? (
        <>
          <Information NoCuenta={student.id_cuenta} Nombre={student.nombre} />

          <div className="addTime">
            <Receipt urlBase={"/AgregarTiempo"} numAcount={student.id_cuenta} />
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
}
//IO
