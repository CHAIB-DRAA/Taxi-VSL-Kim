import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({ ok: true })
  
  // Supprime le cookie `admin_session`
  response.cookies.set({
    name: "admin_session",
    value: "",
    path: "/",
    expires: new Date(0), // date passée pour supprimer le cookie
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  })

  return response
}
