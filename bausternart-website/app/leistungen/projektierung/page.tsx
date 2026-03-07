import Button from "@/components/Button";
import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projektierung - BAU STERN ART GmbH Hamburg",
  description: "Projektierung und Konzeptentwicklung für Bauprojekte in Hamburg. Aus Ihrer Idee wird ein sicheres Bauprojekt mit klaren Zahlen und Abläufen.",
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
              Aus Ihrer Idee wird ein sicheres Bauprojekt
            </h1>
            <p className="text-xl text-purple-100">
              Sie möchten bauen oder sanieren, wissen aber nicht, ob Ihr Vorhaben wirklich sinnvoll,
              machbar und bezahlbar ist? Genau hier setzt unsere Projektierung an.
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
                Wir begleiten private Bauherren von der ersten Idee bis zur fundierten
                Entscheidungsgrundlage – transparent, realistisch und unabhängig. Damit Sie wissen,
                was möglich ist, was es kostet und ob es sich lohnt, bevor Sie investieren.
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

              {/* CTA */}
              <div className="p-6 bg-purple-50 rounded-xl mb-8">
                <p className="text-lg text-gray-800 mb-4">
                  Sie haben ein Grundstück oder ein Haus und möchten wissen, was wirklich möglich ist?
                  Lassen Sie uns gemeinsam Ihr Projekt prüfen. Unverbindlich, ehrlich und auf Augenhöhe.
                </p>
                <Button href="/kontakt" variant="primary" className="bg-purple-600 hover:bg-purple-700">
                  Projektierung anfragen
                </Button>
              </div>
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
                        title: "Analyse & Zieldefinition",
                        desc: "Ihre Wünsche, Ihr Budget, Ihre Rahmenbedingungen. Grundstücks- oder Bestandsanalyse.",
                      },
                      {
                        step: "2",
                        title: "Machbarkeitsprüfung",
                        desc: "Bebauungsrecht & bauliche Möglichkeiten. Erste Flächen- und Nutzungskonzepte.",
                      },
                      {
                        step: "3",
                        title: "Konzept & Vorentwurf",
                        desc: "Grobes Gebäudekonzept, Grundrissideen & Volumenstudien.",
                      },
                      {
                        step: "4",
                        title: "Kosteneinschätzung",
                        desc: "Realistische Kostenübersicht. Vergleich von Varianten (z. B. größer vs. kompakter).",
                      },
                      {
                        step: "5",
                        title: "Entscheidungsgrundlage",
                        desc: "Klare Empfehlung. Transparente Unterlagen für den nächsten Schritt. Sie entscheiden erst dann, wenn alle Fakten auf dem Tisch liegen.",
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

      {/* Für wen */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Für wen ist diese Leistung gedacht?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Unsere Projektierung richtet sich gezielt an private Bauherren, die:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "ein unbebautes Grundstück besitzen und ein Haus planen",
                "ein Bestandsgebäude sanieren oder umbauen möchten",
                "vor dem Kauf eines Grundstücks oder Hauses stehen",
                "Planungssicherheit wollen, bevor sie Baukosten auslösen",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-gray-800">
              Für alle, die keine teuren Fehlentscheidungen treffen wollen.
            </p>
          </div>
        </div>
      </section>

      {/* Warum Projektierung wichtig ist */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Warum Projektierung so wichtig ist
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Viele Bauprobleme entstehen nicht auf der Baustelle, sondern in der Planung.
              Ohne saubere Projektierung drohen:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "unrealistische Kostenannahmen",
                "Planungsänderungen während des Baus",
                "Verzögerungen & Mehrkosten",
                "Enttäuschung statt Vorfreude",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-purple-50 rounded-xl border-l-4 border-purple-600">
              <p className="text-lg font-medium text-gray-900">
                Unsere Projektierung schafft Klarheit – technisch, wirtschaftlich und rechtlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Häufige Fragen (FAQ)
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Wie lange dauert die Projektierung?",
                  a: "Je nach Umfang ca. 2–6 Wochen.",
                },
                {
                  q: "Was kostet eine Projektierung?",
                  a: "Die Kosten richten sich nach Projektgröße – wir informieren Sie transparent im Erstgespräch.",
                },
                {
                  q: "Bin ich danach an Sie gebunden?",
                  a: "Nein. Sie entscheiden frei, wie es weitergeht.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
