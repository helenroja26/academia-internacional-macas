import { Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e6d9f0] mt-20 md:mt-32" style={{ background: 'linear-gradient(to bottom, transparent, rgba(245, 213, 232, 0.5))' }}>
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c5ba6] to-[#a876a8] flex items-center justify-center">
                <span className="text-white font-bold">♞</span>
              </div>
              <span className="font-serif text-lg font-bold text-[#5a4a6b]">ChessK Academy</span>
            </div>
            <p className="text-[#8b7a9e] text-sm md:text-base">
              Desarrollando mentes brillantes a través del ajedrez online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-[#5a4a6b] mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#about" className="text-[#8b7a9e] hover:text-[#7c5ba6] transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#classes" className="text-[#8b7a9e] hover:text-[#7c5ba6] transition-colors">
                  Clases
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#8b7a9e] hover:text-[#7c5ba6] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#8b7a9e] hover:text-[#7c5ba6] transition-colors">
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
                href="mailto:info@chesskacademy.com"
                className="flex items-center gap-2 text-[#8b7a9e] hover:text-[#7c5ba6] transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@chesskacademy.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-[#8b7a9e] hover:text-[#7c5ba6] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100085929913079"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8b7a9e] hover:text-[#7c5ba6] transition-colors"
              >
                <Facebook className="w-4 h-4" />
                ChessK Academy
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-line mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8b7a9e]">
          <p>© {currentYear} ChessK Academy. Todos los derechos reservados.</p>
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
