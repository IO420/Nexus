"use client";

import SearchUser from "@/app/Components/SearchUser/searchUser";
import QuitarSancion from "@/app/Components/QuitarSancion/QuitarSancion";

export default function Page() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <h2 className="title"> Quitar Sanciones </h2>
      <SearchUser urlBase="QuitarSancion" value={"2"} />
      <QuitarSancion />
    </div>
  );
}
//IO
