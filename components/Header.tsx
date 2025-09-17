'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="text-xl font-bold text-brand-700">
          Taxi VSL Kim
          </Link>
          <div className="text-sm text-slate-500">
            Transport médical conventionné CPAM
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-brand-600">Accueil</Link>
          <Link href="/services" className="hover:text-brand-600">Services</Link>
          <Link href="/about" className="hover:text-brand-600">À propos</Link>
          <Link href="/faqs" className="hover:text-brand-600">FAQ</Link>
          <Link href="/contact" className="hover:text-brand-600">Contact</Link>

          {/* CTA */}
          <Link
            href="/reservation"
            className="px-4 py-2 bg-brand-500 text-white rounded-md hover:bg-brand-600"
          >
            Réserver
          </Link>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER || '0658985848'}`}
            className="px-4 py-2 border rounded-md hover:bg-slate-100"
          >
            Appelez-nous
          </a>
        </nav>

        {/* Bouton Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-slate-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col p-4 gap-3 text-sm font-medium">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>À propos</Link></li>
            <li><Link href="/faq" onClick={() => setIsOpen(false)}>FAQ</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li>
              <Link
                href="/reservation"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 bg-brand-500 text-white rounded-md text-center"
              >
                Réserver
              </Link>
            </li>
            <li>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER || '0658985848'}`}
                className="block px-4 py-2 border rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Appelez-nous
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
