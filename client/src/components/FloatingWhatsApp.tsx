import { MessageCircle } from 'lucide-react';
import { CONTACT_WHATSAPP_URL } from '@shared/const';

export default function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-3 rounded-full border border-[#1e633c]/20 bg-[#f2c94c] px-4 py-3 text-sm font-semibold text-[#183c2a] shadow-[0_18px_45px_rgba(27,69,44,0.2)] transition hover:-translate-y-1 hover:bg-[#f7d965] md:bottom-6 md:right-6 md:px-5"
      style={{
        bottom: 'max(1rem, calc(env(safe-area-inset-bottom, 0px) + 0.75rem))',
        right: 'max(1rem, calc(env(safe-area-inset-right, 0px) + 0.75rem))',
      }}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.08]">
        <MessageCircle className="h-5 w-5 text-[#183c2a]" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}