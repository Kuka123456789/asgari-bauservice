import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neubau - BAU STERN ART GmbH Hamburg",
  description: "Neubau von Ein- und Mehrfamilienhäusern, Doppel- und Reihenhäusern in Hamburg. Ihr Generalunternehmer für schlüsselfertige Neubauprojekte.",
};

export default function NeubauPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
              Leistung
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Neubau – Wohnraum mit Substanz und Konzept
            </h1>
            <p className="text-xl text-orange-100">
              Ein Neubau ist mehr als ein neues Gebäude – er ist eine langfristige Investition.
              Damit diese sich lohnt, müssen Architektur, Bauqualität, Technik und Wirtschaftlichkeit zusammenpassen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Neubau in Hamburg und Umgebung
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wir realisieren Ein- und Mehrfamilienhäuser, Doppel- und Reihenhäuser sowie kleinere
                Wohnanlagen in Hamburg und Umgebung. Als Generalunternehmer koordinieren wir alle
                Schritte von der Planung bis zur schlüsselfertigen Übergabe.
              </p>

              <h3 className="text-xl font-bold mb-4 mt-8">Was wir im Neubau für Sie leisten</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Beratung zu Standort, Nutzung und wirtschaftlichem Konzept",
                  "Entwurfs- und Grundrisskonzepte in Abstimmung mit Ihren Anforderungen",
                  "Abstimmung mit Architekten und Fachplanern",
                  "Genehmigungs- und Ausführungsplanung",
                  "Koordination aller Gewerke im Roh- und Ausbau",
                  "Erstellung als Ausbauhaus oder schlüsselfertiges Objekt",
                  "Organisation notwendiger Prüfungen und Abnahmen",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 mb-8">
                Auf Wunsch berücksichtigen wir energieeffiziente Bauweisen und bereiten die Unterlagen vor,
                die Sie für mögliche Förderprogramme benötigen.
              </p>

              <Button href="/kontakt" variant="secondary">
                Neubauprojekt anfragen
              </Button>
            </div>

            <div>
              <Card>
                <div className="relative h-[300px] rounded-t-xl overflow-hidden">
                  <Image
                    src="/images/project1/WhatsApp Image 2025-11-04 at 17.44.12.jpeg"
                    alt="Neubau Beispielprojekt"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100">
                  <h3 className="text-xl font-bold mb-4">Vorher–Nachher: Neubau</h3>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Vorher:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Unbebautes oder untergenutztes Grundstück</li>
                      <li>• Veraltete Grundrisse ohne klare Struktur</li>
                      <li>• Unsicherheit über Baukosten und Bauzeit</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nachher:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Klar geplantes Gebäude mit passender Wohn- oder Nutzfläche</li>
                      <li>• Funktionale und moderne Grundrisse</li>
                      <li>• Verlässlicher Kostenrahmen mit definierten Bauabschnitten</li>
                      <li>• Schlüsselfertige Übergabe inklusive Dokumentation</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Example Projects */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Realisierte Projekte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <div className="p-6">
                <p className="text-sm text-orange-600 font-medium mb-1">Einfamilienhaus</p>
                <h3 className="text-xl font-bold mb-3">Volksdorf</h3>
                <p className="text-gray-600 text-sm">
                  Im grünen Stadtteil Hamburg-Volksdorf entstand auf einem ca. 450 m² großen
                  Grundstück ein Einfamilienhaus mit moderner Haustechnik und hervorragender
                  Dämmung. Mit rund 144 m² Wohnfläche wurde ein energieeffizientes Zuhause
                  geschaffen, das hohen Wohnkomfort und zeitgemäßes Bauen vereint.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <p className="text-sm text-orange-600 font-medium mb-1">Einfamilienhaus</p>
                <h3 className="text-xl font-bold mb-3">Volksdorf</h3>
                <p className="text-gray-600 text-sm">
                  In ruhiger Lage von Hamburg-Volksdorf entsteht ein zweigeschossiges Einfamilienhaus
                  mit straßenseitiger Traufausrichtung. Auf rund 195 m² Wohnfläche verbindet ein
                  Durchgang über eine Schleppdachgaube das Dachgeschoss. Die Fertigstellung ist für
                  Ende 2026 geplant.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <p className="text-sm text-orange-600 font-medium mb-1">Doppelhaus</p>
                <h3 className="text-xl font-bold mb-3">Volksdorf</h3>
                <p className="text-gray-600 text-sm">
                  Im gefragten Stadtteil Hamburg-Volksdorf entstand ein zweigeschossiges Doppelhaus
                  mit Schleppdachgauben und großzügigem Balkon in Südausrichtung. Die durchdachte
                  Planung sorgt für helle Räume, hohen Wohnkomfort und zeitgemäße Architektur.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ihr Neubau-Projekt starten?
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
            Gerne besprechen wir Ihr Vorhaben in einem ersten, unverbindlichen Gespräch.
          </p>
          <Button href="/kontakt" variant="secondary">
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
      </section>
    </div>
  );
}
