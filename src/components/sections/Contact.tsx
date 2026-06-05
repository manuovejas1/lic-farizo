"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import type { ContactFormData } from "@/types";
import { motion, useReducedMotion } from "framer-motion";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!form.name.trim()) newErrors.name = "El nombre es requerido";
    if (!form.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Ingresa un email válido";
    }
    if (!form.message.trim()) newErrors.message = "El mensaje es requerido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const whatsappMessage = `Hola, soy ${form.name}.\n\nEmail: ${form.email}\nTeléfono: ${form.phone || "No proporcionado"}\n\nMensaje: ${form.message}`;
    window.open(
      getWhatsAppUrl(SITE_CONFIG.whatsapp, whatsappMessage),
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <AnimatedSection id="contacto">
      <Container>
        <SectionTitle
          eyebrow="Estoy aquí para ti"
          title="Contacto"
          subtitle="Completa el formulario para agendar tu entrevista Match gratuita o tu primera consulta. Responderé a la brevedad."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            className="space-y-6 lg:col-span-2"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-glow rounded-2xl bg-white/70 p-6 backdrop-blur-sm">
              <h3 className="font-display mb-4 text-xl font-medium text-text">
                Información de contacto
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-primary sm:text-base"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender/50 text-primary">
                      <Mail size={18} aria-hidden="true" />
                    </span>
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-muted sm:text-base">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lavender/50 text-primary">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  {SITE_CONFIG.phone}
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-primary sm:text-base"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender/50 text-primary">
                      <InstagramIcon size={18} />
                    </span>
                    {SITE_CONFIG.instagramHandle}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-muted sm:text-base">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lavender/50 text-primary">
                    <MapPin size={18} aria-hidden="true" />
                  </span>
                  {SITE_CONFIG.location}
                </li>
              </ul>
            </div>

            <p className="font-accent text-2xl text-primary">
              Espero tu mensaje con cariño
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            className="card-glow space-y-5 rounded-2xl bg-white/70 p-6 backdrop-blur-sm sm:p-8 lg:col-span-3"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            aria-label="Formulario de contacto"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
                Nombre <span className="text-primary" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-text transition-colors placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Tu nombre completo"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
                  Email <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-text transition-colors placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="tu@email.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text">
                  Teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-text transition-colors placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="+52 55 0000 0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
                Mensaje <span className="text-primary" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="w-full resize-none rounded-xl border border-primary/15 bg-white px-4 py-3 text-text transition-colors placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Cuéntame brevemente en qué puedo ayudarte..."
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" size="lg">
                <Send size={18} aria-hidden="true" />
                Enviar mensaje
              </Button>

              {submitted && (
                <p className="text-sm text-primary" role="status">
                  ¡Mensaje enviado! Te redirigimos a WhatsApp.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </Container>
    </AnimatedSection>
  );
}
