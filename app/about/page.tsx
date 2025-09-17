export const metadata = {
  title: 'À propos - Taxi VSL conventionné Toulouse | Transport médical CPAM',
  description: 'Taxi VSL Kim à Toulouse, expert du transport médical conventionné CPAM. Véhicules adaptés, trajets sécurisés, transferts vers hôpitaux, cliniques, gares et aéroports en Occitanie.',
  keywords: [
    'Taxi VSL Toulouse',
    'transport médical Toulouse',
    'CPAM Toulouse',
    'transport conventionné Toulouse',
    'VSL Toulouse',
    'ambulance Toulouse',
    'urgence médicale Toulouse',
    'transfert hôpital Toulouse',
    'transport dialyse Toulouse',
    'transport patient Toulouse',
    'cliniques Toulouse',
    'réservation taxi VSL Toulouse',
    'taxi santé Toulouse',
    'transport médical Occitanie',
  ],
}

export default function About() {
  const phoneNumber = "06 58 98 58 48"

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      {/* TITRE PRINCIPAL */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-700">
          À propos de <span className="text-red-600">Taxi VSL Kim</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-700">
          Transport médical conventionné CPAM à Toulouse et en Occitanie
        </p>
        <a
          href={`tel:${phoneNumber.replace(/\s/g, "")}`}
          className="inline-block mt-4 px-8 py-4 text-2xl font-bold bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition"
        >
          📞 {phoneNumber}
        </a>
      </div>

      {/* DESCRIPTION DÉTAILLÉE */}
      <div className="space-y-6 text-slate-700 text-lg md:text-xl leading-relaxed">
        <p>
          <strong>Taxi VSL Kim</strong> est votre service de <strong>transport médicalisé</strong> et <strong>taxi conventionné CPAM</strong> à Toulouse et sa région. Nous assurons des trajets <em>sécurisés</em>, <em>ponctuels</em> et <em>confortables</em> pour tous vos besoins médicaux : transferts vers <strong>hôpitaux</strong>, <strong>cliniques</strong>, centres de dialyse, cabinets médicaux, ainsi que les <strong>gares</strong> et <strong>aéroports</strong> de Toulouse et de l’Occitanie.
        </p>

        <p>
          Nos <strong>véhicules adaptés</strong> comprennent des <strong>VSL</strong>,et taxis santé, tous équipés pour garantir votre confort et votre sécurité. Nous intervenons pour des <strong>urgences médicales</strong>, des consultations régulières, des traitements de dialyse, et tout type de transport pour patients assis ou nécessitant une assistance particulière.
        </p>

        <p>
          Notre équipe est <strong>professionnelle</strong>, <strong>ponctuelle</strong> et formée pour vous accompagner lors de chaque trajet médical. Nous facilitons la prise en charge par la <strong>CPAM</strong> et les remboursements pour le transport conventionné, afin que chaque déplacement soit simple et sécurisé.
        </p>

        <p>
          Nous desservons <strong>Toulouse</strong>, <strong>Blagnac</strong>, <strong>Muret</strong>, <strong>Colomiers</strong>, <strong>Balma</strong>, <strong>Ramonville</strong> et toutes les villes de la Haute-Garonne. Notre objectif est d’offrir un <strong>transport médical rapide, fiable et confortable</strong> à tous les habitants et visiteurs de la région Occitanie.
        </p>
      </div>

      {/* CTA FINAL */}
      <div className="text-center mt-8">
        <p className="text-xl md:text-2xl font-semibold text-red-600 mb-4">
          📞 Pour réserver ou obtenir des informations immédiates, contactez-nous dès maintenant
        </p>
        <a
          href={`tel:${phoneNumber.replace(/\s/g, "")}`}
          className="inline-block px-10 py-4 text-2xl md:text-3xl font-bold bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition"
        >
          📞 {phoneNumber}
        </a>
      </div>
    </section>
  )
}
