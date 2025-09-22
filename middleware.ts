import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token) {
    console.log("No hay token, redirigiendo a la página de inicio de sesión");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [    
    "/Reportes",
    "/Monitor",
    "/QuitarSancion",
    "/Programas",
    "/Mensajes",
    "/Inscritos",
    "/Inscripciones",
    "/InformacionEquipo",
    "/Impresiones",
    "/CambiarPass",
    "/BitacoraSanciones",
    "/AsignacionMesas",
    "/AsignacionEquipo",
    "/Alta",
    "/AgregarTiempo",
    "/ActivosMantenimiento",
  ],
};
//IO
