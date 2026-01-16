import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen - BAU STERN ART GmbH Hamburg",
  description: "Unsere Referenzprojekte in Hamburg: Neubau, Sanierung und Projektierung. Sehen Sie Beispiele unserer Arbeit.",
};

export default function ReferenzenPage() {
  const neubauProjekte = [
    {
      title: "Volksdorfer Grenzweg",
      subtitle: "Doppelhaus & Einfamilienhaus",
      description: "Im grünen Stadtteil Volksdorf entstand auf einem ca. 1.000 m² großen Grundstück ein Doppelhaus in zweigeschossiger Bauweise sowie ein Einfamilienhaus. Die Gesamtwohnfläche von rund 400 m² wurde so geplant, dass großzügige Gartenbereiche erhalten bleiben.",
      image: "/images/project1/WhatsApp Image 2025-11-04 at 17.44.12.jpeg",
    },
    {
      title: "Wensenbalken",
      subtitle: "Wohnen mit Klinkercharakter",
      description: "Ein Doppelhaus und ein Einfamilienhaus wurden realisiert. Roter Klinker, klare Linien und eine auf Familien zugeschnittene Raumaufteilung sorgen für langlebige, zeitlose Architektur.",
      image: "/images/project1/WhatsApp Image 2025-11-04 at 17.45.18.jpeg",
    },
  ];

  const sanierungProjekte = [
    {
      title: "Sülldorfer Brooksweg",
      subtitle: "Vom Doppelhaus zum Mehrfamilienhaus",
      description: "Ein Doppelhaus aus den 1960er Jahren in Hamburg-Rissen wurde im Rahmen einer Kernsanierung vollständig auf den aktuellen Stand gebracht. Abgesehen vom Tragwerk wurde nahezu alles erneuert. Durch eine Nutzungsänderung entstanden drei Wohneinheiten statt der ursprünglichen zwei.",
      image: "/images/projects/IMG_0896.jpg",
    },
    {
      title: "Saseler Chaussee",
      subtitle: "Komplette Wohnungssanierung",
      description: "Eine 1-Zimmer-Wohnung mit ca. 45 m² wurde innerhalb weniger Wochen umfassend saniert: Wände und Decken neu aufgebaut, Bodenbeläge und Innentüren erneuert, Bad und Küche komplett neu ausgeführt.",
      image: "/images/projects/IMG_0522.jpg",
    },
    {
      title: "Saseler Straße",
      subtitle: "Reihenhaus mit neuer Substanz",
      description: "Ein Reihenhaus aus den 1960er Jahren wurde kernsaniert und gleichzeitig funktional sowie optisch modernisiert. Küche, Bäder, Oberflächen und Haustechnik wurden auf einen einheitlich hochwertigen Stand gebracht.",
      image: "/images/projects/IMG_4377.jpg",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Referenzen & Projekte
            </h1>
            <p className="text-xl text-blue-100">
              Unsere Projekte zeigen, wie aus Ideen Realität wird.
              Entdecken Sie ausgewählte Neubau- und Sanierungsprojekte in Hamburg und Umgebung.
            </p>
          </div>
        </div>
      </section>

      {/* Neubau Projekte */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              Neubau
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Neubauprojekte
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
                    <p className="text-orange-300 text-sm font-medium">{projekt.subtitle}</p>
                    <h3 className="text-xl font-bold text-white">{projekt.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{projekt.description}</p>
                </div>
              </Card>
            ))}
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
              Sanierungsprojekte
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
              Aus unserer Arbeit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von der Baustelle bis zum fertigen Ergebnis – Einblicke in unsere Projekte.
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unsere Projekte zeigen die Transformation von der ersten Idee bis zum fertigen Ergebnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Neubau Vorher-Nachher */}
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

            {/* Sanierung Vorher-Nachher */}
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

            {/* Projektierung Vorher-Nachher */}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ähnliches Projekt planen?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Gerne besprechen wir Ihr Vorhaben in einem ersten, unverbindlichen Gespräch.
          </p>
          <Button href="/kontakt" variant="secondary" size="lg">
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
      </section>
    </div>
  );
}
