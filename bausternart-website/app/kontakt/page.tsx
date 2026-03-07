import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - BAU STERN ART GmbH Hamburg",
  description: "Kontaktieren Sie BAU STERN ART GmbH für Ihr Bauprojekt in Hamburg. Neubau, Sanierung, Projektierung oder Kauf- & Verkaufsbegleitung – wir beraten Sie gerne.",
};

export default function KontaktPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kontaktieren Sie uns
            </h1>
            <p className="text-xl text-blue-100">
              Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein Projekt mit uns
              realisieren? Wir freuen uns auf Ihre Nachricht und beraten Sie gerne.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Senden Sie uns eine Nachricht</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>

              {/* Address Card */}
              <Card className="mb-6">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Geschäftsadresse</h3>
                      <p className="text-gray-600">
                        BAU STERN ART GmbH<br />
                        Langbehnstr. 6<br />
                        22761 Hamburg-Bahrenfeld<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Email Card */}
              <Card className="mb-6">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">E-Mail</h3>
                      <a
                        href="mailto:asgari@bausternart.de"
                        className="text-blue-800 hover:underline"
                      >
                        asgari@bausternart.de
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Phone Card */}
              <Card className="mb-6">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Telefon</h3>
                      <p>
                        <a href="tel:+491728827078" className="text-blue-800 hover:underline">
                          +49 172 88 27 078
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Office Hours Card */}
              <Card className="mb-6">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Öffnungszeiten</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
                        <p className="text-sm text-gray-500">
                          Termine auch außerhalb der Öffnungszeiten nach Vereinbarung möglich
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4">Folgen Sie uns</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/bausternartgmbh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/bausart"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.my-hammer.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow"
                      aria-label="MyHammer"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.71 11.29l-2.79-2.79a1 1 0 00-1.41 0l-4.24 4.24a1 1 0 000 1.41l2.79 2.79a1 1 0 001.41 0l4.24-4.24a1 1 0 000-1.41zm8.5-8.5a1 1 0 00-1.41 0L16.95 5.64 14.16 2.85a1 1 0 00-1.41 0l-2.12 2.12a1 1 0 000 1.41l2.79 2.79-1.41 1.41L9.22 7.79a1 1 0 00-1.41 0L2.39 13.2a3 3 0 000 4.24l4.24 4.24a3 3 0 004.24 0l5.41-5.41a1 1 0 000-1.41l-2.79-2.79 1.41-1.41 2.79 2.79a1 1 0 001.41 0l2.12-2.12a1 1 0 000-1.41l-2.79-2.79 2.86-2.85a1 1 0 00-.08-1.49z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">So finden Sie uns</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.0697995872486!2d9.910864!3d53.572223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18ee32e6b0001%3A0x0!2sLangbehnstr.%206%2C%2022761%20Hamburg!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BAU STERN ART GmbH Standort"
            />
          </div>
          <p className="text-center text-gray-600 mt-4">
            Langbehnstr. 6, 22761 Hamburg-Bahrenfeld
          </p>
        </div>
      </section>

      {/* Registered Office Info */}
      <section className="py-12 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-1">
              <strong>Sitz der Gesellschaft:</strong> Vizelinstraße 67, 22529 Hamburg
            </p>
            <p>
              <strong>Geschäftsführer:</strong> B.Sc. Omid Asgari Dermanaki
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
