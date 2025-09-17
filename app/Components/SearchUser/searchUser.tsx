'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
function SearchUser() {
  const [numAccount, setNumAccount] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (numAccount) {
      router.push(`/Impresiones?numAccount=${numAccount}`);
    }
  };

  return (
    <>
      <form className="containerForm"
      onSubmit={handleSubmit}>
        <label className="label">No.Cuenta</label>
        <div className="groupInput">
          <input
            type="text"
            value={numAccount}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value) && value.length <= 9) {
                setNumAccount(value);
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
