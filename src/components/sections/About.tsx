"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ABOUT_CONTENT, SITE_CONFIG } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, GraduationCap } from "lucide-react";

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="sobre-mi">
      <Container>
        <SectionTitle
          eyebrow="Formación y enfoque"
          title="Sobre mí"
          subtitle="Psicóloga clínica recibida en la UBA. Atención para adolescentes, jóvenes adultos y adultos."
        />

        <div className="mx-auto max-w-3xl space-y-10">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base leading-relaxed text-text-muted sm:text-lg">
              Soy {SITE_CONFIG.firstName}, tengo {SITE_CONFIG.age} años y me
              recibí en la{" "}
              <strong className="font-semibold text-text">
                Universidad de Buenos Aires
              </strong>
              . Creé este espacio para hablar de salud mental de una forma
              cercana, práctica y sin juicios — abierto a hombres y mujeres.
            </p>
            <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
              {SITE_CONFIG.approach}
            </p>
            <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
              Atención para adolescentes, jóvenes adultos y adultos.
            </p>
            <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
              {SITE_CONFIG.mission}
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap
                className="text-primary"
                size={22}
                aria-hidden="true"
              />
              <h3 className="font-display text-xl font-medium text-text">
                Formación académica
              </h3>
            </div>
            <ul className="space-y-3">
              {ABOUT_CONTENT.education.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-text-muted sm:text-base"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display mb-4 text-xl font-medium text-text">
              Especialidades
            </h3>
            <div className="flex flex-wrap gap-2">
              {ABOUT_CONTENT.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full bg-lavender/80 px-4 py-2 text-sm text-text"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </motion.div>

          <Button href={SITE_CONFIG.bookingUrl}>
            Reservar consulta
          </Button>
        </div>
      </Container>
    </AnimatedSection>
  );
}
