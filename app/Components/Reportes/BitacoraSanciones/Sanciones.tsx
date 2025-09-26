import SearchUser from "../../Global/SearchUser/searchUser";
import Information from "../../Global/Information/information";
import AlertBox from "../../Global/AlertBox/AlertBox";
import { GetStudent } from "@/app/lib/getStudent";

export default async function Sanciones(props: {
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
      showError = "alumno no encontrado";
    } else {
      student = result;
    }
  }

  return (
    <>
      {showError && (
        <>
          <AlertBox key={Date.now()} message={showError} type="error" />
        </>
      )}

      {showSuccess && (
        <AlertBox key={Date.now()} message={showSuccess} type="success" />
      )}

      <SearchUser urlBase="BitacoraSanciones" value={numAcount} />

      {student && (
        <Information NoCuenta={student.id_cuenta} Nombre={student.nombre} />
      )}
    </>
  );
}
