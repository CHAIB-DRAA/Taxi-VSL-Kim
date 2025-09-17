"use client"

import { useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Wrapper pour s'assurer que la map ne se rend que côté client
const ZonesDesserviesMap = dynamic(() => import("../components/ZonesDesserviesMap"), {
  ssr: false,
})

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

  const phoneNumber = "06 58 98 58 48"

  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src="/images/hero.png"
          alt="Taxi VSL Toulouse"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        <div className="relative z-10 max-w-3xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Déplacements Médicaux Faciles. <br /> Optez pour l'Occitanie !
          </h1>
          <p className="mb-8 text-lg md:text-xl text-white/90">
            Occitanie entière desservie ! Transport médicalisé Toulouse et sa région.
            Conventionné CPAM/Sécurité Sociale.
          </p>

          {/* Numéro CTA */}
          <div className="mb-8">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="inline-block text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-5 rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-red-500/50 transition-all duration-300"
            >
              📞 {phoneNumber}
            </a>
            <p className="mt-3 text-lg md:text-xl text-white/80">
              Appelez-nous maintenant pour réserver votre trajet
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/reservation"
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow hover:bg-slate-200 transition"
            >
              Réserver un trajet
            </Link>
            <Link
              href="#zones"
              className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Voir nos zones
            </Link>
          </div>
        </div>
      </section>

      {/* NOS SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-14 text-slate-800">
          Nos services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              img: "/images/service-vsl.png",
              title: "Transport VSL",
              desc: "Déplacements médicaux assis en toute sécurité. Conventionné CPAM, remboursement possible par la Sécurité Sociale.",
            },
            {
              img: "/images/service-hospital.png",
              title: "Transports hospitaliers",
              desc: "Transferts vers les hôpitaux, cliniques et centres de soins de Toulouse et toute l’Occitanie.",
            },
            {
              img: "/images/service-dialyse.png",
              title: "Transport récurrent",
              desc: "Service adapté aux patients nécessitant des trajets réguliers (dialyse, kinésithérapie, consultations spécialisées).",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl border hover:-translate-y-1 transform transition duration-300"
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-48 object-cover rounded-lg mb-6 hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-bold mb-3 text-slate-700">{s.title}</h3>
              <p className="text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ZONES DESSERVIES */}
      <section id="zones" className="bg-gradient-to-b from-slate-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-slate-800">
            Zones desservies
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-12 text-lg">
            Cliquez sur une zone pour zoomer sur la carte et voir nos markers avec numéro de téléphone
            pour chaque hôpital ou clinique.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-6 py-3 rounded-full border font-semibold transition-all shadow-sm hover:shadow-lg ${
                  selectedZone === zone
                    ? "bg-blue-600 text-white shadow-blue-500/50 scale-105"
                    : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {zone}
              </button>
            ))}
          </div>

          {/* Map côté client */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200">
            <ZonesDesserviesMap selectedZone={selectedZone} phoneNumber={phoneNumber} />
          </div>
        </div>
      </section>
    </>
  )
}
