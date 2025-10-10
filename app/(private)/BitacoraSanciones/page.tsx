import BitacoraAlumno from "@/app/Components/BitacoraSanciones/BitacoraAlumno";
import BitacoraEquipo from "@/app/Components/BitacoraSanciones/BitacoraEquipo";
import BitacoraMesas from "@/app/Components/BitacoraSanciones/BitacoraMesas";
import Sanciones from "@/app/Components/BitacoraSanciones/Sanciones";
import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Toggle from "@/app/Components/Global/Toggle/Toggle";
import { GetStudent } from "@/app/lib/getStudent";

export default async function Page(props: {
  searchParams?: Promise<{
    key?: string;
    numAcount?: string;
  }>;
}) {
  const params = await props.searchParams;
  const key = params?.key && params.key ;
  const numAcount = params?.numAcount ? params.numAcount : null;

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
              <SearchUser value={numAcount}/>
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
