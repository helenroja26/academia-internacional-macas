import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Check,
  Crown,
  Globe2,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  MoveUpRight,
  Play,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Link } from 'wouter';
import { blogArticles } from '@/lib/blogArticles';
import { CONTACT_WHATSAPP_URL } from '@shared/const';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const programs = [
  {
    number: '01',
    name: 'Iniciación',
    level: 'PRIMEROS MOVIMIENTOS',
    description:
      'Un comienzo cercano y estimulante para descubrir el tablero, sus piezas y las primeras ideas del juego.',
    image: '/chess-kids.jpg',
    imageAlt: 'Niños aprendiendo y practicando ajedrez',
    icon: Sparkles,
  },
  {
    number: '02',
    name: 'Intermedio',
    level: 'JUEGA CON INTENCIÓN',
    description:
      'Táctica, estrategia y análisis para transformar cada partida en una nueva oportunidad de aprender.',
    image: '/chess-classroom.jpg',
    imageAlt: 'Alumnos reunidos para practicar ajedrez',
    icon: Brain,
  },
  {
    number: '03',
    name: 'Competición',
    level: 'PREPÁRATE PARA COMPETIR',
    description:
      'Entrena cálculo, preparación y fortaleza mental para sentarte a jugar con confianza.',
    image: '/chess-competition.jpg',
    imageAlt: 'Jugador concentrado en una partida competitiva',
    icon: Trophy,
  },
  {
    number: '04',
    name: 'Alto rendimiento',
    level: 'POTENCIAL SIN TECHO',
    description:
      'Un camino de entrenamiento exigente para quienes quieren llevar su juego al siguiente nivel.',
    image: '/mf mauro.jpg',
    imageAlt: 'Jugador de ajedrez durante un torneo',
    icon: Crown,
  },
];

const pillars = [
  {
    number: '01',
    title: 'Pensar antes de mover',
    description:
      'Entrenamos la concentración, el análisis y la capacidad de anticipar posibilidades.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Aprender del proceso',
    description:
      'Cada partida, acierto o error se convierte en una herramienta para seguir creciendo.',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'Crecer con confianza',
    description:
      'Un entorno que impulsa la disciplina, la autonomía y la seguridad dentro y fuera del tablero.',
    icon: ShieldCheck,
  },
];

const boardPieces = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
];

const puzzlePieces: Record<string, string> = {
  h8: '♚',
  h7: '♟',
  f5: '♔',
  g6: '♕',
};

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1e633c]">
      <span className="h-px w-8 bg-[#f2c94c]/70" />
      {children}
    </div>
  );
}

