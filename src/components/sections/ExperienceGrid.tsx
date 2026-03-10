"use client";
import { motion } from "framer-motion";
import { Box, Quote } from "lucide-react";
import BentoCard from "../ui/BentoCard";

export default function ExperienceGrid() {
    return (
        <section id="experience" className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Experiencia Profesional */}
            <BentoCard className="md:col-span-8 relative overflow-hidden group">
                <Box className="absolute top-0 right-0 size-32 opacity-5 -mr-8 -mt-8" />
                <div className="relative z-10">
                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Professional Experience</p>
                    <h3 className="font-serif text-2xl text-slate-100 mb-2">Mapa Mayor de Autopartes</h3>
                    <p className="text-slate-400 font-medium mb-6">IT Management & Inventory Control System</p>
                    <p className="text-slate-400 leading-relaxed max-w-xl">
                        Optimización de flujos de inventario mediante algoritmos de predicción de demanda y automatización de reportes.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {["PHP", "MySQL", "Inventory Logic"].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-accent-dark rounded text-xs border border-white/5">{skill}</span>
                        ))}
                    </div>
                </div>
            </BentoCard>

            {/* Frase Estoica */}
            <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="md:col-span-4 bg-accent-dark rounded-xl p-8 border border-white/5 flex items-center justify-center text-center relative overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#00d9ff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="relative z-10">
                    <Quote className="text-primary/40 size-8 mb-4 mx-auto" />
                    <p className="font-serif text-xl text-slate-100 italic leading-snug">
                        The impediment to action advances action. What stands in the way becomes the way.
                    </p>
                    <p className="mt-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">— Marcus Aurelius</p>
                </div>
            </motion.div>
        </section>
    );
}