"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  event: string;
  text: string;
  rating: number;
  location?: string;
  delay?: number;
}

export default function TestimonialCard({
  name,
  event,
  text,
  rating,
  location,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="h-full hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rating
                    ? "fill-primary text-primary"
                    : "fill-gray-300 text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-lg italic mb-6 leading-relaxed">&ldquo;{text}&rdquo;</p>

          {/* Author Info */}
          <div className="border-t pt-4">
            <p className="font-bold text-lg">{name}</p>
            <p className="text-sm text-muted-foreground">{event}</p>
            {location && (
              <p className="text-sm text-muted-foreground mt-1">{location}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
