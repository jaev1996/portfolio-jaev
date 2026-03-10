"use client";
import { Terminal, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-card-dark/30 py-12 px-6 mt-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Branding y Copyright */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-3">
                        <Terminal className="text-primary size-6" />
                        <span className="font-serif text-lg tracking-tight text-slate-100 font-bold">JE.dev</span>
                    </div>
                    <p className="text-slate-500 text-xs text-center md:text-left max-w-xs">
                        © {new Date().getFullYear()} Jose Escalona. <br />
                        Built with Next.js & Stoic discipline.
                    </p>
                </div>

                {/* Contacto Rápido */}
                <div className="flex flex-col items-center md:items-start gap-2 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                        <Mail className="size-4 text-primary" />
                        <span>escalonavielmajose@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="size-4 text-primary" />
                        <span>Caracas, Venezuela</span>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <button className="flex items-center gap-3 bg-accent-dark px-6 py-3 rounded-xl border border-white/10 text-slate-100 hover:border-primary/50 transition-all group">
                        <span className="text-sm font-semibold">Lets build something</span>
                        <ExternalLink className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
                        <a href="#" className="hover:text-primary">Resume</a>
                        <a href="#" className="hover:text-primary">LinkedIn</a>
                        <a href="#" className="hover:text-primary">Github</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}