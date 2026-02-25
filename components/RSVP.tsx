"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Send } from "lucide-react";

interface GuestInfo {
  name: string;
  type: string;
}

export default function RSVP() {
  const [form, setForm] = useState({
    origin: "Familia de Novia Evelin Cabezas",
    fullName: "",
    attending: "yes",
    guestCount: 0,
    companions: [] as GuestInfo[],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxwqcYqo47T46fFOzaEDkDFyqbB84ZXP_exedVgPMuwrdhKHdDLD3uJvbWUimQxKwM-/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error saving RSVP:", error);
      alert("Hubo un error al enviar tu respuesta. Por favor intenta de nuevo.");
    } finally {
      setIsSending(false);
    }
  };

  const updateCompanion = (index: number, name: string) => {
    const newCompanions = [...form.companions];
    newCompanions[index] = { ...newCompanions[index], name };
    setForm({ ...form, companions: newCompanions });
  };

  const handleGuestCountChange = (count: number) => {
    const newCompanions = Array(count).fill(null).map((_, i) => 
      form.companions[i] || { name: "", type: "familiar/acompañante" }
    );
    setForm({ ...form, guestCount: count, companions: newCompanions });
  };

  return (
    <section id="rsvp" className="py-24 bg-ivory px-6 relative overflow-hidden">
      {/* Floating background hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: Math.random() * 100 + "vw", opacity: 0 }}
            animate={{ y: "-10vh", opacity: 1 }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity, 
              delay: i * 2,
              ease: "linear"
            }}
            className="absolute"
          >
            <Heart size={48 + Math.random() * 48} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gold/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full -ml-32 -mb-32" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative z-10"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gold/10 rounded-full">
              <Heart className="w-6 h-6 text-gold" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gold-dark mb-4">Confirmar Asistencia</h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-foreground/60 text-sm leading-relaxed max-w-sm mx-auto">
            Favor de confirmar antes del 15 de Febrero de 2026. <br/>
            <span className="text-gold font-bold uppercase tracking-widest text-[10px] mt-3 block bg-gold/5 py-2 rounded-lg border border-gold/10 italic">Invitación individual • Solo adultos</span>
          </p>
        </motion.div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 relative z-10"
          >
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-8"
            >
              🥂
            </motion.div>
            <h3 className="text-4xl font-serif text-gold-dark mb-4">¡Gracias por confirmar!</h3>
            <p className="text-xl text-foreground/70 leading-relaxed font-serif italic mb-10">
              Hemos registrado tu respuesta con éxito. <br/> 
              Estamos ansiosos de verte en nuestro gran día.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-gold border-b-2 border-gold/30 hover:border-gold pb-1 text-sm uppercase tracking-[0.3em] font-bold transition-all"
            >
              Enviar otra respuesta
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            {/* Step 1: Origin */}
            <div className="space-y-4">
              <label className="block text-xs font-bold text-gold-dark uppercase tracking-[0.2em]">¿De parte de quién vienes?</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  "Familia de Novia Evelin Cabezas",
                  "Familia de Novio Eric Ortiz",
                  "Amistades"
                ].map((opt) => (
                  <label key={opt} className={`flex items-center justify-center p-4 border rounded-2xl cursor-pointer transition-all text-center h-full ${
                    form.origin === opt ? "bg-gold text-white border-gold shadow-lg scale-[1.02]" : "bg-ivory/20 border-beige hover:border-gold/30"
                  }`}>
                    <input 
                      type="radio" 
                      className="hidden" 
                      name="origin" 
                      value={opt} 
                      checked={form.origin === opt} 
                      onChange={(e) => setForm({...form, origin: e.target.value})}
                    />
                    <span className={`text-[13px] leading-tight font-medium ${form.origin === opt ? "text-white" : "text-foreground/60"}`}>
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className="space-y-4">
              <label className="block text-xs font-bold text-gold-dark uppercase tracking-[0.2em]">Nombre Completo</label>
              <input
                required
                type="text"
                placeholder="Escriba su nombre y apellido"
                className="w-full p-5 bg-ivory/30 border border-beige rounded-2xl focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all text-lg font-serif"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              />
            </div>

            {/* Attendance */}
            <div className="space-y-4">
              <label className="block text-xs font-bold text-gold-dark uppercase tracking-[0.2em]">¿Nos acompañará?</label>
              <div className="flex gap-4">
                {["yes", "no"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setForm({...form, attending: val})}
                    className={`flex-1 py-5 px-6 rounded-2xl border transition-all font-serif text-xl ${
                      form.attending === val ? "bg-gold-dark text-white border-gold-dark shadow-xl scale-[1.02]" : "bg-ivory/20 border-beige text-foreground/40"
                    }`}
                  >
                    {val === "yes" ? "Sí, con gusto" : "No podré asistir"}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Guests Section */}
            <AnimatePresence>
              {form.attending === "yes" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6"
                >
                  <div className="p-8 bg-gold/5 rounded-3xl border border-gold/10">
                    <p className="text-xs text-gold-dark font-bold uppercase tracking-widest mb-6 text-center">Acompañantes adicionales</p>
                    <div className="flex justify-center gap-4 mb-8">
                      {[0, 1, 2, 3].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => handleGuestCountChange(num)}
                          className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all text-xl font-serif ${
                            form.guestCount === num ? "bg-gold text-white border-gold shadow-lg scale-110" : "bg-white border-beige text-gold"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                    
                    <AnimatePresence>
                      {form.guestCount > 0 && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          <p className="text-[11px] text-center text-foreground/50 italic mb-6">
                            * Ingrese el nombre de sus familiares o acompañantes
                          </p>
                          {Array(form.guestCount).fill(null).map((_, i) => (
                            <motion.div 
                              key={i}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <input
                                required
                                type="text"
                                placeholder={`Nombre del acompañante ${i + 1}`}
                                className="w-full p-4 bg-white border border-beige rounded-xl focus:outline-none focus:border-gold transition-all text-sm font-sans"
                                value={form.companions[i]?.name || ""}
                                onChange={(e) => updateCompanion(i, e.target.value)}
                              />
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              <label className="block text-xs font-bold text-gold-dark uppercase tracking-[0.2em]">Desea dejarnos un mensaje?</label>
              <textarea
                rows={4}
                placeholder="Escribe aquí tus buenos deseos..."
                className="w-full p-5 bg-ivory/30 border border-beige rounded-2xl focus:outline-none focus:border-gold transition-all font-serif italic"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-6 flex items-center justify-center gap-3 bg-gold-dark text-white font-serif text-2xl rounded-2xl transition-all shadow-2xl ${isSending ? "opacity-70" : "hover:bg-gold"}`}
            >
              {isSending ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  Enviar Confirmación
                </>
              )}
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
}
