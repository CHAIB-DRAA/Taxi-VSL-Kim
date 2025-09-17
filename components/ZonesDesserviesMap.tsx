"use client"

import { useEffect, useState, useMemo } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

type Props = {
  selectedZone: string | null
  phoneNumber: string
}

const hospitals = [
  { name: "Hôpital Purpan", zone: "Toulouse", lat: 43.6101, lng: 1.4423 },
  { name: "Hôpital Rangueil", zone: "Toulouse", lat: 43.5991, lng: 1.4545 },
  { name: "Hôpital Blagnac", zone: "Blagnac", lat: 43.6312, lng: 1.3685 },
  { name: "Centre Hospitalier Muret", zone: "Muret", lat: 43.4546, lng: 1.3237 },
  { name: "Clinique Balma", zone: "Balma", lat: 43.6187, lng: 1.4996 },
  { name: "Clinique Ramonville", zone: "Ramonville", lat: 43.5325, lng: 1.4765 },
]

export default function ZonesDesserviesMap({ selectedZone, phoneNumber }: Props) {
  const [isClient, setIsClient] = useState(false)

  // ✅ Hooks toujours au début
  const filteredHospitals = useMemo(() => {
    if (!selectedZone) return hospitals
    return hospitals.filter(h => h.zone === selectedZone)
  }, [selectedZone])

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null // rendu conditionnel seulement après tous les hooks

  const FitBounds = () => {
    const map = useMap()
    if (!filteredHospitals.length) return null
    const bounds = L.latLngBounds(filteredHospitals.map(h => [h.lat, h.lng] as [number, number]))
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 })
    return null
  }

  return (
    <MapContainer center={[43.6045, 1.444]} zoom={12} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {filteredHospitals.map((h, i) => (
        <Marker key={i} position={[h.lat, h.lng]}>
          <Popup>
            <strong>{h.name}</strong><br />
            📞 <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>{phoneNumber}</a>
          </Popup>
        </Marker>
      ))}
      <FitBounds />
    </MapContainer>
  )
}
