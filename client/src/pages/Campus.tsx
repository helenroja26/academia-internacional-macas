import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Puzzle,
  Swords,
} from 'lucide-react';
import { Link } from 'wouter';
import PageLayout, { PageSection } from '@/components/PageLayout';

const platforms = [
  {
    name: 'Lichess',
    description:
      'Practica táctica, aprende los fundamentos y analiza posiciones con herramientas gratuitas.',
    icon: Swords,
    links: [
      { label: 'Aprender lo básico', href: 'https://lichess.org/learn' },
      { label: 'Resolver ejercicios', href: 'https://lichess.org/training' },
      { label: 'Estudiar aperturas', href: 'https://lichess.org/study' },
    ],
  },
  {
    name: 'Chess.com',
    description:
      'Encuentra lecciones, problemas tácticos y un tablero de análisis para revisar tus partidas.',
    icon: Puzzle,
    links: [
      { label: 'Ver lecciones', href: 'https://www.chess.com/lessons' },
      { label: 'Resolver problemas', href: 'https://www.chess.com/puzzles' },
      { label: 'Analizar una partida', href: 'https://www.chess.com/analysis' },
    ],
  },
];

export default function Campus() {
  return (
    <PageLayout
      title="Campus virtual"
      description="Accede a herramientas de estudio y práctica de ajedrez en Lichess y Chess.com, seleccionadas por la Academia Internacional Macas."
      eyebrow="Tu espacio de entrenamiento"
      heading={<>Practica, analiza y vuelve a jugar.</>}
      lead="Reunimos herramientas conocidas para que puedas entrenar táctica, aprender fundamentos y revisar partidas. Elige una plataforma y continúa allí tu práctica."
      image={{
        src: '/chess-classroom.jpg',
        alt: 'Alumnos practicando ajedrez y aprendiendo juntos',
      }}
    >
      <PageSection eyebrow="Plataformas de estudio" title="Herramientas para tu próxima jugada.">
        <div className="grid gap-5 lg:grid-cols-2">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <article
                key={platform.name}
                className="rounded-[24px] border border-[#1d4b32]/10 bg-white p-6 shadow-[0_12px_40px_rgba(27,69,44,0.05)] sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf2eb] text-[#1e633c]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="text-2xl font-medium text-[#173c2b]">{platform.name}</h2>
                </div>
                <p className="mt-5 text-sm leading-6 text-[#526e5b]">{platform.description}</p>
                <ul className="mt-6 grid gap-3">
                  {platform.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 w-full items-center justify-between gap-3 rounded-xl border border-[#1d4b32]/10 px-4 py-3 text-sm font-medium text-[#1e633c] transition hover:border-[#1e633c]/30 hover:bg-[#edf2eb]/60"
                      >
                        {link.label}
                        <ExternalLink className="h-4 w-4 shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </PageSection>

      <section className="academy-dark-panel bg-[#173c2b] px-6 py-14 text-[#f7f8f4]">
        <div className="container mx-auto grid max-w-[1380px] gap-7 md:grid-cols-[1fr_auto] md:items-center xl:px-12">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.08] text-[#f2c94c]">
              <BookOpen className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-medium text-[#f7f8f4]">Entrena con un propósito.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#edf2e9]/80">
                Prueba una lección, resuelve ejercicios y luego analiza una partida completa. La constancia y la revisión consciente ayudan a convertir la práctica en aprendizaje.
              </p>
              <p className="mt-3 text-xs leading-5 text-[#edf2e9]/60">
                Los enlaces abren servicios externos. La academia no sincroniza cuentas, partidas ni progreso personal en esta etapa.
              </p>
            </div>
          </div>
          <Link
            href="/programas"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f2c94c] px-5 text-sm font-semibold text-[#183c2a] transition hover:bg-[#f7d965]"
          >
            Conocer programas <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
