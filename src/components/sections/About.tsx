"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ABOUT_CONTENT, SITE_CONFIG } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, GraduationCap } from "lucide-react";
import Image from "next/image";

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="sobre-mi">
      <Container>
        <SectionTitle
          eyebrow="Conoce quién te acompaña"
          title="Sobre mí"
          subtitle="Cálida, reflexiva y profundamente humana. Una guía comprensiva en tu camino hacia el bienestar."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-xl shadow-primary/10 lg:mx-0 lg:max-w-md"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80"
              alt={`${SITE_CONFIG.name}, psicóloga clínica online`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-secondary/30" />
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-accent mb-4 text-2xl text-primary sm:text-3xl">
                {ABOUT_CONTENT.greeting}
              </p>
              {ABOUT_CONTENT.story.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-5 text-base leading-relaxed text-text-muted last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
              <p className="font-accent mt-6 text-xl text-primary sm:text-2xl">
                {ABOUT_CONTENT.cta}
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <GraduationCap className="text-primary" size={22} aria-hidden="true" />
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
              Agendar entrevista Match
            </Button>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
