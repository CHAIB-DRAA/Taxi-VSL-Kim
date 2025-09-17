export const metadata = {
    title: 'Services - Taxi VSL Kim Toulouse | Transport médical conventionné CPAM',
    description: 'Découvrez les services de Taxi VSL Kim : transport médical conventionné CPAM à Toulouse et en Occitanie, transferts urgences, dialyse, gares et aéroports.',
    keywords: [
      'Taxi VSL Toulouse',
      'transport médical Toulouse',
      'CPAM Toulouse',
      'VSL Toulouse',
      'ambulance Toulouse',
      'transport urgence médicale',
      'transfert hôpital Toulouse',
      'transport dialyse Toulouse',
      'réservation taxi VSL',
      'taxi santé Toulouse',
      'transport patient Toulouse',
      'transport médical Occitanie',
    ],
  }
  
  export default function Services() {
    const phoneNumber = "06 58 98 58 48"
  
    const services = [
      {
        title: "Transport VSL",
        description:
          "Déplacements médicaux assis en toute sécurité. Conventionné CPAM, remboursement possible par la Sécurité Sociale.",
        image: "/images/service-vsl.png",
      },
      {
        title: "Transports hospitaliers",
        description:
          "Transferts vers les hôpitaux, cliniques et centres de soins de Toulouse et toute l’Occitanie.",
        image: "/images/service-hospital.png",
      },
      {
        title: "Transport récurrent",
        description:
          "Service adapté aux patients nécessitant des trajets réguliers (dialyse, kinésithérapie, consultations spécialisées).",
        image: "/images/service-dialyse.png",
      },
      {
        title: "Transport d'urgence",
        description:
          "Assistance rapide pour urgences médicales. Nos véhicules sont disponibles pour interventions immédiates.",
        image: "/images/service-urgence.png",
      },
      {
        title: "Transferts gares & aéroports",
        description:
          "Transport médicalisé vers gares, aéroports et autres lieux de rendez-vous sur Toulouse et sa région.",
        image: "/images/service-gares.png",
      },
    ]
  
    return (
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* HERO */}
        <div className="relative text-center bg-brand-500 rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 px-6 py-20 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Nos <span className="text-red-600">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white">
              Tous nos services de transport médical conventionné CPAM à Toulouse et en Occitanie
            </p>
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="inline-block mt-4 px-8 py-4 text-2xl md:text-3xl font-bold bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition"
            >
              📞 {phoneNumber}
            </a>
          </div>
        </div>
  
        {/* GRID DES SERVICES */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center mb-8">Nos services détaillés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 border rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-brand-700">{service.title}</h3>
                <p className="text-slate-700 flex-grow">{service.description}</p>
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  📞 Réserver maintenant
                </a>
              </div>
            ))}
          </div>
        </div>
  
        {/* CTA FINAL */}
        <div className="text-center bg-brand-100 rounded-xl py-16 shadow-inner space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-700">
            Besoin d’un transport médicalisé immédiat ?
          </h2>
          <p className="text-lg md:text-xl text-slate-700">
            Contactez <strong>Taxi VSL Kim</strong> dès maintenant pour un service rapide, sécurisé et fiable.
          </p>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            className="inline-block px-10 py-5 text-2xl md:text-3xl font-bold bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition"
          >
            📞 {phoneNumber}
          </a>
        </div>
      </section>
    )
  }
  