export default function NotFound() {
  return (
    <section>
      <img
        src="/404-bg.png" // 👈 pon tu imagen en /public/404-bg.png
        alt="Página no encontrada"
      />
      <h1>404 - Página no encontrada</h1>

      <p className="text-gray-700 text-xl mb-2">
        Lo sentimos, la página que buscas no existe
      </p>
      <p className="text-gray-700 text-xl">
        Por favor, verifica la URL o regresa a la página principal.
      </p>
      <button> Regresa al inicio</button>
    </section>
  );
}
