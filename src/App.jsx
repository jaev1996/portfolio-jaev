import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { ThemeProvider } from './components/ui/theme-provider';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
//import Footer from './components/Footer';

export default function App() {
  return (
      <Router>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
        </div>
      </Router>
  );
}
