"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next, prefersReducedMotion]);

  const testimonial = TESTIMONIALS[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <AnimatedSection id="testimonios">
      <Container>
        <SectionTitle
          eyebrow="Lo que dicen mis pacientes"
          title="Testimonios"
          subtitle="Historias de mujeres que decidieron priorizar su bienestar emocional y dieron el primer paso."
        />

        <div
          className="relative mx-auto max-w-3xl"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="card-glow overflow-hidden rounded-3xl bg-white/80 p-8 backdrop-blur-sm sm:p-12">
            <Quote
              className="mb-6 text-primary/30"
              size={48}
              aria-hidden="true"
            />

            <div className="relative min-h-[180px] sm:min-h-[160px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.blockquote
                  key={testimonial.id}
                  custom={direction}
                  variants={prefersReducedMotion ? undefined : variants}
                  initial={prefersReducedMotion ? false : "enter"}
                  animate="center"
                  exit={prefersReducedMotion ? undefined : "exit"}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <p className="text-base leading-relaxed text-text sm:text-lg">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <div
                      className="mb-2 flex gap-1"
                      aria-label={`${testimonial.rating} de 5 estrellas`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={cn(
                            i < testimonial.rating
                              ? "fill-primary text-primary"
                              : "text-primary/20"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <cite className="font-display text-lg font-medium text-text not-italic">
                      {testimonial.name}
                    </cite>
                    <p className="text-sm text-text-muted">{testimonial.role}</p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonios">
              {TESTIMONIALS.map((t, index) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={index === current}
                  aria-label={`Testimonio de ${t.name}`}
                  onClick={() => goTo(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/25 hover:bg-primary/40"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
