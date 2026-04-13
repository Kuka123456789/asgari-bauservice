import Button from "@/components/Button";
import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kauf- & Verkaufsbegleitung - BAU STERN ART GmbH Hamburg",
  description: "Begleitung von Kauf und Verkauf – Sicher entscheiden mit baulicher und wirtschaftlicher Klarheit in Hamburg.",
};

export default function KaufAnkaufPage() {
  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="blob w-96 h-96 bg-green-400/10 -top-20 -right-20" />
        <div className="blob w-64 h-64 bg-emerald-300/10 bottom-0 left-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Leistung
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Begleitung von Kauf und Verkauf
            </h1>
            <p className="text-xl text-green-100">
              Sicher entscheiden – mit baulicher und wirtschaftlicher Klarheit
            </p>
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="h-16 md:h-24 bg-gradient-to-b from-green-600 via-green-200/30 to-white" />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-8">
              Der Kauf oder Verkauf einer Immobilie ist eine der wichtigsten Entscheidungen im
              Leben. Wir begleiten Sie fachlich, ehrlich und realistisch – damit Sie wissen, was ein
              Objekt wirklich wert ist, welche Kosten auf Sie zukommen und ob sich ein Kauf oder
              Verkauf lohnt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Kaufbegleitung */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Kaufbegleitung – fundiert statt Bauchgefühl
                </h2>
                <p className="text-gray-600 mb-6">
                  Beim Immobilienkauf entscheidet nicht nur der Preis, sondern vor allem der bauliche Zustand.
                </p>

                <h3 className="font-bold text-gray-900 mb-3">Unsere Leistungen beim Kauf:</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "Technische und bauliche Objektprüfung",
                    "Einschätzung von Sanierungs- und Modernisierungskosten",
                    "Bewertung von Chancen & Risiken",
                    "Realistische Kosten- und Wirtschaftlichkeitsbetrachtung",
                    "Unterstützung bei der Entscheidungsfindung",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-800">Ihr Vorteil:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Klarheit vor dem Kauf</li>
                    <li>• Vermeidung teurer Fehlentscheidungen</li>
                    <li>• Realistische Einschätzung statt Verkaufsversprechen</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Verkaufsbegleitung */}
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Verkaufsbegleitung – den echten Wert sichtbar machen
                </h2>
                <p className="text-gray-600 mb-6">
                  Viele Immobilien werden unter Wert verkauft, weil Zustand, Potenzial oder Risiken falsch eingeschätzt werden.
                </p>

                <h3 className="font-bold text-gray-900 mb-3">Unsere Leistungen beim Verkauf:</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "Fachliche Bewertung des baulichen Zustands",
                    "Einschätzung notwendiger Sanierungsmaßnahmen",
                    "Ermittlung eines realistischen Verkaufspreises",
                    "Beratung zur Wertsteigerung vor dem Verkauf",
                    "Technische Unterstützung bei Käuferfragen",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-800">Ihr Vorteil:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Realistischer Marktwert</li>
                    <li>• Höhere Verkaufssicherheit</li>
                    <li>• Seriöser und transparenter Verkaufsprozess</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ihr Gewinn */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Ihr Gewinn auf einen Blick
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Fachliche Bau- & Immobilienkompetenz",
              "Ehrliche Einschätzung statt Verkaufsdruck",
              "Klare Kosten- und Werttransparenz",
              "Sicherheit bei Kauf oder Verkauf",
              "Persönliche Begleitung auf Augenhöhe",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Häufige Fragen
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Ersetzt ihr einen Makler?",
                  a: "Nein – wir ergänzen mit technischer und baulicher Fachkompetenz.",
                },
                {
                  q: "Ist die Beratung unabhängig?",
                  a: "Ja. Unsere Einschätzung basiert ausschließlich auf Fakten.",
                },
                {
                  q: "Was kostet die Begleitung?",
                  a: "Die Kosten richten sich nach Aufwand und Objekt – transparent im Erstgespräch.",
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

      {/* Transition */}
      <div className="h-16 md:h-24 bg-gradient-to-b from-white via-green-100/30 to-green-700" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="blob w-72 h-72 bg-green-400/10 top-0 right-0" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jetzt Klarheit schaffen – unverbindlich & ehrlich
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Sie überlegen zu kaufen oder zu verkaufen und möchten eine realistische
            Einschätzung, bevor Sie entscheiden?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Jetzt unverbindliche Beratung anfragen
            </Button>
            <Button href="/kontakt" variant="outline" className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/25 hover:!shadow-lg hover:!shadow-white/10">
              Objektbewertung & Kaufprüfung sichern
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
