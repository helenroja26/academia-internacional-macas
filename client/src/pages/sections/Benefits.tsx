import { Brain, Focus, Zap, Shield } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Brain,
      title: 'Desarrollo Cognitivo',
      description: 'El ajedrez estimula ambos hemisferios cerebrales, mejorando la capacidad de análisis y creatividad.',
    },
    {
      icon: Focus,
      title: 'Concentración',
      description: 'Aprende a mantener la atención durante períodos prolongados, habilidad esencial para el éxito académico.',
    },
    {
      icon: Zap,
      title: 'Pensamiento Estratégico',
      description: 'Desarrolla la capacidad de planificar a largo plazo y anticipar consecuencias de tus acciones.',
    },
    {
      icon: Shield,
      title: 'Disciplina y Paciencia',
      description: 'El ajedrez enseña la importancia de la disciplina, la paciencia y el manejo de la frustración.',
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-transparent via-[#f5d5e8] to-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5a4a6b] mb-4">
            Beneficios del Ajedrez
          </h2>
          <div className="divider-line w-16 mx-auto mb-6"></div>
          <p className="text-lg text-[#8b7a9e] max-w-2xl mx-auto">
            El ajedrez no es solo un juego. Es una herramienta poderosa para el desarrollo integral de niños y adolescentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="card-elegant p-8 flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-[#f5d5e8] to-[#d9f0e8]">
                    <Icon className="h-8 w-8 text-[#7c5ba6]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold text-[#5a4a6b] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#8b7a9e] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional benefits section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#7c5ba6] mb-2">95%</div>
            <p className="text-[#8b7a9e]">de nuestros estudiantes mejoran su concentración en 3 meses</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#7c5ba6] mb-2">88%</div>
            <p className="text-[#8b7a9e]">reportan mejor desempeño académico general</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#7c5ba6] mb-2">100%</div>
            <p className="text-[#8b7a9e]">de padres recomendarían nuestras clases</p>
          </div>
        </div>
      </div>
    </section>
  );
}
