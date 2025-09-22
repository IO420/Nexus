import SearchUser from "@/app/Components/SearchUser/searchUser";
import Information from "@/app/Components/Information/information";
import Receipt from "@/app/Components/Receipt/Receipt";
import AlertBox from "@/app/Components/AlertBox/AlertBox";

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
  const showSuccess = params?.success ? parseInt(params.success) : null;
  const showError = params?.error ? params.error : null;

  let student: any = null;
  if (numAcount) {
    student = await GetStudent(parseInt(numAcount));
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
