import Information from "../Global/Information/information";
import SearchUser from "../Global/SearchUser/searchUser";
import TableSancion from "./TableSancion";

interface Student {
  id_cuenta: string;
  nombre: string;
}

export default async function Sanciones(props: { student?: Student }) {
  const idCuenta = props?.student?.id_cuenta ?? null;

  return (
    <>
      <SearchUser value={idCuenta} />
      {props.student && (
        <>
          <Information
            NoCuenta={props.student.id_cuenta}
            Nombre={props.student.nombre}
          />

        <TableSancion  />
        </>
      )}
    </>
  );
}
