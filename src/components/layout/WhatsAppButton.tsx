"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_MESSAGE =
  "Hola, me gustaría agendar una entrevista Match o consulta. ¿Podrías brindarme más información?";

export function WhatsAppButton() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={getWhatsAppUrl(SITE_CONFIG.whatsapp, WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      aria-label="Contactar por WhatsApp"
      initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
    >
      <MessageCircle size={28} aria-hidden="true" />
    </motion.a>
  );
}
