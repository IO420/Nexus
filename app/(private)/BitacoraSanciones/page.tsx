import BitacoraAlumno from "@/app/Components/BitacoraSanciones/BitacoraAlumno";
import BitacoraEquipo from "@/app/Components/BitacoraSanciones/BitacoraEquipo";
import BitacoraMesas from "@/app/Components/BitacoraSanciones/BitacoraMesas";
import Sanciones from "@/app/Components/BitacoraSanciones/Sanciones";
import SearchUserWithDate from "@/app/Components/Global/SearchUser/SearchUserWithDate";
import ShowError from "@/app/Components/Global/ShowError";
import Toggle from "@/app/Components/Global/Toggle/Toggle";
import { GetStudent } from "@/app/lib/getStudent";
import { GetSancionByStudent } from "@/app/lib/getStudent copy";

export default async function Page(props: {
  searchParams?: Promise<{
    key?: string;
    numAcount?: string;
  }>;
}) {
  const params = await props.searchParams;
  const key = params?.key && params.key;
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

  return (
    <section className="containerSection">
      {errorMessage && <ShowError key={Date.now()} message={errorMessage} />}

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
                <SearchUserWithDate value={numAcount} />
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
                <Sanciones student={student} />
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
