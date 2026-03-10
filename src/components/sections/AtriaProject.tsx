"use client";
import { motion } from "framer-motion";
import { Database, Shield, ArrowRight } from "lucide-react";

export default function AtriaProject() {
    return (
        <section id="projects" className="group relative bg-card-dark rounded-xl overflow-hidden border border-white/5 flex flex-col lg:flex-row min-h-[400px]">
            <div className="lg:w-3/5 relative h-64 lg:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-card-dark via-transparent to-transparent z-10 hidden lg:block" />
                {/* Placeholder de imagen - Aquí irá tu captura de Atria */}
                <div className="w-full h-full bg-accent-dark/50 flex items-center justify-center">
                    <img src="/atria-mockup.png" alt="Atria Fitness Dashboard" className="opacity-60 group-hover:scale-105 transition-all duration-700 object-cover" />
                </div>
                <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                    {["Next.js", "Supabase", "TypeScript"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-primary/20 text-primary text-[10px] uppercase tracking-widest font-bold rounded-md border border-primary/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="lg:w-2/5 p-8 flex flex-col justify-center space-y-6">
                <div>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Featured Case Study</p>
                    <h2 className="font-serif text-3xl text-slate-100">Atria Fitness</h2>
                    <p className="text-slate-400 mt-4 leading-relaxed">
                        Gestión de entrenamiento avanzada centrada en la integridad de datos y seguridad. Implementación de esquemas relacionales complejos para seguimiento de rendimiento en tiempo real.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                        <Database className="text-primary size-5" />
                        <span>Advanced DB Architecture & SQL Optimization</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                        <Shield className="text-primary size-5" />
                        <span>JWT Auth & Row-Level Security Policies</span>
                    </div>
                </div>

                <button className="w-full lg:w-fit px-8 py-3 bg-white/5 hover:bg-white/10 text-slate-100 rounded-lg text-sm font-semibold border border-white/10 transition-colors flex items-center justify-center gap-2">
                    Explore Technical Details <ArrowRight className="size-4" />
                </button>
            </div>
        </section>
    );
}