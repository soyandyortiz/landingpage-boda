export default function Footer() {
  return (
    <footer className="py-16 bg-[#2D2D2D] text-white text-center relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="font-serif text-4xl mb-2 text-gold tracking-wider">Eric & Evelin</h2>
        <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase mb-8 font-light">
          Nuestra Boda • 2026
        </p>
        
        <div className="flex justify-center items-center gap-4 mb-10">
          <div className="h-px w-12 bg-gold/30" />
          <p className="font-serif italic text-gold/80 text-lg">
            "Donde estés, estaré."
          </p>
          <div className="h-px w-12 bg-gold/30" />
        </div>

        <div className="pt-10 border-t border-white/5">
          <div className="inline-block group">
            <p className="text-white/30 text-[9px] tracking-[0.3em] uppercase mb-2 group-hover:text-gold/50 transition-colors">
              Diseño y Tecnología
            </p>
            <a 
              href="https://guambraweb.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative inline-block px-8 py-3 border border-gold/20 rounded-full group hover:border-gold hover:bg-gold/5 transition-all duration-500"
            >
              <span className="relative z-10 text-gold font-bold tracking-[0.2em] text-xs uppercase">
                Desarrollado por <span className="text-white group-hover:text-gold transition-colors">GuambraWeb</span>
              </span>
              <div className="absolute inset-0 bg-gold/0 rounded-full group-hover:bg-gold/5 transition-all duration-500 scale-90 group-hover:scale-100" />
            </a>
          </div>
          
          <p className="mt-8 text-white/20 text-[10px]">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
