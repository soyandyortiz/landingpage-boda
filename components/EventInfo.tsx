"use client";

import { motion } from "framer-motion";
import { Gift, Shirt, MapPin } from "lucide-react";

export default function EventInfo() {
  const events = [
    {
      title: "Ceremonia Religiosa",
      date: "Sábado, 28 de Febrero",
      time: "19:00",
      location: "Iglesia Católica San Francisco del Monte del Cedral de Penipe",
      address: "Iglesia central de penipe frente al parque",
      link: "https://maps.app.goo.gl/H1KDGJK6BXqEX8BR7?g_st=iw",
      icon: <MapPin className="w-6 h-6 text-gold" />,
    },
    {
      title: "Recepción",
      date: "Sábado, 28 de Febrero",
      time: "21:00",
      location: "Rio Camping",
      address: "Calles: Cap. Juan Maji & De los Duchicelas, Yaruquíes",
      link: "https://maps.app.goo.gl/t8jGSXN6rWHeQEjB8",
      icon: <MapPin className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <section id="evento" className="py-24 bg-beige/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gold-dark mb-4">Información del Evento</h2>
          <div className="w-24 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-foreground/60 max-w-lg mx-auto italic leading-relaxed">
            "La invitación es individual y exclusiva para personas adultas mayores de edad."
          </p>
        </motion.div>

        <div className="w-full overflow-hidden bg-gold/5 py-3 md:py-4 mb-14 border-y border-gold/20 flex">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35
            }}
            className="flex whitespace-nowrap shrink-0"
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-gold-dark text-sm md:text-base px-8 md:px-12 font-serif flex items-center gap-2 drop-shadow-sm">
                <span className="text-lg">🚐</span> 
                <strong>Ruta para invitados:</strong> Salida del bus desde Riobamba hacia el cantón Penipe donde será la boda en la iglesia a las 19:00pm y también el regreso de Penipe hasta la Recepción donde se realizará el evento.
              </span>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-beige/40 flex flex-col h-full group transition-all hover:shadow-xl"
            >
              <div className="mb-6 w-12 h-12 bg-gold/5 rounded-full flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                {event.icon}
              </div>
              <h3 className="text-2xl font-serif text-gold-dark mb-2">{event.title}</h3>
              <p className="text-gold font-semibold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {event.date} • {event.time}
              </p>
              <div className="flex-grow space-y-2 text-foreground/70 mb-8">
                <p className="font-bold text-foreground text-lg">{event.location}</p>
                <p className="text-sm leading-relaxed">{event.address}</p>
              </div>
              <motion.a 
                href={event.link}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                target={event.link !== "#" ? "_blank" : "_self"}
                className="inline-block text-center py-4 bg-transparent border border-gold/30 text-gold text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold-dark hover:text-white hover:border-gold-dark transition-all rounded-xl"
              >
                Ver Ubicación
              </motion.a>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Dress Code */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl border border-beige shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
              <Shirt className="w-24 h-24 text-gold-dark" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gold/5 rounded-xl">
                  <Shirt className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-serif text-gold-dark">Código de Vestimenta</h3>
              </div>
              <p className="text-3xl font-serif text-gold mb-4 uppercase tracking-widest">Formal</p>
              <p className="text-foreground/70 leading-relaxed max-w-sm">
                La ceremonia será al aire libre y por la noche puede refrescar bastante. 
                <span className="font-bold block mt-4 text-gold-dark text-lg italic">
                  ¡No olvides traer algo abrigadito para cubrirte!
                </span>
              </p>
            </div>
          </motion.div>

          {/* Gifts - HIGHLIGHTED */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gold-dark p-10 rounded-3xl shadow-2xl relative overflow-hidden group"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/40 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/30 rounded-full -ml-32 -mb-32 blur-3xl" />
            </div>

            <div className="relative z-10 text-white">
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-serif">Mesa de Regalos</h3>
              </motion.div>
              
              <div className="w-16 h-1 bg-gold/60 mb-8 rounded-full" />
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg leading-relaxed italic opacity-90 mb-8 font-serif"
              >
                "Su presencia ya es el mayor regalo que podemos recibir. Si desea contribuir a nuestro futuro juntos, un detalle en sobre será recibido con mucho cariño."
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 inline-block"
              >
                <p className="text-xs uppercase tracking-widest font-bold opacity-60 mb-1">Tradición</p>
                <p className="text-2xl font-serif">Lluvia de Sobres</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
