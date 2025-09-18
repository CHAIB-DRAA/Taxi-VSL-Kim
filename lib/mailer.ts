import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST, // ex: "smtp.mailtrap.io"
  port: Number(process.env.MAILTRAP_PORT), // ex: 2525
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
})

type ReservationData = {
  nom: string
  telephone: string
  email: string
  status?: string
}

export default async function sendReservationMail(data: ReservationData) {
  const { nom, email, status, telephone } = data

  const statusText = status === "Confirmé" ? "confirmée" : status === "Annulé" ? "annulée" : "créée"

  const mailOptions = {
    from: `"Taxi VSL" <no-reply@taxivsl.com>`,
    to: email,
    subject: `Votre réservation a été ${statusText}`,
    text: `Bonjour ${nom},\n\nVotre réservation a été ${statusText}.\nTéléphone: ${telephone}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("Mail envoyé à", email)
  } catch (err) {
    console.error("Erreur d'envoi du mail :", err)
  }
}
