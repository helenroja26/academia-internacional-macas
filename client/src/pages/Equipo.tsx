import { ArrowUpRight, GraduationCap, Users } from 'lucide-react';
import { CONTACT_WHATSAPP_URL } from '@shared/const';
import PageLayout, { PageSection } from '@/components/PageLayout';

const coaches = [
  {
    name: 'M.F. Mauro Aucay',
    title: 'Maestro FIDE',
  },
  {
    name: 'M.I. Christopher Garzon',
    title: 'Maestro Internacional',
  },
  {
    name: 'Helen Rojas',
    title: 'Instructora Nacional FIDE',
  },
];

export default function Equipo() {
  return (
    <PageLayout
      title="Equipo y profesores"
      description="Conoce a los maestros y al equipo de ajedrez de la Academia Internacional Macas."
      eyebrow="Personas detrás de cada jugada"
      heading={<>Experiencia para impulsar tu juego.</>}
      lead="Un buen entrenador no solo enseña aperturas: acompaña el proceso, plantea nuevos retos y ayuda a convertir cada partida en aprendizaje."
      image={{
        src: '/mf mauro.jpg',
        alt: 'Tres integrantes de una delegación ecuatoriana de ajedrez',
      }}
    >
      <PageSection
        eyebrow="Equipo académico"
        title="Un equipo para acompañar cada etapa."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coaches.map((coach) => (
            <article
              key={coach.name}
              className="rounded-[24px] border border-[#1d4b32]/10 bg-white p-6 shadow-[0_12px_40px_rgba(27,69,44,0.07)] sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf2eb] text-[#1e633c]">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="mt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1e633c]">
                  {coach.title}
                </p>
                <h2 className="mt-2 text-2xl font-medium text-[#173c2b]">{coach.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[#526e5b]">
                  Formación y acompañamiento para desarrollar el pensamiento ajedrecístico.
                </p>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <section className="bg-[#edf2eb] px-6 py-14">
        <div className="container mx-auto grid max-w-[1380px] gap-8 md:grid-cols-[1fr_auto] md:items-center xl:px-12">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1e633c]">
              <Users className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-medium text-[#173c2b]">¿Quieres conocer a tus entrenadores?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#526e5b]">
                Escríbenos para consultar disponibilidad, modalidad de entrenamiento y el programa adecuado.
              </p>
            </div>
          </div>
          <a
            href={`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent('Hola, quisiera conocer al equipo de entrenadores de la Academia Internacional Macas.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2c94c] px-5 py-3 text-sm font-semibold text-[#183c2a] transition hover:bg-[#f7d965]"
          >
            Escribir al equipo <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
