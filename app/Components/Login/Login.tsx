"use client";
import { useState } from "react";
import { loginUser } from "@/app/lib/login";
import { useRouter } from "next/navigation";

import AlertBox from "../AlertBox/AlertBox";
import "./Login.css";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await loginUser(user, password);

    if ("error" in data) {
      setError(data.error);
    } else {
      const token = data.access_token;
      const payload = JSON.parse(atob(token.split(".")[1]));
      const usuario = payload.usuario;

      document.cookie = `token=${token}; path=/; SameSite=Strict`;
      document.cookie = `usuario=${usuario}; path=/; SameSite=Strict`;

      setAlert("Inicio de sesión exitoso");
      router.push("/Impresiones");
    }
  };

  return (
    <section className="centerGrid containerSection">
      <form className="login" onSubmit={handleLogin}>
        <h2 className="title">Inicio de sesión</h2>

        <div className="containerInput">
          <label className="label">Usuario</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Coloca tu usuario..."
          />
        </div>

        <div className="containerInput relative">
          <label className="label">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Coloca tu contraseña..."
          />
          <span
          //onClick={() => setShowPassword(!showPassword)}
          //className={showPassword ? 'eyeOpen' : 'eyeClose'}
          />
        </div>

        <button
          className="button buttonSearch"
          style={{ maxWidth: "100%", width: "100%" }}
          type="submit"
        >
          Iniciar sesión
        </button>

        {error && <AlertBox message={error} type="error" />}
        {alert && <AlertBox message={alert} type="success" />}
      </form>
    </section>
  );
}

export default Login;
//IO
