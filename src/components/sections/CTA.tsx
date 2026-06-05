"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24 lg:py-28" aria-labelledby="cta-heading">
      <Container>
        <motion.div
          className="gradient-cta relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-14 sm:py-24"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="organic-blob pointer-events-none absolute -right-12 -top-12 h-40 w-40 bg-white/10" />
          <div className="organic-blob pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 bg-white/10" />

          <p className="font-accent mb-5 text-2xl text-white/90 sm:text-3xl">
            Tu momento es ahora
          </p>

          <h2
            id="cta-heading"
            className="font-display mx-auto max-w-2xl text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Dar el primer paso puede cambiar tu vida.
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            Agenda tu entrevista Match de 15 minutos, sin costo. Es el primer
            paso para saber si este es tu espacio seguro.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={SITE_CONFIG.bookingUrl}
              size="lg"
              className="bg-white text-primary shadow-lg shadow-black/10 hover:bg-white/95"
            >
              Agendar consulta
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button
              href="#experiencia"
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:border-white hover:bg-white/10"
            >
              Conocer la experiencia
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
