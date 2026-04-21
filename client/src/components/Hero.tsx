import React from 'react';
import { ArrowRight, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { BRAND_LOGO_PATH, FACEBOOK_URL, INSTAGRAM_URL, CONTACT_WHATSAPP_URL } from '@shared/const';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-14 pb-14 md:pt-24 md:pb-20 overflow-hidden bg-gradient-to-br from-[#f4edf9] via-[#eee5f7] to-[#edf3ff] flex items-center">
      
      {/* --- FONDO DE TABLERO REFINADO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,91,166,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(92,122,184,0.16),transparent_30%)]"></div>
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #7c5ba6 25%, transparent 25%), 
              linear-gradient(-45deg, #7c5ba6 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #7c5ba6 75%), 
              linear-gradient(-45deg, transparent 75%, #7c5ba6 75%)
            `,
            backgroundSize: '46px 46px',
            backgroundPosition: '0 0, 0 23px, 23px 23px, 23px 0',
            maskImage: 'radial-gradient(circle at center, black 42%, transparent 88%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 42%, transparent 88%)'
          }}
        ></div>
        
        {/* Glows ambientales sutiles */}
        <div className="absolute top-[-8%] right-[8%] w-[380px] h-[380px] bg-purple-300/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-8%] left-[8%] w-[320px] h-[320px] bg-indigo-200/35 rounded-full blur-[90px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6">
          
          {/* --- BLOQUE DE TEXTO: MÁS COMPACTO --- */}
          <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-[35rem]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100/70 border border-purple-200/40 rounded-full text-purple-700 text-[11px] font-bold uppercase tracking-[0.15em] mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              Academia de Ajedrez Online
            </div>

            <div className="space-y-5">
              <h1 className="text-6xl md:text-7xl lg:text-[5.25rem] font-serif font-bold text-[#2d1b4d] leading-[0.94] tracking-tight">
                ChessK <br />
                <span className="text-[#7c5ba6]">Academy</span>
              </h1>
              <p className="text-lg md:text-xl text-[#4f4268] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                Entrenamos mentes brillantes a través de clases personalizadas de ajedrez para niños y adolescentes.
              </p>
            </div>

            {/* Llamados a la acción */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-10 py-4 bg-[#7c5ba6] text-white rounded-2xl font-bold flex items-center justify-center gap-2 group hover:bg-[#6a4a91] transition-all shadow-lg shadow-purple-200/50"
              >
                Comenzar ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('classes')}
                className="w-full sm:w-auto px-10 py-4 bg-white text-[#7c5ba6] border border-purple-100 rounded-2xl font-bold hover:bg-purple-50 transition-all shadow-sm"
              >
                Ver planes
              </button>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-[#1f8f62] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#187552] transition-all shadow-lg shadow-emerald-200/60"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-semibold text-[#5a4a6b] shadow-sm transition hover:border-[#d9c9eb] hover:bg-white"
              >
                <Facebook className="h-4 w-4 text-[#7c5ba6]" />
                Facebook
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-semibold text-[#5a4a6b] shadow-sm transition hover:border-[#d9c9eb] hover:bg-white"
              >
                <Instagram className="h-4 w-4 text-[#7c5ba6]" />
                Instagram
              </a>
            </div>
          </div>

          {/* --- BLOQUE DEL LOGO: TAMAÑO AJUSTADO PARA EVITAR DESBORDE --- */}
          <div className="flex-1 flex justify-center items-center lg:justify-center lg:-ml-2">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-[70px]"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] animate-float">
                <img 
                  src={BRAND_LOGO_PATH}
                  alt="ChessK Academy Logo" 
                  className="w-full h-full object-contain drop-shadow-[0_18px_40px_rgba(45,27,77,0.16)]"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400?text=ChessK+Logo";
                  }}
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}