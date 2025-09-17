"use client"

import { useEffect, useState, useMemo } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L, { LatLngExpression } from "leaflet"
import "leaflet/dist/leaflet.css"
import { TurtleIcon } from "lucide-react"

// 🔹 Fix Leaflet default icon paths
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
})

type Props = {
  selectedZone: string | null
  phoneNumber: string
}

type Hospital = {
  name: string
  zone: string
  lat: number
  lng: number
  phone: string
}

const hospitals = [
    { name: "Hôpital Purpan", zone: "Toulouse", lat: 43.6101, lng: 1.4423, phone: "0561900000" },
    { name: "Hôpital Rangueil", zone: "Toulouse", lat: 43.5991, lng: 1.4545, phone: "0561901111" },
    { name: "Hôpital Larrey", zone: "Toulouse", lat: 43.6200, lng: 1.4370, phone: "0561902222" },
    { name: "Clinique Pasteur", zone: "Toulouse", lat: 43.6215, lng: 1.4378, phone: "0561903333" },
    { name: "Hôpital de Blagnac", zone: "Blagnac", lat: 43.6312, lng: 1.3685, phone: "0561904444" },
    { name: "Clinique du Parc", zone: "Colomiers", lat: 43.6123, lng: 1.3370, phone: "0561905555" },
    { name: "Centre Hospitalier Muret", zone: "Muret", lat: 43.4546, lng: 1.3237, phone: "0561906666" },
    { name: "Clinique Balma", zone: "Balma", lat: 43.6187, lng: 1.4996, phone: "0561907777" },
    { name: "Centre Hospitalier Ramonville", zone: "Ramonville", lat: 43.5325, lng: 1.4765, phone: "0561908888" },
    { name: "Clinique Castanet", zone: "Castanet", lat: 43.5370, lng: 1.5050, phone: "0561909999" },
    { name: "Hôpital Tournefeuille", zone: "Tournefeuille", lat: 43.6128, lng: 1.3520, phone: "0561910101" },
    { name: "Clinique Saint-Orens", zone: "SaintOrens", lat: 43.5585, lng: 1.4960, phone: "0561910202" },
    { name: "Clinique Labège", zone: "Labège", lat: 43.5567, lng: 1.4975, phone: "0561910303" },
    { name: "Clinique Cugnaux", zone: "Cugnaux", lat: 43.5690, lng: 1.3635, phone: "0561910404" },
    { name: "Clinique L'Union", zone: "LUnion", lat: 43.6185, lng: 1.5132, phone: "0561910505" },
    { name: "Clinique Portet-sur-Garonne", zone: "PortetSurGaronne", lat: 43.5330, lng: 1.3975, phone: "0561910606" },
    { name: "Clinique Fenouillet", zone: "Fenouillet", lat: 43.6500, lng: 1.4910, phone: "0561910707" },
    { name: "Clinique Plaisance-du-Touch", zone: "PlaisanceDuTouch", lat: 43.6110, lng: 1.3330, phone: "0561910808" },
  ]
  

export default function ZonesDesserviesMap({ selectedZone, phoneNumber }: Props) {
  const [isClient, setIsClient] = useState(false)

  const filteredHospitals = useMemo(() => {
    if (!selectedZone) return hospitals
    return hospitals.filter(h => h.zone === selectedZone)
  }, [selectedZone])

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const FitBounds = () => {
    const map = useMap()
    if (!filteredHospitals.length) return null
    const bounds = filteredHospitals.map(h => [h.lat, h.lng] as LatLngExpression)
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 })
    return null
  }

  return (
    <MapContainer
    style={{ height: "500px", width: "100%" }}
    {...({ center: [43.6045, 1.444], zoom: 12, scrollWheelZoom: false } as any)}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {filteredHospitals.map((h, i) => (
      <Marker key={i} position={[h.lat, h.lng] as LatLngExpression}>
        <Popup>
              <div className="text-left">
                <strong>{h.name}</strong>
                <br />
                📞 <a href={`tel:${h.phone.replace(/\s/g, "")}`}>{h.phone}</a>
                {phoneNumber && (
                  <>
                    <br />
                    Taxi principal : <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>{phoneNumber}</a>
                  </>
                )}
              </div>
            </Popup>
      </Marker>
    ))}
    <FitBounds />
  </MapContainer>
  
  )
}
