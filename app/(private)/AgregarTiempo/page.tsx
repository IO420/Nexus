import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import Information from "@/app/Components/Global/Information/information";
import Receipt from "@/app/Components/Receipt/Receipt";
import toast from "react-hot-toast";

import { GetStudent } from "@/app/lib/getStudent";

import "./addTime.css";

export default async function Page(props: {
  searchParams?: Promise<{
    numAcount: string;
  }>;
}) {
  const params = await props.searchParams;
  const numAcount = params?.numAcount ? params.numAcount : null;

  let student: any = null;
  if (numAcount) {
    const result = await GetStudent(parseInt(numAcount));

    if (result.error) {
      toast.error("Alumno no encontrado");
      return;
    } else {
      student = result;
    }
  }

  return (
    <section className="containerSection">
      <h2 className="title"> AGREGAR TIEMPO </h2>

      <SearchUser value={numAcount} />

      {student && (
        <>
          <Information NoCuenta={student.id_cuenta} Nombre={student.nombre} />

          <div className="addTime">
            <div className="groupInput" style={{ marginBottom: "1rem" }}>
              <label className="label">Seleccione el área</label>
              <select>
                <option value="0">windows</option>
                <option value="1">ADOBE CREATIVE SUITE</option>
                <option value="2">mmmmm</option>
                <option value="3">mmmmm</option>
                <option value="4">mmmmm</option>
                <option value="5">mmmmm</option>
              </select>
            </div>
            <Receipt numAcount={student.id_cuenta} />
          </div>
        </>
      )}
    </section>
  );
}
//IO
