"use client";

import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    image: "/images/IMG-26abfdc50e2795462235f194f104468b-V.jpg",
    alt: "Trubači za svadbu",
    title: "Trubači za Svadbu",
    description:
      "Ulepšajte najvažniji dan u životu sa tradicionalnom trubačkom muzikom. Trubači Rakete vam garantuju nezaboravnu svadbu sa najboljim repertoarom pesama za doček mladenaca, igranku i slavlje.",
    features: [
      "✓ Doček mladenaca",
      "✓ Muzika tokom večere",
      "✓ Igranka do ranih jutarnjih sati",
      "✓ Prilagodljiv repertoar",
      "✓ Najpovoljnije cene",
    ],
  },
  {
    image: "/images/IMG-54b330bd8fc520e75d54c468870f1009-V.jpg",
    alt: "Orkestar za slavu",
    title: "Orkestar za Slavu",
    description:
      "Proslavite krsnu slavu uz zvuke tradicionalne srpske muzike. Naš orkestar će stvoriti pravo praznično raspoloženje i obezbediti nezaboravno iskustvo za vas i vaše goste.",
    features: [
      "✓ Tradicionalna slavska muzika",
      "✓ Pesme po želji domaćina",
      "✓ Profesionalno izvođenje",
      "✓ Prilagodljivo trajanje nastupa",
      "✓ Povoljne cene za slave",
    ],
  },
  {
    image: "/images/IMG-2acf89d80fc077d80d0d099732194eba-V.jpg",
    alt: "Trubači za krštenje",
    title: "Trubači za Krštenje",
    description:
      "Obeležite krštenje vašeg deteta uz tradicionalnu muziku. Stvaramo toplu i svečanu atmosferu za ovaj poseban porodični trenutak.",
    features: [
      "✓ Prilagođen repertoar za krštenje",
      "✓ Muzika za doček kumova",
      "✓ Svečana atmosfera",
      "✓ Profesionalan nastup",
      "✓ Specijalne cene za krštenja",
    ],
  },
  {
    image: "/images/IMG-0f491095f74d062d73b3423a6aae2b25-V.jpg",
    alt: "Orkestar za rođendan",
    title: "Orkestar za Rođendane",
    description:
      "Učinite rođendan nezaboravnim uz najbolju trubačku muziku. Prilagođavamo se uzrastu i željama slavljenika za maksimalno zadovoljstvo.",
    features: [
      "✓ Pesme po želji slavljenika",
      "✓ Vesela i zabavna atmosfera",
      "✓ Igranka i veselje",
      "✓ Svi uzrasti dobrodošli",
      "✓ Konkurentne cene",
    ],
  },
  {
    image: "/images/IMG-17c7752896466fb61ae338a193f8cbc3-V.jpg",
    alt: "Trubači za firmne proslave",
    title: "Korporativni Događaji",
    description:
      "Obogatite vaše poslovne proslave, teambuilding događaje i slave firme tradicionalnom srpskom muzikom. Profesionalan nastup garantovan.",
    features: [
      "✓ Proslave i slave firme ",
      "✓ Teambuilding eventi",
      "✓ Promocije i otvaranja",
      "✓ Profesionalna oprema",
      "✓ Grupni popusti",
    ],
  },
  {
    image: "/images/IMG-5b7195eac8f5dcc2306a39b4e80ee6a5-V.jpg",
    alt: "Trubači za sve proslave",
    title: "Sve Vrste Proslava",
    description:
      "Bilo koja proslava - zaručnice, godišnjice, proslave, žurke - mi smo tu za vas! Kontaktirajte nas i prilagodićemo našu uslugu vašim potrebama.",
    features: [
      "✓ Zaručnice i veridbe",
      "✓ Godišnjice braka",
      "✓ Sahrane i pomeni",
      "✓ Drugi specijalni događaji",
      "✓ Fleksibilne cene",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="usluge"
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-black to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          Naše Usluge - Trubački Orkestar za Sve Prilike
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg mb-12 max-w-3xl mx-auto text-muted"
        >
          Nudimo kompletne usluge trubačkog orkestra za sve vrste proslava.
          Prilagođavamo se vašim željama i garantujemo nezaboravno muzičko
          iskustvo.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
