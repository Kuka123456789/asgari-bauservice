import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import type { Metadata } from "next";
import {
  UsersIcon,
  CheckCircleIcon,
  StarIcon,
  ChatIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Unternehmen - BAU STERN ART GmbH Hamburg",
  description: "Die Bau Stern ART GmbH ist Ihr Partner für strukturierte Bauprojekte in Hamburg. Neubau, Sanierung und Projektierung aus einer Hand.",
};

export default function UeberUnsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
              Über uns
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bau Stern ART GmbH – Ihr Partner für strukturierte Bauprojekte
            </h1>
            <p className="text-xl text-blue-100">
              Wir sind ein Bau- und Projektierungsunternehmen mit Sitz in Hamburg-Bahrenfeld.
              Neubau, Sanierung und Projektierung – von der ersten Idee bis zur Fertigstellung.
            </p>
          </div>
        </div>
      </section>

      {/* Wer wir sind */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Wer wir sind
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Die Bau Stern ART GmbH ist ein Bau- und Projektierungsunternehmen mit Sitz in Hamburg-Bahrenfeld.
                Wir haben uns auf Neubau, Sanierung und Projektierung spezialisiert und begleiten unsere
                Auftraggeber von der ersten Idee bis zur Fertigstellung.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Unsere Stärke liegt in der Kombination aus technischer Kompetenz, verlässlichen Partnerbetrieben
                und einem klaren, strukturierten Projektmanagement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wir bauen auf eine familiäre Verbindung zu Ihnen. &ldquo;Business to Customer&rdquo; und
                &ldquo;Business to Business&rdquo; treffen bei uns weniger zu. Durch die gemeinschaftliche
                Zusammenarbeit und Verbundenheit betrachten wir Sie vielmehr als Partner und Weggefährten.
              </p>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/project1/WhatsApp Image 2025-11-04 at 17.45.18 (2).jpeg"
                alt="Bau Stern ART Projekt"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Philosophie */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unsere Philosophie
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card>
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Wir setzen auf transparente Kommunikation, realistische Zeit- und Kostenplanung
                    sowie eine verlässliche Ausführung. Projekte sollen planbar und nachvollziehbar sein –
                    für Privatkunden, Eigentümer und Investoren.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Wir verstehen uns nicht als reiner &ldquo;Bauabwickler&rdquo;, sondern als Partner,
                    der Risiken früh erkennt, Alternativen aufzeigt und Entscheidungen vorbereitet.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Fehler entstehen dort, wo Informationen fehlen. Deshalb legen wir großen Wert auf
                    transparente Abstimmungen, klare Entscheidungen und nachvollziehbare Prozesse.
                    Sie wissen jederzeit, wo Ihr Projekt steht.
                  </p>
                  <div className="p-4 bg-white rounded-lg border-l-4 border-blue-600">
                    <p className="text-lg font-medium text-gray-900 italic">
                      &ldquo;Jedes Problem hat eine Lösung – unsere Aufgabe ist es, sie frühzeitig zu finden.&rdquo;
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="order-1 lg:order-2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/project1/WhatsApp Image 2025-11-04 at 17.44.12.jpeg"
                alt="Bau Stern ART Philosophie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              So arbeiten wir
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: UsersIcon,
                title: "Generalübernehmer-Ansatz",
                desc: "Ein verantwortlicher Ansprechpartner, der alle Gewerke koordiniert",
              },
              {
                icon: CheckCircleIcon,
                title: "Strukturierte Abläufe",
                desc: "Klar definierte Schritte von der Projektierung bis zur Übergabe",
              },
              {
                icon: StarIcon,
                title: "Feste Partnerbetriebe",
                desc: "Zusammenarbeit mit ausgewählten Handwerksunternehmen aus der Region",
              },
              {
                icon: ChatIcon,
                title: "Transparente Kosten",
                desc: "Nachvollziehbare Kalkulationen ohne versteckte Posten",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt Info */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Zusammen packen wir Ihr Projekt an!
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Gerne besprechen wir Ihr Vorhaben in einem ersten, unverbindlichen Gespräch –
                ob Neubau, Sanierung, Projektierung oder der Erwerb einer Bestandsimmobilie
                mit Entwicklungspotenzial.
              </p>
              <Button href="/kontakt" variant="secondary" size="lg">
                Kontakt aufnehmen
              </Button>
            </div>

            <div>
              <Card>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Kontaktdaten</h3>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-semibold">Bau Stern ART GmbH</p>
                      <p>Langbehnstraße 6</p>
                      <p>22761 Hamburg-Bahrenfeld</p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p>
                        <span className="font-semibold">Telefon:</span>{" "}
                        <a href="tel:+494022757606" className="text-blue-600 hover:underline">
                          +49 (40) 227 57 606
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">Mobil:</span>{" "}
                        <a href="tel:+491728827078" className="text-blue-600 hover:underline">
                          +49 172 88 27 078
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">E-Mail:</span>{" "}
                        <a href="mailto:info@bausternart.de" className="text-blue-600 hover:underline">
                          info@bausternart.de
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
