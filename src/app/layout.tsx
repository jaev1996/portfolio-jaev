import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jose Escalona | Ingeniero de Sistemas",
  description: "Portafolio profesional de Jose Escalona, desarrollador Full Stack especializado en soluciones escalables con Next.js, React y arquitectura de sistemas.",
  keywords: ["Web Developer", "Ingeniero de Sistemas", "Venezuela", "Next.js", "Full Stack", "Atria Fitness"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Añadimos la clase "dark" y "scroll-smooth" para que los anclajes del Navbar funcionen fluido
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background-dark text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}