import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { BRAND_NAME } from '@shared/const';

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e6d9f0] shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)' }}>
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <BrandLogo className="h-12 w-12 rounded-full shadow-sm ring-1 ring-[#e6d9f0]" imageClassName="scale-[1.28]" />
          <span className="font-serif text-xl font-bold text-[#5a4a6b] hidden sm:inline">{BRAND_NAME}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[#625572] hover:text-[#7c5ba6] transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
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
        <div className="md:hidden bg-white border-t border-[#e6d9f0] py-4">
          <div className="container flex flex-col gap-4">
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
              className="btn-primary w-full mt-2"
            >
              Inscribirse
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
