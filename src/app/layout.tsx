import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata, Viewport } from "next";
import { Dancing_Script, Lora, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#6B5B7A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.specialization}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.puv,
  keywords: [
    "psicóloga",
    "psicología clínica",
    "ansiedad mujeres profesionales",
    "terapia individual",
    "burnout",
    "autoestima",
    "bienestar emocional",
    "terapia online",
    "psicóloga online",
    "Buenos Aires",
    "Argentina",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.puv,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Psicóloga Clínica`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.puv,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.puv,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  knowsAbout: [SITE_CONFIG.specialization, "Ansiedad", "Autoestima", "Relaciones"],
  sameAs: [SITE_CONFIG.instagram],
  availableService: [
    { "@type": "MedicalTherapy", name: "Terapia individual" },
    { "@type": "MedicalTherapy", name: "Terapia para ansiedad y estrés" },
    { "@type": "MedicalTherapy", name: "Terapia para autoestima" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${lora.variable} ${dancing.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-text antialiased">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
