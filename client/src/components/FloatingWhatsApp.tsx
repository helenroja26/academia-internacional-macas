import { MessageCircle } from 'lucide-react';
import { CONTACT_WHATSAPP_URL } from '@shared/const';

export default function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-3 rounded-full bg-[#1f8f62] px-4 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(31,143,98,0.35)] transition hover:-translate-y-1 hover:bg-[#187552] md:bottom-6 md:right-6 md:px-5"
      style={{
        bottom: 'max(1rem, calc(env(safe-area-inset-bottom, 0px) + 0.75rem))',
        right: 'max(1rem, calc(env(safe-area-inset-right, 0px) + 0.75rem))',
      }}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/16">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}