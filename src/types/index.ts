export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "user" | "brain" | "heart" | "users" | "sparkles";
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: "heart" | "lock" | "sparkles" | "shield" | "sprout";
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: "gift" | "video" | "leaf" | "message" | "file" | "target";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
