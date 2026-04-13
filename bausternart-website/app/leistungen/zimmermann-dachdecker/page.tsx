import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zimmermann & Dachdecker - BAU STERN ART GmbH Hamburg",
  description: "Zimmermannsarbeiten und Dachdeckerleistungen in Hamburg. Dachsanierung, Dachneubau, Gauben und Holzkonstruktionen aus einer Hand.",
};

export default function ZimmermannDachdeckerPage() {
  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-700 to-amber-600 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="blob w-96 h-96 bg-amber-400/10 -top-20 -right-20" />
        <div className="blob w-64 h-64 bg-orange-300/10 bottom-0 left-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Leistung
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Zimmermannsarbeiten & Dachdeckerleistungen
            </h1>
            <p className="text-xl text-amber-100">
              Dachsanierungen und Dachneubauten bilden einen zentralen Bestandteil unseres Kerngeschäfts.
              Von der Holzkonstruktion bis zur fertigen Dacheindeckung – alles aus einer Hand.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="py-16 md:py-24"
        style={{ background: 'linear-gradient(to bottom, #d97706 0%, #fde68a 5%, #ffffff 12%)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Dach & Holzbau – unser Kerngeschäft
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wir verbinden traditionelles Zimmererhandwerk mit moderner Dachdeckertechnik.
                Ob Neubau oder Sanierung – wir sorgen für eine fachgerechte, langlebige Ausführung
                und koordinieren alle beteiligten Gewerke.
              </p>

              <h3 className="text-xl font-bold mb-4 mt-8">Unsere Leistungen im Überblick</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Dachsanierung und Dachneubauten",
                  "Zimmermannsarbeiten inkl. Konter- und Dachlattenverlegung",
                  "Aufsparrendämmung und Zwischensparrendämmung",
                  "Dacheindeckung und Neueindeckung",
                  "Bau von Gauben (Schleppdachgauben, Giebelgauben)",
                  "Dachausbau und Dachinnenausbau",
                  "Dachterrassen und Dachbalkone",
                  "Holzkonstruktionen und Tragwerke",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5"
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
                Alle Arbeiten werden von erfahrenen Fachbetrieben aus der Region ausgeführt
                und durch unser Büro zentral koordiniert und überwacht.
              </p>

              <Button href="/kontakt" variant="primary">
                Dachprojekt anfragen
              </Button>
            </div>

            <div>
              <Card>
                <div className="relative h-[300px] rounded-t-xl overflow-hidden">
                  <Image
                    src="/images/projects/IMG_8985.jpg"
                    alt="Dachkonstruktion Zimmermannsarbeiten"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100">
                  <h3 className="text-xl font-bold mb-4">Unser Schwerpunkt</h3>
                  <p className="text-gray-700 mb-4">
                    Dachsanierungen und Dachneubauten bilden einen zentralen Bestandteil
                    unseres Kerngeschäfts. Wir decken das gesamte Leistungsspektrum ab:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Zimmererarbeiten und Holzkonstruktionen</li>
                    <li>• Dacheindeckung und Abdichtung</li>
                    <li>• Wärmedämmung und Energieeffizienz</li>
                    <li>• Gauben, Dachfenster und Dachterrassen</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Example Projects */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Realisierte Projekte
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Eppendorf</h3>
                <p className="text-sm text-amber-600 font-medium mb-3">Dachsanierung</p>
                <p className="text-gray-600 text-sm">
                  Im Bestand eines Wohngebäudes in Hamburg-Eppendorf wurde das Dach vollständig
                  überarbeitet. Ausgeführt wurden Zimmermannsarbeiten mit Konter- und
                  Dachlattenverlegung inklusive aller Nebenarbeiten, ergänzt durch Aufsparrendämmung
                  und neue Dacheindeckung zur dauerhaften Sicherung der Bausubstanz.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Fuhlsbüttel</h3>
                <p className="text-sm text-amber-600 font-medium mb-3">Dachsanierung</p>
                <p className="text-gray-600 text-sm">
                  Am Lupinenkamp in Hamburg-Hummelsbüttel lag der Schwerpunkt auf der
                  konstruktiven Erneuerung des Dachaufbaus. Neben der Aufsparrendämmung umfasste
                  das Projekt Zimmermannsarbeiten wie Konter- und Dachlatten, alle begleitenden
                  Arbeiten sowie den Bau von Schleppdachgauben für zusätzliches Licht und Raum.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Rissen</h3>
                <p className="text-sm text-amber-600 font-medium mb-3">Dachausbau mit Giebelgauben</p>
                <p className="text-gray-600 text-sm">
                  Am Sülldorfer Brooksweg wurde im Rahmen einer Kernsanierung der Dachausbau
                  mit Giebelgauben realisiert, ergänzt durch eine Dachterrasse für zusätzlichen
                  Wohnkomfort.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Volksdorf</h3>
                <p className="text-sm text-amber-600 font-medium mb-3">Dachkonstruktion Neubau</p>
                <p className="text-gray-600 text-sm">
                  Für den Neubau eines Doppelhauses in Hamburg-Volksdorf wurde die komplette
                  Dachkonstruktion mit Schleppdachgauben und großzügigem Balkon in Südausrichtung
                  realisiert.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Gallery */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Einblicke in unsere Arbeit
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Vom Hochbau über den Innenausbau bis hin zur fertigen Dacheindeckung –
            wir begleiten jedes Projekt mit Sorgfalt und Fachkompetenz.
          </p>

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
                alt="Dachausbau mit Dämmung"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Dachausbau</p>
            </div>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src="/images/projects/IMG_9717.jpg"
                alt="Zimmermannsarbeiten"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Zimmermannsarbeiten</p>
            </div>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src="/images/projects/IMG_7074.jpg"
                alt="Fertige Dacheindeckung"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Dacheindeckung</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #fde68a 5%, #92400e 14%, #78350f 100%)' }}
      >
        <div className="blob w-72 h-72 bg-amber-500/10 top-0 right-0" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ihr Dachprojekt besprechen?
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-8">
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
