import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - BAU STERN ART GmbH",
  description: "Impressum und rechtliche Informationen der BAU STERN ART GmbH, Hamburg.",
};

export default function ImpressumPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>BAU STERN ART GmbH</strong><br />
            Vizelinstraße 67<br />
            22529 Hamburg<br />
            Deutschland
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Geschäftsadresse</h2>
          <p>
            Langbehnstr. 6<br />
            22761 Hamburg-Bahrenfeld<br />
            Deutschland
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:info@bausternart.de" className="text-blue-800 hover:underline">info@bausternart.de</a><br />
            Website: <a href="https://www.bausternart.de" className="text-blue-800 hover:underline">www.bausternart.de</a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Vertreten durch</h2>
          <p>
            Geschäftsführer: B.Sc. Omid Asgari Dermanaki
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Registereintrag</h2>
          <p>
            Eintragung im Handelsregister<br />
            Registergericht: Amtsgericht Hamburg<br />
            Gründungsdatum: 27. Juli 2018
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            (wird auf Anfrage mitgeteilt)
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Berufsbezeichnung</h2>
          <p>
            Bauträger, Generalübernehmer, Immobilienmakler<br />
            Verliehen in: Deutschland
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            B.Sc. Omid Asgari Dermanaki<br />
            Vizelinstraße 67<br />
            22529 Hamburg
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Haftungsausschluss</h2>

          <h3 className="text-xl font-bold mt-6 mb-3">Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
            Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
            waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline ml-1">
              https://ec.europa.eu/consumers/odr
            </a>.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Stand: November 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
