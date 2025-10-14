import Information from "../Global/Information/information";
import SearchUser from "../Global/SearchUser/searchUser";
import TableSancion from "./TableSancion";

interface Student {
  id_cuenta: string;
  nombre: string;
  credito?: number;
}

export default function Sanciones({ student }: { student?: Student }) {
  const idCuenta = student?.id_cuenta ?? null;

  return (
    <>
      <SearchUser value={idCuenta} />
      {student && (
        <>
          <Information NoCuenta={student.id_cuenta} Nombre={student.nombre} />
          <TableSancion idCuenta={parseInt(student.id_cuenta)} />
        </>
      )}
    </>
  );
}
//
