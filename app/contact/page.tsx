// app/contact/page.tsx
import ContactClient from "./ContactClient" // composant client

export const metadata = {
  title: 'Contact & Réservation - Taxi VSL Toulouse | Transport médical CPAM',
  description: 'Réservez votre transport médical conventionné CPAM avec Taxi VSL Kim à Toulouse et en Haute-Garonne. Formulaire facile, réservation rapide et contact direct par téléphone.',
  keywords: [
    'Taxi VSL Toulouse',
    'réservation transport médical Toulouse',
    'contact Taxi VSL CPAM',
    'transport médical conventionné Toulouse',
    'VSL Toulouse',
    'ambulance Toulouse',
    'transport patient Toulouse',
    'urgence médicale Toulouse',
    'réserver Taxi VSL Toulouse',
    'transport médical Occitanie',
    'transport médical Haute-Garonne',
  ],
}

export default function Page() {
  return <ContactClient />
}
