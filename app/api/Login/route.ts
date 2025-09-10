
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { user, password } = await req.json();

        const res = await fetch(`${process.env.API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user, password }),
        });

        if (!res.ok) {
            return NextResponse.json({ error: "Credenciales incorrectas" }, { status: 401 });
        }

        const data = await res.json();

        const response = NextResponse.json({ success: true });
        response.cookies.set("token", data.token, {
            httpOnly: true,
            secure: true,
            path: "/",
            maxAge: 60 * 60 * 24,
        });

        return response;
    } catch (err) {
        return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
    }
}
//IO
