import SearchUser from "@/app/Components/Global/SearchUser/searchUser";
import QuitarSancion from "@/app/Components/QuitarSancion/QuitarSancion";

export default async function Page(props: {
  searchParams?: Promise<{
    numAcount: string;
  }>;
}) {
  const params = await props.searchParams;
  const numAcount = params?.numAcount ? params.numAcount : null;

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        paddingRight: "350px",
      }}
    >
      <h2 className="title"> Quitar Sanciones </h2>
      <SearchUser value={numAcount} />
      <QuitarSancion />
    </div>
  );
}
//IO
