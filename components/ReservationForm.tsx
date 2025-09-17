'use client'
import { useState } from 'react'
import axios from 'axios'

export default function ReservationForm(){
  const [form, setForm] = useState({
    nom: '', prenom: '', telephone: '', email: '', date: '', heure: '', depart: '', arrivee: '', motif: ''
  })
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setStatus('sending')
    try{
      await axios.post('/api/reservation', form)
      setStatus('success')
      setForm({nom:'',prenom:'',telephone:'',email:'',date:'',heure:'',depart:'',arrivee:'',motif:''})
    }catch(err){
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Nom" className="input" />
        <input name="prenom" value={form.prenom} onChange={handleChange} required placeholder="Prénom" className="input" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input name="telephone" value={form.telephone} onChange={handleChange} required placeholder="Téléphone" className="input" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input name="date" value={form.date} onChange={handleChange} required type="date" className="input" />
        <input name="heure" value={form.heure} onChange={handleChange} required type="time" className="input" />
      </div>
      <input name="depart" value={form.depart} onChange={handleChange} required placeholder="Adresse départ" className="input" />
      <input name="arrivee" value={form.arrivee} onChange={handleChange} required placeholder="Adresse arrivée" className="input" />
      <textarea name="motif" value={form.motif} onChange={handleChange} placeholder="Motif médical" className="input h-24" />

      <div className="flex items-center gap-4">
        <button type="submit" className="px-5 py-2 bg-brand-500 text-white rounded">Envoyer la réservation</button>
        <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className="px-4 py-2 border rounded">Appeler</a>
        {status === 'sending' && <span>Envoi...</span>}
        {status === 'success' && <span className="text-green-600">Réservation envoyée !</span>}
        {status === 'error' && <span className="text-red-600">Erreur, réessayer.</span>}
      </div>
    </form>
  )
}
