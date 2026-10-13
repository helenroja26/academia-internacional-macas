import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'wouter';
import { blogArticles } from '@/lib/blogArticles';
import PageLayout, { PageSection } from '@/components/PageLayout';

export default function Blog() {
  return (
    <PageLayout
      title="Blog de ajedrez"
      description="Artículos y consejos de ajedrez para aprender, practicar táctica y analizar partidas con la Academia Internacional Macas."
      eyebrow="Ideas para tu próxima jugada"
      heading={<>El juego también se piensa.</>}
      lead="Artículos breves para aprender fundamentos, entrenar la táctica y convertir cada partida en una oportunidad de mejora."
      image={{
        src: '/chess-kids.jpg',
        alt: 'Niños aprendiendo y practicando ajedrez',
      }}
    >
      <PageSection eyebrow="Artículos" title="Aprende una idea y llévala al tablero.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogArticles.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-[24px] border border-[#1d4b32]/10 bg-white shadow-[0_12px_40px_rgba(27,69,44,0.05)]"
            >
              <img
                src={article.image}
                alt={article.imageAlt}
                className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1e633c]">
                  <span>{article.category}</span>
                  <span className="font-normal tracking-normal text-[#66806d]">{article.readingTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-medium leading-snug text-[#173c2b]">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#526e5b]">{article.excerpt}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1e633c] transition hover:gap-3"
                >
                  Leer artículo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <section className="px-6 pb-16 md:pb-24">
        <div className="container mx-auto max-w-[1380px] xl:px-12">
          <div className="flex flex-col gap-5 rounded-[24px] border border-[#e4d08a]/70 bg-[#fbf6df] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <BookOpen className="mt-1 h-5 w-5 shrink-0 text-[#8e6d0a]" />
              <div>
                <h2 className="text-lg font-medium text-[#173c2b]">¿Listo para ponerlo en práctica?</h2>
                <p className="mt-2 text-sm leading-6 text-[#526e5b]">
                  Explora ejercicios y recursos de entrenamiento en nuestro Campus virtual.
                </p>
              </div>
            </div>
            <Link
              href="/campus"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#1e633c] transition hover:gap-3 sm:self-center"
            >
              Ir al Campus <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
