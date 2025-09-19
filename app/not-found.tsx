"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleButton = () => {
    router.push("/Impresiones");
  };

  return (
    <div className="centerGrido">
      <section>
        <img
          src="/404-bg.png" // 👈 pon tu imagen en /public/404-bg.png
          alt="Página no encontrada"
        />

        {/* Título */}
        <h1>404 - Página no encontrada</h1>

        {/* Texto */}
        <p>Lo sentimos, la página que buscas no existe.</p>
        <p>Por favor, verifica la URL o regresa a la página principal.</p>
        <button className="button buttonSearch"> regresa al inicio</button>
      </section>
    </div>
  );
}
