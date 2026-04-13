import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanierung - BAU STERN ART GmbH Hamburg",
  description: "Sanierung, Modernisierung und Dachsanierung in Hamburg. Sanierungen von Bestandsimmobilien mit strukturierter Projektsteuerung.",
};

export default function SanierungPage() {
  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="blob w-96 h-96 bg-blue-400/10 -top-20 -right-20" />
        <div className="blob w-64 h-64 bg-cyan-300/10 bottom-0 left-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Leistung
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Sanierung – Bestehendes erhalten, Werte steigern
            </h1>
            <p className="text-xl text-blue-100">
              Bestandsgebäude besitzen Charakter – oft aber auch Sanierungsstau.
              Durch eine fachgerechte Sanierung lassen sich Komfort, Energieeffizienz
              und Wert einer Immobilie deutlich erhöhen.
            </p>
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="h-16 md:h-24 bg-gradient-to-b from-blue-600 via-blue-200/30 to-white" />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sanierung mit Konzept
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wir führen Sanierungen im Wohnbereich durch und koordinieren
                alle Gewerke zentral über unser Büro.
              </p>

              <h3 className="text-xl font-bold mb-4 mt-8">Unsere Leistungen in der Sanierung</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Bestandsaufnahme und Einschätzung des Sanierungsumfangs",
                  "Entwicklung eines technisch und wirtschaftlich sinnvollen Sanierungskonzepts",
                  "Koordination von Abbruch, Rohbau, Ausbau und Haustechnik",
                  "Grundrissanpassungen, Innenausbau, Hochbau, insbesondere Zimmerer- und Dacheindeckungsarbeiten",
                  "Energetische Sanierung (Dämmung, Fenster, Heizung in Abstimmung mit Fachplanern)",
                  "Organisation von Abnahmen und Dokumentation der Maßnahmen",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
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
                Wir planen die Sanierung so, dass die Belastung für Eigentümer und Nutzer
                möglichst gering bleibt und Meilensteine klar definiert sind.
              </p>

              <Button href="/kontakt" variant="primary">
                Sanierungsprojekt anfragen
              </Button>
            </div>

            <div>
              <Card>
                <div className="relative h-[300px] rounded-t-xl overflow-hidden">
                  <Image
                    src="/images/projects/IMG_0896.jpg"
                    alt="Saniertes Wohnhaus Hamburg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                  <h3 className="text-xl font-bold mb-4">Vorher–Nachher: Kernsanierung</h3>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Vorher:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• In die Jahre gekommene Ausstattung, veraltete Haustechnik</li>
                      <li>• Niedriger Wohnkomfort, hohe Energieverbräuche</li>
                      <li>• Grundrisse, die nicht mehr zum heutigen Wohnen passen</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nachher:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Zeitgemäße, hochwertige Innenräume mit klarer Gestaltung</li>
                      <li>• Verbesserte Energieeffizienz und geringere Betriebskosten</li>
                      <li>• Optimierte Grundrisse mit sinnvoll genutzten Flächen</li>
                      <li>• Aufgewertete Immobilie – technisch und optisch</li>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Realisierte Projekte
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Rissen</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Kernsanierung und Nutzungsänderung</p>
                <p className="text-gray-600 text-sm">
                  Am Sülldorfer Brooksweg wurde ein Doppelhaus umfassend kernsaniert und durch eine
                  Nutzungsänderung in drei Wohneinheiten umgewandelt. Das Projekt umfasst
                  großzügige Parkflächen, einen separaten Hauswirtschaftsraumbereich, den
                  Dachausbau mit Giebelgauben, zwei abgestimmte Vordächer sowie eine Dachterrasse
                  für zusätzlichen Wohnkomfort.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sasel</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Wohnungssanierung</p>
                <p className="text-gray-600 text-sm">
                  In der Saseler Chaussee erfolgte die komplette Sanierung einer 1-Zimmer-Wohnung.
                  Ausgeführt wurden ein neuer Hauptstrang im Badezimmer, die vollständige
                  Badsanierung (Grob- und Feinmontage), eine neue Küche, das Entfernen alter Tapeten,
                  Neuputz von Wänden und Decken sowie die Verlegung neuer Bodenbeläge.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Eppendorf</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Dachsanierung</p>
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
                <p className="text-sm text-blue-600 font-medium mb-3">Dachsanierung</p>
                <p className="text-gray-600 text-sm">
                  Am Lupinenkamp in Hamburg-Hummelsbüttel lag der Schwerpunkt auf der
                  konstruktiven Erneuerung des Dachaufbaus. Neben der Aufsparrendämmung umfasste
                  das Projekt Zimmermannsarbeiten wie Konter- und Dachlatten, alle begleitenden
                  Arbeiten sowie den Bau von Schleppdachgauben für zusätzliches Licht und Raum.
                </p>
              </div>
            </Card>
          </div>

          {/* Leistungsschwerpunkt */}
          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Leistungsschwerpunkt</h3>
            <p className="text-gray-700">
              Dachsanierungen und Dachneubauten bilden einen zentralen Bestandteil unseres Kerngeschäfts.
            </p>
          </div>
        </div>
      </section>

      {/* Geplante Projekte */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Geplante Projekte
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Schnelsen</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Kernsanierung</p>
                <p className="text-gray-600 text-sm">
                  Im ruhigen Wohngebiet Hamburg-Schnelsen ist am Lüttenredder eine Kernsanierung
                  geplant. Geplant sind eine neue Klinkerfassade, moderne Fenster und Türen sowie das
                  Einfräsen einer Fußbodenheizung für mehr Komfort und nachhaltige Technik.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Fuhlsbüttel</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Dachsanierung</p>
                <p className="text-gray-600 text-sm">
                  Im beliebten Wohnumfeld Hamburg-Fuhlsbüttel am Lupinenkamp ist eine
                  Dachsanierung vorgesehen, inklusive zweier Schleppdachgauben für mehr Licht und
                  Raumgefühl sowie Dachinnenausbau und neuer Dacheindeckung.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Gallery */}
      <section className="py-16 md:py-24 bg-gray-50">
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
                alt="Dachkonstruktion während Sanierung"
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
                alt="Fußbodenheizung Installation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Fußbodenheizung</p>
            </div>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src="/images/projects/IMG_0522.jpg"
                alt="Fertiggestellter Innenausbau"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Innenausbau</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="h-16 md:h-24 bg-gradient-to-b from-gray-50 via-blue-100/30 to-blue-800" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="blob w-72 h-72 bg-blue-500/10 top-0 right-0" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ihr Sanierungsprojekt besprechen?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
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
