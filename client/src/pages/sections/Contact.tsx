import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL, FACEBOOK_URL, INSTAGRAM_URL } from '@shared/const';

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    studentName: '',
    studentAge: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const createInquiry = trpc.contact.createInquiry.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.parentName || !formData.parentEmail || !formData.studentAge) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await createInquiry.mutateAsync({
        parentName: formData.parentName,
        parentEmail: formData.parentEmail,
        studentName: formData.studentName,
        studentAge: parseInt(formData.studentAge),
        message: formData.message,
      });
      if (result.notificationDelivered) {
        toast.success('¡Gracias por tu interés! Recibimos tu solicitud y te contactaremos pronto.');
      } else if (!result.emailConfigured) {
        toast.error('El formulario se guardó, pero el servidor aún no tiene configurado el correo SMTP. Por ahora contáctanos por WhatsApp o email directo.');
      } else {
        toast.error('La solicitud se guardó, pero el correo de notificación no pudo enviarse. Revisa la configuración SMTP o contáctanos por WhatsApp.');
      }

      setFormData({
        parentName: '',
        parentEmail: '',
        studentName: '',
        studentAge: '',
        message: '',
      });
    } catch (error) {
      toast.error('Ocurrió un error. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,#f2ebf8_0%,#eef6f1_52%,#f7f3fb_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-16 h-48 w-48 rounded-full bg-[#f5d5e8]/50 blur-[100px]"></div>
        <div className="absolute right-[8%] top-24 h-64 w-64 rounded-full bg-[#d9f0e8]/55 blur-[110px]"></div>
        <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(124,91,166,0.16),transparent_70%)]"></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <span className="inline-flex items-center rounded-full border border-white/70 bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7c5ba6] shadow-sm">
            Reserva Tu Clase
          </span>
          <h2 className="mt-5 text-4xl font-serif font-bold text-[#4e3d61] md:text-5xl lg:text-[3.35rem]">
            Da el Primer Paso con una Clase de Prueba
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base md:text-lg text-[#66597a]">
            Comparte tus datos y te orientaremos con la mejor forma de empezar.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/58 shadow-[0_32px_90px_rgba(73,57,96,0.14)] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(22rem,0.95fr)_minmax(0,1.3fr)]">
            <div className="relative overflow-hidden border-b border-white/40 p-7 md:p-10 lg:border-b-0 lg:border-r lg:border-r-white/40 lg:p-12" style={{ background: 'linear-gradient(155deg, rgba(80,61,103,0.96), rgba(110,84,141,0.92) 54%, rgba(130,177,158,0.72) 100%)' }}>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_28%)]"></div>

              <div className="relative z-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">Reserva inicial</p>
                <h3 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-[2.1rem]">
                  Un inicio claro y bien guiado
                </h3>
                <p className="mt-4 max-w-sm text-[0.96rem] leading-7 text-white/82">
                  Cuéntanos lo esencial y te responderemos con una orientación personalizada para el estudiante.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  <div className="rounded-2xl border border-white/18 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">Modalidad</p>
                    <p className="mt-2 text-sm font-semibold text-white">Clases 100% online</p>
                  </div>
                  <div className="rounded-2xl border border-white/18 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">Respuesta</p>
                    <p className="mt-2 text-sm font-semibold text-white">En menos de 24 horas</p>
                  </div>
                  <div className="rounded-2xl border border-white/18 bg-white/10 px-4 py-4 backdrop-blur-sm">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">Enfoque</p>
                    <p className="mt-2 text-sm font-semibold text-white">Acompañamiento personalizado</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4 rounded-[1.6rem] border border-white/16 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/14">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">Email</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-base font-semibold text-white hover:text-white/80">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/14">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">WhatsApp</p>
                      <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-1 block text-base font-semibold text-white hover:text-white/80">
                        {CONTACT_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/14">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">Ubicación</p>
                      <p className="mt-1 text-base font-semibold text-white">Clases 100% online</p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={CONTACT_WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#2b8d63] transition hover:bg-[#f3fffa]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Escríbenos por WhatsApp
                  </a>
                  <div className="flex items-center gap-2 text-white/78">
                    <a
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/16"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/16"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 md:p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6 rounded-[1.85rem] border border-[#ede3f5] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(252,249,255,0.98))] p-7 shadow-[0_24px_60px_rgba(90,74,107,0.08)] md:p-10" style={{ backdropFilter: 'blur(8px)' }}>
                <div className="flex flex-col gap-3 border-b border-[#efe5f6] pb-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7c5ba6]">Formulario de contacto</p>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-[#4f3f61] md:text-[2rem]">Solicita tu clase de prueba</h3>
                  </div>
                  <p className="max-w-xs text-sm text-[#756887] md:text-right">Solo necesitamos unos datos para orientarte mejor.</p>
                </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#5a4a6b] mb-2">
                    Nombre del Padre/Tutor *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#e6d9f0] bg-[#fcfbfe] px-4 py-3.5 text-[#2d1f3d] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7c5ba6]"
                    placeholder="Nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#5a4a6b] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#e6d9f0] bg-[#fcfbfe] px-4 py-3.5 text-[#2d1f3d] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7c5ba6]"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#5a4a6b] mb-2">
                    Nombre del Estudiante
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#e6d9f0] bg-[#fcfbfe] px-4 py-3.5 text-[#2d1f3d] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7c5ba6]"
                    placeholder="Nombre del estudiante"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#5a4a6b] mb-2">
                    Edad del Estudiante *
                  </label>
                  <input
                    type="number"
                    name="studentAge"
                    value={formData.studentAge}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#e6d9f0] bg-[#fcfbfe] px-4 py-3.5 text-[#2d1f3d] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7c5ba6]"
                    placeholder="Edad"
                    min="6"
                    max="18"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5a4a6b] mb-2">
                  Mensaje opcional
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-2xl border border-[#e6d9f0] bg-[#fcfbfe] px-4 py-3.5 text-[#2d1f3d] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7c5ba6]"
                  placeholder="Cuéntanos brevemente qué busca el estudiante..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-[linear-gradient(135deg,#7c5ba6,#a375b7)] px-8 py-4 text-base font-bold text-white shadow-[0_18px_40px_rgba(124,91,166,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(124,91,166,0.34)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Clase de Prueba'}
              </button>

              <p className="text-center text-xs text-[#6f6180]">
                * Campos requeridos. Te responderemos en un plazo estimado de 24 horas.
              </p>
            </form>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
