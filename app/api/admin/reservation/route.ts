import { NextResponse } from "next/server"
import clientPromise from "../../../../lib/mongodb"
import { parse } from "cookie"
import { ObjectId } from "mongodb"
import sendReservationMail from "../../../../lib/mailer" // ton module mailer

const checkAuth = (req: Request) => {
  const cookies = parse(req.headers.get("cookie") || "")
  return cookies.admin_session === process.env.ADMIN_SECRET
}

export async function GET(req: Request) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const client = await clientPromise
    const db = client.db("reservationsDB")
    const reservations = await db
      .collection("reservations")
      .find({})
      .sort({ createdAt: -1 })
      .toArray()
    return NextResponse.json({ reservations })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const { id } = await req.json()
    const client = await clientPromise
    const db = client.db("reservationsDB")
    await db.collection("reservations").deleteOne({ _id: new ObjectId(id) })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}


export async function PATCH(req: Request) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { id, status } = await req.json()
    const client = await clientPromise
    const db = client.db("reservationsDB")

    // On met à jour le statut
    const res = await db
      .collection("reservations")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { status } },
        { returnDocument: "after" } // pour récupérer le document après MAJ
      )

    if (!res.value) {
      return NextResponse.json({ error: "Réservation introuvable" }, { status: 404 })
    }

    // Envoi du mail au client si email présent
    if (res.value.email) {
      try {
        await sendReservationMail({
          nom: res.value.nom,
          email: res.value.email,
          telephone: res.value.telephone,
          status,
        })
      } catch (mailErr) {
        console.error("Erreur d'envoi du mail :", mailErr)
      }
    }

    return NextResponse.json({ ok: true, reservation: res.value })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}