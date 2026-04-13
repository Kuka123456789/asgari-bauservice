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
  description: "Bauunternehmen Hamburg – Neubau, Sanierung & Projektierung mit klarer Struktur. Als Generalübernehmer begleiten wir Ihr Bauvorhaben persönlich.",
};

export default function UeberUnsPage() {
  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="blob w-96 h-96 bg-blue-400/10 -top-20 -right-20" />
        <div className="blob w-64 h-64 bg-cyan-300/10 bottom-0 left-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Über uns
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Bauunternehmen Hamburg – Neubau, Sanierung & Projektierung mit klarer Struktur
            </h1>
            <p className="text-xl text-blue-100">
              Wir sind Ihr Bauunternehmen mit Sitz in Hamburg-Bahrenfeld für Neubau, Sanierung
              und Projektierung. Als Generalübernehmer begleiten wir Ihr Bauvorhaben persönlich,
              von der Konzeptphase bis zur schlüsselfertigen Übergabe.
            </p>
          </div>
        </div>
      </section>

      {/* Unser Lebenslauf */}
      <section
        className="py-16 md:py-24"
        style={{ background: 'linear-gradient(to bottom, #1d4ed8 0%, #bfdbfe 5%, #ffffff 12%)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unser Lebenslauf
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Wir sind ein erfahrenes, junges Bauunternehmen, gegründet im Jahr 2018, aus
                Hamburg und realisieren Projekte mit klarer Planung, verlässlichen Partnern und
                strukturiertem Projektmanagement.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Unser Anspruch ist es transparente Kommunikation, planbare Kosten und
                nachvollziehbare Abläufe zu schaffen, damit Sie jederzeit wissen, wo Ihr Bauvorhaben
                steht.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Uns ist wichtig, dass Sie sich verstanden fühlen. Ehrliche Beratung, klare Antworten
                und echte Partnerschaft stehen bei uns im Mittelpunkt. Durch die gemeinschaftliche
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
                    Wir setzen auf:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">transparente Kommunikation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">realistische Zeit- und Kostenplanung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">klare Entscheidungen statt Fachchinesisch</span>
                    </li>
                  </ul>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Fehler entstehen dort, wo Informationen nicht kommuniziert werden. Deshalb legen wir
                    großen Wert auf transparente Abstimmungen, klare Entscheidungen und
                    nachvollziehbare Prozesse. So werden Projekte planbar statt kompliziert.
                  </p>
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
              So arbeiten wir – klar & verständlich
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: UsersIcon,
                title: "Generalübernehmer-Ansatz",
                desc: "Ein fester Ansprechpartner koordiniert alle Leistungen aus einer Hand",
              },
              {
                icon: CheckCircleIcon,
                title: "Strukturierte Abläufe",
                desc: "Klare Schritte von der Planung bis zur Übergabe",
              },
              {
                icon: StarIcon,
                title: "Erfahrene Partnerbetriebe",
                desc: "Regionale Fachbetriebe sorgen für zuverlässige Qualität",
              },
              {
                icon: ChatIcon,
                title: "Transparente Kostenkalkulation",
                desc: "Nachvollziehbare Angebote ohne versteckte Posten",
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

      {/* CTA */}
      <section
        className="py-16 md:py-24 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #d1d5db 5%, #111827 14%, #030712 100%)' }}
      >
        <div className="blob w-72 h-72 bg-blue-500/5 top-0 right-0" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lassen Sie uns Ihr Bauprojekt besprechen – unverbindlich und persönlich
          </h2>
          <Button href="/kontakt" variant="secondary" size="lg">
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
      </section>
    </div>
  );
}
