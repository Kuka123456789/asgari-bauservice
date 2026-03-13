"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLeistungenOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => pathname === path;
  const isLeistungenActive = () => pathname.startsWith("/leistungen");

  const leistungenSubpages = [
    { href: "/leistungen/neubau", label: "Neubau" },
    { href: "/leistungen/sanierung", label: "Sanierung" },
    { href: "/leistungen/projektierung", label: "Projektierung" },
    { href: "/leistungen/kauf-ankauf", label: "Kauf- & Verkaufsbegleitung" },
    { href: "/leistungen/zimmermann-dachdecker", label: "Zimmermann & Dachdecker" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-medium"
          : "bg-white shadow-soft"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 group"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">BS</span>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  BAU STERN ART
                </div>
                <div className="text-[10px] text-gray-500 font-medium tracking-wider">
                  HAMBURG
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive("/")
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
              }`}
            >
              Startseite
            </Link>
            <Link
              href="/ueber-uns"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive("/ueber-uns")
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
              }`}
            >
              Unternehmen
            </Link>
            {/* Leistungen Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLeistungenOpen(!leistungenOpen)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                  isLeistungenActive()
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
              >
                Leistungen
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${leistungenOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {leistungenOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <Link
                    href="/leistungen"
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isActive("/leistungen")
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setLeistungenOpen(false)}
                  >
                    Alle Leistungen
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  {leistungenSubpages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(page.href)
                          ? "text-blue-700 bg-blue-50"
                          : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setLeistungenOpen(false)}
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/referenzen"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive("/referenzen")
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
              }`}
            >
              Referenzen
            </Link>
            <Link
              href="/kontakt"
              className="ml-4 relative px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              <span className="sr-only">Menü öffnen</span>
              {!mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col space-y-2 pt-2">
              <Link
                href="/"
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Startseite
              </Link>
              <Link
                href="/ueber-uns"
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/ueber-uns")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Unternehmen
              </Link>
              {/* Mobile Leistungen Accordion */}
              <div>
                <button
                  onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
                  className={`w-full px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-between ${
                    isLeistungenActive()
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                  }`}
                >
                  Leistungen
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileLeistungenOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileLeistungenOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    <Link
                      href="/leistungen"
                      className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                        isActive("/leistungen")
                          ? "text-blue-700 bg-blue-50"
                          : "text-gray-600 hover:text-blue-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Alle Leistungen
                    </Link>
                    {leistungenSubpages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                          isActive(page.href)
                            ? "text-blue-700 bg-blue-50"
                            : "text-gray-600 hover:text-blue-700 hover:bg-gray-50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/referenzen"
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/referenzen")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Referenzen
              </Link>
              <Link
                href="/kontakt"
                className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-center shadow-md transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
