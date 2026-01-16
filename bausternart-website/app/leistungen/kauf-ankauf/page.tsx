import Button from "@/components/Button";
import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kauf & Ankauf - BAU STERN ART GmbH Hamburg",
  description: "Bestandsimmobilien mit Entwicklungspotenzial. Kaufbegleitung, Objektanalyse und Ankauf zur eigenen Projektentwicklung in Hamburg.",
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
              Kauf & Ankauf – Bestandsimmobilien mit Entwicklungspotenzial
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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

              <h3 className="text-xl font-bold mb-4 mt-8">Was wir im Bereich Kauf & Ankauf tun</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Prüfung von Wohn- und kleineren Gewerbeimmobilien sowie Grundstücken in Hamburg und Umgebung",
                  "Einschätzung von Sanierungsbedarf und Umbaupotenzial",
                  "Grobe Kostenabschätzung für notwendige Bau- oder Sanierungsmaßnahmen",
                  "Entwicklung von Nutzungskonzepten (z. B. Umnutzung, Aufteilung, Erweiterung)",
                  "Begleitung von Käufern vor und nach dem Notartermin im Hinblick auf das Bau- und Sanierungsprojekt",
                  "Ankauf geeigneter Objekte zur eigenen Projektentwicklung durch die Bau Stern ART GmbH",
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

            <div>
              <Card>
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Warum eine baulich geprägte Kaufbegleitung sinnvoll ist
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Realistische Kosteneinschätzung",
                        desc: "Realistische Sicht auf Sanierungskosten statt rein äußerlicher Einschätzung",
                      },
                      {
                        title: "Technische Machbarkeit",
                        desc: "Frühe Klärung, was technisch machbar ist und was nicht",
                      },
                      {
                        title: "Gesamtinvestition planbar",
                        desc: "Besser planbare Gesamtinvestition, weil Kaufpreis und Baukosten zusammen betrachtet werden",
                      },
                      {
                        title: "Fehlentscheidungen vermeiden",
                        desc: "Vermeidung von Fehlentscheidungen, die später hohe Umbau- oder Nachbesserungskosten verursachen",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
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

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Unser Leistungsspektrum
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Objektprüfung</h3>
                <p className="text-gray-600 text-sm">
                  Prüfung von Wohn- und kleineren Gewerbeimmobilien sowie Grundstücken
                  in Hamburg und Umgebung.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Kostenabschätzung</h3>
                <p className="text-gray-600 text-sm">
                  Grobe Kostenabschätzung für notwendige Bau- oder Sanierungsmaßnahmen
                  zur besseren Planung Ihrer Investition.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Nutzungskonzepte</h3>
                <p className="text-gray-600 text-sm">
                  Entwicklung von Nutzungskonzepten wie Umnutzung, Aufteilung
                  oder Erweiterung des Objekts.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Kaufbegleitung</h3>
                <p className="text-gray-600 text-sm">
                  Begleitung von Käufern vor und nach dem Notartermin im Hinblick
                  auf das Bau- und Sanierungsprojekt.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Ankauf</h3>
                <p className="text-gray-600 text-sm">
                  Ankauf geeigneter Objekte zur eigenen Projektentwicklung
                  durch die Bau Stern ART GmbH.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Potenzialanalyse</h3>
                <p className="text-gray-600 text-sm">
                  Einschätzung von Sanierungsbedarf und Umbaupotenzial
                  für fundierte Kaufentscheidungen.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Makler Services Hinweis */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-4">
                  Makler-Services
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Immobilie verkaufen oder Angebote suchen?
                </h2>
                <p className="text-blue-100 mb-6">
                  Für klassische Makler-Dienstleistungen wie Immobilienverkauf, Immobilienbewertungen
                  und aktuelle Immobilienangebote besuchen Sie unsere Makler-Website.
                </p>
                <ul className="space-y-2 text-blue-100 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Kostenlose Immobilienbewertung
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Aktuelle Immobilienangebote
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professionelle Verkaufsabwicklung
                  </li>
                </ul>
                <a
                  href="https://www.bausternart.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Zur Makler-Website
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
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
