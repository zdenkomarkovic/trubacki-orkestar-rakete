"use client";

import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marko i Jelena Jovanović",
    event: "Svadba - Avgust 2024",
    location: "Velika Plana",
    rating: 5,
    text: "Orkestar Rakete je ulepšao našu svadbu! Dejvid i ekipa su bili profesionalni, punktualni i muzika je bila fantastična. Svi gosti su bili oduševljeni. Preporučujemo svima!",
  },
  {
    name: "Stefan Petrović",
    event: "Krsna Slava",
    location: "Smederevo",
    rating: 5,
    text: "Najbolji trubači koje smo imali! Znali su sve tradicionalne slavske pesme i stvorili pravu atmosferu. Cena je bila više nego povoljna za ovakav kvalitet.",
  },
  {
    name: "Milica Dimitrijević",
    event: "Rodjendan - 50 godina",
    location: "Požarevac",
    rating: 5,
    text: "Iznenadili smo oca sa trubackim orkestrom za 50. rodjendan i bio je oduševljen! Orkestar je svirao sve njegove omiljene pesme. Hvala vam što ste taj dan učinili nezaboravnim!",
  },
  {
    name: "Nemanja Nikolić",
    event: "Svadba - Jun 2024",
    location: "Kragujevac",
    rating: 5,
    text: "Dejvid i njegov orkestar su pravi profesionalci! Od dogovora do samog nastupa sve je bilo savršeno. Repertoar je odličan - od starih pesama do modernih hitova. Topla preporuka!",
  },
  {
    name: "Ana i Milan",
    event: "Krstenje",
    location: "Svilajnac",
    rating: 5,
    text: "Krstenje našeg sina je bilo magično uz Orkestar Rakete. Muzika je bila prilagođena događaju, svi su uživali. Posebno smo zadovoljni odnos cene i kvaliteta!",
  },
  {
    name: "Dragomir Stanković",
    event: "Firmska Proslava",
    location: "Beograd",
    rating: 5,
    text: "Angažovali smo Orkestar Rakete za našu firmsku slavu i bili smo više nego zadovoljni. Profesionalan pristup, odličan repertoar i sjajni muzičari. Svakako ćemo ih ponovo angažovati!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-black to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Šta Kažu Naši Klijenti</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Zadovoljstvo naših klijenata je naš najveći uspeh. Pročitajte
            iskustva ljudi koji su birali Orkestar Rakete za svoje najvažnije
            trenutke.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Star className="h-6 w-6 fill-primary text-primary" />
            <span className="font-bold text-xl">5.0</span>
            <span className="text-muted-foreground">
              • Preko 1000 zadovoljnih klijenata
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
