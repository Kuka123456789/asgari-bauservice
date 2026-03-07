import Button from "@/components/Button";
import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kauf- & Verkaufsbegleitung - BAU STERN ART GmbH Hamburg",
  description: "Bestandsimmobilien mit Entwicklungspotenzial. Kaufbegleitung, Objektanalyse und Verkaufsberatung in Hamburg.",
};

export default function KaufAnkaufPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
              Leistung
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kauf- & Verkaufsbegleitung – Bestandsimmobilien mit Entwicklungspotenzial
            </h1>
            <p className="text-xl text-green-100">
              Wir befassen uns nicht nur mit Neubau und Sanierung, sondern auch mit dem Erwerb
              von Bestandsimmobilien und Grundstücken, die sich für eine bauliche Weiterentwicklung eignen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Baugedachte Kaufbegleitung
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wir betrachten Immobilien nicht nur aus Sicht des Kaufpreises, sondern vor allem
                aus baulicher und technischer Perspektive. So sehen Sie früh, welcher Sanierungs-
                oder Umbauaufwand auf Sie zukommt – und welches Potenzial wirklich im Objekt steckt.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Zudem unterstützen wir Käufer bei der fachlichen Einschätzung von Objekten –
                insbesondere im Hinblick auf Sanierungsaufwand, bauliches Potenzial und Entwicklungschancen.
              </p>

              <h3 className="text-xl font-bold mb-4 mt-8">Was wir im Bereich Kauf- & Verkaufsbegleitung tun</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Prüfung von Wohn- und kleineren Gewerbeimmobilien sowie Grundstücken in Hamburg und Umgebung",
                  "Einschätzung von Sanierungsbedarf und Umbaupotenzial",
                  "Grobe Kostenabschätzung für notwendige Bau- oder Sanierungsmaßnahmen",
                  "Entwicklung von Nutzungskonzepten (z. B. Umnutzung, Aufteilung, Erweiterung)",
                  "Begleitung von Käufern vor und nach dem Notartermin im Hinblick auf das Bau- und Sanierungsprojekt",
                  "Einschätzung des Sanierungsaufwands und Beratung zum Kauf oder Verkauf",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
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

              <Button href="/kontakt" variant="primary" className="bg-green-600 hover:bg-green-700">
                Objekt anfragen
              </Button>
            </div>

          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Objekt mit Potenzial gefunden?
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Gerne besprechen wir Ihr Vorhaben in einem ersten, unverbindlichen Gespräch –
            ob Kaufbegleitung oder der Erwerb einer Bestandsimmobilie mit Entwicklungspotenzial.
          </p>
          <Button href="/kontakt" variant="secondary">
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
      </section>
    </div>
  );
}
