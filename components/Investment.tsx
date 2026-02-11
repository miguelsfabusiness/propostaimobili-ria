import React from 'react';
import { Section } from './Section';
import { Wallet, BarChart3, AlertCircle } from 'lucide-react';

export const Investment: React.FC = () => {
  return (
    <Section id="investimento" className="bg-zinc-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 border border-zinc-200 shadow-xl shadow-zinc-200/50 relative overflow-hidden">
          
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-300"></div>
          
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center p-2 md:p-3 bg-zinc-100 rounded-full mb-3 md:mb-4">
              <Wallet className="w-5 h-5 md:w-6 md:h-6 text-zinc-700" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-zinc-900 tracking-tight mb-1 md:mb-2">
              Investimento em Mídia
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm">
              Recurso pago diretamente às plataformas (Google/Meta)
            </p>
          </div>

          {/* Highlighted Value */}
          <div className="bg-zinc-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-zinc-100 text-center mb-8 md:mb-10">
            <p className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 md:mb-3">
              Mínimo Recomendado
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl md:text-2xl text-zinc-400 font-medium mt-1 md:mt-2">R$</span>
              <span className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter">1.000</span>
              <span className="text-sm md:text-xl text-zinc-400 font-medium mt-3 md:mt-4">/mês</span>
            </div>
            <p className="text-zinc-500 text-xs md:text-sm mt-3 md:mt-4 max-w-md mx-auto">
              Valor necessário para garantir volume de dados, aprendizado da máquina e resultados consistentes.
            </p>
          </div>
          
          {/* Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-12">
            
            {/* Left Info */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start text-left">
              <div className="mt-1 flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                 <BarChart3 className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 text-xs md:text-sm mb-1">Por que esse valor?</h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                  Menos que isso compromete a inteligência das campanhas. Precisamos de dados.
                </p>
              </div>
            </div>

            {/* Right Info */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start text-left">
              <div className="mt-1 flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-blue-50 rounded-full flex items-center justify-center">
                 <AlertCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 text-xs md:text-sm mb-1">Transparência Total</h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                  Você paga os anúncios diretamente via boleto ou cartão na plataforma.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </Section>
  );
};