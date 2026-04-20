import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

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
      await createInquiry.mutateAsync({
        parentName: formData.parentName,
        parentEmail: formData.parentEmail,
        studentName: formData.studentName,
        studentAge: parseInt(formData.studentAge),
        message: formData.message,
      });
      toast.success('¡Gracias por tu interés! Nos pondremos en contacto pronto.');
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
    <section id="contact" className="section-padding bg-gradient-to-b from-transparent via-[#d9f0e8] to-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5a4a6b] mb-4">
            Comienza Tu Viaje en el Ajedrez
          </h2>
          <div className="divider-line w-16 mx-auto mb-6"></div>
          <p className="text-lg text-[#8b7a9e] max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto para agendar tu clase de prueba gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-elegant p-8">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#f5d5e8]">
                    <Mail className="h-6 w-6 text-[#7c5ba6]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#5a4a6b]">Email</h3>
                  <a href="mailto:info@chesskacademy.com" className="text-[#8b7a9e] hover:text-[#7c5ba6]">
                    info@chesskacademy.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card-elegant p-8">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#f5d5e8]">
                    <Phone className="h-6 w-6 text-[#7c5ba6]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#5a4a6b]">WhatsApp</h3>
                  <a href="https://wa.me/1234567890" className="text-[#8b7a9e] hover:text-[#7c5ba6]">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div className="card-elegant p-8">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#f5d5e8]">
                    <MapPin className="h-6 w-6 text-[#7c5ba6]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#5a4a6b]">Ubicación</h3>
                  <p className="text-[#8b7a9e]">Clases 100% Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6 bg-white rounded-xl border border-[#e6d9f0] shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)' }}>
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
                    className="w-full px-4 py-3 rounded-lg border border-[#e6d9f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#7c5ba6] text-[#2d1f3d]"
                    placeholder="Tu nombre completo"
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
                    className="w-full px-4 py-3 rounded-lg border border-[#e6d9f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#7c5ba6] text-[#2d1f3d]"
                    placeholder="tu@email.com"
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
                    className="w-full px-4 py-3 rounded-lg border border-[#e6d9f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#7c5ba6] text-[#2d1f3d]"
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
                    className="w-full px-4 py-3 rounded-lg border border-[#e6d9f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#7c5ba6] text-[#2d1f3d]"
                    placeholder="Edad"
                    min="6"
                    max="18"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5a4a6b] mb-2">
                  Mensaje (Opcional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#e6d9f0] bg-white focus:outline-none focus:ring-2 focus:ring-[#7c5ba6] text-[#2d1f3d]"
                  placeholder="Cuéntanos sobre tu hijo/a y tus objetivos..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Clase de Prueba'}
              </button>

              <p className="text-xs text-[#8b7a9e] text-center">
                * Campos requeridos. Nos pondremos en contacto en las próximas 24 horas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
