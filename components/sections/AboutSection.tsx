"use client";

import Image from "next/image";
import { Award, Users, Star, Music } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { icon: Award, text: "15+ Godina Iskustva" },
    { icon: Users, text: "1000+ Proslava" },
    { icon: Star, text: "Vrhunski Kvalitet" },
    { icon: Music, text: "Bogat Repertoar" },
  ];

  return (
    <section className="py-16 md:py-24 text-muted px-4 bg-gradient-to-br from-black to-gray-800">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          O Nama - Trubački Orkestar Rakete
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/IMG-a3c7a32ca8ef543885e130f3a7bcd2d2-V.jpg"
              alt="Orkestar Rakete nastup"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              Trubački orkestar <strong>Rakete Dejvida Stamenkovića</strong> je
              renomirani muzički sastav sa dugogodišnjim iskustvom u pružanju
              vrhunskih usluga trubačke muzike širom Srbije. Specijalizovani smo
              za svadbe, slave, krštenja, rođendane i sve vrste proslava.
            </p>
            <p className="text-lg leading-relaxed">
              Naš orkestar čine profesionalni muzičari sa velikim repertoarom
              tradicionalnih i savremenih pesama. Garantujemo nezaboravno
              muzičko iskustvo po{" "}
              <strong className="text-primary">najpovoljnijim cenama</strong> na
              tržištu.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="font-semibold">{stat.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
