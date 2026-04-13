import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen - BAU STERN ART GmbH Hamburg",
  description: "Unsere Bauprojekte – Ergebnisse, die überzeugen. Realisierte Neubau- und Sanierungsprojekte aus Hamburg & Umgebung.",
};

export default function ReferenzenPage() {
  const neubauProjekte = [
    {
      type: "Ein- und Zweifamilienhaus",
      title: "Volksdorfer Grenzweg",
      description: "Im grünen Stadtteil Hamburg-Volksdorf entstand auf einem ca. 1.000 m² großen Grundstück der Neubau eines Doppelhauses und eines Einfamilienhauses mit insgesamt rund 360 m² Wohnfläche und großzügigen Gartenbereichen.",
      image: "/images/project1/WhatsApp Image 2025-11-04 at 17.44.12.jpeg",
    },
  ];

  const sanierungProjekte = [
    {
      title: "Sülldorfer Brooksweg",
      subtitle: "Mehrfamilienhaus",
      description: "Kernsanierung eines Doppelhauses aus den 1960er-Jahren mit umfassender Erneuerung der Bausubstanz. Durch Nutzungsänderung entstanden drei Wohneinheiten statt ursprünglich zwei.",
      image: "/images/projects/IMG_0896.jpg",
    },
    {
      title: "Saseler Chaussee",
      subtitle: "1-Zimmer-Wohnung",
      description: "Umfassende Sanierung einer 1-Zimmer-Wohnung mit ca. 45 m² inklusive neuer Wand- und Deckenflächen, Bodenbeläge, Innentüren sowie komplett erneuertem Bad und Küche.",
      image: "/images/projects/IMG_0522.jpg",
    },
    {
      title: "Saseler Straße",
      subtitle: "Endreihenhaus",
      description: "Kernsanierung eines Reihenhauses aus den 1960er-Jahren mit funktionaler und optischer Modernisierung von Dacheindeckung, Küche, Bädern, Oberflächen und Haustechnik.",
      image: "/images/projects/IMG_4377.jpg",
    },
  ];

  const geplanteNeubau = [
    {
      type: "Ein- und Zweifamilienhaus",
      title: "Wensenbalken",
      description: "Realisierung eines Doppelhauses und eines Einfamilienhauses in rotem Klinker mit klarer Formensprache und familiengerechter Raumaufteilung für zeitlose, langlebige Architektur.",
    },
  ];

  const geplanteeSanierung = [
    {
      title: "Lüttenredder",
      subtitle: "Kernsanierung",
      description: "Im ruhigen Wohngebiet Hamburg-Schnelsen ist am Lüttenredder eine Kernsanierung geplant. Geplant sind eine neue Klinkerfassade, moderne Fenster und Türen sowie das Einfräsen einer Fußbodenheizung für mehr Komfort und nachhaltige Technik.",
    },
    {
      title: "Lupinenkamp",
      subtitle: "Dachsanierung",
      description: "Im beliebten Wohnumfeld Hamburg-Fuhlsbüttel am Lupinenkamp ist eine Dachsanierung vorgesehen, inklusive zweier Schleppdachgauben für mehr Licht und Raumgefühl sowie Dachinnenausbau und neuer Dacheindeckung.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="blob w-96 h-96 bg-blue-400/10 -top-20 -right-20" />
        <div className="blob w-64 h-64 bg-cyan-300/10 bottom-0 left-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Unsere Bauprojekte – Ergebnisse, die überzeugen!
            </h1>
            <p className="text-xl text-blue-100">
              Unsere Referenzen zeigen, wie wir Bauprojekte erfolgreich umgesetzt haben –
              zuverlässig, strukturiert und mit Fokus auf Ihren Nutzen.
            </p>
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="h-16 md:h-24 bg-gradient-to-b from-blue-700 via-blue-200/30 to-white" />

      {/* Neubau Projekte - Realisiert */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              Neubau
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Realisierte Projekte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {neubauProjekte.map((projekt, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={projekt.image}
                    alt={projekt.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-orange-300 text-sm font-medium">{projekt.type}</p>
                    <h3 className="text-xl font-bold text-white">{projekt.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{projekt.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Geplante Neubau Projekte */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Geplante Projekte</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {geplanteNeubau.map((projekt, index) => (
                <Card key={index}>
                  <div className="p-6">
                    <p className="text-sm text-orange-600 font-medium mb-1">{projekt.type}</p>
                    <h4 className="text-xl font-bold mb-3">{projekt.title}</h4>
                    <p className="text-gray-600 text-sm">{projekt.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sanierung Projekte */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Sanierung
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Realisierte Projekte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sanierungProjekte.map((projekt, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={projekt.image}
                    alt={projekt.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-blue-300 text-sm font-medium">{projekt.subtitle}</p>
                    <h3 className="text-lg font-bold text-white">{projekt.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm">{projekt.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Geplante Sanierung Projekte */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Geplante Projekte</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {geplanteeSanierung.map((projekt, index) => (
                <Card key={index}>
                  <div className="p-6">
                    <p className="text-sm text-blue-600 font-medium mb-1">{projekt.subtitle}</p>
                    <h4 className="text-xl font-bold mb-3">{projekt.title}</h4>
                    <p className="text-gray-600 text-sm">{projekt.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Baustellenbilder Gallery */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Einblicke
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bauprojekte im Überblick
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Realisierte Neubau- und Sanierungsprojekte aus Hamburg & Umgebung
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src="/images/projects/IMG_8985.jpg"
                alt="Dachkonstruktion"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Dachsanierung</p>
            </div>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src="/images/projects/IMG_9437.jpg"
                alt="Dachausbau"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Dachausbau</p>
            </div>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src="/images/projects/IMG_9717.jpg"
                alt="Fußbodenheizung"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Fußbodenheizung</p>
            </div>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src="/images/projects/IMG_7074.jpg"
                alt="Dachbalkon"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Dachbalkon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vorher-Nachher Konzept */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Transformation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vorher – Nachher
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Neubau</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Vorher:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Unbebautes oder untergenutztes Grundstück</li>
                      <li>• Unsicherheit über Baukosten und Bauzeit</li>
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Nachher:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Klar geplantes Gebäude mit passender Wohnfläche</li>
                      <li>• Funktionale und moderne Grundrisse</li>
                      <li>• Verlässlicher Kostenrahmen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Sanierung</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Vorher:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Veraltete Ausstattung und Haustechnik</li>
                      <li>• Niedriger Wohnkomfort, hohe Energiekosten</li>
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Nachher:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Zeitgemäße, hochwertige Innenräume</li>
                      <li>• Verbesserte Energieeffizienz</li>
                      <li>• Aufgewertete Immobilie</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Projektierung</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Vorher:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Vage Projektidee ohne klare Zahlen</li>
                      <li>• Unsicherheit über Machbarkeit</li>
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Nachher:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Konkretes Konzept mit Begründung</li>
                      <li>• Transparenter Kosten- und Zeitrahmen</li>
                      <li>• Klare Entscheidungsgrundlage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-blue-200 mb-4">Persönlich. Transparent. Ohne Verpflichtung.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Sprechen Sie mit uns über Ihr Bauprojekt. Wir beraten Sie persönlich und unverbindlich
            zu Ihrem Vorhaben.
          </p>
          <Button href="/kontakt" variant="secondary" size="lg">
            Kontakt aufnehmen
          </Button>
        </div>
      </section>
    </div>
  );
}
