import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';
import {
  CONTACT_EMAIL,
  CONTACT_WHATSAPP_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
} from '@shared/const';

const footerLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Programas', href: '/programas' },
  { label: 'Equipo', href: '/equipo' },
  { label: 'Torneos', href: '/torneos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Campus virtual', href: '/campus' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1d4b32]/[0.08] bg-[#fafbf8]">
      <div className="container mx-auto max-w-[1380px] px-6 py-12 md:py-16 xl:px-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_1fr] md:gap-12">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex w-48 items-center">
              <img
                src="/logo-academia-macas.png"
                alt="Academia Internacional Macas"
                className="h-auto w-full object-contain"
              />
            </Link>
            <p className="mt-5 text-sm leading-6 text-[#5c7463]">
              Formando campeones dentro y fuera del tablero.
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1d4b32]/10 text-[#526e5b] transition hover:border-[#e1b92f]/40 hover:text-[#1e633c]"
            >
              <span className="text-sm font-semibold">f</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1d4b32]/10 text-[#526e5b] transition hover:border-[#e1b92f]/40 hover:text-[#1e633c]"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#315640]">Explora</h2>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-[#5c7463] transition hover:text-[#1e633c]">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#315640]">Hablemos de tu próximo movimiento</h2>
            <div className="space-y-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-xs text-[#5c7463] transition hover:text-[#1e633c]">
                <Mail className="h-3.5 w-3.5 text-[#1e633c]/70" /> {CONTACT_EMAIL}
              </a>
              <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-[#5c7463] transition hover:text-[#1e633c]">
                <MessageCircle className="h-3.5 w-3.5 text-[#1e633c]/70" /> Escríbenos por WhatsApp
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <div className="flex items-center gap-3 text-xs text-[#5c7463]">
                <MapPin className="h-3.5 w-3.5 text-[#1e633c]/70" /> Macas, Ecuador · Formación internacional
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#1d4b32]/[0.07] pt-6 text-[10px] text-[#637a69] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Academia Internacional Macas. Todos los derechos reservados.</p>
          <Link href="/" className="inline-flex items-center gap-1.5 transition hover:text-[#395f47]">Volver al inicio <ArrowUpRight className="h-3 w-3" /></Link>
        </div>
      </div>
    </footer>
  );
}
