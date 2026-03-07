import Button from "@/components/Button";
import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projektierung - BAU STERN ART GmbH Hamburg",
  description: "Projektierung und Konzeptentwicklung für Bauprojekte in Hamburg. Aus einer Idee wird ein tragfähiges Bauprojekt mit klaren Zahlen und Abläufen.",
};

export default function ProjektierungPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
              Leistung
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Projektierung – aus einer Idee wird ein tragfähiges Bauprojekt
            </h1>
            <p className="text-xl text-purple-100">
              Eine solide Projektierung entscheidet darüber, ob ein Bau- oder Sanierungsvorhaben
              später wirtschaftlich, technisch und organisatorisch funktioniert.
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
                Warum Projektierung entscheidend ist
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wir entwickeln aus Ihrer Idee ein strukturiertes Projekt – mit klaren Zahlen,
                Abläufen und Entscheidungsgrundlagen. Dabei betrachten wir Neubau- und Sanierungsprojekte
                ganzheitlich: Grundstück, Bestand, Baurecht, Nutzung, Baukosten und Zeitplanung.
              </p>

              <h3 className="text-xl font-bold mb-4 mt-8">Unser Projektierungsumfang</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Analyse von Grundstücken und Bestandsgebäuden",
                  "Prüfung von Nutzungsmöglichkeiten und baurechtlichen Rahmenbedingungen (in Abstimmung mit Fachplanern / Fachjuristen)",
                  "Entwicklung von Grobkonzepten und Varianten",
                  "Erste Kostenschätzungen und Wirtschaftlichkeitsbetrachtungen",
                  "Erstellung von Zeit- und Ablaufplänen",
                  "Vorbereitung der weiteren Planungs- und Bauphasen",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5"
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
                Ziel ist es, Ihnen eine Entscheidungsgrundlage zu liefern, auf deren Basis Sie sicher sagen können:
                Dieses Projekt setzen wir um!
              </p>

              <Button href="/kontakt" variant="primary" className="bg-purple-600 hover:bg-purple-700">
                Projektierung anfragen
              </Button>
            </div>

            <div>
              <Card>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    So läuft eine Projektierung ab
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        step: "1",
                        title: "Projektidee & Ziele",
                        desc: "Welche Nutzung ist geplant? Welcher Zeithorizont und welches Budget sind realistisch?",
                      },
                      {
                        step: "2",
                        title: "Bestands- und Standortanalyse",
                        desc: "Prüfung des Ist-Zustands, Umfelds, Erschließung, Besonderheiten.",
                      },
                      {
                        step: "3",
                        title: "Konzept & Varianten",
                        desc: "Entwicklung von sinnvollen Lösungsvorschlägen mit grober Grundrissstruktur und Flächenansätzen.",
                      },
                      {
                        step: "4",
                        title: "Kosten- und Zeitrahmen",
                        desc: "Erste belastbare Kostenspanne, grober Terminplan, Definition der nächsten Schritte.",
                      },
                      {
                        step: "5",
                        title: "Übergabe in Planung und Ausführung",
                        desc: "Auf Wunsch übernehmen wir im Anschluss Planung, Genehmigung und Ausführung als Generalunternehmer.",
                      },
                    ].map((phase) => (
                      <div key={phase.step} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-purple-800 text-white rounded-full flex items-center justify-center font-bold">
                          {phase.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">
                            {phase.title}
                          </h4>
                          <p className="text-sm text-gray-600">{phase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vorher-Nachher */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Vorher–Nachher: Projektierung
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-600">Vorher</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Vage Projektidee ohne klare Zahlen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Unsicherheit, ob sich das Vorhaben rechnet</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Kein strukturierter Fahrplan für die nächsten Schritte</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600">Nachher</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Konkretes Konzept mit nachvollziehbarer Begründung</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Transparenter Kosten- und Zeitrahmen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Klar definierte To-dos für Planung, Finanzierung und Umsetzung</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Grundlage für Entscheidungen von Eigentümern, Investoren oder Banken</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
