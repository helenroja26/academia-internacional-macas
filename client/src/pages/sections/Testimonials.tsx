import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      role: 'Madre de Santiago (10 años)',
      content: 'Las clases han transformado la concentración de Santiago. Ahora es más paciente y reflexivo. ¡Altamente recomendado!',
      rating: 5,
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Padre de Lucía (13 años)',
      content: 'La metodología es excelente. Lucía ha mejorado significativamente su pensamiento estratégico y su confianza en sí misma.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      role: 'Madre de Diego (8 años)',
      content: 'Buscaba una actividad que estimulara la mente de Diego. El ajedrez fue la opción perfecta. ¡Gracias ChessK Academy!',
      rating: 5,
    },
    {
      name: 'Pedro López',
      role: 'Padre de Valentina (12 años)',
      content: 'Las clases online son muy convenientes. La instructora es paciente y explica de manera clara. Valentina está feliz.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-transparent via-[#d9f0e8] to-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5a4a6b] mb-4">
            Lo que Dicen los Padres
          </h2>
          <div className="divider-line w-16 mx-auto mb-6"></div>
          <p className="text-lg text-[#8b7a9e] max-w-2xl mx-auto">
            Conoce las experiencias de familias que confían en ChessK Academy para el desarrollo de sus hijos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elegant p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#7c5ba6] text-[#7c5ba6]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#8b7a9e] mb-6 flex-1 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif font-bold text-[#5a4a6b]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#8b7a9e]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-16 text-center">
          <p className="text-[#8b7a9e] mb-4">
            Confían en nosotros más de 100 familias en toda Latinoamérica
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#7c5ba6]">4.9/5</p>
              <p className="text-sm text-[#8b7a9e]">Calificación promedio</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#7c5ba6]">100+</p>
              <p className="text-sm text-[#8b7a9e]">Estudiantes activos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#7c5ba6]">98%</p>
              <p className="text-sm text-[#8b7a9e]">Tasa de retención</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
