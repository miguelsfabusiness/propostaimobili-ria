import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Ajuste o offset baseando-se na altura do header (aprox 80-100px)
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Contexto', href: '#proposta' },
    { name: 'Metodologia', href: '#solucao' },
    { name: 'Processo', href: '#como-funciona' },
    { name: 'Diferenciais', href: '#beneficios' },
    { name: 'Investimento', href: '#investimento' },
    { name: 'Proposta', href: '#contato' },
  ];

  const whatsappLink = "https://wa.me/5531996900816?text=Quero%20contratar%20a%20melhor%20gest%C3%A3o%20de%20tr%C3%A1fego%20do%20Brasil!";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-2xl shadow-black/50' 
          : 'bg-[#0a0a0a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Row: Logo + Desktop Menu + CTA */}
        <div className="flex items-center justify-between py-4 lg:py-4">
          
          {/* Logo */}
          <div className="flex-shrink-0 relative z-20 mr-4">
            <a 
              href="#inicio" 
              onClick={(e) => scrollToSection(e, '#inicio')}
              className="text-xl lg:text-xl xl:text-2xl font-bold text-white tracking-tight flex items-center gap-1 cursor-pointer hover:opacity-90 transition-opacity"
            >
              Miguel<span className="text-zinc-500">Simões</span>
            </a>
          </div>

          {/* Desktop Navigation (Hidden on Mobile/Tablet to prevent overlap) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-8">
            <ul className="flex items-center gap-0.5 xl:gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-[10px] xl:text-[13px] font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-normal xl:tracking-wide py-1 px-2 hover:bg-white/5 rounded-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Divider */}
            <div className="w-px h-4 bg-zinc-800 hidden lg:block xl:h-6"></div>

            {/* Desktop CTA */}
            <Button 
              href={whatsappLink} 
              variant="primary" 
              className="py-1.5 px-3 text-[10px] xl:py-2.5 xl:px-5 xl:text-xs whitespace-nowrap"
            >
              Falar no WhatsApp
            </Button>
          </nav>

          {/* Mobile CTA (Visible only on small screens) */}
          <div className="lg:hidden">
            <Button 
              href={whatsappLink} 
              variant="white" 
              className="py-2 px-4 text-[10px] h-9"
            >
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Row (Scrollable - Visible only below LG screens) */}
        <div className="lg:hidden w-full overflow-x-auto scrollbar-hide pb-3 border-t border-white/5 pt-3">
          <nav className="flex items-center px-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wider whitespace-nowrap px-4 py-1 first:pl-0"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
};