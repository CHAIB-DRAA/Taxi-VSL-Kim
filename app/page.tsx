"use client"

import { useState } from "react"
import Link from "next/link"
import ZonesDesserviesMap from "../components/ZonesDesserviesMap"

export default function Home() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  const zones = [
    "Toulouse",
    "Blagnac",
    "Muret",
    "Colomiers",
    "Balma",
    "Ramonville",
    "Castanet",
    "Tournefeuille",
    "SaintOrens",
    "Labège",
    "Cugnaux",
    "LUnion",
    "PortetSurGaronne",
    "Fenouillet",
    "PlaisanceDuTouch",
  ]

  const phoneNumber = "06 58 98 58 48" // Numéro pour CTA

  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src="/images/hero.png"
          alt="Taxi VSL Toulouse"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Déplacements Médicaux Faciles. Optez pour l'Occitanie !
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            Occitanie entière desservie ! Transport médicalisé Toulouse et sa
            région. Confiez-nous votre trajet en toute sérénité. Conventionné
            CPAM/Sécurité Sociale. Véhicules adaptés (VSL, ambulances, taxis santé).
          </p>

          {/* Numéro très visible */}
          <div className="mb-6">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="inline-block text-3xl md:text-4xl font-bold bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg shadow-lg transition-all duration-300"
            >
              📞 {phoneNumber}
            </a>
            <p className="mt-2 text-lg md:text-xl text-white/90">
              Appelez-nous maintenant pour réserver votre trajet
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/reservation"
              className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition"
            >
              Réserver un trajet
            </Link>
          </div>
        </div>
      </section>

      {/* NOS SERVICES */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Nos services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <img
              src="/images/service-vsl.png"
              alt="Taxi VSL Toulouse"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Transport VSL</h3>
            <p className="text-slate-600">
              Déplacements médicaux assis en toute sécurité. Conventionné CPAM,
              remboursement possible par la Sécurité Sociale.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <img
              src="/images/service-hospital.png"
              alt="Transport vers hôpitaux Toulouse"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Transports hospitaliers</h3>
            <p className="text-slate-600">
              Transferts vers les hôpitaux, cliniques et centres de soins de
              Toulouse et toute l’Occitanie.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <img
              src="/images/service-dialyse.png"
              alt="Taxi VSL dialyse Toulouse"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Transport récurrent</h3>
            <p className="text-slate-600">
              Service adapté aux patients nécessitant des trajets réguliers
              (dialyse, kinésithérapie, consultations spécialisées).
            </p>
          </div>
        </div>
      </section>

      {/* ZONES DESSERVIES */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Zones desservies</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-10">
            Cliquez sur une zone pour zoomer sur la carte et voir nos markers avec
            numéro de téléphone pour chaque hôpital ou clinique.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {zones.map((zone) => (
              <div
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className="cursor-pointer p-4 border rounded-md bg-white shadow-sm hover:bg-brand-100 transition"
              >
                <h3 className="font-semibold">{zone}</h3>
              </div>
            ))}
          </div>

          <ZonesDesserviesMap selectedZone={selectedZone} phoneNumber={phoneNumber} />
        </div>
      </section>
    </>
  )
}
