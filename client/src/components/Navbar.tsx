import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link } from 'wouter';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Programas', href: '/programas' },
  { label: 'Equipo', href: '/equipo' },
  { label: 'Torneos', href: '/torneos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Campus', href: '/campus' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1d4b32]/[0.07] bg-[#fafbf8]/90 backdrop-blur-xl">
      <nav aria-label="Navegación principal" className="container mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 xl:px-12">
        <Link href="/" className="group flex w-36 shrink-0 items-center sm:w-44" aria-label="Academia Internacional Macas, inicio">
          <img
            src="/logo-academia-macas.png"
            alt=""
            aria-hidden="true"
            className="h-auto w-full object-contain transition-opacity group-hover:opacity-80"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] text-[#526e5b] transition hover:text-[#173c2b]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contacto"
          className="hidden min-h-10 items-center gap-2 rounded-full border border-[#e1b92f]/30 px-4 text-xs font-medium text-[#1e633c] transition hover:border-[#e1b92f]/60 hover:bg-[#f2c94c]/[0.07] md:inline-flex"
        >
          Reserva una clase <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <button
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d4b32]/10 text-[#315640] transition hover:border-[#1d4b32]/20 lg:hidden"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-[#1d4b32]/[0.07] bg-white lg:hidden">
          <div className="container mx-auto flex max-w-[1440px] flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-[#42694f] transition hover:bg-[#1e633c]/[0.05] hover:text-[#173c2b]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f2c94c] px-5 text-sm font-semibold text-[#183c2a]"
            >
              Reserva una clase gratuita <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
