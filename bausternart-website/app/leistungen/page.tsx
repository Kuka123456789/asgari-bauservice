import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen - BAU STERN ART GmbH Hamburg",
  description: "Unsere Leistungen – Planung, Bau & Sanierung. Neubau, Sanierung, Projektierung und Kauf- & Verkaufsbegleitung in Hamburg.",
};

export default function LeistungenPage() {
  const leistungen = [
    {
      href: "/leistungen/neubau",
      title: "Neubau",
      subtitle: "Wohnraum mit Substanz und Konzept",
      description: "Neubau von Wohnimmobilien, von Einfamilienhäusern bis Mehrfamilienhäuser, termingerecht und qualitativ hochwertig umgesetzt. Als Generalunternehmer koordinieren wir alle Schritte von der Planung bis zur schlüsselfertigen Übergabe.",
      nutzen: "Ihr Bauprojekt wird planbar, strukturiert und zuverlässig realisiert.",
      color: "orange",
      features: [
        "Ein- und Mehrfamilienhäuser",
        "Doppel- und Reihenhäuser",
        "Kleinere Wohnanlagen",
        "Schlüsselfertige Übergabe",
      ],
    },
    {
      href: "/leistungen/sanierung",
      title: "Sanierung & Modernisierung",
      subtitle: "Bestehendes erhalten, Werte steigern",
      description: "Sanierung & Umbau bestehender Gebäude – funktional und optisch modernisiert mit nachhaltiger Wertsteigerung. Wir entwickeln ein technisch und wirtschaftlich sinnvolles Sanierungskonzept.",
      nutzen: "Alte Substanz wird zukunftsfähig und energieeffizient.",
      color: "blue",
      features: [
        "Dachsanierung",
        "Modernisierung & Renovierung",
        "Energetische Sanierung",
        "Zimmererarbeiten",
      ],
    },
    {
      href: "/leistungen/projektierung",
      title: "Projektierung & Planung",
      subtitle: "Aus einer Idee wird ein tragfähiges Bauprojekt",
      description: "Effiziente Projektplanung und Kostenkalkulation. Wir entwickeln aus Ihrer Idee ein strukturiertes Projekt – mit klaren Zahlen, Abläufen und Entscheidungsgrundlagen. Grundstück, Bestand, Baurecht, Nutzung, Baukosten und Zeitplanung.",
      nutzen: "Sie wissen von Anfang an, worauf es ankommt, ohne Überraschungen erleben zu müssen.",
      color: "purple",
      features: [
        "Planerstellung & Visualisierung",
        "Kosten- & Zeitplanung",
        "Wirtschaftlichkeitsberechnung",
        "Konzeptentwicklung",
      ],
    },
    {
      href: "/leistungen/kauf-ankauf",
      title: "Kauf- & Verkaufsbegleitung",
      subtitle: "Sicher entscheiden – mit baulicher Klarheit",
      description: "Wir prüfen Bestandsimmobilien und Grundstücke auf ihr bauliches Potenzial, schätzen den Sanierungsaufwand ab und beraten Sie zum Kauf oder Verkauf.",
      nutzen: "",
      color: "green",
      features: [
        "Objektprüfung & Analyse",
        "Kaufbegleitung",
        "Potenzialeinschätzung",
        "Verkaufsberatung",
      ],
    },
    {
      href: "/leistungen/zimmermann-dachdecker",
      title: "Zimmermann & Dachdecker",
      subtitle: "Dach & Holzbau – unser Kerngeschäft",
      description: "Dachsanierungen und Dachneubauten bilden einen zentralen Bestandteil unseres Kerngeschäfts. Von der Holzkonstruktion bis zur fertigen Dacheindeckung – alles aus einer Hand.",
      nutzen: "Fachgerechte, langlebige Ausführung mit koordinierter Gewerkesteuerung.",
      color: "amber",
      features: [
        "Dachsanierung & Dachneubau",
        "Zimmermannsarbeiten",
        "Gauben & Dachausbau",
        "Dacheindeckung & Dämmung",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; gradient: string }> = {
      orange: { bg: "bg-orange-100", text: "text-orange-600", gradient: "from-orange-500 to-orange-600" },
      blue: { bg: "bg-blue-100", text: "text-blue-600", gradient: "from-blue-500 to-blue-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", gradient: "from-purple-500 to-purple-600" },
      green: { bg: "bg-green-100", text: "text-green-600", gradient: "from-green-500 to-green-600" },
      amber: { bg: "bg-amber-100", text: "text-amber-600", gradient: "from-amber-500 to-amber-600" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="blob w-96 h-96 bg-blue-400/10 -top-20 -right-20" />
        <div className="blob w-64 h-64 bg-cyan-300/10 bottom-0 left-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Unsere Leistungen – Planung, Bau & Sanierung
            </h1>
            <p className="text-xl text-blue-100">
              Wir realisieren Ihre Bauvorhaben in Hamburg und Umgebung von der Projektplanung
              über Neubau bis zur Sanierung. Klare Abläufe, transparente Kosten und ein
              Ansprechpartner für Ihr gesamtes Projekt.
            </p>
          </div>
        </div>
      </section>

      {/* Leistungen Grid */}
      <section
        className="py-16 md:py-24"
        style={{ background: 'linear-gradient(to bottom, #1d4ed8 0%, #bfdbfe 5%, #ffffff 12%)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leistungen.map((leistung, index) => {
              const colors = getColorClasses(leistung.color);
              return (
                <Link key={index} href={leistung.href} className="group">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="p-8">
                      <div className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {leistung.color === "orange" && (
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                        {leistung.color === "blue" && (
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                        {leistung.color === "purple" && (
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        )}
                        {leistung.color === "green" && (
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        )}
                        {leistung.color === "amber" && (
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                          </svg>
                        )}
                      </div>

                      <h2 className="text-2xl font-bold mb-2 text-gray-900">{leistung.title}</h2>
                      <p className={`text-sm font-medium ${colors.text} mb-4`}>{leistung.subtitle}</p>
                      <p className="text-gray-600 mb-4">{leistung.description}</p>
                      {leistung.nutzen && (
                        <p className="text-sm font-medium text-gray-800 mb-6">
                          Nutzen: {leistung.nutzen}
                        </p>
                      )}

                      <ul className="space-y-2 mb-6">
                        {leistung.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center text-sm text-gray-600">
                            <svg className={`w-4 h-4 ${colors.text} mr-2`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <span className={`inline-flex items-center ${colors.text} font-medium group-hover:translate-x-2 transition-transform`}>
                        Mehr erfahren
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ihr Bauprojekt starten?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Wir beraten Sie kostenlos und unverbindlich zu Ihrem Vorhaben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Jetzt Anfrage stellen
            </Button>
            <Button href="/referenzen" variant="outline" className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/25 hover:!shadow-lg hover:!shadow-white/10">
              Referenzen ansehen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
