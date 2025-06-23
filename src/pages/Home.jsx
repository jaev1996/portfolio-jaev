import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Avatar from '../components/ui/avatar';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
      <Avatar />
      <h1 className="text-4xl md:text-5xl font-bold mt-6">Hola, soy <span className="text-blue-600 dark:text-blue-400">Jaev</span></h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl">
        Desarrollador Frontend enfocado en crear experiencias modernas con React, Tailwind y Vite. Apasionado por el diseño limpio, la funcionalidad práctica y las soluciones reales.
      </p>
      <div className="flex gap-4 mt-6">
        <a
          href="https://github.com/joseaescalona"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/joseaescalona"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="mt-6">
        <a href="#contact">
          <button className="text-lg px-6 py-2 rounded-xl bg-blue-600 dark:bg-blue-400 text-white hover:opacity-90 transition">
            Contáctame
          </button>
        </a>
      </div>
    </section>
  );
}
