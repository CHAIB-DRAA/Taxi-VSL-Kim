import { NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'
import sendReservationMail from '../../../lib/mailer'

export async function POST(request: Request){
  const data = await request.json()
  if(!data.nom || !data.telephone) 
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })

  try {
    const client = await clientPromise
    const db = client.db() // tu peux mettre le nom de ta DB ici : client.db('mydatabase')
    const res = await db.collection('reservations').insertOne({ ...data, createdAt: new Date() })

    await sendReservationMail(data)

    return NextResponse.json({ ok: true, id: res.insertedId })
  } catch(err) {
    console.error(err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
