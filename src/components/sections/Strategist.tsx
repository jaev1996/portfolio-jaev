"use client";
import { useState } from "react";
import { BookOpen, Headphones, X } from "lucide-react";
import BentoCard from "../ui/BentoCard";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
type Book = {
    title: string;
    author: string;
    coverUrl: string;
    note: string;
};

const TABS = ["Recomendados", "Favoritos", "Leyendo Actualmente"] as const;
type Tab = (typeof TABS)[number];

const BOOKS: Record<Tab, Book[]> = {
    "Leyendo Actualmente": [
        {
            title: "Mistborn",
            author: "Brandon Sanderson",
            // cover_i: 11329782
            coverUrl: "https://covers.openlibrary.org/b/id/11329782-L.jpg",
            note:
                "La magia de los metales me parece uno de los sistemas más creativos y coherentes que he leído. Cada revelación cambia todo lo que creías saber.",
        },
        {
            title: "The Psychology of Money",
            author: "Morgan Housel",
            // cover_i: 10389354
            coverUrl: "https://covers.openlibrary.org/b/id/10389354-L.jpg",
            note:
                "Fascinante análisis sobre cómo nuestras finanzas no dependen tanto de fórmulas matemáticas, sino de nuestras emociones. Me recordó que gestionar el capital es, en esencia, gestionar nuestro propio comportamiento y sesgos.",
        },
        {
            title: "Meditations",
            author: "Marcus Aurelius",
            // cover_i: 211529
            coverUrl: "https://covers.openlibrary.org/b/id/211529-L.jpg",
            note:
                "Un manual eterno sobre el carácter. Me inspira a enfocarme exclusivamente en lo que está bajo mi control: mi juicio y mis acciones para intentar ser, cada día, una mejor persona.",
        },
    ],
    Recomendados: [
        {
            title: "Discipline is Destiny",
            author: "Ryan Holiday",
            // cover_i: 13153179
            coverUrl: "https://covers.openlibrary.org/b/id/13153179-L.jpg",
            note:
                "Un recordatorio contundente de que el talento sin autodisciplina es potencial desperdiciado. Me motiva a elegir el camino del esfuerzo diario, entendiendo que la libertad real nace de la estructura y el orden.",
        },
        {
            title: "How to Win Friends & Influence People",
            author: "Dale Carnegie",
            // cover_i: 13314878
            coverUrl: "https://covers.openlibrary.org/b/id/13314878-L.jpg",
            note:
                "Un clásico imprescindible. Me enseñó que el éxito técnico es limitado si no se acompaña de empatía y escucha activa; habilidades que, aunque parezcan básicas, son el motor de cualquier equipo humano.",
        },
        {
            title: "The Little Book of Stoicism",
            author: "Jonas Salzgeber",
            // cover_i: 10413514
            coverUrl: "https://covers.openlibrary.org/b/id/10413514-L.jpg",
            note:
                "Una guía pragmática y sin pretensiones. Aunque no me considero estoico, este libro me brindó herramientas útiles para afrontar la adversidad con serenidad y vivir una vida más consciente y equilibrada.",
        },
    ],
    Favoritos: [
        {
            title: "Mockingjay",
            author: "Suzanne Collins",
            // cover_i: 12646459
            coverUrl: "https://covers.openlibrary.org/b/id/12646459-L.jpg",
            note:
                "Me cautivó su cruda construcción política y social. A través de personajes como Peeta, la obra explora una realidad distópica que, irónicamente, se siente muy cercana a los conflictos de nuestro mundo actual.",
        },
        {
            title: "The Maze Runner",
            author: "James Dashner",
            // cover_i: 10464801
            coverUrl: "https://covers.openlibrary.org/b/id/10464801-L.jpg",
            note:
                "Fue el primer libro que me mantuvo despierto hasta la madrugada. El misterio del laberinto y la tensión constante despertaron mi imaginación, marcando el inicio de mi pasión por las grandes sagas.",
        },
        {
            title: "The Little Prince",
            author: "Antoine de Saint-Exupéry",
            // cover_i: 10708272
            coverUrl: "https://covers.openlibrary.org/b/id/10708272-L.jpg",
            note:
                "De niño lo ignoré; de adulto me rescató. Es un recordatorio vital de que nunca debemos perder la curiosidad ni el espíritu de ese niño interior que ve el mundo con asombro y honestidad.",
        },
    ],
};

