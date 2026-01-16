import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanierung - BAU STERN ART GmbH Hamburg",
  description: "Kernsanierung, Modernisierung und Renovierung in Hamburg. Teil- und Kernsanierungen von Bestandsimmobilien mit strukturierter Projektsteuerung.",
};

export default function SanierungPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
              Leistung
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
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

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sanierung mit Konzept
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wir führen Teil- und Kernsanierungen im Wohnbereich durch und koordinieren
                alle Gewerke zentral über unser Büro.
              </p>

              <h3 className="text-xl font-bold mb-4 mt-8">Unsere Leistungen in der Sanierung</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Bestandsaufnahme und Einschätzung des Sanierungsumfangs",
                  "Entwicklung eines technisch und wirtschaftlich sinnvollen Sanierungskonzepts",
                  "Koordination von Abbruch, Rohbau, Ausbau und Haustechnik",
                  "Badsanierungen, Grundrissanpassungen, Modernisierung von Küche und Innenausbau",
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
                  <h3 className="text-xl font-bold mb-4">Vorher–Nachher: Sanierung</h3>

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
            Beispielprojekte Sanierung
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Sülldorfer Brooksweg</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Vom Doppelhaus zum Mehrfamilienhaus</p>
                <p className="text-gray-600 text-sm">
                  Ein Doppelhaus aus den 1960er Jahren in Hamburg-Rissen wurde im Rahmen einer
                  Kernsanierung vollständig auf den aktuellen Stand gebracht. Abgesehen vom Tragwerk
                  wurde nahezu alles erneuert. Durch eine Nutzungsänderung entstanden drei Wohneinheiten
                  statt der ursprünglichen zwei.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Saseler Chaussee</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Komplette Wohnungssanierung</p>
                <p className="text-gray-600 text-sm">
                  Eine 1-Zimmer-Wohnung mit ca. 45 m² wurde innerhalb weniger Wochen umfassend saniert:
                  Wände und Decken neu aufgebaut, Bodenbeläge und Innentüren erneuert,
                  Bad und Küche komplett neu ausgeführt.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Saseler Straße</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Reihenhaus mit neuer Substanz</p>
                <p className="text-gray-600 text-sm">
                  Ein Reihenhaus aus den 1960er Jahren wurde kernsaniert und gleichzeitig
                  funktional sowie optisch modernisiert. Küche, Bäder, Oberflächen und Haustechnik
                  wurden auf einen einheitlich hochwertigen Stand gebracht.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Halstenbeker Straße</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Badsanierung</p>
                <p className="text-gray-600 text-sm">
                  Ein in die Jahre gekommenes Bad mit technischen Mängeln wurde komplett erneuert:
                  Modernes Bad mit erneuerter Installation, Abdichtung und hochwertiger Ausstattung.
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
            Von der Dachsanierung über den Innenausbau bis zur fertigen Küche –
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
                alt="Moderne Küche nach Sanierung"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Fertige Küche</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-800 text-white">
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
