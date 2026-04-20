import { Award, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent via-[#f5d5e8] to-transparent">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#7c5ba6] to-[#a876a8] opacity-20 flex items-center justify-center">
              <span className="text-8xl opacity-30">♞</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d9f0e8] rounded-2xl opacity-40"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5a4a6b] mb-4">
                Sobre ChessK Academy
              </h2>
              <div className="divider-line w-16"></div>
            </div>

            <p className="text-lg text-[#8b7a9e] leading-relaxed">
              ChessK Academy nace de la pasión por el ajedrez y la educación. Creemos que el ajedrez es más que un juego: es una herramienta poderosa para desarrollar el pensamiento estratégico, la concentración y la disciplina en niños y adolescentes.
            </p>

            <p className="text-lg text-[#8b7a9e] leading-relaxed">
              Con más de 5 años de experiencia docente, hemos ayudado a más de 100 estudiantes a descubrir su potencial a través del ajedrez online. Nuestro enfoque personalizado asegura que cada estudiante aprenda al ritmo que le sea más cómodo.
            </p>

            {/* Key points */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#f5d5e8]">
                    <Award className="h-6 w-6 text-[#7c5ba6]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#5a4a6b]">Metodología Probada</h3>
                  <p className="text-[#8b7a9e] text-sm">Técnicas de enseñanza adaptadas a cada nivel y edad del estudiante.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#f5d5e8]">
                    <Users className="h-6 w-6 text-[#7c5ba6]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#5a4a6b]">Clases Personalizadas</h3>
                  <p className="text-[#8b7a9e] text-sm">Grupos pequeños y atención individual para maximizar el aprendizaje.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#f5d5e8]">
                    <Target className="h-6 w-6 text-[#7c5ba6]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#5a4a6b]">Resultados Comprobados</h3>
                  <p className="text-[#8b7a9e] text-sm">Nuestros estudiantes mejoran su concentración y rendimiento académico.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