// ---------------------------------------------------------------------------
// Book Card component
// ---------------------------------------------------------------------------
function BookCard({ book }: { book: Book }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Card */}
            <button
                onClick={() => setOpen(true)}
                className="group relative flex flex-col items-center gap-3 cursor-pointer focus:outline-none flex-1"
                aria-label={`Ver nota sobre ${book.title}`}
            >
                {/* Cover */}
                <div className="relative w-[96px] h-[144px] shrink-0 rounded-md overflow-hidden border border-white/10 shadow-lg group-hover:border-primary/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/20 group-hover:shadow-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={book.coverUrl}
                        alt={`Portada de ${book.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent) {
                                parent.style.background =
                                    "linear-gradient(135deg, #162A2D, #0F1923)";
                                const fallback = document.createElement("span");
                                fallback.className =
                                    "absolute inset-0 flex items-center justify-center text-[9px] text-slate-400 font-bold text-center px-1 uppercase leading-tight";
                                fallback.textContent = book.title;
                                parent.appendChild(fallback);
                            }
                        }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <BookOpen className="size-5 text-primary drop-shadow" />
                    </div>
                    {/* Book spine shadow */}
                    <div className="absolute inset-y-0 right-0 w-2 bg-black/30" />
                </div>

                {/* Title */}
                <div className="text-center">
                    <p className="text-[11px] font-semibold text-slate-300 leading-tight line-clamp-2 max-w-[110px]">
                        {book.title}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1 max-w-[110px]">
                        {book.author}
                    </p>
                </div>
            </button>

            {/* Modal / Popup note */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={() => setOpen(false)}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                    {/* Panel */}
                    <div
                        className="relative z-10 max-w-sm w-full bg-card-dark border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/60 animate-[fadeIn_0.2s_ease]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 text-slate-500 hover:text-slate-200 transition-colors"
                            aria-label="Cerrar"
                        >
                            <X className="size-4" />
                        </button>
                        <div className="flex gap-4">
                            <div className="relative w-16 h-24 shrink-0 rounded overflow-hidden border border-white/10 shadow">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={book.coverUrl}
                                    alt={book.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-1">
                                <p className="text-sm font-semibold text-slate-100 font-serif">
                                    {book.title}
                                </p>
                                <p className="text-[10px] text-primary uppercase tracking-widest">
                                    {book.author}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                                📌 Mis notas
                            </p>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {book.note}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// ---------------------------------------------------------------------------
// Bookshelf component
// ---------------------------------------------------------------------------
function Bookshelf() {
    const [activeTab, setActiveTab] = useState<Tab>("Leyendo Actualmente");

    return (
        <BentoCard className="space-y-5 col-span-1 md:col-span-2">
            {/* Header */}
            <div className="flex justify-between items-center text-slate-500">
                <span className="text-xs font-bold uppercase tracking-widest">
                    Bookshelf
                </span>
                <BookOpen className="size-4" />
            </div>

            {/* Tabs */}
            <div className="flex gap-1 bg-accent-dark/60 p-1 rounded-xl w-fit">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
              px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200 whitespace-nowrap
              ${activeTab === tab
                                ? "bg-primary text-background-dark shadow-md shadow-primary/30"
                                : "text-slate-400 hover:text-slate-200"
                            }
            `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Books row — stretched to fill the full card width */}
            <div className="flex justify-between gap-4">
                {BOOKS[activeTab].map((book) => (
                    <BookCard key={book.title} book={book} />
                ))}
            </div>

            {/* Shelf plank */}
            <div className="w-full h-1.5 rounded-full bg-linear-to-r from-accent-dark via-slate-600/40 to-accent-dark border-t border-white/5 shadow-inner" />
        </BentoCard>
    );
}

// ---------------------------------------------------------------------------
// Main section
// ---------------------------------------------------------------------------
export default function Strategist() {
    return (
        <section id="strategist" className="space-y-6">
            <div className="flex items-center gap-4 px-2">
                <h2 className="font-serif text-3xl text-slate-100">The Strategist</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bookshelf — spans 2 columns */}
                <Bookshelf />

                {/* Right column: Gaming + Music stacked */}
                <div className="flex flex-col gap-6">
                    {/* Gaming */}
                    <BentoCard className="relative overflow-hidden group p-0 flex-1">
                        <div className="h-36 bg-[url('/slay-the-spire.jpg')] bg-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="p-5 relative">
                            <div className="inline-block px-2 py-1 bg-primary text-background-dark text-[10px] font-bold rounded mb-2">
                                LEGENDARY RANK
                            </div>
                            <h4 className="font-serif text-lg text-slate-100">
                                Slay the Spire
                            </h4>
                            <p className="text-xs text-slate-400 mt-1">
                                Mastering probability and deck-building logic.
                            </p>
                        </div>
                    </BentoCard>

                    {/* Music */}
                    <BentoCard className="flex flex-col justify-between flex-1">
                        <div className="flex justify-between">
                            <Headphones className="text-primary size-6" />
                            <div className="flex gap-1 items-end h-5">
                                {[0.6, 1, 0.4, 0.8, 0.5].map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-1 bg-primary rounded-full animate-pulse"
                                        style={{
                                            height: `${h * 100}%`,
                                            animationDelay: `${i * 0.15}s`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                On Rotation
                            </p>
                            <h4 className="font-serif text-xl text-slate-100">
                                Modern Rock & Pop
                            </h4>
                        </div>
                    </BentoCard>
                </div>
            </div>

            {/* Keyframe animation */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
        </section>
    );
}