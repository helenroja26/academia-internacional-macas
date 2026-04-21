import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Qué edad mínima se requiere para tomar clases?',
      answer: 'Aceptamos estudiantes a partir de 6 años. Sin embargo, recomendamos que los niños tengan al menos 7-8 años para un mejor aprovechamiento de las clases.',
    },
    {
      question: '¿Es necesario tener experiencia previa en ajedrez?',
      answer: 'No, nuestros planes están diseñados para todos los niveles. Comenzamos desde lo básico si es necesario, y adaptamos el ritmo a cada estudiante.',
    },
    {
      question: '¿Cómo funcionan las clases online?',
      answer: 'Las clases se imparten a través de plataformas de videoconferencia seguras. Usamos tableros virtuales interactivos y compartimos pantalla para una mejor experiencia de aprendizaje.',
    },
    {
      question: '¿Puedo cambiar de plan en cualquier momento?',
      answer: 'Sí, puedes cambiar tu plan en cualquier momento sin penalización. Solo contáctanos y realizaremos el cambio en tu próximo período de facturación.',
    },
    {
      question: '¿Qué incluye el acceso a la plataforma?',
      answer: 'Acceso a material de estudio, videos tutoriales, ejercicios prácticos, análisis de partidas y un tablero virtual para practicar entre clases.',
    },
    {
      question: '¿Hay período de prueba?',
      answer: 'Sí, ofrecemos una clase de prueba gratuita de 30 minutos. Contáctanos para agendar tu sesión de demostración.',
    },
    {
      question: '¿Cuál es la política de cancelación?',
      answer: 'Puedes cancelar tu suscripción en cualquier momento sin cargos adicionales. Solo necesitas notificarnos con 7 días de anticipación.',
    },
    {
      question: '¿Ofrecen clases grupales o solo individuales?',
      answer: 'Ofrecemos ambas modalidades. Las clases pueden ser individuales o en pequeños grupos (máximo 4 estudiantes) según tu preferencia.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-transparent via-[#f1e3eb] to-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5a4a6b] mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="divider-line w-16 mx-auto mb-6"></div>
          <p className="text-lg text-[#625572] max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestras clases, planes y modalidades de enseñanza.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-elegant overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between transition-colors hover:bg-[#f5d5e8]"
                style={{ '--hover-bg': 'rgba(245, 213, 232, 0.3)' } as any}
              >
                <h3 className="text-lg font-serif font-bold text-[#5a4a6b] text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#7c5ba6] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 py-6 border-t border-[#e6d9f0]" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                  <p className="text-[#625572] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#625572] mb-6">
            ¿No encontraste la respuesta que buscas?
          </p>
          <button className="btn-primary">
            Contacta con Nosotros
          </button>
        </div>
      </div>
    </section>
  );
}
