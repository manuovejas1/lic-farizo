"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BENEFITS, SITE_CONFIG } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import {
  Heart,
  Lock,
  Shield,
  Sparkles,
  Sprout,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  lock: Lock,
  sparkles: Sparkles,
  shield: Shield,
  sprout: Sprout,
};

export function Benefits() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="beneficios" className="bg-white/50">
      <Container>
        <SectionTitle
          eyebrow="Lo que me define"
          title="Mis valores"
          subtitle="Empatía, confidencialidad y respeto en cada encuentro. Una presencia serena que te acompaña sin juzgar."
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={benefit.id}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="flex gap-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender to-secondary/50 text-primary">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display mb-2 text-xl font-medium text-text">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-accent mb-6 text-2xl text-primary sm:text-3xl">
            No tienes que poder con todo sola
          </p>
          <Button href={SITE_CONFIG.bookingUrl} size="lg">
            Reservar una consulta
          </Button>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
