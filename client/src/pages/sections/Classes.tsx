import { Check } from 'lucide-react';

export default function Classes() {
  const plans = [
    {
      name: 'Principiante',
      description: 'Perfecto para quienes inician en el ajedrez',
      price: '$29.99',
      period: 'por mes',
      features: [
        'Clases 2 veces por semana',
        'Duración: 45 minutos',
        'Aprende movimientos básicos',
        'Acceso a material de estudio',
        'Soporte por correo',
      ],
      highlighted: false,
    },
    {
      name: 'Intermedio',
      description: 'Para estudiantes con experiencia previa',
      price: '$49.99',
      period: 'por mes',
      features: [
        'Clases 3 veces por semana',
        'Duración: 60 minutos',
        'Estrategias y tácticas avanzadas',
        'Análisis de partidas',
        'Acceso a biblioteca de aperturas',
        'Soporte prioritario',
      ],
      highlighted: true,
    },
    {
      name: 'Avanzado',
      description: 'Para jugadores competitivos',
      price: '$79.99',
      period: 'por mes',
      features: [
        'Clases 4 veces por semana',
        'Duración: 90 minutos',
        'Preparación para competencias',
        'Análisis profundo de partidas',
        'Acceso a base de datos completa',
        'Soporte 24/7',
        'Sesiones de mentoría',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="classes" className="section-padding bg-gradient-to-b from-transparent via-[#d9f0e8] to-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5a4a6b] mb-4">
            Nuestros Planes
          </h2>
          <div className="divider-line w-16 mx-auto mb-6"></div>
          <p className="text-lg text-[#8b7a9e] max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu nivel y objetivos. Todos incluyen acceso a plataforma online y material de estudio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card-elegant p-8 flex flex-col ${
                plan.highlighted ? 'md:scale-105 shadow-2xl' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block bg-gradient-to-r from-[#7c5ba6] to-[#a876a8] text-white px-4 py-1 rounded-full text-sm font-semibold w-fit">
                  Más Popular
                </div>
              )}

              <h3 className="text-2xl font-serif font-bold text-[#5a4a6b] mb-2">
                {plan.name}
              </h3>
              <p className="text-[#8b7a9e] text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-[#7c5ba6]">{plan.price}</span>
                <span className="text-[#8b7a9e] ml-2">{plan.period}</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                  plan.highlighted
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                Seleccionar Plan
              </button>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-[#7c5ba6] flex-shrink-0 mt-0.5" />
                    <span className="text-[#8b7a9e]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-[#e6d9f0] p-8 text-center" style={{ background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(4px)' }}>
          <h3 className="text-2xl font-serif font-bold text-[#5a4a6b] mb-4">
            ¿Necesitas algo personalizado?
          </h3>
          <p className="text-[#8b7a9e] mb-6">
            Ofrecemos planes personalizados para grupos o necesidades especiales. Contáctanos para más información.
          </p>
          <button className="btn-secondary">Solicitar Consulta</button>
        </div>
      </div>
    </section>
  );
}
