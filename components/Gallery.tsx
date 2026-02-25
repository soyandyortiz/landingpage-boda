"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/gallery-1.png", alt: "Detalle 1" },
    { src: "/images/gallery-2.png", alt: "Detalle 2" },
    { src: "/images/story.png", alt: "Detalle 3" },
    { src: "/images/hero.png", alt: "Detalle 4" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-serif text-center mb-16 text-gold-dark"
        >
          Momentos
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
