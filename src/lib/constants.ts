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
  tagline: "Un espacio seguro para florecer a tu ritmo",
  puv: "Un espacio seguro y moderno donde la ciencia psicológica se encuentra con la empatía humana para ayudarte a florecer a tu propio ritmo.",
  description:
    "Terapia psicológica online para adolescentes, jóvenes adultos y adultos. Accesible, empática y basada en evidencia.",
  mission:
    "Te acompaño a construir herramientas para tu bienestar y crecimiento personal, con un trabajo integral y un enfoque centrado en vos.",
  audience: "Adolescentes, jóvenes adultos y adultos.",
  approach:
    "Trabajo de manera integral, con un enfoque centrado en la persona y en lo que cada consultante necesita.",
  url: "https://lic.camilafarizo.com",
  email: "camilafarizo@gmail.com",
  phone: "+541136665948",
  whatsapp: "541136665948",
  instagram: "https://www.instagram.com/lic.camilafarizo/",
  instagramHandle: "@lic.camilafarizo",
  location: "Buenos Aires, Argentina · Consultas 100% online",
  bookingUrl: "#contacto",
  photo: "/camila-farizo.png",
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
    title: "Autoestima",
    description:
      "Trabajo profundo para sanar la autocrítica, reconectar con tu valor y fortalecer la confianza en vos mismo/a.",
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
      "Te escucho con calidez y sin juicios. Una guía comprensiva, no una figura de autoridad inalcanzable.",
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
      "No estás solo/a en el camino. Te acompaño a construir herramientas concretas para tu bienestar emocional.",
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
      "Al agendar tu primera sesión, recibes un PDF con todo lo que necesitas saber para comenzar con tranquilidad.",
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
      "Un espacio virtual cuidado y ambiente relajante para que te sientas cómodo/a desde tu lugar.",
    icon: "leaf",
  },
  {
    id: "whatsapp",
    title: "Seguimiento entre sesiones",
    description:
      "Comunicación asíncrona por WhatsApp con límites claros, para acompañarte también entre citas.",
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
    title: "Enfoque integral",
    description:
      "Trabajo centrado en la persona, integrando emociones, pensamientos y contexto de vida para un acompañamiento completo.",
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
      "Es una videollamada breve y gratuita antes de tu primera sesión. Nos permite conocernos, resolver dudas y confirmar que te sientes cómodo/a con mi forma de acompañarte.",
  },
  {
    id: "audience",
    question: "¿A quién está dirigida la consulta?",
    answer:
      "Atiendo adolescentes, jóvenes adultos y adultos. El espacio está abierto tanto para hombres como para mujeres.",
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
      "Sí, todas las consultas son por videollamada. Podés conectarte desde donde te sientas más cómodo/a, con la misma calidad y confidencialidad.",
  },
  {
    id: "first-session",
    question: "¿Qué sucede en la primera consulta?",
    answer:
      "Es un espacio para conocernos, comprender tu motivo de consulta y definir juntos los objetivos del proceso. Recibirás tu Welcome Pack Digital con toda la información.",
  },
  {
    id: "approach",
    question: "¿Cuál es tu enfoque terapéutico?",
    answer:
      "Trabajo de manera integral, con un enfoque centrado en la persona. Esto significa considerar tu historia, emociones, pensamientos y contexto de vida para construir un acompañamiento adaptado a lo que necesitás.",
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
    {
      id: "audience",
      text: "Atiendo adolescentes, jóvenes adultos y adultos.",
      highlight: "adolescentes, jóvenes adultos y adultos",
    },
    {
      id: "approach",
      text: "Trabajo de manera integral, con un enfoque centrado en la persona.",
      highlight: "enfoque centrado en la persona",
    },
  ],
  education: [
    "Licenciatura en Psicología — Universidad de Buenos Aires (UBA) · M.N 89257",
  ],
  specialties: [
    "Ansiedad Generalizada",
    "Burnout y estrés crónico",
    "Autoestima",
    "Relaciones y límites emocionales",
    "Desarrollo personal y autodescubrimiento",
  ],
} as const;
