import { NextResponse } from "next/server"
import clientPromise from "../../../lib/mongodb"
import sendReservationMail from "../../../lib/mailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    if (!data.nom || !data.telephone) {
      return NextResponse.json(
        { ok: false, error: "Champs manquants" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("reservationsDB") // 👉 mets bien le nom de ta DB ici
    const res = await db.collection("reservations").insertOne({
      ...data,
      createdAt: new Date(),
    })

    // On tente l’envoi du mail, mais on ne bloque pas si ça plante
    try {
      await sendReservationMail(data)
    } catch (mailErr) {
      console.error("Erreur d'envoi du mail :", mailErr)
    }

    return NextResponse.json({ ok: true, id: res.insertedId })
  } catch (err) {
    console.error("Erreur serveur :", err)
    return NextResponse.json(
      { ok: false, error: "Erreur serveur" },
      { status: 500 }
    )
  }
}
