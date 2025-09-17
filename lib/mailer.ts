import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

export default async function sendReservationMail(data: any){
  if(!process.env.ADMIN_EMAIL) return
  const html = `
    <h2>Nouvelle réservation - Taxi VSL</h2>
    <ul>
      <li>Nom: ${data.nom} ${data.prenom || ''}</li>
      <li>Téléphone: ${data.telephone}</li>
      <li>Email: ${data.email || ''}</li>
      <li>Date: ${data.date} ${data.heure}</li>
      <li>Départ: ${data.depart}</li>
      <li>Arrivée: ${data.arrivee}</li>
      <li>Motif: ${data.motif}</li>
    </ul>
  `

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'Nouvelle réservation Taxi VSL',
    html
  })
}
