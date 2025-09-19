"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import "./Logout.css";

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token", { path: "/" });
    router.push("/");
  };

  return (
    <button onClick={handleLogout} className="button button-logout">
      Cerrar sesión
    </button>
  );
}
