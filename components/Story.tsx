"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Story() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="historia"
      className="py-24 px-6 md:px-12 bg-ivory relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-3 bg-gold/10 rounded-full"
            >
              <Heart className="w-6 h-6 text-gold fill-gold" />
            </motion.div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-gold-dark mb-4">
            Nuestra Historia
          </h2>
          <div className="w-24 h-px bg-gold/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/20 -rotate-3 rounded-[3rem] -z-10" />
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/story.png"
                alt="Nuestra Historia"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold-dark/20 to-transparent" />
            </div>
            {/* Float badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-beige z-20"
            >
              <p className="text-gold-dark font-bold text-3xl font-serif">12</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gold">
                Años de Amor
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block px-5 py-2 bg-gold/10 text-gold-dark rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-gold/20"
            >
              Eternamente Juntos
            </motion.div>

            <div className="space-y-8 text-foreground/80 leading-relaxed font-sans text-xl">
              <motion.p variants={itemVariants}>
                Nuestra historia comenzó hace ya{" "}
                <strong className="text-gold-dark">12 años</strong>, bajo el
                majestuoso Chimborazo, en la Sultana de los Andes, Riobamba. Lo
                que empezó como un encuentro casual se transformó en el viaje
                más hermoso de nuestras vidas.
              </motion.p>

              <motion.p variants={itemVariants}>
                Riobamba no solo ha sido el escenario de nuestro amor, sino el
                hogar donde hemos construido sueños y superado desafíos. Entre
                sus paisajes y tradiciones, vimos crecer nuestro sentimiento día
                tras día.
              </motion.p>

              <motion.div variants={itemVariants} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-gold-dark rounded-full" />
                <p className="italic font-serif text-2xl pl-8 py-4 text-gold-dark/90 leading-relaxed">
                  "Hoy, con dos hermosas hijas que son nuestra luz, decidimos
                  reafirmar nuestro compromiso ante Dios y nuestros seres
                  queridos."
                </p>
              </motion.div>

              <motion.p variants={itemVariants} className="text-lg opacity-80">
                Acompáñanos a celebrar estos 12 años de amor, complicidad y la
                maravillosa familia que hemos formado. Estamos felices de
                compartir este nuevo comienzo con ustedes.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
