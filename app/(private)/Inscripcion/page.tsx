import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Information from "@/app/Components/Global/Information/information";
import StepNavigator from "@/app/Components/Global/StepNavigator/StepNavigator";
import Receipt from "@/app/Components/Receipt/Receipt";
import Selection from "@/app/Components/Selection/Selection";
import AlertBox from "@/app/Components/Global/AlertBox/AlertBox";
import { GetStudent } from "@/app/lib/getStudent";

import "./inscriptions.css";

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
        <AlertBox key={Date.now()} message={showSuccess} type="success" />
      )}

      <h2 className="title"> INSCRIPCION </h2>

      <SearchUser urlBase="Inscripcion" value={numAcount} />

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
            <Receipt urlBase={"Inscripcion"} numAcount={student.id_cuenta} />
          </StepNavigator>
        </>
      ) : (
        <></>
      )}
    </section>
  );
}
//IO
