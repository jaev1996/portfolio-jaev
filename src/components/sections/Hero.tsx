// src/components/sections/Hero.tsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center text-center py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative size-40 rounded-full border-4 border-accent-dark overflow-hidden shadow-[0_0_40px_rgba(53,158,255,0.2)]"
            >
                <img src="/tu-foto.jpg" alt="Jose Escalona" className="grayscale hover:grayscale-0 transition-all duration-500 object-cover w-full h-full" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 space-y-4"
            >
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
                    Jose Escalona | <span className="text-primary">Ingeniero de Sistemas</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl">
                    Construyendo soluciones escalables con lógica de estratega y disciplina de código. [cite: 3, 15]
                </p>
            </motion.div>
        </section>
    );
}