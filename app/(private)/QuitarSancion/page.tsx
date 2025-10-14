import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import ShowError from "@/app/Components/Global/ShowError";
import QuitarSancion from "@/app/Components/QuitarSancion/QuitarSancion";
import { GetSancionByStudent } from "@/app/lib/getStudent copy";

export default async function Page(props: {
  searchParams?: Promise<{
    numAcount: string;
  }>;
}) {
  const params = await props.searchParams;
  const numAcount = params?.numAcount ? params.numAcount : null;

  let student: any = null;
  let errorMessage = "";

  if (numAcount) {
    const result = await GetSancionByStudent(parseInt(numAcount));
    if (result.error) {
      errorMessage = `${result.error}`;
    } else {
      student = result as Student;
    }
  }
  return (
    <>
      {errorMessage && <ShowError key={Date.now()} message={errorMessage} />}

      <h2 className="title"> Quitar Sanciones </h2>
      <div className="containerSection">
        <SearchUser value={numAcount} />
        <QuitarSancion data={student} />
      </div>
    </>
  );
}
//IO
