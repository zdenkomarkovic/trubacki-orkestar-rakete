"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh]  flex items-end justify-center overflow-hidden pb-6 md:pb-10">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <Image
        src="/images/IMG-145de5bf91a3302ec664d52d0d29f3a3-V.jpg"
        alt="Trubacki Orkestar Rakete Dejvid Stamenkovic"
        fill
        className="object-cover object-[center_23%] -z-10"
        priority
      />
      <div className="relative  text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg"
        >
          Trubački Orkestar Rakete Dejvida Stamenkovića
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl mb-8 drop-shadow-md"
        >
          Profesionalni trubački orkestar za svadbe, slave i sve vaše proslave
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            asChild
          >
            <a href="tel:0637894687">
              <Phone className="mr-2 h-5 w-5" />
              063 789 4687
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-white/90 hover:bg-white text-black border-2"
            asChild
          >
            <Link href="#usluge">Naše Usluge</Link>
          </Button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6  font-bold text-primary drop-shadow-lg uppercase"
        >
          NAJPOVOLJNIJE CENE, SVIRAMO U VELIKOJ PLANI, SMEDEREVU, POžAREVCU,
          SVILAJNCU VALJEVU, KRALJEVU, UžICU I U CELOJ SRBIJI
        </motion.p>
      </div>
    </section>
  );
}
