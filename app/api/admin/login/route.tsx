import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_SECRET) {
    // Créer un cookie sécurisé pour 1 jour
    const cookie = serialize("admin_session", password, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 jour
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.json({ ok: true }, { headers: { "Set-Cookie": cookie } });
  } else {
    return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
  }
}
