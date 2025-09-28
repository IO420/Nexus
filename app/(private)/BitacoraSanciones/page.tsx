import BitacoraAlumno from "@/app/Components/BitacoraSanciones/BitacoraAlumno";
import BitacoraEquipo from "@/app/Components/BitacoraSanciones/BitacoraEquipo";
import BitacoraMesas from "@/app/Components/BitacoraSanciones/BitacoraMesas";
import Sanciones from "@/app/Components/BitacoraSanciones/Sanciones";
import Toggle from "@/app/Components/Global/Toggle/Toggle";
import AlertBox from "@/app/Components/Global/AlertBox/AlertBox";
import { GetStudent } from "@/app/lib/getStudent";

export default async function Page(props: {
  searchParams?: Promise<{
    key?: string;
    numAcount?: string;
    success?: string;
    error?: string;
  }>;
}) {
  const params = await props.searchParams;
  const key = params?.key && params.key ;
  const numAcount = params?.numAcount ? params.numAcount : null;
  const showSuccess = params?.success ? params.success : null;
  const showError = params?.error ? params.error : null;

    let student: any = null;
  
    if (numAcount) {
      const result = await GetStudent(parseInt(numAcount));
  
      if (result.error) {
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
      
      <h2 className="title"> BITACORA Y SANCIONES </h2>

      <Toggle
        defaultView={key}
        options={[
          {
            key: "Equipo",
            label: "Bitacora equipo",
            content: (
              <>
                <BitacoraEquipo />
              </>
            ),
          },
          {
            key: "Alumno",
            label: "Bitacora alumno",
            content: (
              <>
                <BitacoraAlumno />
              </>
            ),
          },
          {
            key: "Mesas",
            label: "Bitacora mesas",
            content: (
              <>
                <BitacoraMesas />
              </>
            ),
          },
          {
            key: "Sanciones",
            label: "Sanciones",
            content: (
              <>
                <Sanciones student={student}/>
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
//IO

// by Tyrannuss
