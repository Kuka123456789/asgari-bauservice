"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Implement actual form submission to API route
    // For now, simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        consent: false,
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all"
          placeholder="Ihr vollständiger Name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all"
          placeholder="ihre.email@beispiel.de"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefon (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all"
          placeholder="+49 (0) 123 456789"
        />
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Art des Vorhabens
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all"
        >
          <option value="">Bitte wählen...</option>
          <option value="neubau">Neubau</option>
          <option value="sanierung">Sanierung</option>
          <option value="projektierung">Projektierung</option>
          <option value="kauf-ankauf">Kauf & Ankauf</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all resize-none"
          placeholder="Beschreiben Sie Ihr Anliegen..."
        />
      </div>

      {/* GDPR Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 w-4 h-4 text-blue-800 border-gray-300 rounded focus:ring-blue-800"
        />
        <label htmlFor="consent" className="text-sm text-gray-600">
          Ich habe die{" "}
          <a href="/datenschutz" className="text-blue-800 hover:underline">
            Datenschutzerklärung
          </a>{" "}
          zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme
          und für Rückfragen dauerhaft gespeichert werden. *
        </label>
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          onClick={undefined}
        >
          {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
        </Button>
      </div>

      {/* Success Message */}
      {status === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-medium text-green-800">Vielen Dank für Ihre Nachricht!</p>
              <p className="text-sm text-green-700 mt-1">
                Wir werden uns schnellstmöglich bei Ihnen melden.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-medium text-red-800">Ein Fehler ist aufgetreten</p>
              <p className="text-sm text-red-700 mt-1">
                Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.
              </p>
            </div>
          </div>
        </div>
      )}

      <p className="text-sm text-gray-500">* Pflichtfelder</p>
    </form>
  );
}
