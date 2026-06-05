"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  Heart,
  Sparkles,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  user: User,
  brain: Brain,
  heart: Heart,
  users: Users,
  sparkles: Sparkles,
};

export function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="servicios" className="bg-white/50">
      <Container>
        <SectionTitle
          eyebrow="¿En qué puedo ayudarte?"
          title="Servicios"
          subtitle="Herramientas prácticas basadas en evidencia para ansiedad, relaciones, autoestima y crecimiento personal."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={cn(
                  "card-glow group rounded-2xl bg-white/80 p-7 backdrop-blur-sm transition-all duration-300 sm:p-8",
                  index === 0 && "sm:col-span-2 lg:col-span-1"
                )}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lavender/70 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="font-display mb-3 text-xl font-medium text-text">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}
