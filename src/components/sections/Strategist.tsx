"use client";
import { BookOpen, Headphones } from "lucide-react";
import BentoCard from "../ui/BentoCard";

export default function Strategist() {
    const books = [
        { title: "Mistborn", author: "Brandon Sanderson", color: "from-indigo-900" },
        { title: "Psychology of Money", author: "Morgan Housel", color: "from-emerald-900" }
    ];

    return (
        <section id="strategist" className="space-y-6">
            <div className="flex items-center gap-4 px-2">
                <h2 className="font-serif text-3xl text-slate-100">The Strategist</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Lectura Actual */}
                <BentoCard className="space-y-6">
                    <div className="flex justify-between items-center text-slate-500">
                        <span className="text-xs font-bold uppercase">Currently Reading</span>
                        <BookOpen className="size-4" />
                    </div>
                    {books.map(book => (
                        <div key={book.title} className="flex gap-4 group cursor-pointer">
                            <div className={`w-12 h-16 bg-linear-to-br ${book.color} to-slate-900 rounded border border-white/10 shrink-0 flex items-center justify-center group-hover:border-primary/50 transition-colors`}>
                                <span className="text-[8px] text-slate-400 font-bold text-center px-1 uppercase">{book.title}</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-sm font-semibold text-slate-200">{book.title}</p>
                                <p className="text-[10px] text-slate-500 uppercase">{book.author}</p>
                            </div>
                        </div>
                    ))}
                </BentoCard>

                {/* Gaming / Estrategia */}
                <BentoCard className="relative overflow-hidden group p-0">
                    <div className="h-48 bg-[url('/slay-the-spire.jpg')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="p-6 relative">
                        <div className="inline-block px-2 py-1 bg-primary text-background-dark text-[10px] font-bold rounded mb-2">LEGENDARY RANK</div>
                        <h4 className="font-serif text-xl text-slate-100">Slay the Spire</h4>
                        <p className="text-xs text-slate-400 mt-2">Mastering probability and deck-building logic.</p>
                    </div>
                </BentoCard>

                {/* Música */}
                <BentoCard className="flex flex-col justify-between">
                    <div className="flex justify-between">
                        <Headphones className="text-primary size-6" />
                        <div className="flex gap-1 items-end h-5">
                            {[0.6, 1, 0.4].map((h, i) => (
                                <div key={i} className="w-1 bg-primary rounded-full animate-pulse" style={{ height: `${h * 100}%` }} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">On Rotation</p>
                        <h4 className="font-serif text-xl text-slate-100">Modern Rock & Pop</h4>
                    </div>
                </BentoCard>
            </div>
        </section>
    );
}