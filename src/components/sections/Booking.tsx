"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SITE_CONFIG } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";

export function Booking() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="reservar" className="bg-white/50">
      <Container>
        <SectionTitle
          eyebrow="Agenda tu sesión"
          title="Reservar consulta"
          subtitle="Elegí el día y horario que mejor te convenga. Las sesiones son online y tienen una duración de 50 minutos."
        />

        <motion.div
          className="card-glow overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src={SITE_CONFIG.calendarEmbedUrl}
            title={`Reservar cita con ${SITE_CONFIG.name}`}
            className="min-h-[600px] w-full border-0"
            height={600}
            loading="lazy"
          />
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
