"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OrganicShape } from "@/components/ui/OrganicShape";
import { SITE_CONFIG } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="gradient-hero relative min-h-screen overflow-hidden pt-16 sm:pt-20"
      aria-labelledby="hero-heading"
    >
      <OrganicShape className="-right-20 -top-20 h-72 w-72 opacity-60" />
      <OrganicShape className="-bottom-24 -left-16 h-64 w-64 bg-secondary/30" />

      <Container className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center gap-16 py-16 lg:min-h-[calc(100vh-5rem)] lg:flex-row lg:gap-20 lg:py-24">
        <div className="flex flex-1 flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
              <Sparkles size={14} aria-hidden="true" />
              {SITE_CONFIG.specialization}
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="font-display text-4xl font-medium leading-[1.15] text-text sm:text-5xl lg:text-6xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {SITE_CONFIG.tagline}
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg lg:mx-0 lg:max-w-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {SITE_CONFIG.puv}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button href={SITE_CONFIG.bookingUrl} size="lg">
              Reservar una consulta
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#experiencia" variant="outline" size="lg">
              Entrevista Match gratis
            </Button>
          </motion.div>

          <motion.p
            className="font-accent mt-10 text-2xl text-primary sm:text-3xl"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Ciencia y empatía, a tu ritmo
          </motion.p>
        </div>

        <motion.div
          className="relative flex flex-1 justify-center"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/15 lg:max-w-lg">
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-secondary/40" />
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
              alt="Psicóloga profesional con luz natural cálida y presencia cercana"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent" />
          </div>

          <motion.div
            className="absolute -bottom-5 -left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:-left-10"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="font-accent text-xl text-primary">15 min</p>
            <p className="text-xs text-text-muted">Entrevista Match gratuita</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
