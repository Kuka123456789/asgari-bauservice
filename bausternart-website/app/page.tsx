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

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Ihr Baupartner in Hamburg –</span>
                <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent mt-2">
                  Neubau, Sanierung &
                </span>
                <span className="text-white">Projektierung aus einer Hand</span>
              </h1>

              <p className="text-xl text-blue-100/90 mb-4 leading-relaxed">
                Bau Stern ART GmbH – Ihr Bauunternehmen für hochwertige Bauprojekte in Hamburg und Umgebung.
              </p>
              <p className="text-lg text-blue-100/80 mb-4 leading-relaxed font-semibold">
                Verlässlich planen. Hochwertig bauen. Transparent umsetzen.
              </p>
              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
                Als erfahrener Generalübernehmer begleiten wir Ihr Bauvorhaben persönlich – vom ersten
                Gespräch bis zur schlüsselfertigen Übergabe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/kontakt" variant="secondary" size="lg">
                  <ChatIcon className="w-5 h-5 mr-2 inline" />
                  Jetzt Projekt kostenlos besprechen
                </Button>
                <Button
                  href="/kontakt"
                  variant="outline"
                  size="lg"
                  className="!bg-white/10 backdrop-blur-sm !border-white/30 !text-white hover:!bg-white/25 hover:!shadow-lg hover:!shadow-white/10"
                >
                  <ImageIcon className="w-5 h-5 mr-2 inline" />
                  <span className="flex flex-col items-start leading-tight">
                    <span>Unverbindliches Angebot erhalten</span>
                    <span className="text-xs font-normal opacity-80">(gerne, wenn Pläne bereit liegen und eingesendet werden können, um den Prozess zu beschleunigen)</span>
                  </span>
                </Button>
              </div>
              <div className="mt-4">
                <Button
                  href="/referenzen"
                  variant="outline"
                  size="lg"
                  className="!bg-white/10 backdrop-blur-sm !border-white/30 !text-white hover:!bg-white/25 hover:!shadow-lg hover:!shadow-white/10"
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

      {/* Schwerpunkte Section — gradient starts from hero's dark color */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #0f172a 0%, #1e3a8a 4%, #f1f5f9 14%, #ffffff 30%)' }}
      >
        {/* Decorative blobs */}
        <div className="blob w-72 h-72 bg-blue-200/20 top-20 -left-20" />
        <div className="blob w-96 h-96 bg-orange-200/15 bottom-10 -right-24" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Unsere Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Unser Fokus
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
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Neubau von Ein- & Mehrfamilienhäusern</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Von der Planung bis zur Ausführung, maßgeschneidert nach Ihren Wünschen, sorgen wir für Kostenkontrolle, Terminsicherheit und hochwertige Bauqualität.
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
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Sanierung & Umbau</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Modernisierung mit Wertsteigerung und effizienter Umsetzung. Energetisch, technisch und optisch. Ziel ist die nachhaltige Wertsteigerung Ihrer Immobilie bei minimaler Bauzeit.
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
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Projektierung & Bauleitung</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Unsere Projektierung umfasst Konzeptentwicklung, Kostenplanung und Baukoordination. Als Generalübernehmer stellen wir sicher, dass alle Gewerke effizient zusammenarbeiten.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Kauf & Entwicklung */}
            <Link href="/leistungen/kauf-ankauf">
              <Card className="group h-full hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Kauf & Entwicklung</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Wir unterstützen beim Kauf von Grundstücken und Immobilien in Hamburg und Umgebung. Ferner prüfen deren bauliches Entwicklungspotenzial in technisch, wirtschaftlich und realistisch Hinsicht.
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Ihr Vorteil Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative accent */}
        <div className="blob w-64 h-64 bg-blue-100/20 top-0 right-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ihr Vorsprung mit uns als Bauunternehmen in Hamburg
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UsersIcon,
                title: "Generalübernehmer-Prinzip",
                desc: "Ein zentraler Auftragnehmer für Planung, Koordination und Umsetzung.",
              },
              {
                icon: CheckCircleIcon,
                title: "Transparente Kosten",
                desc: "Realistische Kalkulationen ohne versteckte Überraschungen.",
              },
              {
                icon: RocketIcon,
                title: "Zuverlässige Terminplanung",
                desc: "Strukturierte Abläufe und konsequente Bauüberwachung.",
              },
              {
                icon: StarIcon,
                title: "Regionale Expertise",
                desc: "Erfahrung mit Bauprojekten in Hamburg und Umgebung.",
              },
              {
                icon: ChatIcon,
                title: "Persönliche Betreuung",
                desc: "Direkte Kommunikation, kurze Wege und feste Ansprechpartner.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-100/80 hover:from-blue-50/50 hover:to-blue-100/30 hover:border-blue-200/50 hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200/60 rounded-lg flex items-center justify-center shadow-sm">
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

      {/* Projektablauf Section — gradient fades in from white at top */}
      <section
        className="py-20 md:py-32 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #dbeafe 6%, #1e40af 14%, #1e3a8a 30%, #1e40af 80%, #1e3a8a 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>
        {/* Decorative orbs */}
        <div className="blob w-48 h-48 bg-blue-400/10 top-10 left-10" />
        <div className="blob w-64 h-64 bg-cyan-400/8 bottom-0 right-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              So läuft Ihr Bauprojekt mit unserem Bauunternehmen ab
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Erstgespräch & Beratung",
                desc: "Wir hören zu, analysieren Ihre Anforderungen und besprechen erste Möglichkeiten.",
              },
              {
                step: "2",
                title: "Planung & Projektierung",
                desc: "Erstellung eines realistischen Kosten- und Zeitplans. Koordination aller Gewerke und Vorbereitung der Bauphase.",
              },
              {
                step: "3",
                title: "Umsetzung & Bauleitung",
                desc: "Professionelle Ausführung mit laufender Qualitäts- und Terminkontrolle.",
              },
              {
                step: "4",
                title: "Fertigstellung & Übergabe",
                desc: "Schlüsselfertige Übergabe – transparent, geprüft und termingerecht.",
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

      {/* Philosophie Section — gradient fades in from blue at top */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #1e3a8a 0%, #93c5fd 6%, #f1f5f9 14%, #f9fafb 30%)' }}
      >
        {/* Decorative elements */}
        <div className="blob w-80 h-80 bg-blue-100/15 -top-10 -right-20" />
        <div className="blob w-60 h-60 bg-orange-100/10 bottom-0 -left-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Unsere Philosophie
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Bauen heißt Vertrauen
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Wir sind ein ambitioniertes Team aus jungen und erfahrenen Fachleuten.
                Uns verbindet der Anspruch, Projekte sauber vorzubereiten, strukturiert umzusetzen
                und Offenheit in der Kommunikation zu leben.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Deshalb legen wir größten Wert auf klare Absprachen, nachvollziehbare
                Entscheidungen und eine partnerschaftliche Zusammenarbeit.
                Unser Ziel ist nicht nur ein fertiges Gebäude, sondern ein Ergebnis, mit dem Sie
                langfristig zufrieden sind.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/30 to-orange-200/20 rounded-[2rem] blur-2xl" />
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
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
                Bereit, Ihr Bauprojekt zu starten?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-4">
                Lassen Sie uns unverbindlich über Ihr Vorhaben sprechen.
              </p>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                Wir realisieren Bauprojekte in Hamburg und Umland, ob von Altona, Eimsbüttel,
                Wandsbek über Harburg, Bergedorf oder Umgebung. Wir beraten Sie kostenlos und unverbindlich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/kontakt" variant="secondary" size="lg">
                  <PhoneIcon className="w-5 h-5 mr-2 inline" />
                  Jetzt Projekt anfragen
                </Button>
                <Button
                  href="/referenzen"
                  variant="outline"
                  size="lg"
                  className="!bg-white/10 backdrop-blur-sm !border-white/30 !text-white hover:!bg-white/25 hover:!shadow-lg hover:!shadow-white/10"
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
                    <span>+49 172 88 27 078</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Asgari@bausternart.de</span>
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
