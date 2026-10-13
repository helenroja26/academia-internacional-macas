import { ArrowUpRight, CalendarDays, Globe2, Trophy } from 'lucide-react';
import { CONTACT_WHATSAPP_URL } from '@shared/const';
import PageLayout, { PageSection } from '@/components/PageLayout';

const tournamentPhotos = [
  {
    src: '/chess-competition.jpg',
    alt: 'Jugador concentrado durante una partida competitiva',
    label: 'Concentración en cada partida',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/chess-team.jpg',
    alt: 'Integrantes de una delegación ecuatoriana de ajedrez',
    label: 'Representando al ajedrez ecuatoriano',
    className: '',
  },
  {
    src: '/mf mauro.jpg',
    alt: 'Jugador pensando su siguiente movimiento en una competencia',
    label: 'Un movimiento a la vez',
    className: '',
  },
];

export default function Torneos() {
  return (
    <PageLayout
      title="Torneos y competencias"
      description="Descubre la experiencia competitiva y la participación de la comunidad de la Academia Internacional Macas."
      eyebrow="El tablero también nos lleva lejos"
      heading={<>Cada torneo abre una nueva posibilidad.</>}
      lead="Competir es poner en práctica lo aprendido, conocer otros jugadores y descubrir nuevos desafíos. Estas imágenes muestran parte del camino ajedrecístico de nuestra comunidad."
      image={{
        src: '/chess-competition.jpg',
        alt: 'Jugador concentrado frente a un tablero durante una partida',
      }}
    >
      <PageSection eyebrow="Nuestra comunidad" title="El ajedrez, en movimiento.">
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-2 md:auto-rows-[260px]">
          {tournamentPhotos.map((photo) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden rounded-[22px] bg-[#173c2b] ${photo.className}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102d20]/80 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-5 text-sm font-medium text-white sm:p-6">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </PageSection>

      <section className="academy-dark-panel bg-[#173c2b] px-6 py-16 text-[#f7f8f4] md:py-20">
        <div className="container mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center xl:px-12">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f2c94c]">
              Da el siguiente paso
            </p>
            <h2 className="text-3xl font-medium leading-tight text-[#f7f8f4] sm:text-4xl">
              ¿Te interesa competir?
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#edf2e9]/80">
              Consulta con el equipo qué preparación y próximos eventos se ajustan a tu nivel.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4">
              <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-[#f2c94c]" />
              <div>
                <h3 className="text-sm font-semibold text-white">Preparación competitiva</h3>
                <p className="mt-1 text-xs leading-5 text-[#edf2e9]/70">Entrenamiento orientado a tus objetivos.</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4">
              <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f2c94c]" />
              <div>
                <h3 className="text-sm font-semibold text-white">Calendario por confirmar</h3>
                <p className="mt-1 text-xs leading-5 text-[#edf2e9]/70">Consulta fechas y modalidades directamente con la academia.</p>
              </div>
            </div>
            <a
              href={`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent('Hola, quisiera consultar por preparación y próximos torneos de ajedrez.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f2c94c] px-5 text-sm font-semibold text-[#183c2a] transition hover:bg-[#f7d965] sm:col-span-2 sm:justify-self-start"
            >
              <CalendarDays className="h-4 w-4" />
              Consultar próximos torneos
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
