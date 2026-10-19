import React, { useState, useEffect } from 'react';
import { Share2, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onShareClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onShareClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Le Défi & Tech', href: '#technologie' },
    { label: 'Impact Magasin', href: '#magasin' },
    { label: 'Logistique & Data', href: '#logistique' },
    { label: 'Chiffres Clés', href: '#chiffres' },
  ];

  return (
    <>
      {/* Scroll Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-50 origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-slate-950/70 backdrop-blur-sm border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#accueil"
            className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 inline-block shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
            <span>CHRONIQUE TECH</span>
            <span className="text-slate-400 font-normal hidden sm:inline">· Retail & IoT</span>
          </a>

          {/* Zone 2: Navigation Links (Single line, whitespace-nowrap) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onShareClick}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-lg shadow-sm transition-all duration-150 flex items-center gap-1.5 whitespace-nowrap shrink-0 active:scale-95"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Partager l'enquête</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/70 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
