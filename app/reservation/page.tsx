import ReservationForm from '../../components/ReservationForm'

export default function ReservationPage(){
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">Réserver un trajet</h2>
      <div className="bg-white p-6 rounded shadow">
        <ReservationForm />
      </div>
    </section>
  )
}
