"use client";
import { motion } from "framer-motion";
import { Terminal, Download, Linkedin, Github } from "lucide-react";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md"
        >
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                        <Terminal className="text-primary size-5" />
                    </div>
                    <span className="font-serif text-xl font-bold tracking-tight text-slate-100">
                        JE<span className="text-primary">.dev</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {["Projects", "Experience", "Strategist"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://linkedin.com/in/tu-perfil"
                        target="_blank"
                        className="text-slate-400 hover:text-primary transition-colors"
                    >
                        <Linkedin className="size-5" />
                    </a>
                    <a
                        href="https://github.com/tu-usuario"
                        target="_blank"
                        className="text-slate-400 hover:text-primary transition-colors"
                    >
                        <Github className="size-5" />
                    </a>
                    <button className="hidden sm:flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all">
                        <Download className="size-4" /> CV
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}