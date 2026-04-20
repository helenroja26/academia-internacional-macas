import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#f5d5e8] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#d9f0e8] rounded-full opacity-20 blur-3xl"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center gap-8 md:gap-10">
          {/* Logo placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#7c5ba6] to-[#a876a8] flex items-center justify-center shadow-2xl">
            <span className="text-6xl md:text-7xl text-white">♞</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#5a4a6b]">
              ChessK Academy
            </h1>
            <p className="text-xl md:text-2xl text-[#8b7a9e] font-light max-w-2xl mx-auto">
              Entrenamos mentes brillantes a través del ajedrez
            </p>
          </div>

          {/* Tagline */}
          <div className="divider-line w-24 md:w-32"></div>
          
          <p className="text-lg md:text-xl text-[#8b7a9e] max-w-3xl mx-auto leading-relaxed">
            Clases online personalizadas para niños y adolescentes. Desarrolla concentración, lógica y disciplina mientras dominas el juego de reyes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Comenzar Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('classes')}
              className="btn-secondary"
            >
              Ver Planes
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 md:pt-12 flex flex-col sm:flex-row gap-6 md:gap-12 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#7c5ba6]">100+</p>
              <p className="text-sm md:text-base text-[#8b7a9e]">Estudiantes Activos</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-[#e6d9f0]"></div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#7c5ba6]">5 años</p>
              <p className="text-sm md:text-base text-[#8b7a9e]">Experiencia Docente</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-[#e6d9f0]"></div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#7c5ba6]">3 Niveles</p>
              <p className="text-sm md:text-base text-[#8b7a9e]">Principiante a Avanzado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
