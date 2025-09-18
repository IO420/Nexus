import SearchUser from "@/app/Components/SearchUser/searchUser";
import Information from "@/app/Components/Information/information";
import Receipt from "@/app/Components/Receipt/Receipt";
import { GetStudent } from "@/app/lib/getStudent";

import "./addTime.css";

export default async function Page({ searchParams }: any) {

  const numAccount = searchParams?.numAccount
    ? Number(searchParams.numAccount)
    : null;
    
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
            <Receipt />
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
}
//IO
