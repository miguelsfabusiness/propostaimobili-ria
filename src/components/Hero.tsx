import React from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5531996900816?text=Quero%20contratar%20a%20melhor%20gest%C3%A3o%20de%20tr%C3%A1fego%20do%20Brasil!";

  return (
    <div id="inicio" className="relative min-h-[90vh] bg-[#0a0a0a] flex items-center overflow-hidden py-24 lg:py-0">
      
      {/* Background Decorative Elements (Subtle Glows) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-800/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md text-zinc-300 text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Miguel Simões | Gestor de Tráfego
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
              Transforme Cliques em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-400">
                Imóveis Vendidos
              </span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-xl mb-6 leading-relaxed font-light">
              Sou Miguel Simões, gestor de tráfego especializado em criar campanhas que atraem pessoas certas, no momento certo, usando dados, estratégia e performance, sem promessas vazias.
            </p>

            <p className="text-sm text-zinc-500 max-w-lg mb-10 leading-relaxed">
              Meu trabalho é estruturar anúncios que realmente funcionam, transformando investimento em visibilidade, autoridade e geração de oportunidades comerciais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href={whatsappLink} variant="primary">
                Converse comigo
              </Button>
            </div>

            {/* Adjusted spacing, font size, and flex direction for mobile harmony */}
            <div className="mt-12 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-8 text-zinc-500 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500/80" />
                <span>Estratégia</span>
              </div>
              
              <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
              
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500/80" />
                <span>Performance</span>
              </div>
              
              <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
              
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500/80" />
                <span>Dados</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-full">
              
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/15GzD8ZhXij5kJPNx9Z1W7hZyLHGP-sGv" 
                  alt="Miguel Simões - Gestor de Tráfego" 
                  className="w-full h-full object-cover object-center scale-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Masks to blend image into background #0a0a0a */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                <div className="absolute inset-0 bg-[#0a0a0a]/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};