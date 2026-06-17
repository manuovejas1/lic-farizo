"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ABOUT_CONTENT, BRAND_VALUES, SITE_CONFIG } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Heart,
  User,
  HandHeart,
} from "lucide-react";
import Image from "next/image";

const bioIcons = {
  age: User,
  education: GraduationCap,
  space: HandHeart,
} as const;

function BrainHeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 24C18 16 24 10 32 10C36 10 39 12 41 15C43 12 46 10 50 10C56 10 60 14 60 20C60 28 50 36 41 42C38 44 35 45 32 45C29 45 26 44 23 42C14 36 4 28 4 20C4 14 8 10 14 10C16 10 18 11 19 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 18V32M26 25H38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LeafBranch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 70C20 50 35 30 60 15"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M25 55C30 45 40 35 55 25"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <ellipse
        cx="58"
        cy="18"
        rx="8"
        ry="5"
        transform="rotate(-30 58 18)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="48"
        cy="28"
        rx="6"
        ry="4"
        transform="rotate(-20 48 28)"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  );
}

function ValuesSeal() {
  return (
    <div
      className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-secondary/60 bg-white/80 p-3 text-center shadow-sm backdrop-blur-sm sm:h-32 sm:w-32"
      aria-label={`Valores: ${BRAND_VALUES.join(", ")}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="mb-1 h-5 w-5 text-primary/70"
        aria-hidden="true"
      >
        <path
          d="M12 3C8 8 4 10 4 14a4 4 0 008 0c0-4-4-6-8-11z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-[7px] font-medium uppercase leading-tight tracking-wider text-text-muted sm:text-[8px]">
        {BRAND_VALUES.join(" · ")}
      </p>
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="gradient-hero relative min-h-screen overflow-hidden pt-16 sm:pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -left-24 bottom-1/4 h-72 w-72 rounded-full bg-lavender/60 blur-3xl" />
        <LeafBranch className="absolute left-4 top-32 h-16 w-16 text-secondary/50 sm:left-8 sm:h-20 sm:w-20" />
        <LeafBranch className="absolute bottom-20 right-8 h-14 w-14 rotate-180 text-secondary/40 sm:h-16 sm:w-16" />
      </div>

      <Container className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center gap-12 py-12 lg:min-h-[calc(100vh-5rem)] lg:flex-row lg:items-center lg:gap-8 lg:py-20">
        <div className="flex flex-1 flex-col justify-center lg:pr-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BrainHeartIcon className="mb-6 h-10 w-14 text-primary/60" />
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="font-display text-5xl font-medium leading-none text-text sm:text-6xl lg:text-7xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            ¡Bienvenida!
          </motion.h1>

          <motion.p
            className="font-accent mt-3 flex items-center gap-2 text-2xl text-primary sm:text-3xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Este es tu espacio
            <Heart size={18} className="fill-primary/20 text-primary" aria-hidden="true" />
          </motion.p>

          <motion.p
            className="font-display mt-8 text-3xl font-medium text-text sm:text-4xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Soy {SITE_CONFIG.firstName}
          </motion.p>

          <ul className="mt-8 space-y-5">
            {ABOUT_CONTENT.bioItems.map((item, index) => {
              const Icon = bioIcons[item.id];
              const parts = item.text.split(item.highlight);
              return (
                <motion.li
                  key={item.id}
                  className="flex items-start gap-4"
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 + index * 0.08 }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/50 bg-white/70 text-primary">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <p className="pt-2 text-base leading-relaxed text-text-muted sm:text-lg">
                    {parts[0]}
                    <strong className="font-semibold text-text">{item.highlight}</strong>
                    {parts[1]}
                  </p>
                </motion.li>
              );
            })}
          </ul>

          <motion.p
            className="font-accent mt-10 flex items-center gap-2 text-2xl text-primary sm:text-3xl"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Gracias por estar acá
            <Heart size={18} className="fill-primary/20 text-primary" aria-hidden="true" />
          </motion.p>

          <motion.p
            className="mt-6 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            Te acompaño a construir herramientas para tu{" "}
            <strong className="font-semibold text-text">
              bienestar y crecimiento personal
            </strong>
            .
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button href={SITE_CONFIG.bookingUrl} size="lg">
              Reservar una consulta
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#experiencia" variant="outline" size="lg">
              Entrevista Match gratis
            </Button>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <div className="h-px flex-1 max-w-16 bg-secondary/60" aria-hidden="true" />
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Psicóloga Clínica
              <Heart size={12} className="text-primary/60" aria-hidden="true" />
            </p>
            <div className="h-px flex-1 max-w-16 bg-secondary/60" aria-hidden="true" />
          </motion.div>
        </div>

        <motion.div
          className="relative flex w-full flex-1 justify-center lg:justify-end"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div
              className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl shadow-primary/10"
              style={{
                borderRadius: "60% 40% 45% 55% / 50% 55% 45% 50%",
              }}
            >
              <Image
                src={SITE_CONFIG.photo}
                alt={`${SITE_CONFIG.name}, psicóloga clínica`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            </div>

            <motion.div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-8"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <ValuesSeal />
            </motion.div>

            <motion.div
              className="absolute -right-2 top-8 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:-right-6"
              initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="font-accent text-xl text-primary">15 min</p>
              <p className="text-xs text-text-muted">Entrevista Match gratuita</p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
