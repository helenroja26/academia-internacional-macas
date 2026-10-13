import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_URL,
} from '@shared/const';
import PageLayout, { PageSection } from '@/components/PageLayout';

export default function Contacto() {
  return (
    <PageLayout
      title="Contacto"
      description="Contacta a la Academia Internacional Macas para encontrar el programa de ajedrez adecuado."
      eyebrow="Hablemos de tu próximo movimiento"
      heading={<>Tu camino en el ajedrez empieza con una conversación.</>}
      lead="Cuéntanos la edad, experiencia y objetivos del jugador. Te orientaremos sobre los programas y los siguientes pasos."
      image={{
        src: '/chess-students.jpg',
        alt: 'Jóvenes aprendiendo y practicando ajedrez',
      }}
    >
      <PageSection eyebrow="Contacto directo" title="Estamos para orientarte.">
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href={`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent('Hola, quisiera información sobre los programas de ajedrez de la Academia Internacional Macas.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[22px] border border-[#1d4b32]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(27,69,44,0.1)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf2eb] text-[#1e633c]">
              <MessageCircle className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-lg font-medium text-[#173c2b]">WhatsApp</h2>
            <p className="mt-2 text-sm text-[#526e5b]">{CONTACT_PHONE_DISPLAY}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#1e633c]">
              Abrir conversación <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group rounded-[22px] border border-[#1d4b32]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(27,69,44,0.1)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf2eb] text-[#1e633c]">
              <Mail className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-lg font-medium text-[#173c2b]">Correo electrónico</h2>
            <p className="mt-2 break-all text-sm text-[#526e5b]">{CONTACT_EMAIL}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#1e633c]">
              Enviar un correo <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          <div className="rounded-[22px] border border-[#1d4b32]/10 bg-[#edf2eb] p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#1e633c]">
              <MapPin className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-lg font-medium text-[#173c2b]">Ubicación</h2>
            <p className="mt-2 text-sm text-[#526e5b]">Macas, Ecuador</p>
            <p className="mt-1 text-xs text-[#66806d]">Consulta disponibilidad y modalidad de clases.</p>
          </div>
        </div>
      </PageSection>

      <section className="academy-dark-panel bg-[#173c2b] px-6 py-14 text-[#f7f8f4]">
        <div className="container mx-auto flex max-w-[1380px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between xl:px-12">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f2c94c]">Reserva una clase</p>
            <h2 className="mt-2 text-2xl font-medium text-[#f7f8f4] sm:text-3xl">Da el primer paso hoy.</h2>
          </div>
          <a
            href={`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent('Hola, quiero reservar una clase gratuita en la Academia Internacional Macas.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f2c94c] px-6 text-sm font-semibold text-[#183c2a] transition hover:bg-[#f7d965]"
          >
            <MessageCircle className="h-4 w-4" />
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
