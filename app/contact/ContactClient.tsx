// app/contact/ContactClient.tsx
"use client"

import { useState } from "react"

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  })

  const phoneNumber = "06 58 98 58 48"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Merci ${formData.name}, votre réservation a été prise en compte ! 📞 Nous vous contacterons au ${formData.phone}`)
  }

  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-center bg-brand-500">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-3xl px-4 text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Contact & Réservation</h1>
          <p className="text-lg md:text-xl">
            Réservez votre transport médical conventionné CPAM à Toulouse, Haute-Garonne et Occitanie. Véhicules adaptés et équipe professionnelle.
          </p>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            className="inline-block px-6 py-4 text-2xl md:text-3xl font-bold bg-red-600 hover:bg-red-700 rounded-lg shadow-lg transition-all duration-300"
          >
            📞 {phoneNumber}
          </a>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <h2 className="text-3xl font-bold text-center mb-6">Formulaire de Réservation</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <input type="text" name="name" placeholder="Votre nom" required value={formData.name} onChange={handleChange} className="p-4 border rounded-md" />
          <input type="tel" name="phone" placeholder="Votre téléphone" required value={formData.phone} onChange={handleChange} className="p-4 border rounded-md" />
          <input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} className="p-4 border rounded-md" />
          <input type="date" name="date" required value={formData.date} onChange={handleChange} className="p-4 border rounded-md" />
          <input type="time" name="time" required value={formData.time} onChange={handleChange} className="p-4 border rounded-md" />
          <select name="service" required value={formData.service} onChange={handleChange} className="p-4 border rounded-md">
            <option value="">Sélectionnez un service</option>
            <option value="VSL">Transport VSL</option>
            <option value="Hospitalier">Transport hospitalier</option>
            <option value="Récurrent">Transport récurrent</option>
            <option value="Urgence">Transport d'urgence</option>
            <option value="Gares & Aéroports">Transfert gares & aéroports</option>
          </select>
          <textarea name="message" placeholder="Votre message ou informations complémentaires" rows={4} value={formData.message} onChange={handleChange} className="p-4 border rounded-md" />
          <button type="submit" className="px-6 py-4 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-600 transition">
            📩 Envoyer ma réservation
          </button>
        </form>

        <p className="mt-6 text-center text-lg font-semibold text-red-600">
          📞 Pour réservation immédiate ou renseignements : {phoneNumber}
        </p>
      </section>
    </>
  )
}
