"use client";
import { useState } from "react";

export default function ChangePassword() {
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setconfirmNewPass] = useState("");

  const handleChangePass = (e: React.FormEvent) => {
    e.preventDefault;
    const data = { pass, newPass, confirmNewPass };
    console.log(data);
  };

  return (
    <section className="centerGrid containerSection">
      <form onSubmit={handleChangePass} className="pass">
        <div className="containerInput relative">
          <label className="label">Contraseña actual</label>
          <input
            placeholder="Coloca tu contraseña..."
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <span />
        </div>

        <div className="containerInput relative">
          <label className="label">Nueva contraseña</label>
          <input
            placeholder="Coloca tu nueva contraseña..."
            value={newPass}
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
          />
          <span />
        </div>

        <div className="containerInput relative">
          <label className="label">Confirmar la contraña</label>
          <input
            placeholder="Coloca tu contraseña..."
            value={confirmNewPass}
            onChange={(e) => {
              setconfirmNewPass(e.target.value);
            }}
          />
          <span />
        </div>

        <div className="containerButton">
          <button
            className="button buttonSearch"
            style={{ maxWidth: "100%", width: "100%" }}
            type="submit"
          >
            Confirmar
          </button>

          <button
            className="button buttonSearch"
            style={{ maxWidth: "100%", width: "100%" }}
            type="submit"
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}
