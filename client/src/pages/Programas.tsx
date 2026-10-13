import { ArrowRight, Brain, Crown, Sparkles, Trophy } from 'lucide-react';
import { Link } from 'wouter';
import { CONTACT_WHATSAPP_URL } from '@shared/const';
import { PageSection } from '@/components/PageLayout';
import PageLayout from '@/components/PageLayout';

const programs = [
  {
    number: '01',
    title: 'Iniciación',
    level: 'PRIMEROS MOVIMIENTOS',
    description:
      'Descubre el tablero, conoce el movimiento de cada pieza y aprende las primeras ideas del ajedrez jugando.',
    outcomes: ['Reglas y movimientos', 'Principios de apertura', 'Hábitos de concentración'],
    image: '/chess-kids.jpg',
    alt: 'Niños aprendiendo y practicando ajedrez',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Intermedio',
    level: 'JUEGA CON INTENCIÓN',
    description:
      'Construye una base más sólida con ejercicios tácticos, planes estratégicos y revisión de partidas.',
    outcomes: ['Motivos tácticos', 'Planes de medio juego', 'Análisis de partidas'],
    image: '/chess-classroom.jpg',
    alt: 'Niños reunidos para practicar ajedrez',
    icon: Brain,
  },
  {
    number: '03',
    title: 'Competición',
    level: 'PREPÁRATE PARA COMPETIR',
    description:
      'Entrena cálculo, preparación y fortaleza mental para llegar a cada torneo con un plan de juego.',
    outcomes: ['Preparación para torneos', 'Cálculo y toma de decisiones', 'Análisis después de competir'],
    image: '/chess-competition.jpg',
    alt: 'Jugador concentrado durante una partida de ajedrez',
    icon: Trophy,
  },
  {
    number: '04',
    title: 'Alto rendimiento',
    level: 'POTENCIAL SIN TECHO',
    description:
      'Una ruta de entrenamiento avanzada, diseñada para jugadores que buscan nuevos desafíos competitivos.',
    outcomes: ['Estudio individualizado', 'Preparación estratégica', 'Seguimiento de objetivos'],
    image: '/mf mauro.jpg',
    alt: 'Partida de ajedrez en un entorno competitivo',
    icon: Crown,
  },
];

export default function Programas() {
  return (
    <PageLayout
      title="Programas de ajedrez"
      description="Conoce los programas de iniciación, nivel intermedio, competición y alto rendimiento de la Academia Internacional Macas."
      eyebrow="Una ruta para cada jugador"
      heading={<>Encuentra tu próximo movimiento.</>}
      lead="Programas pensados para acompañar cada etapa del aprendizaje. Conversamos contigo para encontrar el punto de partida adecuado."
      image={{
        src: '/chess-kids.jpg',
        alt: 'Jóvenes concentrados en una partida de ajedrez',
      }}
    >
      <PageSection
        eyebrow="Nuestros programas"
        title="Aprender, practicar y avanzar."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((program) => {
            const Icon = program.icon;
            const message = encodeURIComponent(
              `Hola, quiero conocer el programa de ${program.title} de la Academia Internacional Macas.`,
            );

            return (
              <article
                key={program.number}
                className="overflow-hidden rounded-[24px] border border-[#1d4b32]/10 bg-white shadow-[0_12px_40px_rgba(27,69,44,0.07)]"
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img
                    src={program.image}
                    alt={program.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#173c2b] backdrop-blur">
                    {program.level}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.16em] text-[#66806d]">{program.number} / 04</span>
                    <Icon className="h-5 w-5 text-[#1e633c]" />
                  </div>
                  <h2 className="mt-3 text-2xl font-medium text-[#173c2b]">{program.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#526e5b]">{program.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-xs text-[#42694f]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f2c94c]" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${CONTACT_WHATSAPP_URL}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1e633c] transition hover:gap-3"
                  >
                    Consultar por WhatsApp <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </PageSection>

      <section className="academy-dark-panel bg-[#173c2b] px-6 py-14 text-center text-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-medium text-[#f7f8f4]">¿No sabes por dónde empezar?</h2>
          <p className="mt-3 text-sm leading-6 text-[#edf2e9]/80">
            Cuéntanos la experiencia y los objetivos del jugador. Te ayudaremos a elegir un programa.
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f2c94c] px-6 py-3 text-sm font-semibold text-[#183c2a] transition hover:bg-[#f7d965]"
          >
            Hablar con la academia <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
