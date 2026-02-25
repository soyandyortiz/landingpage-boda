"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RSVPData {
  origin: string;
  fullName: string;
  attending: string;
  guestCount: number;
  companions: { name: string; type: string }[];
  message: string;
  date: string;
}

export default function Dashboard() {
  const [data, setData] = useState<RSVPData[]>([]);
  const [filterNovio, setFilterNovio] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxwqcYqo47T46fFOzaEDkDFyqbB84ZXP_exedVgPMuwrdhKHdDLD3uJvbWUimQxKwM-/exec");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching RSVP data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalGuests = data
    .filter(d => d.attending === "yes")
    .reduce((acc, curr) => acc + 1 + curr.guestCount, 0);

  const filteredData = data.filter(d => {
    const matchNovio = filterNovio === "all" || d.origin.includes(filterNovio);
    const matchType = filterType === "all" || (filterType === "friend" ? d.origin === "Amistades" : d.origin !== "Amistades");
    return matchNovio && matchType;
  });

  return (
    <div className="min-h-screen bg-ivory p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-serif text-gold-dark">Confirmaciones</h1>
            <p className="text-foreground/50">Dashboard de Invitados para Eric & Evelin</p>
          </div>
          <div className="bg-gold-dark text-white p-6 rounded-2xl shadow-lg text-center min-w-[200px]">
            <span className="block text-4xl font-serif">{totalGuests}</span>
            <span className="text-xs uppercase tracking-widest opacity-80">Total Invitados Asistirán</span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <select 
            className="p-4 rounded-xl border border-beige bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gold"
            value={filterNovio}
            onChange={(e) => setFilterNovio(e.target.value)}
          >
            <option value="all">Ver Todas las Familias</option>
            <option value="Novia Evelin">Familia Evelin</option>
            <option value="Novio Eric">Familia Eric</option>
            <option value="Amistades">Solo Amistades</option>
          </select>

          <select 
            className="p-4 rounded-xl border border-beige bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gold"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">Todos los Tipos</option>
            <option value="family">Familiares</option>
            <option value="friend">Amistades</option>
          </select>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-beige overflow-hidden">
          {loading ? (
            <div className="p-20 text-center">
              <div className="animate-spin inline-block w-8 h-8 border-4 border-gold border-t-transparent rounded-full mb-4"></div>
              <p className="text-foreground/50 italic font-serif">Cargando confirmaciones...</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-beige/30">
                    <tr>
                      <th className="p-6 font-serif text-gold-dark">Nombre Principal</th>
                      <th className="p-6 font-serif text-gold-dark">Origen</th>
                      <th className="p-6 font-serif text-gold-dark">Asistirá</th>
                      <th className="p-6 font-serif text-gold-dark">Invitados Extras</th>
                      <th className="p-6 font-serif text-gold-dark">Mensaje</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-beige/50">
                    {filteredData.map((row, i) => (
                      <tr key={i} className="hover:bg-ivory/20 transition-colors">
                        <td className="p-6">
                          <p className="font-bold text-foreground">{row.fullName}</p>
                        </td>
                        <td className="p-6 text-sm text-foreground/70">{row.origin}</td>
                        <td className="p-6">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            row.attending === 'yes' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {row.attending === 'yes' ? 'SÍ' : 'NO'}
                          </span>
                        </td>
                        <td className="p-6">
                          {row.guestCount > 0 ? (
                            <div className="space-y-1">
                              {row.companions && Array.isArray(row.companions) ? row.companions.map((c, ci) => (
                                <span key={ci} className="block text-xs bg-gold/10 text-gold-dark p-1 rounded">
                                  {c.name}
                                </span>
                              )) : null}
                            </div>
                          ) : <span className="text-foreground/30 text-xs">Ninguno</span>}
                        </td>
                        <td className="p-6 text-sm text-foreground/60 italic max-w-xs truncate">
                          {row.message || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {filteredData.length === 0 && (
                <div className="p-20 text-center text-foreground/30">
                  <p>No se encontraron registros todavía.</p>
                </div>
              )}
            </>
          )}
        </div>
        
        <div className="mt-8 flex justify-center">
          <a href="/" className="text-gold text-sm underline">Volver a la Invitación</a>
        </div>
      </div>
    </div>
  );
}
