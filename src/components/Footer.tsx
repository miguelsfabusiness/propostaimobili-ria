import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Check, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappLink = "https://wa.me/5531996900816?text=Quero%20contratar%20a%20melhor%20gest%C3%A3o%20de%20tr%C3%A1fego%20do%20Brasil!";

  return (
    <>
      <Section id="contato" dark className="bg-[#0a0a0a] border-t border-zinc-900 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Vamos fechar negócio?
            </h2>
            <p className="text-zinc-400">
              Transparência total nos valores. Sem custos ocultos.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 flex flex-col md:flex-row">
            
            {/* Left Column: Content */}
            <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
                Proposta Comercial
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Gestão de Tráfego Profissional
              </h3>
              <p className="text-zinc-400 text-sm mb-8">
                Acompanhamento diário, otimização e estratégia completa.
              </p>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-zinc-500 font-medium">R$</span>
                <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">1.000</span>
                <span className="text-zinc-500 font-medium">/mês</span>
              </div>
              
              <div className="flex items-start gap-2 mb-8 bg-black/20 p-3 rounded-lg border border-white/5">
                <AlertCircle className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Valor fixo para contas com até <strong className="text-zinc-200">R$ 10.000,00</strong> de investimento em mídia. Acima deste valor, é cobrada uma taxa de performance de 10% sobre o valor investido.
                </p>
              </div>

              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-500" />
                  </div>
                  <span className="text-zinc-300 text-sm">Relatórios de performance quinzenais</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-500" />
                  </div>
                  <span className="text-zinc-300 text-sm">Criação de públicos qualificados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-500" />
                  </div>
                  <span className="text-zinc-300 text-sm">Reuniões de alinhamento estratégico</span>
                </div>
              </div>

              <Button 
                href={whatsappLink} 
                variant="primary" 
                fullWidth={false}
                className="w-full sm:w-auto text-center justify-center"
              >
                Contratar Gestão Agora
              </Button>
            </div>

            {/* Right Column: Image */}
            <div className="hidden md:block relative md:w-2/5 min-h-[400px] md:min-h-0 bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-emerald-500/20 blur-[80px] rounded-full"></div>
               
               <img 
                src="https://i.postimg.cc/wTV4GYrR/Miguel-Studio-2.png" 
                alt="Miguel Simões" 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-cover object-top md:h-full md:object-cover md:object-center drop-shadow-2xl scale-100 md:scale-100 origin-bottom"
              />
              
              {/* Gradients to blend image with card */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80 md:opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent opacity-50 md:hidden"></div>
            </div>

          </div>

        </div>
      </Section>
      
      <footer className="bg-[#0a0a0a] py-8 text-center text-zinc-600 text-xs uppercase tracking-widest border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Miguel Simões. Todos os direitos reservados.</p>
          <p className="mt-2">Gestão de Tráfego e Performance.</p>
        </div>
      </footer>
    </>
  );
};