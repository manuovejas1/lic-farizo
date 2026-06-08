import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { Differentiation } from "@/components/sections/Differentiation";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Differentiation />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
