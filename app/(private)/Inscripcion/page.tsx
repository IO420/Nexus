import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Information from "@/app/Components/Global/Information/information";
import Receipt from "@/app/Components/Receipt/Receipt";
import Selection from "@/app/Components/Selection/Selection";
import ShowError from "@/app/Components/Global/ShowError";
import { GetStudent } from "@/app/lib/getStudent";
import "./inscripcion.css";
import Table from "@/app/Components/Global/table";

async function getInscripcion(idCuenta: number) {
  try {
    const res = await fetch(`http://localhost:5000/alumno-inscrito/${idCuenta}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Desactiva caché si los datos pueden cambiar frecuentemente
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error: any) {
    return { error: error.message || "No se pudo cargar la inscripción" };
  }
}

const headers = ["Inscrito", "Tiempo", "Confirmó"];

export default async function Page(props: {
  searchParams?: Promise<{
    numAcount: string;
  }>;
}) {
  const params = await props.searchParams;
  const numAcount = params?.numAcount ? params.numAcount : null;

  let student: any = null;
  let inscripcion: any = null;
  let errorMessage = "";

  if (numAcount) {
    const idCuenta = parseInt(numAcount);

    const studentResult = await GetStudent(idCuenta);
    if (studentResult.error) {
      errorMessage = `${studentResult.error}`;
    } else {
      student = studentResult;
    }
    const inscResult = await getInscripcion(idCuenta);
    if (!inscResult.error) {
      inscripcion = inscResult;
    } else {

    }
  }

  const tableData = inscripcion
    ? [
        {
          Inscrito: inscripcion.plataforma?.nombre || "—",
          Tiempo: inscripcion.tiempo_disponible
            ? `${Math.floor(inscripcion.tiempo_disponible / 60)} minutos`
            : "—",
          Confirmó: inscripcion.realizo_pago === 1 ? "sí" : "no",
        },
      ]
    : [];

  return (
    <section className="containerSection">
      {errorMessage && <ShowError key={Date.now()} message={errorMessage} />}

      <h2 className="title"> INSCRIPCIÓN </h2>

      <div className="containeInformation">
        <div className="firstPartInformation">
          <SearchUser value={numAcount} />

          {student && (
            <>
              <Information
                NoCuenta={student.id_cuenta}
                Nombre={student.nombre}
                Carrera={student.carrera.carrera}
                Credito={student.credito}
              />
            </>
          )}
          {!student && numAcount && (
            <button className="button buttonSearch" style={{ marginTop: "1rem" }}>
              Registrar Estudiante
            </button>
          )}
        </div>

        {student && (
          <>
            <Table headers={headers} data={tableData} />
            <button
              className="button buttonSearch"
              style={{ marginTop: "2rem" }}
            >
              Restablecer contraseña
            </button>
          </>
        )}
      </div>

      {student && (
        <>
          <section className="inscripcion">
            <Selection />

            <select
              style={{
                marginBottom: "1rem",
                maxWidth: "100px",
                minWidth: "100px",
              }}
            >
              <option value="0">con pago</option>
              <option value="1">sin pago</option>
            </select>

            <Receipt numAcount={student.id_cuenta} />
          </section>
        </>
      )}
    </section>
  );
}