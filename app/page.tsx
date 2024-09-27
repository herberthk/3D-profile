"use client";
import About from "@/components/About";
import Awards from "@/components/awards/Awards";
import Footer from "@/components/bottom/Footer";
import { StarsCanvas } from "@/components/canvas";
import Contact from "@/components/Contact";
import Experience from "@/components/experience/Experience";
import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import Tech from "@/components/Tech";
import Works from "@/components/Works";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const element = document.querySelector("html");
    if (element) {
      element.removeAttribute("data-new-gr-c-s-check-loaded");
      element.removeAttribute("data-gr-ext-installed");
    }
  }, []);
  return (
    <main className="relative z-0 bg-primary overflow-x-hidden">
      <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </section>
      <About />
      <Experience />
      <Works />
      <Awards />
      <Feedbacks />
      <section className="relative z-0">
        <Contact />
        <StarsCanvas />
      </section>
      <Footer />
    </main>
  );
}
