"use client"

import { useState, useEffect, useMemo } from "react"
import { jsPDF } from "jspdf"
import { format } from "date-fns"
import toast, { Toaster } from "react-hot-toast"

type Reservation = {
  _id: string
  nom: string
  telephone: string
  status?: string
  createdAt: string
}

export default function AdminDashboard() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [filterDate, setFilterDate] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 10

  // Récupérer les réservations
  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/admin/reservation", {
          headers: { "Content-Type": "application/json" },
        })
        const data = await res.json()
        setReservations(data.reservations || [])
      } catch (err) {
        console.error(err)
        toast.error("Erreur lors de la récupération des réservations")
      } finally {
        setLoading(false)
      }
    }
    fetchReservations()
  }, [])

  // Mettre à jour le statut + envoi mail
  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch("/api/admin/reservation", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      })
      setReservations(prev =>
        prev.map(r => (r._id === id ? { ...r, status } : r))
      )
      toast.success(`Réservation ${status.toLowerCase()} avec succès !`)
    } catch (err) {
      console.error(err)
      toast.error("Erreur lors de la mise à jour du statut")
    }
  }

  const deleteReservation = async (id: string) => {
    if (!confirm("Supprimer cette réservation ?")) return
    try {
      await fetch("/api/admin/reservation", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      setReservations(prev => prev.filter(r => r._id !== id))
      toast.success("Réservation supprimée avec succès !")
    } catch (err) {
      console.error(err)
      toast.error("Erreur lors de la suppression")
    }
  }

  // Filtrage recherche + statut + date
  const filtered = useMemo(() => {
    return reservations.filter(r => {
      const matchesSearch =
        r.nom.toLowerCase().includes(search.toLowerCase()) ||
        r.telephone.includes(search)
      const matchesStatus = filterStatus ? r.status === filterStatus : true
      const matchesDate = filterDate
        ? format(new Date(r.createdAt), "yyyy-MM-dd") === filterDate
        : true
      return matchesSearch && matchesStatus && matchesDate
    })
  }, [reservations, search, filterStatus, filterDate])

  const totalPages = Math.ceil(filtered.length / perPage)
  const displayed = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  )

  // Export PDF
  const exportPDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text("Réservations Taxi VSL", 10, 20)

    let y = 30
    displayed.forEach((r, i) => {
      doc.setFontSize(12)
      doc.text(
        `${i + 1}. ${r.nom} | ${r.telephone} | ${
          r.status || "Nouveau"
        } | ${format(new Date(r.createdAt), "yyyy-MM-dd HH:mm")}`,
        10,
        y
      )
      y += 10
      if (y > 280) {
        doc.addPage()
        y = 20
      }
    })

    doc.save("reservations.pdf")
  }

  // Mettre à jour toutes les réservations affichées
  const updateAllStatus = async (status: string) => {
    for (const r of displayed) {
      await updateStatus(r._id, status)
    }
  }

  if (loading) return <p>Chargement...</p>

  return (
    <div className="p-6">
      <Toaster position="top-right" />

      <h1 className="text-2xl font-bold mb-4">Dashboard Réservations</h1>

      {/* Recherche + Filtre + Date + Actions */}
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          placeholder="Rechercher par nom ou téléphone..."
          className="border p-2 rounded flex-1 min-w-[200px]"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
        >
          <option value="">Tous</option>
          <option value="Nouveau">Nouveau</option>
          <option value="Confirmé">Confirmé</option>
          <option value="Annulé">Annulé</option>
        </select>
        <input
          type="date"
          className="border p-2 rounded"
          value={filterDate}
          onChange={e => setFilterDate(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={exportPDF}
        >
          Exporter PDF
        </button>
        <button
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          onClick={() => updateAllStatus("Confirmé")}
        >
          Tout Confirmer
        </button>
        <button
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          onClick={() => updateAllStatus("Annulé")}
        >
          Tout Annuler
        </button>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Nom</th>
              <th className="border px-4 py-2">Téléphone</th>
              <th className="border px-4 py-2">Statut</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayed.map(r => (
              <tr key={r._id}>
                <td className="border px-4 py-2">{r.nom}</td>
                <td className="border px-4 py-2">{r.telephone}</td>
                <td
                  className={`border px-4 py-2 font-bold ${
                    r.status === "Confirmé"
                      ? "text-green-600"
                      : r.status === "Annulé"
                      ? "text-red-600"
                      : "text-gray-700"
                  }`}
                >
                  {r.status || "Nouveau"}
                </td>
                <td className="border px-4 py-2">
                  {format(new Date(r.createdAt), "yyyy-MM-dd HH:mm")}
                </td>
                <td className="border px-4 py-2 flex gap-1">
                  <button
                    className="bg-green-600 text-white px-2 py-1 rounded"
                    onClick={() => updateStatus(r._id, "Confirmé")}
                  >
                    Confirmer
                  </button>
                  <button
                    className="bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => updateStatus(r._id, "Annulé")}
                  >
                    Annuler
                  </button>
                  <button
                    className="bg-gray-600 text-white px-2 py-1 rounded"
                    onClick={() => deleteReservation(r._id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        <button
          className="px-3 py-1 border rounded"
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Préc
        </button>
        <span className="px-3 py-1">
          {currentPage} / {totalPages}
        </span>
        <button
          className="px-3 py-1 border rounded"
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          Suiv
        </button>
      </div>
    </div>
  )
}
