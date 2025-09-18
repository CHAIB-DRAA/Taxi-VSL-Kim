import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import clientPromise from "../../../../lib/mongodb"

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const data = await request.json()
    const { statut } = data

    if (!statut) {
      return NextResponse.json({ error: "Statut manquant" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db()

    const result = await db.collection("reservations").updateOne(
      { _id: new ObjectId(id) },
      { $set: { statut } }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Réservation non trouvée" }, { status: 404 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
