"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

// Import dynamique pour éviter "window is not defined"
const ZonesDesserviesMap = dynamic(() => import("../components/ZonesDesserviesMap"), {
  ssr: false,
})

export default function Home() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+33512345678"

  const zones = [
    "Toulouse",
    "Blagnac",
    "Muret",
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

  return (
    <>
      <section className="text-center mt-10">
        <h1 className="text-3xl font-bold">Zones desservies</h1>
        <p className="text-gray-600 mt-2">Cliquez sur une zone pour voir les hôpitaux associés</p>

        <div className="flex flex-wrap gap-3 justify-center mt-6">
          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-4 py-2 rounded-lg border ${
                selectedZone === zone ? "bg-blue-600 text-white" : "bg-white text-gray-800"
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <ZonesDesserviesMap selectedZone={selectedZone} phoneNumber={phoneNumber} />
        </div>
      </section>
    </>
  )
}
