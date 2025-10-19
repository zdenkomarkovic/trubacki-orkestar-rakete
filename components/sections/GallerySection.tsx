"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "IMG-0b80fbed8d97fe21da68c3728ded502f-V.jpg",
  "IMG-2cebe69bb581ab5ec1cc2fc668580e2c-V.jpg",
  "IMG-3ae800f82e80b53a1b273b8c49f4718b-V.jpg",
  "IMG-8f0334d9f96f5b833488744807b3cc68-V.jpg",
  "IMG-27c147a718e6dc4600ada0f1e0a441a9-V.jpg",

  "IMG-94cc57fb919629b433d4a1ff5a892cd5-V.jpg",
  "IMG-145de5bf91a3302ec664d52d0d29f3a3-V.jpg",
  "IMG-321bb8dbe9f49c8233aa4bc1276bf666-V.jpg",
  "IMG-834a23a84e29b2e2e75edd068564323e-V.jpg",
  "IMG-94418cec1437a86d810e2a6fad2e39f5-V.jpg",
  "IMG-1572797a3e1e6381cd7988cdb8aed552-V.jpg",
  "IMG-291305065a8784dc3290dd7f42f7afb4-V.jpg",
  "IMG-3134277718004563f4104c6c8924a0f8-V.jpg",
  "IMG-a3c7a32ca8ef543885e130f3a7bcd2d2-V.jpg",
  "IMG-a4e778fc90604a2310f286ecbbd8c27c-V.jpg",
  "IMG-a937f77c59c6ab714d64a38b8e8866b4-V.jpg",
  "IMG-b5bacc5d6c069f47ae3ba4862a401b2f-V.jpg",

  "IMG-d1f7569d350bdaf6a151ae872d89db48-V.jpg",
  "IMG-d332f41f57a69158b1e28cc75d687b9d-V.jpg",
  "IMG-f7d521163e07ef7867b5fc413d539544-V.jpg",
  "IMG-f979e656f582b4e874db5c6752996f86-V.jpg",
];

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
                alt={`Trubački orkestar Rakete nastup ${index + 1}`}
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
