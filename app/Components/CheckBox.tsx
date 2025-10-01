"use client";

import { useState } from "react";
import SearchUser from "./Global/SearchUser/searchUser";
import SearchTable from "./SearchTable";

export default function CheckBox() {
  const [Checkbox, setChecbox] = useState<string | null>(null);
  return (
    <>
      <div className="checkbox-grid">
        <label>
          <input
            type="checkbox"
            onChange={() => setChecbox(Checkbox === "Mesa" ? null : "Mesa")}
            checked={Checkbox === "Mesa"}
          />{" "}
          Mesa
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
      {Checkbox === "Mesa" ? <SearchTable /> : <></>}
    </>
  );
}
