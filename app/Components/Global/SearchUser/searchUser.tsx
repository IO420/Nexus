"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface urlProp {
  value: string | null;
}

function SearchUser(props: urlProp) {
  const [numAcount, setnumAcount] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (props.value) {
      setnumAcount(props.value);
    }
  }, [props.value]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (numAcount) {
      params.delete("error");
      params.set("numAcount", `${numAcount}`);
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <>
      <form className="containerForm" onSubmit={handleSubmit}>
        <label className="label">No.Cuenta</label>
        <div className="groupInput">
          <input
            type="text"
            value={numAcount}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value) && value.length <= 9) {
                setnumAcount(value);
              }
            }}
            placeholder="Coloca un número de cuenta..."
            inputMode="numeric"
            pattern="[0-9]*"
          />
          <button className="button buttonSearch" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchUser;
