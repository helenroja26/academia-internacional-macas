import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useRoute } from 'wouter';
import NotFound from '@/pages/NotFound';
import { blogArticles } from '@/lib/blogArticles';
import PageLayout, { PageSection } from '@/components/PageLayout';

export default function BlogPost() {
  const [matched, params] = useRoute('/blog/:slug');
  const article = matched
    ? blogArticles.find((entry) => entry.slug === params.slug)
    : undefined;

  if (!article) return <NotFound />;

  return (
    <PageLayout
      title={article.title}
      description={article.excerpt}
      eyebrow={article.category}
      heading={article.title}
      lead={`${article.readingTime} · Academia Internacional Macas`}
      image={{ src: article.image, alt: article.imageAlt }}
    >
      <PageSection>
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#1e633c] transition hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Todos los artículos
          </Link>
          <div className="space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-medium leading-tight text-[#173c2b] sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[#526e5b]">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.points && (
                  <ul className="mt-5 space-y-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-[#526e5b]">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f2c94c]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <div className="mt-12 rounded-[24px] bg-[#edf2eb] p-6 sm:p-8">
            <h2 className="text-xl font-medium text-[#173c2b]">Sigue entrenando.</h2>
            <p className="mt-2 text-sm leading-6 text-[#526e5b]">
              Encuentra plataformas de práctica y análisis en el Campus de la academia.
            </p>
            <Link
              href="/campus"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1e633c] transition hover:gap-3"
            >
              Explorar el Campus <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </PageSection>
    </PageLayout>
  );
}
