import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', id: 'home' },
    { name: 'Sobre mí', id: 'about' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Contacto', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 px-6 py-4 backdrop-blur-sm ${
        isScrolled ? 'bg-white/80 dark:bg-black/60 shadow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <button onClick={() => handleNavClick('home')} className="text-xl font-bold text-blue-600 dark:text-blue-400 bg-transparent border-none cursor-pointer">
          Jaev
        </button>
        <ul className="flex gap-6 text-sm md:text-base font-medium">
          {navItems.map(({ name, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className="bg-transparent border-none cursor-pointer transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
