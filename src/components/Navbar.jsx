import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre mí', path: '/about' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 px-6 py-4 backdrop-blur-sm ${
        isScrolled ? 'bg-white/80 dark:bg-black/60 shadow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Jaev
        </Link>
        <ul className="flex gap-6 text-sm md:text-base font-medium">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`transition-colors duration-200 ${
                  location.pathname === path
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
