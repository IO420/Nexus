export default function NotFound() {
  return (
    <section>
      <img
        src="/404-bg.png" // 👈 pon tu imagen en /public/404-bg.png
        alt="Página no encontrada"
        className="w-[150px] md:w-[200px] mb-8"
      />

      {/* Título */}
      <h1>404 - Página no encontrada</h1>

      {/* Texto */}
      <p>Lo sentimos, la página que buscas no existe.</p>
      <p>Por favor, verifica la URL o regresa a la página principal.</p>
      <button className="button buttonSearch"> regresa al inicio</button>
    </section>
  );
}
