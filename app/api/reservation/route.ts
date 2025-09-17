import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../../lib/mongodb'
import sendReservationMail from '../../../lib/mailer'

export async function POST(request: Request){
  const data = await request.json()
  if(!data.nom || !data.telephone) return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })

  try{
    const { db } = await connectToDatabase()
    const res = await db.collection('reservations').insertOne({ ...data, createdAt: new Date() })
    await sendReservationMail(data)
    return NextResponse.json({ ok: true, id: res.insertedId })
  }catch(err){
    console.error(err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
