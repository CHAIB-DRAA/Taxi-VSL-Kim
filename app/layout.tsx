import './globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Toaster } from "react-hot-toast"

export const metadata = {
  title: 'Taxi VSL Conventionné Toulouse',
  description: 'Taxi VSL conventionné CPAM - Réservation et transport médical à Toulouse'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <Toaster position="top-right" />

      </body>
    </html>
  )
}
