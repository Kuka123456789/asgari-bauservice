import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingIcon,
  ImageIcon,
  ChatIcon,
  HomeModernIcon,
  TrophyIcon,
  StarIcon,
  UsersIcon,
  PhoneIcon,
  RocketIcon,
  CheckCircleIcon,
} from "@/components/Icons";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6">
                <BuildingIcon className="w-4 h-4 text-blue-200" />
                <span className="text-blue-200 text-sm font-medium">Hanseatisches Bauunternehmen</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Neubau, Sanierung &</span>
                <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent mt-2">
                  Projektierung
                </span>
                <span className="text-white">aus einer Hand</span>
              </h1>

              <p className="text-xl text-blue-100/90 mb-4 leading-relaxed">
                Bau Stern ART GmbH – Ihr Bauunternehmen für hochwertige Bauprojekte in Hamburg und Umgebung.
              </p>
              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
                Als Generalübernehmer entwickeln und realisieren wir Wohn- und Gewerbeimmobilien
                mit hoher Sorgfalt und Klarheit – von der ersten Idee bis zur schlüsselfertigen Übergabe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/kontakt" variant="secondary" size="lg">
                  <ChatIcon className="w-5 h-5 mr-2 inline" />
                  Projekt anfragen
                </Button>
                <Button
                  href="/referenzen"
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-900"
                >
                  <ImageIcon className="w-5 h-5 mr-2 inline" />
                  Referenzen ansehen
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:h-[600px] h-[400px] animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/projects/IMG_0896.jpg"
                  alt="Saniertes Wohnhaus in Hamburg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Schwerpunkte Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Unsere Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Unsere Schwerpunkte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Wir verbinden technische Kompetenz mit strukturiertem Projektmanagement.
              So entstehen Immobilien, die langfristig funktionieren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Neubau */}
            <Link href="/leistungen/neubau">
              <Card className="group h-full hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Neubau</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Ein- und Mehrfamilienhäuser, Doppel- und Reihenhäuser sowie kleinere Wohnanlagen.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Sanierung */}
            <Link href="/leistungen/sanierung">
              <Card className="group h-full hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Sanierung</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Kernsanierungen, Umbauten und Modernisierungen von Bestandsimmobilien.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Projektierung */}
            <Link href="/leistungen/projektierung">
              <Card className="group h-full hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Projektierung</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Entwicklung tragfähiger Konzepte inklusive Kosten-, Zeit- und Ablaufplanung.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Kauf & Ankauf */}
            <Link href="/leistungen/kauf-ankauf">
              <Card className="group h-full hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Kauf- & Verkaufsbegleitung</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Wir schätzen den Sanierungsaufwand ab und beraten Sie zum Kauf oder Verkauf.
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Ihr Vorteil Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ihr Vorteil mit Bau Stern ART
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UsersIcon,
                title: "Generalübernehmer",
                desc: "Ein verantwortlicher Partner, der Planung, Ausschreibung und Ausführung koordiniert",
              },
              {
                icon: CheckCircleIcon,
                title: "Klare Kosten",
                desc: "Transparente Kalkulation und realistische Budgets statt vager Schätzungen",
              },
              {
                icon: RocketIcon,
                title: "Verbindliche Abläufe",
                desc: "Strukturierte Projektsteuerung und abgestimmte Zeitpläne",
              },
              {
                icon: StarIcon,
                title: "Planbare Qualität",
                desc: "Zusammenarbeit mit bewährten Handwerksbetrieben aus der Region",
              },
              {
                icon: ChatIcon,
                title: "Kommunikation auf Augenhöhe",
                desc: "Kurze Entscheidungswege, direkte Erreichbarkeit, ehrliche Aussagen",
              },
              {
                icon: TrophyIcon,
                title: "Erfahrung seit 2018",
                desc: "Langjährige Expertise im Hamburger Immobilienmarkt",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projektablauf Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              So läuft ein Projekt mit der Bau Stern ART GmbH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Erstgespräch & Bestandsaufnahme",
                desc: "Gemeinsames Kennenlernen, Klärung Ihrer Ziele, Budgetrahmen und Prüfung der Vorortgegebenheiten.",
              },
              {
                step: "2",
                title: "Projektierung & Konzept",
                desc: "Entwicklung eines baulich und wirtschaftlich sinnvollen Konzepts mit ersten Kosten- und Terminrahmen.",
              },
              {
                step: "3",
                title: "Detailplanung & Vorbereitung",
                desc: "Ausarbeitung von Plänen, Einbindung von Fachplanern, Vorbereitung von Genehmigungen und Vergaben.",
              },
              {
                step: "4",
                title: "Bauausführung",
                desc: "Koordination aller Gewerke, laufende Kontrolle von Qualität, Terminen und Kosten.",
              },
              {
                step: "5",
                title: "Übergabe & Nachbetreuung",
                desc: "Abnahme, Dokumentation und bei Bedarf weitere Begleitung bei späteren Anpassungen.",
              },
            ].map((phase) => (
              <div key={phase.step} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <span className="text-2xl font-bold">{phase.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                <p className="text-blue-200 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Unsere Philosophie
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Wer wir sind und wie wir arbeiten
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Wir sind ein ambitioniertes Team aus jungen und erfahrenen Fachleuten.
                Uns verbindet der Anspruch, Projekte sauber vorzubereiten, strukturiert umzusetzen
                und Offenheit in der Kommunikation zu leben.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fehler entstehen dort, wo Informationen fehlen. Deshalb setzen wir auf klare Absprachen,
                nachvollziehbare Entscheidungen und transparente Abläufe. Sie wissen jederzeit,
                wo Ihr Projekt steht und welche Schritte als Nächstes anstehen.
              </p>
              <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                <p className="text-lg font-medium text-gray-900 italic">
                  &ldquo;Jedes Problem hat eine Lösung – unsere Aufgabe ist es, sie frühzeitig zu finden.&rdquo;
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/IMG_4377.jpg"
                alt="Saniertes Wohnhaus bei Nacht"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                <RocketIcon className="w-4 h-4" />
                Starten Sie Ihr Projekt
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Gerne besprechen wir Ihr Vorhaben
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Ob Neubau, Sanierung, Projektierung oder Kauf- & Verkaufsbegleitung
                mit Entwicklungspotenzial – wir freuen uns auf ein erstes, unverbindliches Gespräch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/kontakt" variant="secondary" size="lg">
                  <PhoneIcon className="w-5 h-5 mr-2 inline" />
                  Jetzt Kontakt aufnehmen
                </Button>
                <Button
                  href="/referenzen"
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-900"
                >
                  <ImageIcon className="w-5 h-5 mr-2 inline" />
                  Referenzen ansehen
                </Button>
              </div>

              {/* Quick Contact Info */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex flex-wrap justify-center gap-8 text-white/90">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+49 (40) 227 57 606</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@bausternart.de</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Hamburg-Bahrenfeld</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
