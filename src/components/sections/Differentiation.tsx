"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { OrganicShape } from "@/components/ui/OrganicShape";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DIFFERENTIATORS } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileText,
  Gift,
  Leaf,
  MessageCircle,
  Target,
  Video,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  gift: Gift,
  video: Video,
  leaf: Leaf,
  message: MessageCircle,
  file: FileText,
  target: Target,
};

export function Differentiation() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="experiencia" className="relative overflow-hidden">
      <OrganicShape className="right-0 top-1/2 h-48 w-48 -translate-y-1/2 bg-lavender/30" />

      <Container className="relative">
        <SectionTitle
          eyebrow="Tu ventaja"
          title="Una experiencia pensada para ti"
          subtitle="Más que una sesión: un acompañamiento integral que te hace sentir cuidada desde el primer contacto."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="card-glow rounded-2xl bg-white/80 p-7 backdrop-blur-sm transition-all duration-300"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display mb-2 text-lg font-medium text-text">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}
