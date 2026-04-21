import { Facebook, Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { BRAND_NAME, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF, CONTACT_WHATSAPP_URL, FACEBOOK_URL, INSTAGRAM_URL } from '@shared/const';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e6d9f0] mt-20 md:mt-32" style={{ background: 'linear-gradient(to bottom, transparent, rgba(245, 213, 232, 0.5))' }}>
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <BrandLogo className="h-11 w-11 rounded-full shadow-sm ring-1 ring-[#e6d9f0]" imageClassName="scale-[1.28]" />
              <span className="font-serif text-lg font-bold text-[#5a4a6b]">{BRAND_NAME}</span>
            </div>
            <p className="text-[#625572] text-sm md:text-base">
              Desarrollando mentes brillantes a través del ajedrez online.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1f8f62] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#187552]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#e6d9f0] bg-white px-4 py-2 text-sm font-semibold text-[#5a4a6b] transition hover:border-[#d2c0e6] hover:bg-[#faf7fd]"
              >
                <Facebook className="h-4 w-4 text-[#7c5ba6]" />
                Facebook
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#e6d9f0] bg-white px-4 py-2 text-sm font-semibold text-[#5a4a6b] transition hover:border-[#d2c0e6] hover:bg-[#faf7fd]"
              >
                <Instagram className="h-4 w-4 text-[#7c5ba6]" />
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-[#5a4a6b] mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#about" className="text-[#625572] hover:text-[#7c5ba6] transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#classes" className="text-[#625572] hover:text-[#7c5ba6] transition-colors">
                  Clases
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#625572] hover:text-[#7c5ba6] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#625572] hover:text-[#7c5ba6] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-[#5a4a6b] mb-4">Contacto</h4>
            <div className="space-y-3 text-sm md:text-base">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-[#625572] hover:text-[#7c5ba6] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={CONTACT_PHONE_HREF}
                className="flex items-center gap-2 text-[#625572] hover:text-[#7c5ba6] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#625572] hover:text-[#7c5ba6] transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Escríbenos por Facebook
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#625572] hover:text-[#7c5ba6] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Síguenos en Instagram
              </a>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#625572] hover:text-[#7c5ba6] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-line mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#625572]">
          <p>© {currentYear} {BRAND_NAME}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#7c5ba6] transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-[#7c5ba6] transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
