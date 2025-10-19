"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export default function ServiceCard({
  image,
  alt,
  title,
  description,
  features,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
        <div className="relative h-64">
          <Image src={image} alt={alt} fill className="object-cover" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
          <p className="mb-4">{description}</p>
          <ul className="space-y-2 text-sm">
            {features.map((feature, index) => (
              <li
                key={index}
                className={
                  feature.includes("povoljni") ||
                  feature.includes("cene") ||
                  feature.includes("Najpovoljnije")
                    ? "text-primary font-bold"
                    : ""
                }
              >
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