function DailyPuzzle() {
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [stage, setStage] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  function handleSquareClick(square: string) {
    if (stage === 2) return;

    const origin = stage === 0 ? 'f5' : 'g6';
    const destination = stage === 0 ? 'f6' : 'g7';

    if (selectedSquare === origin && square === destination) {
      setStage((currentStage) => currentStage + 1);
      setSelectedSquare(null);
      setFeedback(null);
      return;
    }

    if (square === origin) {
      setSelectedSquare(square);
      setFeedback(null);
      return;
    }

    setSelectedSquare(null);
    setFeedback('Esa jugada no fuerza el mate. Prueba otra vez y calcula la respuesta del rival.');
  }

  function resetPuzzle() {
    setSelectedSquare(null);
    setStage(0);
    setShowHint(false);
    setFeedback(null);
  }

  const piecesAtStage: Record<string, string>[] = [
    puzzlePieces,
    { h8: '♚', h6: '♟', f6: '♔', g6: '♕' },
    { h8: '♚', h6: '♟', f6: '♔', g7: '♕' },
  ];
  const currentPieces = piecesAtStage[stage];

  return (
    <section id="ejercicio-del-dia" className="px-6 py-20 md:py-28">
      <div className="container mx-auto max-w-[1380px] px-0 sm:px-4 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 gap-10 rounded-[30px] border border-[#1d4b32]/10 bg-white p-6 shadow-[0_28px_90px_rgba(27,69,44,0.09)] sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:p-12">
          <div>
            <SectionEyebrow>Reto de hoy · Mate en dos</SectionEyebrow>
            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight text-[#173c2b] sm:text-5xl">
              Encuentra la jugada que prepara el mate.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#526e5b] md:text-base">
              Las blancas fuerzan mate en dos. Calcula una jugada de preparación,
              anticipa la respuesta del rival y encuentra el remate. Toca una
              pieza y luego su casilla de destino.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setShowHint((visible) => !visible)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#1d4b32]/15 px-5 text-sm font-medium text-[#315640] transition hover:border-[#1e633c]/40 hover:bg-[#edf2eb]"
              >
                <Lightbulb className="h-4 w-4 text-[#a27c09]" />
                {showHint ? 'Ocultar pista' : 'Dame una pista'}
              </button>
              <button
                type="button"
                onClick={resetPuzzle}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#1d4b32]/15 px-4 text-sm font-medium text-[#315640] transition hover:border-[#1e633c]/40 hover:bg-[#edf2eb]"
                aria-label="Reiniciar ejercicio"
              >
                <RotateCcw className="h-4 w-4" />
                Reiniciar
              </button>
            </div>
            <div
              aria-live="polite"
              className={`mt-5 min-h-12 rounded-2xl px-4 py-3 text-sm leading-6 ${
                stage === 2
                  ? 'bg-[#edf5e8] text-[#1e633c]'
                  : feedback
                    ? 'bg-[#fbf0e9] text-[#8a4827]'
                    : 'bg-[#fbf6df] text-[#6c5a22]'
              }`}
            >
              {stage === 2
                ? '¡Mate en dos! 1. Rf6 h6 2. Dg7#. El rey prepara la casilla de mate.'
                : feedback ??
                  (selectedSquare
                    ? stage === 0
                      ? 'Ahora mueve el rey a f6.'
                      : 'Ahora mueve la dama a g7.'
                    : showHint
                      ? stage === 0
                        ? 'Pista: no empieces con jaque. Acerca el rey para proteger la casilla g7.'
                        : 'Pista: ahora la dama puede dar mate en g7.'
                      : stage === 0
                        ? 'Encuentra la jugada tranquila que prepara el mate.'
                        : 'El peón negro responde en h6. Encuentra el remate con la dama.')}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[440px]">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#526e5b]">
              <span>Juegan las blancas · mate en dos</span>
              <span>♔ Rey · ♕ Dama · ♟ Peón</span>
            </div>
            <div
              role="grid"
              aria-label="Tablero del ejercicio de mate en dos"
              className="grid aspect-square w-full min-h-0 min-w-0 grid-cols-8 grid-rows-[repeat(8,minmax(0,1fr))] overflow-hidden rounded-2xl border-4 border-[#173c2b] shadow-[0_18px_50px_rgba(27,69,44,0.2)]"
            >
              {Array.from({ length: 64 }, (_, index) => {
                const row = Math.floor(index / 8);
                const column = index % 8;
                const file = String.fromCharCode(97 + column);
                const rank = String(8 - row);
                const square = `${file}${rank}`;
                const piece = currentPieces[square];
                const isLight = (row + column) % 2 === 0;
                const isTarget = square === (stage === 0 ? 'f6' : 'g7') && stage !== 2;
                const isSelected = selectedSquare === square;

                return (
                  <button
                    key={square}
                    type="button"
                    onClick={() => handleSquareClick(square)}
                    aria-label={`${square}${piece ? `, ${piece === '♕' || piece === '♔' ? 'pieza blanca' : 'pieza negra'}` : ''}${isTarget ? ', destino sugerido' : ''}`}
                    className={`relative flex h-full w-full min-h-0 min-w-0 items-center justify-center overflow-hidden p-0 text-[clamp(1.7rem,7vw,3.7rem)] leading-none transition-colors focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#173c2b] ${
                      isLight ? 'bg-[#f3e8c6]' : 'bg-[#557b5b]'
                    } ${isTarget ? 'ring-4 ring-inset ring-[#f2c94c]' : ''} ${
                      isSelected ? 'bg-[#f2c94c]/80 ring-4 ring-inset ring-[#c79c19]' : ''
                    } ${stage === 2 && square === 'g7' ? 'bg-[#f2c94c]/75' : ''}`}
                  >
                    {(column === 0 || row === 7) && (
                      <span
                        aria-hidden="true"
                        className={`absolute left-1 top-0.5 z-10 text-[10px] font-bold leading-none ${
                          isLight ? 'text-[#214a34]' : 'text-[#fffdf5]'
                        }`}
                      >
                        {column === 0 ? rank : ''}
                        {row === 7 ? file : ''}
                      </span>
                    )}
                    {piece && (
                      <span
                        className={
                          piece === '♕' || piece === '♔'
                            ? 'puzzle-piece-white'
                            : 'puzzle-piece-black'
                        }
                      >
                        {piece}
                      </span>
                    )}
                    {square === 'g7' && stage === 2 && (
                      <Check className="absolute right-1 top-1 h-4 w-4 rounded-full bg-[#1e633c] p-0.5 text-white" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="mt-3 flex justify-between px-1 text-[11px] tracking-[0.1em] text-[#526e5b]">
              <span>a · b · c · d · e · f · g · h</span>
              <span>Ejercicio táctico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="academy-site min-h-screen overflow-hidden bg-[#fafbf8] text-[#173c2b]">
      <Navbar />

      <main>
        <section
          id="hero"
          className="academy-home-hero hero-section relative flex min-h-[780px] scroll-mt-24 items-center overflow-hidden bg-[#173c2b] pb-20 pt-32 md:min-h-[850px] md:pb-24 md:pt-36"
        >
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="hero-glow absolute inset-0" aria-hidden="true" />
          <div className="absolute -left-36 top-40 h-80 w-80 rounded-full bg-[#f2c94c]/10 blur-[120px]" aria-hidden="true" />
          <div className="absolute -right-36 bottom-10 h-96 w-96 rounded-full bg-[#91b39a]/10 blur-[140px]" aria-hidden="true" />

          <div className="container relative z-10 mx-auto grid max-w-[1380px] items-center gap-12 px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-8 xl:px-12">
            <div className="relative z-10 w-full min-w-0 max-w-[650px]">
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#f2c94c]/30 bg-white/[0.06] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f5d967]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f2c94c] opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f2c94c]" />
                </span>
                Academia de ajedrez · Macas, Ecuador
              </div>

              <p className="hero-slogan mb-4 text-sm font-medium tracking-[0.06em] text-[#d1dfd1]">
                Una academia. Una mentalidad. Un próximo movimiento.
              </p>
              <h1 className="max-w-3xl text-[clamp(2.5rem,10vw,3.25rem)] font-medium leading-[1.03] tracking-[-0.055em] text-[#f7f8f4] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
                Academia
                <br />
                Internacional
                <br />
                <span className="font-light italic text-[#f2c94c]">Macas.</span>
              </h1>
              <p className="mt-7 max-w-[540px] text-lg leading-relaxed text-[#f7f8f4] md:text-xl">
                Formando campeones dentro y fuera del tablero.
              </p>
              <p className="mt-3 max-w-[500px] text-sm leading-7 text-[#d1dfd1] md:text-base">
                Programas de ajedrez para niños, jóvenes y adultos. Desarrolla
                estrategia, confianza y una forma distinta de pensar.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent('Hola, quiero reservar una clase gratuita en la Academia Internacional Macas.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#f2c94c] px-7 text-sm font-semibold text-[#183c2a] transition hover:-translate-y-0.5 hover:bg-[#f7d965] hover:shadow-[0_12px_40px_rgba(242,201,76,0.25)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Reserva una clase gratuita
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#programas"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/[0.08]"
                >
                  Explorar programas
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-[#d1dfd1]">
                <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4 text-[#f2c94c]" /> Formación sin fronteras</span>
                <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-[#f2c94c]" /> Para todas las edades</span>
              </div>
            </div>

            <div className="relative mx-auto w-full min-w-0 max-w-[590px] lg:ml-auto lg:mr-0">
              <div className="board-orbit absolute -inset-8 rounded-full border border-[#e1b92f]/[0.08]" aria-hidden="true" />
              <div className="board-orbit board-orbit-delayed absolute -inset-16 rounded-full border border-[#1d4b32]/[0.035]" aria-hidden="true" />
              <div className="relative rounded-[28px] border border-[#1d4b32]/[0.13] bg-white/90 p-3 shadow-[0_36px_100px_rgba(27,69,44,0.18)] backdrop-blur-xl sm:p-5">
                <div className="flex items-center justify-between px-2 pb-4 pt-1 sm:px-3">
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#1e633c]">Apertura · 01</span>
                    <span className="mt-1 block text-sm text-[#42694f]">Cada gran historia empieza con una jugada.</span>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1d4b32]/10 text-[#5c7463]"><MoveUpRight className="h-4 w-4" /></span>
                </div>

                <div className="chess-board relative aspect-square overflow-hidden rounded-xl border border-[#e1b92f]/20">
                  {boardPieces.flatMap((row, rowIndex) =>
                    row.map((piece, columnIndex) => {
                      const isLightSquare = (rowIndex + columnIndex) % 2 === 0;
                      return (
                        <div
                          key={`${rowIndex}-${columnIndex}`}
                          className={`board-square ${isLightSquare ? 'board-square-light' : 'board-square-dark'}`}
                        >
                          {piece && (
                            <span
                              className={`board-piece ${rowIndex < 2 ? 'board-piece-white' : 'board-piece-black'}`}
                            >
                              {piece}
                            </span>
                          )}
                        </div>
                      );
                    }),
                  )}
                  <div className="absolute left-[25%] top-[62.5%] h-[12.5%] w-[12.5%] border-2 border-[#f2c94c]/80 bg-[#f2c94c]/20" />
                  <div className="absolute left-[25%] top-0 h-[12.5%] w-[12.5%] border-2 border-[#f2c94c]/80 bg-[#f2c94c]/20" />
                  <span className="absolute bottom-2 right-3 text-[9px] font-medium tracking-[0.18em] text-[#637a69]">A · I · M</span>
                </div>

                <div className="flex items-center justify-between px-2 pb-1 pt-4 sm:px-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2c94c]/10 text-[#1e633c]"><Crown className="h-4 w-4" /></span>
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.16em] text-[#637a69]">Tu próximo movimiento</span>
                      <span className="text-xs text-[#395f47]">Empieza hoy</span>
                    </div>
                  </div>
                  <span className="text-[10px] tracking-[0.12em] text-[#637a69]">♟ · ♞ · ♜</span>
                </div>
              </div>
              <div className="absolute -bottom-7 -left-5 hidden items-center gap-3 rounded-2xl border border-[#1d4b32]/10 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-lg sm:flex">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f2c94c]/10 text-[#1e633c]"><Target className="h-4 w-4" /></span>
                <div><span className="block text-xs font-medium text-[#294f39]">Estrategia con propósito</span><span className="text-[10px] text-[#617967]">Más allá del tablero</span></div>
              </div>
            </div>
          </div>

          <a href="#impacto" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#d1dfd1]/70 transition hover:text-white md:flex">
            Descubre la academia <ArrowDown className="h-3 w-3" />
          </a>
        </section>

        <section id="impacto" className="border-y border-[#e1c456]/20 bg-[#173c2b]">
          <div className="container mx-auto grid max-w-[1380px] grid-cols-2 gap-y-8 px-6 py-8 sm:grid-cols-4 sm:py-9 xl:px-12">
            {[
              ['03', 'formadores titulados'],
              ['04', 'rutas de aprendizaje'],
              ['02', 'plataformas de práctica'],
              ['01', 'comunidad internacional'],
            ].map(([value, label], index) => (
              <div key={label} className={`text-center sm:text-left sm:pl-8 ${index > 0 ? 'sm:border-l sm:border-white/15' : ''}`}>
                <div className="font-serif text-2xl font-medium tracking-tight text-[#f2c94c] sm:text-3xl">{value}</div>
                <div className="mt-1.5 text-[10px] uppercase tracking-[0.15em] text-[#edf2e9]/75 sm:text-[11px]">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="programas" className="scroll-mt-24 bg-[#f7f8f4] px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-[1380px] xl:px-12">
            <div className="mb-12 grid gap-7 md:grid-cols-[1fr_0.7fr] md:items-end">
              <div>
                <SectionEyebrow>Una ruta, cuatro etapas</SectionEyebrow>
                <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-[#173c2b] sm:text-5xl md:text-[3.5rem]">
                  Crece jugada
                  <br className="hidden sm:block" /> a jugada<span className="font-light italic text-[#1e633c]">.</span>
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-[#526e5b] md:justify-self-end md:text-base">
                Un camino claro desde el primer movimiento hasta la preparación
                competitiva. Encontramos el nivel adecuado para cada jugador.
              </p>
            </div>

            <div className="relative grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-[#c3d2c1] xl:block" aria-hidden="true" />
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <article
                    key={program.number}
                    className="program-card group relative flex min-h-[405px] flex-col overflow-hidden rounded-[24px] border border-[#1d4b32]/10 bg-[#173c2b] shadow-[0_18px_55px_rgba(27,69,44,0.1)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_65px_rgba(27,69,44,0.17)]"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={program.image}
                        alt={program.imageAlt}
                        className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-85"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102d20] via-[#102d20]/55 to-[#102d20]/10" />
                    </div>
                    <div className="relative flex h-full min-h-[405px] flex-col p-5 sm:p-6">
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#173c2b]/65 font-serif text-sm text-[#f2c94c] backdrop-blur-sm">
                          {program.number}
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#173c2b]/45 text-white backdrop-blur-sm">
                          <Icon className="h-4 w-4" />
                        </span>
                      </div>
                      <div className="mt-auto pt-28 text-white">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#f2c94c]">
                          {program.level}
                        </span>
                        <h3 className="mt-2 text-2xl font-medium tracking-tight text-white">
                          {program.name}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-white/80">
                          {program.description}
                        </p>
                        <Link
                          href="/programas"
                          className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-white transition group-hover:gap-3"
                        >
                          Explorar etapa <ArrowRight className="h-3.5 w-3.5 text-[#f2c94c]" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-[#1d4b32]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[#526e5b]">
                ¿No sabes cuál corresponde a tu nivel? Te orientamos personalmente.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e633c] transition hover:gap-3"
              >
                Encuentra tu punto de partida <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="experiencias" className="px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-[1380px] xl:px-12">
            <div className="overflow-hidden rounded-[30px] bg-[#173c2b] px-6 py-10 shadow-[0_28px_90px_rgba(27,69,44,0.16)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f2c94c]">
                    <span className="h-px w-8 bg-[#f2c94c]/75" />
                    Mucho más que entrenar
                  </div>
                  <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight text-[#f7f8f4] sm:text-4xl">
                    El ajedrez se vive
                    <span className="font-light italic text-[#f2c94c]"> en comunidad.</span>
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[#e1e9df]/75 lg:justify-self-end">
                  Comparte el tablero, mide tu progreso y disfruta el camino
                  junto a otros jugadores de la academia.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
                  <Crown className="h-5 w-5 text-[#f2c94c]" />
                  <h3 className="mt-5 text-lg font-medium text-white">Partidas simultáneas</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[#e1e9df]/70">
                    Enfréntate a varios tableros y pon a prueba tus ideas en
                    una experiencia de aprendizaje en vivo.
                  </p>
                  <a
                    href={`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent('Hola, quisiera conocer las próximas partidas simultáneas de la academia.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#f2c94c] transition hover:gap-3"
                  >
                    Consultar próximas fechas <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </article>

                <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
                  <Trophy className="h-5 w-5 text-[#f2c94c]" />
                  <h3 className="mt-5 text-lg font-medium text-white">Torneos</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[#e1e9df]/70">
                    Lleva lo aprendido a la competencia, gana experiencia y
                    celebra cada nuevo desafío.
                  </p>
                  <Link
                    href="/torneos"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#f2c94c] transition hover:gap-3"
                  >
                    Explorar torneos <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>

                <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
                  <Users className="h-5 w-5 text-[#f2c94c]" />
                  <h3 className="mt-5 text-lg font-medium text-white">Comunidad</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[#e1e9df]/70">
                    Comparte ideas, conoce a otros apasionados del ajedrez y
                    crece con el apoyo de la academia.
                  </p>
                  <Link
                    href="/contacto"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#f2c94c] transition hover:gap-3"
                  >
                    Conoce la academia <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="metodologia" className="academy-dark-section relative scroll-mt-24 overflow-hidden bg-[#102d20] px-6 py-20 md:py-28">
          <div className="absolute -right-28 top-1/4 h-96 w-96 rounded-full bg-[#f2c94c]/[0.07] blur-[120px]" aria-hidden="true" />
          <div className="container relative mx-auto max-w-[1380px] xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f2c94c]">
                  <span className="h-px w-8 bg-[#f2c94c]/75" />
                  Entrenamiento con propósito
                </div>
                <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight text-[#f7f8f4] sm:text-5xl md:text-[3.5rem]">
                  Una guía que ve
                  <br />tu siguiente
                  <br /><span className="font-light italic text-[#f2c94c]">jugada.</span>
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-7 text-[#e1e9df]/75 md:text-base">
                  El progreso no viene de memorizar más, sino de aprender a
                  pensar mejor. Cada etapa combina guía experta, práctica
                  deliberada y revisión consciente.
                </p>
                <Link
                  href="/equipo"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f2c94c] transition hover:gap-3"
                >
                  Conoce al equipo académico <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-10 md:grid-cols-2 md:gap-12">
                <div className="space-y-3">
                  <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#e1e9df]/55">
                    Método de entrenamiento
                  </p>
                  {pillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <article
                        key={pillar.number}
                        className="group rounded-2xl border border-white/[0.1] bg-white/[0.035] p-4 transition hover:border-[#f2c94c]/30 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-sm text-[#f2c94c]">{pillar.number}</span>
                          <Icon className="h-4 w-4 text-[#f2c94c]" />
                          <h3 className="text-base font-medium text-white">{pillar.title}</h3>
                        </div>
                        <p className="mt-2 pl-10 text-xs leading-5 text-[#e1e9df]/65">
                          {pillar.description}
                        </p>
                      </article>
                    );
                  })}
                </div>

                <div id="profesores" className="scroll-mt-24">
                  <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#e1e9df]/55">
                    Equipo académico
                  </p>
                  <div className="divide-y divide-white/10 border-y border-white/10">
                    {[
                      { initials: 'MA', name: 'M.F. Mauro Aucay', title: 'Maestro FIDE' },
                      { initials: 'CG', name: 'M.I. Christopher Garzon', title: 'Maestro Internacional' },
                      { initials: 'HR', name: 'Helen Rojas', title: 'Instructora Nacional FIDE' },
                    ].map((coach, index) => (
                      <article key={coach.name} className="flex items-center gap-4 py-5">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f2c94c]/25 bg-[#f2c94c]/[0.08] font-serif text-sm text-[#f2c94c]">
                          {coach.initials}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#f2c94c]/80">
                            {coach.title}
                          </p>
                          <h3 className="mt-1 text-base font-medium text-white sm:text-lg">
                            {coach.name}
                          </h3>
                        </div>
                        {index === 0 && <GraduationCap className="h-4 w-4 text-white/40" />}
                      </article>
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-5 text-[#e1e9df]/55">
                    Formación titulada y acompañamiento para cada etapa del jugador.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DailyPuzzle />

        <section className="bg-[#f0f4ee] px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-[1380px] xl:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
              <div>
                <SectionEyebrow>Aprende también mirando</SectionEyebrow>
                <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight text-[#173c2b] sm:text-5xl">
                  Una buena idea puede cambiar tu partida.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#526e5b] md:text-base">
                  Acompaña tu práctica con lecciones de ajedrez en video.
                  Elige un tema, toma nota de una idea y pruébala en el tablero.
                </p>
                <a
                  href="https://www.youtube.com/playlist?list=PLr6H6zwk9SGK8SsbYi1ExWXO2A_2yiORR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#173c2b] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#24543b]"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Ver la serie en YouTube
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-xs text-[#66806d]">Lección seleccionada de Chess.com ES.</p>
              </div>

              <div className="overflow-hidden rounded-[26px] border border-[#1d4b32]/10 bg-[#102d20] shadow-[0_28px_80px_rgba(27,69,44,0.2)]">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/RnIgD7knKn8?rel=0"
                  title="El lenguaje del ajedrez: cómo jugar al ajedrez — Chess.com ES"
                  className="aspect-video w-full"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="flex items-center justify-between gap-4 px-5 py-4 text-white sm:px-6">
                  <div>
                    <p className="text-sm font-medium text-white">El lenguaje del ajedrez</p>
                    <p className="mt-1 text-xs text-white/65">Cómo jugar al ajedrez · Chess.com ES</p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=RnIgD7knKn8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir la lección de Chess.com ES en YouTube"
                    className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-[#f2c94c] transition hover:text-[#ffe589]"
                  >
                    YouTube <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="campus" className="scroll-mt-24 px-6 pb-24 md:pb-32">
          <div className="container mx-auto max-w-[1380px] xl:px-12">
            <div className="relative overflow-hidden rounded-[28px] border border-[#1d4b32]/10 bg-[#eef3eb] p-6 sm:p-10 lg:p-14">
              <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#c49c55]/[0.09] blur-[100px]" />
              <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
                <div>
                  <SectionEyebrow>Un espacio para crecer</SectionEyebrow>
                  <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight text-[#173c2b] sm:text-5xl">
                    Tu entrenamiento,
                    <br /><span className="font-light italic text-[#1e633c]">en un solo lugar.</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-[#526e5b] md:text-base">
                    Accede a herramientas de estudio, ejercicios y análisis de
                    partidas en Lichess y Chess.com.
                  </p>
                  <Link
                    href="/campus"
                    className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#173c2b] px-5 text-sm font-semibold text-white transition hover:bg-[#24543b]"
                  >
                    Explorar el Campus <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative rounded-2xl border border-[#1d4b32]/10 bg-[#f8faf7] p-5 shadow-2xl sm:p-7">
                  <div className="flex items-center justify-between border-b border-[#1d4b32]/[0.08] pb-5">
                    <div>
                      <span className="block text-[9px] uppercase tracking-[0.18em] text-[#1e633c]">Herramientas seleccionadas</span>
                      <span className="mt-1 block text-lg font-medium text-[#214a34]">Practica a tu ritmo.</span>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#1d4b32]/10 text-[#526e5b]"><ArrowUpRight className="h-4 w-4" /></span>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <a
                      href="https://lichess.org/training"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-[#1d4b32]/[0.07] bg-[#1e633c]/[0.045] p-4 transition hover:bg-[#1e633c]/[0.08]"
                    >
                      <span className="block text-[9px] uppercase tracking-[0.14em] text-[#637a69]">Lichess</span>
                      <span className="mt-2 block text-sm font-medium text-[#315640]">Entrena táctica</span>
                    </a>
                    <a
                      href="https://www.chess.com/analysis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-[#1d4b32]/[0.07] bg-[#1e633c]/[0.045] p-4 transition hover:bg-[#1e633c]/[0.08]"
                    >
                      <span className="block text-[9px] uppercase tracking-[0.14em] text-[#637a69]">Chess.com</span>
                      <span className="mt-2 block text-sm font-medium text-[#315640]">Analiza partidas</span>
                    </a>
                  </div>
                  <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#e1b92f]/15 bg-[#f2c94c]/[0.045] p-3.5">
                    <BookOpen className="h-4 w-4 shrink-0 text-[#1e633c]" />
                    <span className="text-xs text-[#526e5b]">Recursos gratuitos para aprender y practicar.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="torneos" className="scroll-mt-24 border-y border-[#1d4b32]/[0.06] bg-[#f0f4ee] px-6 py-24 md:py-28">
          <div className="container mx-auto grid max-w-[1380px] gap-8 md:grid-cols-[1fr_auto] md:items-center xl:px-12">
            <div className="max-w-3xl">
              <SectionEyebrow>El siguiente desafío</SectionEyebrow>
              <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#173c2b] sm:text-4xl md:text-5xl">
                El mundo es el tablero.
                <span className="font-light italic text-[#1e633c]"> Atrévete a jugar.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#526e5b] md:text-base">
                Crece junto a una comunidad de ajedrez que conecta alumnos,
                familias y nuevos retos más allá de las fronteras.
              </p>
            </div>
            <a href="#contacto" className="group inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full border border-[#1d4b32]/15 px-6 text-sm font-medium text-[#315640] transition hover:border-[#e1b92f]/50 hover:text-[#1e633c] md:self-center">
              Conversemos <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>

        <section id="blog" className="scroll-mt-24 px-6 py-24 md:py-28">
          <div className="container mx-auto max-w-[1380px] xl:px-12">
            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <SectionEyebrow>Ideas para el próximo movimiento</SectionEyebrow>
                <h2 className="text-3xl font-medium tracking-tight text-[#173c2b] sm:text-4xl">El juego también se piensa.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#5c7463] md:justify-self-end">
                Consejos breves para aprender fundamentos, entrenar táctica
                y convertir tus partidas en aprendizaje.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {blogArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group overflow-hidden rounded-[22px] border border-[#1d4b32]/[0.08] bg-white transition hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(27,69,44,0.1)]"
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-5">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1e633c]">
                      {article.category} · {article.readingTime}
                    </span>
                    <h3 className="mt-2 text-lg font-medium leading-snug text-[#214a34]">
                      {article.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#1e633c] transition group-hover:gap-3">
                      Leer artículo <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/blog"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#1d4b32]/15 px-5 text-sm font-medium text-[#315640] transition hover:border-[#1e633c]/40 hover:bg-[#edf2eb]"
              >
                Explorar todos los artículos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-24 px-6 pb-24 md:pb-32">
          <div className="container mx-auto max-w-[1380px] xl:px-12">
            <div className="relative overflow-hidden rounded-[28px] border border-[#e1b92f]/25 bg-[#eef4e9] px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_110%,rgba(242,201,76,0.2),transparent_58%)]" aria-hidden="true" />
              <div className="relative mx-auto max-w-3xl">
                <span className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e1b92f]/25 bg-[#f2c94c]/[0.08] text-[#1e633c]"><Crown className="h-5 w-5" /></span>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1e633c]">Tu historia empieza aquí</p>
                <h2 className="text-4xl font-medium leading-tight tracking-tight text-[#173c2b] sm:text-5xl md:text-6xl">
                  El próximo gran movimiento
                  <br className="hidden sm:block" /> puede ser <span className="font-light italic text-[#1e633c]">el tuyo.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#526e5b] md:text-base">
                  Cuéntanos qué buscas y te ayudaremos a encontrar el programa ideal para comenzar.
                </p>
                <a
                  href={`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent('Hola, quiero reservar una clase gratuita en la Academia Internacional Macas.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#f2c94c] px-7 text-sm font-semibold text-[#183c2a] transition hover:-translate-y-0.5 hover:bg-[#f7d965] hover:shadow-[0_12px_40px_rgba(242,201,76,0.25)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Reserva una clase gratuita
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="mt-4 text-[10px] tracking-wide text-[#637a69]">Sin compromiso · Atención personalizada</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
