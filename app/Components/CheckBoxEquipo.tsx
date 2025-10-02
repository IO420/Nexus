"use client";

import { useState } from "react";
import SearchUser from "./Global/SearchUser/searchUser";
import SearchBoxEquipo from "./SearchEquipo";

export default function CheckBoxEquipo() {
  const [Checkbox, setChecbox] = useState<string | null>(null);
  return (
    <>
      <div className="checkbox-grid">
        <label>
          <input
            type="checkbox"
            onChange={() => setChecbox(Checkbox === "Equipo" ? null : "Equipo")}
            checked={Checkbox === "Mesa"}
          />{" "}
          Equipo
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => setChecbox(Checkbox === "Cuenta" ? null : "Cuenta")}
            checked={Checkbox === "Cuenta"}
          />{" "}
          Cuenta
        </label>
      </div>
      {Checkbox === "Cuenta" ? <SearchUser value={"3"} /> : <></>}
      {Checkbox === "Equipo" ? <SearchBoxEquipo /> : <></>}
    </>
  );
}
