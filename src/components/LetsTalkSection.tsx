"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const projectTypes = [
  "Residencia Privada",
  "Apartamento",
  "Oficina Corporativa",
  "Hotel / Hospitalidad",
  "Local Comercial",
  "Gran Escala",
  "Otro",
];

export function LetsTalkSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#c9a84c]/20 py-3.5 text-[#f5e6c8] font-sans font-light text-sm placeholder:text-[#f5e6c8]/25 focus:border-[#c9a84c]/60 focus:outline-none transition-colors duration-300";

  return (
    <section id="contact" className="relative py-36 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#221c10]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 80% 60%, rgba(140, 80, 10, 0.09) 0%, transparent 65%),
            radial-gradient(ellipse 50% 50% at 20% 40%, rgba(201, 168, 76, 0.04) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-8 h-px bg-[#c9a84c]/40" />
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]/60">
              05 — Hablemos
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-serif italic text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.0] text-[#f5e6c8]">
              Cuéntenos
              <br />
              su <span className="text-[#c9a84c]">visión</span>
            </h2>
            <p className="font-sans font-light text-base leading-8 text-[#f5e6c8]/50 max-w-md">
              Cada gran proyecto comienza con una conversación. Comparta su
              sueño con nosotros y descubra cómo D&apos;art puede transformarlo en
              realidad.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-start gap-6 py-16">
                <div className="w-12 h-px bg-[#c9a84c]/50" />
                <h3 className="font-serif italic text-3xl text-[#f5e6c8]">
                  Gracias por su mensaje
                </h3>
                <p className="font-sans font-light text-base leading-7 text-[#f5e6c8]/55 max-w-sm">
                  Hemos recibido su consulta y nos pondremos en contacto en las
                  próximas 24 horas para comenzar a dar forma a su visión.
                </p>
                <div className="w-12 h-px bg-[#c9a84c]/50" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/50 mb-3"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Su nombre"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/50 mb-3"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone + Project type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/50 mb-3"
                    >
                      Teléfono / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+57 300 000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/50 mb-3"
                    >
                      Tipo de Proyecto
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer appearance-none`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(201,168,76,0.4)' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 4px center",
                      }}
                    >
                      <option value="" disabled style={{ background: "#251a08" }}>
                        Seleccione...
                      </option>
                      {projectTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          style={{ background: "#251a08" }}
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/50 mb-3"
                  >
                    Su Visión *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntenos sobre su proyecto, sus expectativas y su línea de tiempo..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group relative inline-flex items-center gap-4 font-sans text-xs tracking-[0.2em] uppercase text-[#221c10] bg-[#c9a84c] px-10 py-4 hover:bg-[#e8c87a] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <span className="inline-block w-3 h-3 border border-[#221c10]/50 border-t-[#221c10] rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Consulta
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {/* WhatsApp */}
            <div>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/50 mb-6">
                Contacto Directo
              </p>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-full border border-[#c9a84c]/20 px-6 py-5 hover:border-[#c9a84c]/50 hover:bg-[#c9a84c]/[0.04] transition-all duration-300"
                aria-label="Contactar por WhatsApp"
              >
                {/* WhatsApp icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#c9a84c] shrink-0"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <div>
                  <p className="font-sans font-light text-sm text-[#f5e6c8]/80 group-hover:text-[#f5e6c8] transition-colors duration-300">
                    WhatsApp
                  </p>
                  <p className="font-sans text-xs text-[#c9a84c]/60 group-hover:text-[#c9a84c] transition-colors duration-300">
                    +57 300 123 4567
                  </p>
                </div>
                <span className="ml-auto text-[#c9a84c]/30 group-hover:text-[#c9a84c]/70 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </a>
            </div>

            {/* Contact details */}
            <div className="space-y-8">
              {[
                {
                  label: "Correo",
                  value: "hola@dart.com.co",
                  href: "mailto:hola@dart.com.co",
                },
                {
                  label: "Instagram",
                  value: "@dart.colombia",
                  href: "#",
                },
                {
                  label: "Ubicación",
                  value: "Bogotá, Colombia",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/40 mb-1.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-sans font-light text-sm text-[#f5e6c8]/60 hover:text-[#c9a84c] transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-sans font-light text-sm text-[#f5e6c8]/60">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Decorative quote */}
            <div className="pt-4 border-t border-[#c9a84c]/10">
              <p className="font-serif italic text-base text-[#c9a84c]/40 leading-relaxed">
                &ldquo;El primer paso hacia el espacio
                <br />
                de sus sueños comienza aquí.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-32 border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif italic text-xl text-[#f5e6c8]/40">
            d&apos;art
          </span>
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#f5e6c8]/25">
            © {new Date().getFullYear()} D&apos;art — Todos los derechos reservados
          </p>
          <div className="w-8 h-px bg-[#c9a84c]/20" />
        </div>
      </div>
    </section>
  );
}
