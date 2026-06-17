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
  Users,
  Target,
} from "lucide-react";
import Image from "next/image";

const bioIcons = {
  age: User,
  education: GraduationCap,
  space: HandHeart,
  audience: Users,
  approach: Target,
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

function ValuesSeal() {
  return (
    <div
      className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-secondary/60 bg-white/90 p-2.5 text-center shadow-md backdrop-blur-sm sm:h-28 sm:w-28"
      aria-label={`Valores: ${BRAND_VALUES.join(", ")}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="mb-1 h-4 w-4 text-primary/70"
        aria-hidden="true"
      >
        <path
          d="M12 3C8 8 4 10 4 14a4 4 0 008 0c0-4-4-6-8-11z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-[6px] font-medium uppercase leading-tight tracking-wider text-text-muted sm:text-[7px]">
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
      className="gradient-hero relative overflow-hidden pt-16 sm:pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-lavender/70 blur-3xl" />
      </div>

      <Container className="relative py-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,38%)] lg:gap-6 xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-10">
          <div className="relative z-10 max-w-xl lg:max-w-none">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BrainHeartIcon className="mb-4 h-8 w-12 text-primary/60 sm:h-10 sm:w-14" />
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="font-display text-4xl font-medium leading-none text-text sm:text-5xl lg:text-6xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              ¡Bienvenidos!
            </motion.h1>

            <motion.p
              className="font-accent mt-3 flex items-center gap-2 text-xl text-primary sm:text-2xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Este es tu espacio
              <Heart
                size={16}
                className="fill-primary/20 text-primary"
                aria-hidden="true"
              />
            </motion.p>

            <motion.p
              className="mt-4 text-lg leading-relaxed text-text-muted sm:text-xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              {SITE_CONFIG.tagline}
            </motion.p>

            <motion.p
              className="font-display mt-5 text-2xl font-medium text-text sm:text-3xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Soy {SITE_CONFIG.firstName}
            </motion.p>

            <div className="mt-6 rounded-3xl border border-white/60 bg-white/50 p-4 shadow-sm backdrop-blur-sm sm:p-5">
              <ul className="grid gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4">
                {ABOUT_CONTENT.bioItems.map((item, index) => {
                  const Icon = bioIcons[item.id];
                  const parts = item.text.split(item.highlight);
                  const isWide =
                    item.id === "space" ||
                    item.id === "audience" ||
                    item.id === "approach";

                  return (
                    <motion.li
                      key={item.id}
                      className={isWide ? "sm:col-span-2" : undefined}
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 12 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.25 + index * 0.06,
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-white/80 text-primary">
                          <Icon size={16} aria-hidden="true" />
                        </div>
                        <p className="pt-1 text-sm leading-relaxed text-text-muted sm:text-[0.9375rem]">
                          {parts[0]}
                          <strong className="font-semibold text-text">
                            {item.highlight}
                          </strong>
                          {parts[1]}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <motion.p
              className="font-accent mt-5 flex items-center gap-2 text-xl text-primary sm:text-2xl"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Gracias por estar acá
              <Heart
                size={16}
                className="fill-primary/20 text-primary"
                aria-hidden="true"
              />
            </motion.p>

            <motion.p
              className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              {SITE_CONFIG.mission}
            </motion.p>

            <motion.div
              className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
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
              className="mt-6 flex items-center gap-3"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <div
                className="h-px w-10 bg-secondary/60"
                aria-hidden="true"
              />
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted sm:text-xs">
                Psicóloga Clínica
                <Heart
                  size={11}
                  className="text-primary/60"
                  aria-hidden="true"
                />
              </p>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:mx-0 lg:max-w-none"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="absolute -left-6 top-1/2 hidden h-[85%] w-24 -translate-y-1/2 rounded-full bg-white/50 blur-2xl lg:block xl:-left-10 xl:w-32"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-white/70 via-lavender/40 to-secondary/30 sm:-inset-4 sm:rounded-[2.5rem]"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.75rem] shadow-xl shadow-primary/10 ring-1 ring-white/60 sm:aspect-[4/5] sm:rounded-t-[999px] sm:rounded-b-3xl">
                <Image
                  src={SITE_CONFIG.photo}
                  alt={`${SITE_CONFIG.name}, psicóloga clínica`}
                  fill
                  priority
                  className="object-cover object-[center_12%] sm:object-[center_15%]"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 420px"
                />
              </div>

              <motion.div
                className="absolute -bottom-3 -left-3 hidden sm:block sm:-bottom-4 sm:-left-5"
                initial={
                  prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <ValuesSeal />
              </motion.div>

              <motion.div
                className="absolute right-3 top-3 rounded-xl bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:-right-3 sm:top-8 sm:rounded-2xl sm:px-5 sm:py-4"
                initial={
                  prefersReducedMotion ? false : { opacity: 0, x: 16 }
                }
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="font-accent text-base text-primary sm:text-xl">
                  15 min
                </p>
                <p className="text-[10px] text-text-muted sm:text-xs">
                  Entrevista Match gratuita
                </p>
              </motion.div>
            </div>

            <div className="mt-4 flex justify-center sm:hidden">
              <ValuesSeal />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
