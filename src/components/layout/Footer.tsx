import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 bg-white/50 py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl font-medium text-text">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-1 text-sm text-text-muted">{SITE_CONFIG.title}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              {SITE_CONFIG.description}
            </p>
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
              aria-label={`Instagram de ${SITE_CONFIG.name}`}
            >
              <InstagramIcon size={18} />
              {SITE_CONFIG.instagramHandle}
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              Navegación
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
                >
                  <Mail size={16} aria-hidden="true" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-text-muted">
                  <Phone size={16} aria-hidden="true" />
                  {SITE_CONFIG.phone}
                </span>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl(SITE_CONFIG.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
                >
                  <MapPin size={16} aria-hidden="true" />
                  {SITE_CONFIG.location}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-8 sm:flex-row">
          <p className="text-sm text-text-muted">
            © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1 text-sm text-text-muted">
            Hecho con <Heart size={14} className="text-primary" aria-hidden="true" /> para tu bienestar
          </p>
        </div>
      </Container>
    </footer>
  );
}
