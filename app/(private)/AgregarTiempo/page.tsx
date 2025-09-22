import SearchUser from "@/app/Components/SearchUser/searchUser";
import Information from "@/app/Components/Information/information";
import Receipt from "@/app/Components/Receipt/Receipt";
import { GetStudent } from "@/app/lib/getStudent";

import "./addTime.css";

export default async function Page(props:{
  searchParams?: Promise<{
    numAcount:string;
  }>
}) {

  const params =await props.searchParams;
  const numAccount = params?.numAcount ? parseInt(params.numAcount) : null;

  let student: any = null;
  if (numAccount) {
    student = await GetStudent(numAccount);
  }

  return (
    <section className="containerSection">
      <h2 className="title"> AGREGAR TIEMPO </h2>

      <SearchUser urlBase="AgregarTiempo" />

      {student ? (
        <>
          <Information NoCuenta={student.id_cuenta} Nombre={student.nombre} />

          <div className="addTime">
            <Receipt numAccount={student.id_cuenta} />
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
}
//IO
