import { useState, type FormEvent } from 'react';
import { ArrowLeft, Check, GraduationCap } from 'lucide-react';
import { Link } from 'wouter';
import { toast } from 'sonner';
import PageLayout, { PageSection } from '@/components/PageLayout';
import { trpc } from '@/lib/trpc';

export default function Inscripcion() {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    studentName: '',
    studentAge: '',
    program: 'Iniciación',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createInquiry = trpc.contact.createInquiry.useMutation();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!formData.parentName.trim() || !formData.parentEmail.trim() || !formData.studentAge) {
      toast.error('Completa el nombre del responsable, el correo y la edad del estudiante.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await createInquiry.mutateAsync({
        parentName: formData.parentName.trim(),
        parentEmail: formData.parentEmail.trim(),
        studentName: formData.studentName.trim() || undefined,
        studentAge: Number(formData.studentAge),
        message: `Programa: ${formData.program}${formData.message.trim() ? `\n${formData.message.trim()}` : ''}`,
      });

      if (result.notificationDelivered) {
        toast.success('Solicitud recibida. Nos comunicaremos contigo pronto.');
      } else if (!result.emailConfigured) {
        toast.success('Solicitud registrada. El equipo se pondrá en contacto contigo.');
      } else {
        toast.error('La solicitud se registró, pero la confirmación no pudo enviarse.');
      }

      setFormData({
        parentName: '',
        parentEmail: '',
        studentName: '',
        studentAge: '',
        program: 'Iniciación',
        message: '',
      });
    } catch {
      toast.error('No pudimos enviar la solicitud. Inténtalo nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout
      title="Inscripción"
      description="Inscríbete en la Academia Internacional Macas y comienza tu formación en ajedrez."
      eyebrow="Primer movimiento"
      heading={<>Inscríbete en la academia.</>}
      lead="Cuéntanos quién quiere aprender ajedrez y el nivel que más se ajusta. Nuestro equipo revisará tu solicitud y te orientará sobre los próximos pasos."
      image={{
        src: '/chess-students.jpg',
        alt: 'Estudiantes participando en una clase de ajedrez',
      }}
    >
      <PageSection eyebrow="Formulario de inscripción" title="Comienza tu camino en el ajedrez.">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="rounded-[24px] border border-[#1d4b32]/10 bg-[#edf2eb] p-6 sm:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1e633c]">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h2 className="mt-6 text-xl font-medium text-[#173c2b]">¿Qué sucede después?</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[#526e5b]">
              {[
                'Revisamos la edad y el nivel del estudiante.',
                'Te orientamos sobre horarios y modalidad.',
                'Nuestro equipo confirma los siguientes pasos.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#1e633c]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1e633c]"
            >
              <ArrowLeft className="h-4 w-4" /> Volver al inicio
            </Link>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-[24px] border border-[#1d4b32]/10 bg-white p-6 shadow-[0_16px_50px_rgba(27,69,44,0.08)] sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-semibold text-[#315640]">
                Nombre del padre o tutor *
                <input
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-[#1d4b32]/15 px-4 py-3 font-normal text-[#173c2b] outline-none transition focus:border-[#1e633c] focus:ring-2 focus:ring-[#1e633c]/10"
                  placeholder="Nombre completo"
                />
              </label>
              <label className="text-sm font-semibold text-[#315640]">
                Correo electrónico *
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-[#1d4b32]/15 px-4 py-3 font-normal text-[#173c2b] outline-none transition focus:border-[#1e633c] focus:ring-2 focus:ring-[#1e633c]/10"
                  placeholder="correo@ejemplo.com"
                />
              </label>
              <label className="text-sm font-semibold text-[#315640]">
                Nombre del estudiante
                <input
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-[#1d4b32]/15 px-4 py-3 font-normal text-[#173c2b] outline-none transition focus:border-[#1e633c] focus:ring-2 focus:ring-[#1e633c]/10"
                  placeholder="Nombre del jugador"
                />
              </label>
              <label className="text-sm font-semibold text-[#315640]">
                Edad del estudiante *
                <input
                  type="number"
                  name="studentAge"
                  value={formData.studentAge}
                  onChange={handleChange}
                  required
                  min="6"
                  max="18"
                  className="mt-2 w-full rounded-xl border border-[#1d4b32]/15 px-4 py-3 font-normal text-[#173c2b] outline-none transition focus:border-[#1e633c] focus:ring-2 focus:ring-[#1e633c]/10"
                  placeholder="Edad"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold text-[#315640]">
              Programa de interés
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-[#1d4b32]/15 bg-white px-4 py-3 font-normal text-[#173c2b] outline-none transition focus:border-[#1e633c] focus:ring-2 focus:ring-[#1e633c]/10"
              >
                <option>Iniciación</option>
                <option>Intermedio</option>
                <option>Avanzado</option>
                <option>Alto rendimiento</option>
                <option>No estoy seguro</option>
              </select>
            </label>

            <label className="mt-5 block text-sm font-semibold text-[#315640]">
              Cuéntanos más
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-[#1d4b32]/15 px-4 py-3 font-normal text-[#173c2b] outline-none transition focus:border-[#1e633c] focus:ring-2 focus:ring-[#1e633c]/10"
                placeholder="Experiencia, objetivos, disponibilidad o preguntas"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#f2c94c] px-6 text-sm font-semibold text-[#183c2a] transition hover:bg-[#f7d965] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Enviando solicitud...' : 'Enviar inscripción'}
            </button>
            <p className="mt-3 text-center text-xs leading-5 text-[#66806d]">
              Tus datos serán usados únicamente para responder tu solicitud de inscripción.
            </p>
          </form>
        </div>
      </PageSection>
    </PageLayout>
  );
}
