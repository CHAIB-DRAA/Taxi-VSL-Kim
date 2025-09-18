import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // par défaut, prend celle de ton URI
    // Ping MongoDB
    const result = await db.command({ ping: 1 });

    return NextResponse.json({
      ok: true,
      message: "✅ Connexion MongoDB réussie",
      result,
    });
  } catch (err: any) {
    console.error("❌ Erreur MongoDB:", err);
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
