export const metadata = {
    title: 'FAQ - Taxi VSL Kim Toulouse | Transport médical conventionné CPAM',
    description: 'Questions fréquentes sur Taxi VSL Kim : transport médical conventionné CPAM, VSL, transferts urgences, gares et aéroports à Toulouse et en Occitanie.',
    keywords: [
      'Taxi VSL Toulouse',
      'FAQ transport médical Toulouse',
      'transport conventionné CPAM Toulouse',
      'VSL Toulouse',
      'ambulance Toulouse',
      'transfert hôpital Toulouse',
      'transport dialyse Toulouse',
      'réservation taxi VSL Toulouse',
      'urgence médicale Toulouse',
      'taxi santé Toulouse',
    ],
  }
  
  export default function FAQ() {
    const phoneNumber = "06 58 98 58 48"
  
    const faqItems = [
      {
        question: "Qu'est-ce qu'un Taxi VSL conventionné CPAM ?",
        answer: "Un Taxi VSL (Véhicule Sanitaire Léger) conventionné CPAM est un transport médicalisé pour patients assis, remboursé par la Sécurité Sociale pour les trajets médicaux prescrits."
      },
      {
        question: "Quels types de trajets propose Taxi VSL Kim ?",
        answer: "Nous assurons les trajets médicaux assis, transferts hospitaliers, transports récurrents (dialyse, kinésithérapie), urgences médicales, et transferts vers gares et aéroports."
      },
      {
        question: "Comment réserver un transport médical avec Taxi VSL Kim ?",
        answer: "Vous pouvez réserver directement par téléphone au 📞 06 58 98 58 48 ou via notre formulaire de réservation en ligne disponible sur notre site."
      },
      {
        question: "Est-ce que le transport est remboursé par la Sécurité Sociale ?",
        answer: "Oui, pour les trajets médicaux prescrits par votre médecin, le transport conventionné CPAM est remboursé selon les règles de la Sécurité Sociale."
      },
      {
        question: "Quels véhicules sont utilisés pour le transport médical ?",
        answer: "Nos véhicules comprennent des VSL, ambulances et taxis santé, tous adaptés pour assurer sécurité et confort aux patients."
      },
      {
        question: "Intervenez-vous en cas d'urgence médicale ?",
        answer: "Oui, nous proposons un service rapide et efficace pour les urgences médicales dans Toulouse et la Haute-Garonne."
      },
      {
        question: "Quels secteurs desservez-vous ?",
        answer: "Nous couvrons Toulouse, Blagnac, Muret, Colomiers, Balma, Ramonville, et toutes les villes de Haute-Garonne, avec des transferts possibles vers toute l’Occitanie."
      },
    ]
  
    return (
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        {/* HERO */}
        <div className="relative text-center bg-brand-500 rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 px-6 py-20 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              FAQ - <span className="text-red-600">Taxi VSL Kim</span>
            </h1>
            <p className="text-lg md:text-xl text-white">
              Toutes les réponses à vos questions sur le transport médical conventionné CPAM à Toulouse et en Occitanie.
            </p>
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="inline-block mt-4 px-8 py-4 text-2xl md:text-3xl font-bold bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition"
            >
              📞 {phoneNumber}
            </a>
          </div>
        </div>
  
        {/* FAQ ITEMS */}
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-brand-700">{item.question}</h3>
              <p className="text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
  
        {/* CTA FINAL */}
        <div className="text-center bg-brand-100 rounded-xl py-16 shadow-inner space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-700">
            Toujours une question ?
          </h2>
          <p className="text-lg md:text-xl text-slate-700">
            Contactez <strong>Taxi VSL Kim</strong> pour un renseignement personnalisé ou pour réserver votre trajet.
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
  