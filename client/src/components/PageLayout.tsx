import { useEffect, type ReactNode } from 'react';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface PageLayoutProps {
  title: string;
  description: string;
  eyebrow: string;
  heading: ReactNode;
  lead: string;
  noIndex?: boolean;
  image?: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

export default function PageLayout({
  title,
  description,
  eyebrow,
  heading,
  lead,
  noIndex = false,
  image,
  children,
}: PageLayoutProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const metadata = [
      ['name', 'description', description],
      ['name', 'robots', noIndex ? 'noindex,follow' : 'index,follow'],
      ['property', 'og:url', `${window.location.origin}${window.location.pathname}`],
      ['property', 'og:title', `${title} | Academia Internacional Macas`],
      ['property', 'og:description', description],
      ['name', 'twitter:title', `${title} | Academia Internacional Macas`],
      ['name', 'twitter:description', description],
    ] as const;
    const previousMetadata = metadata.map(([attribute, name]) => {
      const element = document.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${name}"]`,
      );
      return { element, content: element?.content };
    });
    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    const previousCanonical = canonical?.href;

    document.title = `${title} | Academia Internacional Macas`;
    for (const [attribute, name, content] of metadata) {
      const element = document.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${name}"]`,
      );
      if (element) element.content = content;
    }
    if (canonical) {
      canonical.href = `${window.location.origin}${window.location.pathname}`;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = previousTitle;
      for (const { element, content } of previousMetadata) {
        if (element && content) element.content = content;
      }
      if (canonical && previousCanonical) canonical.href = previousCanonical;
    };
  }, [description, noIndex, title]);

  return (
    <div className="academy-site min-h-screen overflow-hidden bg-[#fafbf8] text-[#173c2b]">
      <Navbar />
      <main className="pt-[76px]">
        <section className="academy-dark-panel academy-page-header relative overflow-hidden bg-[#173c2b] px-6 py-16 text-[#f7f8f4] md:py-24">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="hero-grid absolute inset-0" />
          </div>
          <div className="container relative mx-auto grid max-w-[1380px] items-center gap-10 xl:px-12">
            <div
              className={`grid items-center gap-10 ${
                image ? 'lg:grid-cols-[1fr_0.82fr]' : ''
              }`}
            >
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f2c94c]">
                  <span className="h-px w-8 bg-[#f2c94c]/75" />
                  {eyebrow}
                </div>
                <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-[#f7f8f4] sm:text-5xl md:text-6xl">
                  {heading}
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#edf2e9]/80 md:text-base">
                  {lead}
                </p>
              </div>
              {image && (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[16/10] w-full rounded-[24px] border border-white/15 object-cover shadow-[0_24px_70px_rgba(8,29,18,0.3)]"
                  fetchPriority="high"
                  decoding="async"
                />
              )}
            </div>
          </div>
        </section>
        {children}
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export function PageSection({
  eyebrow,
  title,
  children,
  className = '',
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-6 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto max-w-[1380px] xl:px-12">
        {(eyebrow || title) && (
          <div className="mb-9">
            {eyebrow && (
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1e633c]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight text-[#173c2b] sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
