import { useState } from 'react';
import { Facebook, Instagram, Menu, MessageCircle, X } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { BRAND_NAME, CONTACT_WHATSAPP_URL, FACEBOOK_URL, INSTAGRAM_URL } from '@shared/const';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Sobre Nosotros', id: 'about' },
    { label: 'Clases', id: 'classes' },
    { label: 'Beneficios', id: 'benefits' },
    { label: 'Testimonios', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
  ];

  const socialLinks = [
    {
      label: 'WhatsApp',
      href: CONTACT_WHATSAPP_URL,
      icon: MessageCircle,
    },
    {
      label: 'Facebook',
      href: FACEBOOK_URL,
      icon: Facebook,
    },
    {
      label: 'Instagram',
      href: INSTAGRAM_URL,
      icon: Instagram,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e6d9f0] shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)' }}>
      <div className="container flex min-h-20 items-center justify-between gap-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <BrandLogo className="h-12 w-12 rounded-full shadow-sm ring-1 ring-[#e6d9f0]" imageClassName="scale-[1.28]" />
          <span className="font-serif text-xl font-bold text-[#5a4a6b] hidden sm:inline">{BRAND_NAME}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm xl:text-[0.95rem] text-[#625572] hover:text-[#7c5ba6] transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-end gap-3 lg:min-w-[16rem] xl:min-w-[23rem]">
          <div className="hidden xl:flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e6d9f0] bg-white/90 text-[#7c5ba6] transition hover:-translate-y-0.5 hover:border-[#cdb7e3] hover:bg-[#faf7fd]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary-glow nav-cta-glow px-6 xl:px-8"
          >
            Inscribirse
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#7c5ba6]" />
          ) : (
            <Menu className="w-6 h-6 text-[#7c5ba6]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#e6d9f0] py-4 shadow-[0_20px_45px_rgba(90,74,107,0.08)]">
          <div className="container flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-[#625572] hover:text-[#7c5ba6] transition-colors font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary-glow nav-cta-glow w-full mt-2"
            >
              Inscribirse
            </button>

            <div className="divider-line my-2"></div>

            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[#e6d9f0] bg-[#fcf9fe] px-3 py-3 text-xs font-semibold text-[#5a4a6b] transition hover:border-[#cdb7e3]"
                >
                  <Icon className="h-4 w-4 text-[#7c5ba6]" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
