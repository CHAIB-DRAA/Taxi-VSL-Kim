"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Import dynamique pour éviter l'erreur "window is not defined"
const ZonesDesserviesMap = dynamic(() => import("../components/ZonesDesserviesMap"), {
  ssr: false,
})

export default function Home() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

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
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
  {/* Image de fond avec parallax */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-300"
    style={{ backgroundImage: "url('/images/hero.png')" }}
    id="hero-bg"
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

  <div className="relative z-10 max-w-3xl px-4 sm:px-6 md:px-8 text-white">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-snug drop-shadow-lg">
      Déplacements Médicaux Faciles<br />
      <span className="text-red-500">Optez pour l'Occitanie !</span>
    </h1>
    <p className="mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg text-white/90">
      Occitanie entière desservie ! Transport médicalisé Toulouse et sa région.
      Conventionné CPAM/Sécurité Sociale.
    </p>

    <div className="mb-4 sm:mb-6 md:mb-8">
      <a
        href={`tel:${phoneNumber.replace(/\s/g, "")}`}
        className="inline-block text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-5 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-red-500/50 transition-all duration-300"
      >
        📞 {phoneNumber}
      </a>
      <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white/80">
        Appelez-nous maintenant pour réserver votre trajet
      </p>
    </div>

    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4">
      <Link
        href="/reservation"
        className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white text-black font-semibold rounded-lg shadow hover:bg-slate-200 transition text-sm sm:text-base md:text-lg"
      >
        Réserver un trajet
      </Link>
      <Link
        href="#zones"
        className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 border border-white text-white rounded-lg hover:bg-white hover:text-black transition text-sm sm:text-base md:text-lg"
      >
        Voir nos zones
      </Link>
    </div>
  </div>

  {/* Script parallax */}
  <script
    dangerouslySetInnerHTML={{
      __html: `
      const bg = document.getElementById('hero-bg');
      window.addEventListener('scroll', () => {
        const offset = window.scrollY * 0.3;
        bg.style.transform = 'translateY(' + offset + 'px)';
      });
      `,
    }}
  />
</section>


      {/* NOS SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-10 sm:mb-12 md:mb-14 text-slate-800">
          Nos services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
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
              className="p-4 sm:p-6 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl border hover:-translate-y-1 transform transition duration-300"
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-lg mb-4 sm:mb-5 md:mb-6 hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-3 text-slate-700">{s.title}</h3>
              <p className="text-sm sm:text-base md:text-base text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ZONES DESSERVIES */}
      <section id="zones" className="bg-gradient-to-b from-slate-50 to-slate-100 py-12 sm:py-16 md:py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center relative">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-slate-800">
      Zones desservies
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
      Cliquez sur une zone pour zoomer sur la carte et voir nos markers avec numéro de téléphone pour chaque hôpital ou clinique.
    </p>

    {/* Conteneur scrollable avec ref */}
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 py-2 scroll-smooth"
      >
        {zones.map((zone) => (
          <button
            key={zone}
            onClick={() => setSelectedZone(zone)}
            className={`flex-shrink-0 px-4 sm:px-5 py-2 sm:py-3 rounded-full border font-semibold text-sm sm:text-base md:text-base transition-all shadow-sm hover:shadow-lg ${
              selectedZone === zone
                ? "bg-blue-600 text-white shadow-blue-500/50 scale-105"
                : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {zone}
          </button>
        ))}
      </div>

      {/* Flèche gauche */}
      <button
        onClick={() => scrollRef.current?.scrollBy({ left: -150, behavior: "smooth" })}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-slate-100 transition z-10"
      >
        ◀
      </button>

      {/* Flèche droite */}
      <button
        onClick={() => scrollRef.current?.scrollBy({ left: 150, behavior: "smooth" })}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-slate-100 transition z-10"
      >
        ▶
      </button>
    </div>

    {/* Carte */}
    {isClient && (
      <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 h-[300px] sm:h-[400px] md:h-[500px]">
        <ZonesDesserviesMap selectedZone={selectedZone} phoneNumber={phoneNumber} />
      </div>
    )}
  </div>
</section>


    </>
  )
}
