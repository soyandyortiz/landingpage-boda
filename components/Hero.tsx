"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/pareja.png"
          alt="Eric & Evelin"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <p className="uppercase tracking-[0.5em] text-xs md:text-sm mb-4 font-sans font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            Nuestra Boda
          </p>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-serif mb-8 drop-shadow-2xl"
        >
          Eric <span className="text-gold">&</span> Evelin
        </motion.h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[2px] bg-gold mx-auto mb-8 shadow-inner"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="text-2xl md:text-3xl font-serif italic mb-12 drop-shadow-md"
        >
          28 de Febrero, 2026 • Riobamba
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.a
            href="#rsvp"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(184, 134, 11, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-gold text-white font-serif text-xl rounded-full shadow-2xl hover:bg-gold-dark transition-all duration-300 items-center justify-center"
          >
            Confirmar Asistencia
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ 
          delay: 2.5, 
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={() => {
          document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-gold transition-colors">
          Deslizar
        </span>
        <div className="p-2 border border-white/20 rounded-full group-hover:border-gold/50 transition-colors">
          <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-gold transition-colors" />
        </div>
      </motion.div>
    </section>
  );
}
