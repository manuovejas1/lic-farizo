import type {
  Benefit,
  Differentiator,
  FAQItem,
  NavLink,
  Service,
  Testimonial,
} from "@/types";

export const SITE_CONFIG = {
  name: "Lic. Camila Farizo",
  firstName: "Camila",
  age: 28,
  title: "Psicóloga Clínica - M.N 89257",
  specialization: "Psicóloga Clínica · M.N 89257",
  tagline: "Te acompaño a construir herramientas para tu bienestar y crecimiento personal.",
  puv: "Creé este espacio para hablar de salud mental de una forma cercana, práctica y sin juicios.",
  description:
    "Terapia psicológica online, accesible, empática y basada en evidencia. Te acompaño a gestionar tus emociones desde donde estés.",
  mission:
    "Te acompaño a construir herramientas para tu bienestar y crecimiento personal.",
  url: "https://lic.camilafarizo.com",
  email: "camilafarizo@gmail.com",
  phone: "+541136665948",
  whatsapp: "541136665948",
  instagram: "https://www.instagram.com/lic.camilafarizo/",
  instagramHandle: "@lic.camilafarizo",
  location: "Buenos Aires, Argentina · Consultas 100% online",
  bookingUrl: "#contacto",
  photo:
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
} as const;

export const BRAND_VALUES = [
  "Empatía",
  "Respeto",
  "Acompañamiento",
  "Crecimiento",
] as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Valores", href: "#beneficios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const SERVICES: Service[] = [
  {
    id: "individual",
    title: "Terapia individual",
    description:
      "Un proceso personalizado para comprender tus emociones, fortalecer tu autoconocimiento y construir herramientas prácticas para tu día a día.",
    icon: "user",
  },
  {
    id: "anxiety",
    title: "Ansiedad y estrés",
    description:
      "Técnicas basadas en evidencia para calmar el sobrepensamiento, manejar el burnout y recuperar la paz mental que mereces.",
    icon: "brain",
  },
  {
    id: "self-esteem",
    title: "Autoestima y amor propio",
    description:
      "Trabajo profundo para sanar la autocrítica, reconectar con tu valor y cultivar una relación más amorosa contigo misma.",
    icon: "heart",
  },
  {
    id: "relationships",
    title: "Relaciones y límites",
    description:
      "Acompañamiento para construir vínculos sanos, poner límites sin culpa y recuperar tu independencia emocional.",
    icon: "users",
  },
  {
    id: "growth",
    title: "Desarrollo personal",
    description:
      "Espacio para clarificar tu propósito, superar bloqueos internos y avanzar hacia la vida que has postergado.",
    icon: "sparkles",
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: "empathy",
    title: "Empatía",
    description:
      "Te escucho con calidez y sin juicios. Una guía comprensiva que te acompaña desde un lugar humano y cercano.",
    icon: "heart",
  },
  {
    id: "respect",
    title: "Respeto",
    description:
      "Honro tu historia, tu ritmo y tus decisiones. Cada proceso se adapta a lo que necesitas en este momento.",
    icon: "shield",
  },
  {
    id: "accompaniment",
    title: "Acompañamiento",
    description:
      "No estás sola en el camino. Te acompaño a construir herramientas concretas para tu bienestar emocional.",
    icon: "users",
  },
  {
    id: "growth",
    title: "Crecimiento",
    description:
      "Herramientas reales y prácticas para que avances hacia el bienestar emocional y el crecimiento personal.",
    icon: "sprout",
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "welcome-pack",
    title: "Welcome Pack Digital",
    description:
      "Al agendar tu primera sesión, recibes un PDF de bienvenida con todo lo que necesitas saber para comenzar con tranquilidad.",
    icon: "gift",
  },
  {
    id: "match-interview",
    title: "Entrevista Match de 15 min",
    description:
      "Videollamada breve y gratuita para asegurar que nos conectemos y que te sientas en el espacio correcto.",
    icon: "video",
  },
  {
    id: "sensory",
    title: "Experiencia acogedora",
    description:
      "Un espacio virtual cuidado, con ritual de bienvenida y ambiente relajante para que te sientas cómoda desde tu lugar.",
    icon: "leaf",
  },
  {
    id: "whatsapp",
    title: "Seguimiento entre sesiones",
    description:
      "Comunicación asíncrona por WhatsApp con límites claros, para que no te sientas sola entre citas.",
    icon: "message",
  },
  {
    id: "resources",
    title: "Recursos post-sesión",
    description:
      "Recibes un PDF breve o audio con el ejercicio de la semana para seguir trabajando en casa.",
    icon: "file",
  },
  {
    id: "specialization",
    title: "Especialización enfocada",
    description:
      "Posicionamiento experto en ansiedad para profesionales: burnout, sobrepensamiento y equilibrio vital.",
    icon: "target",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ana R.",
    role: "Profesional joven · 28 años",
    content:
      "Llegué con ansiedad y sobrepensamiento constante. Camila me dio herramientas prácticas y hoy duermo mejor y disfruto más el presente.",
    rating: 5,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "match",
    question: "¿Qué es la entrevista Match de 15 minutos?",
    answer:
      "Es una videollamada breve y gratuita antes de tu primera sesión. Nos permite conocernos, resolver dudas y confirmar que te sientes cómoda con mi forma de acompañarte.",
  },
  {
    id: "duration",
    question: "¿Cuánto dura cada sesión?",
    answer:
      "Las sesiones individuales tienen una duración de 50 minutos. Este tiempo permite un trabajo profundo y significativo en cada encuentro.",
  },
  {
    id: "frequency",
    question: "¿Con qué frecuencia debo tener sesiones?",
    answer:
      "Generalmente se recomienda una sesión semanal, especialmente al inicio. La frecuencia se ajusta según tus necesidades y avances.",
  },
  {
    id: "online",
    question: "¿Las sesiones son online?",
    answer:
      "Sí, todas las consultas son por videollamada. Podés conectarte desde donde te sientas más cómoda, con la misma calidad y confidencialidad.",
  },
  {
    id: "first-session",
    question: "¿Qué sucede en la primera consulta?",
    answer:
      "Es un espacio para conocernos, comprender tu motivo de consulta y definir juntas los objetivos del proceso. Recibirás tu Welcome Pack Digital con toda la información.",
  },
  {
    id: "cost",
    question: "¿Cuál es el costo de las sesiones?",
    answer:
      "Podés solicitar información detallada sobre el valor de las sesiones online al agendar tu entrevista Match gratuita.",
  },
  {
    id: "cancellation",
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Las cancelaciones deben realizarse con al menos 24 horas de anticipación. Esto permite ofrecer el espacio a otra persona que lo necesite.",
  },
];

export const ABOUT_CONTENT = {
  bioItems: [
    {
      id: "age",
      text: "Tengo 28 años.",
      highlight: "28 años",
    },
    {
      id: "education",
      text: "Me recibí en la Universidad de Buenos Aires.",
      highlight: "Universidad de Buenos Aires",
    },
    {
      id: "space",
      text: "Creé este espacio para hablar de salud mental de una forma cercana, práctica y sin juicios.",
      highlight: "salud mental",
    },
  ],
  education: [
    "Licenciatura en Psicología — Universidad de Buenos Aires (UBA) · M.N 89257",
  ],
  specialties: [
    "Ansiedad Generalizada",
    "Burnout y estrés crónico",
    "Autoestima y amor propio",
    "Relaciones y límites emocionales",
    "Desarrollo personal y autodescubrimiento",
  ],
} as const;
