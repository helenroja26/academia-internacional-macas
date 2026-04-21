import { Award, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent via-[#f1e3eb] to-transparent">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left side - About image */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#d9f0e8]/55"></div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white shadow-[0_28px_80px_rgba(90,74,107,0.16)]">
              <img
                src="/about1%20(1).png"
                alt="ChessK Academy clases de ajedrez online para ninos"
                className="w-full h-auto max-h-[31rem] object-cover object-top"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 lg:space-y-7">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5a4a6b] mb-4">
                Sobre ChessK Academy
              </h2>
              <div className="divider-line w-16"></div>
            </div>

            <p className="text-base md:text-[1.05rem] text-[#625572] leading-relaxed">
              ChessK Academy nace de la pasión por el ajedrez y la educación. Creemos que el ajedrez es más que un juego: es una herramienta poderosa para desarrollar el pensamiento estratégico, la concentración y la disciplina en niños y adolescentes.
            </p>

            <p className="text-base md:text-[1.05rem] text-[#625572] leading-relaxed">
              Con más de 5 años de experiencia docente, hemos ayudado a más de 100 estudiantes a descubrir su potencial a través del ajedrez online. Nuestro enfoque personalizado asegura que cada estudiante aprenda al ritmo que le sea más cómodo.
            </p>

            {/* Key points */}
            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-[#f5d5e8]">
                    <Award className="h-5 w-5 text-[#7c5ba6]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#5a4a6b] text-[1.02rem]">Metodología Probada</h3>
                  <p className="text-[#625572] text-sm">Técnicas de enseñanza adaptadas a cada nivel y edad del estudiante.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-[#f5d5e8]">
                    <Users className="h-5 w-5 text-[#7c5ba6]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#5a4a6b] text-[1.02rem]">Clases Personalizadas</h3>
                  <p className="text-[#625572] text-sm">Grupos pequeños y atención individual para maximizar el aprendizaje.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-[#f5d5e8]">
                    <Target className="h-5 w-5 text-[#7c5ba6]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#5a4a6b] text-[1.02rem]">Resultados Comprobados</h3>
                  <p className="text-[#625572] text-sm">Nuestros estudiantes mejoran su concentración y rendimiento académico.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
