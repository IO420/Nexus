import SearchUser from "@/app/Components/SearchUser/searchUser";
import Information from "@/app/Components/Information/information";
import StepNavigator from "@/app/Components/StepNavigator/StepNavigator";
import Receipt from "@/app/Components/Receipt/Receipt";
import Selection from "@/app/Components/Selection/Selection";
import { GetStudent } from "@/app/lib/getStudent";

import "./inscriptions.css";

export default async function Page(props:{
  searchParams?: Promise<{
    numAcount:string;
  }>
}) {
  
  const params =await props.searchParams;
  const numAccount = params?.numAcount ? parseInt(params.numAcount) : null;

  let student: any = null;
  let error: string | null = null;
  if (numAccount) {
    const result = await GetStudent(numAccount);

    if (result.error) {
      error = result.error;
    } else {
      student = result;
    }
  }

  return (
    <section className="containerSection">
      <h2 className="title"> INSCRIPCION </h2>

      <SearchUser urlBase="Inscripciones" />

      {student ? (
        <>
          <Information
            NoCuenta={student.id_cuenta}
            Nombre={student.nombre}
            Carrera={student.carrera.carrera}
            Credito={student.credito}
          />

          <StepNavigator totalSteps={2}>
            <Selection />
            <Receipt numAccount={student.id_cuenta}/>
          </StepNavigator>
        </>
      ) : (
        <></>
      )}
    </section>
  );
}
//IO