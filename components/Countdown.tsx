"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

export default function Countdown() {
  const [civilTime, setCivilTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [churchTime, setChurchTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const civilDate = new Date("February 26, 2026 14:00:00").getTime();
    const churchDate = new Date("February 28, 2026 16:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      
      const calc = (target: number) => {
        const distance = target - now;
        if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
      };

      setCivilTime(calc(civilDate));
      setChurchTime(calc(churchDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimerBlock = ({ title, time, date, icon }: { title: string, time: any, date: string, icon: any }) => (
    <div className="flex flex-col items-center bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gold/10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
      
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gold/10 rounded-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-serif text-gold-dark">{title}</h3>
      </div>
      
      <p className="text-xs uppercase tracking-[0.2em] font-bold text-foreground/40 mb-10 flex items-center gap-2">
        <Clock className="w-3 h-3" />
        {date}
      </p>

      <div className="flex gap-4 md:gap-8 relative z-10 w-full justify-center">
        {[
          { label: "Días", value: time.days },
          { label: "Horas", value: time.hours },
          { label: "Minutos", value: time.minutes },
          { label: "Segundos", value: time.seconds },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <span className="text-4xl md:text-5xl font-serif text-gold-dark mb-1 tabular-nums">
              {String(item.value).padStart(2, "0")}
            </span>
            <div className="w-8 h-px bg-gold/20 mb-2" />
            <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="countdown" className="py-24 bg-ivory border-y border-beige relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-center text-4xl font-serif text-gold-dark mb-4">La Cuenta Regresiva</h2>
          <div className="w-16 h-px bg-gold/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TimerBlock 
              title="Cercanos al Civil" 
              time={civilTime} 
              date="Jueves, 26 de Feb - 2:00 PM" 
              icon={<Calendar className="w-5 h-5 text-gold" />}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TimerBlock 
              title="Gran Día Boda" 
              time={churchTime} 
              date="Sábado, 28 de Feb - 4:00 PM" 
              icon={<Calendar className="w-5 h-5 text-gold" />}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
