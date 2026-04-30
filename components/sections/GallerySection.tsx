"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = Array(19).fill(
  "truba-foto-aleksandar-kostic.jpg.webp"
);

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-black to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          Galerija - Trenuci sa Naših Nastupa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg mb-12 max-w-3xl mx-auto"
        >
          Pogledajte neke od najlepših trenutaka sa proslava koje smo ulepšali
          našom muzikom
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={`/images/${img}`}
                alt={`Trubački orkestar nastup ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
