import "./inscriptions.css";

import SearchUser from "@/app/Components/SearchUser/searchUser";
import Information from "@/app/Components/Information/information";
import StepNavigator from "@/app/Components/StepNavigator/StepNavigator";
import Receipt from "@/app/Components/Receipt/Receipt";
import Selection from "@/app/Components/Selection/Selection";
import { GetStudent } from "@/app/lib/getStudent";

export default async function Page({ searchParams }: any) {
  const params = await searchParams;
  const numAccount = params.numAccount ? Number(params.numAccount) : null;

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
