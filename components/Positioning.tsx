import React from 'react';
import { Section } from './Section';
import { Award, TrendingUp, ShieldCheck } from 'lucide-react';

export const Positioning: React.FC = () => {
  return (
    <Section className="bg-white border-b border-zinc-100">
      <div className="max-w-5xl mx-auto text-center">
        
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-4 md:mb-6 tracking-tight leading-tight">
            Mais do que anúncios: <br/>
            <span className="text-emerald-600">posicionamento e autoridade</span>
          </h2>
          
          <p className="text-sm md:text-lg text-zinc-600 leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto">
            O tráfego pago não serve apenas para gerar contatos. Quando bem estruturado, ele transforma corretores e imobiliárias em referência no mercado.
          </p>
          
          <h3 className="text-lg md:text-2xl font-bold text-zinc-900 leading-tight max-w-3xl mx-auto px-2">
            Anunciar bem é aparecer. Anunciar com estratégia é se tornar referência.
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-12">
          {/* Item 1 */}
          <div className="flex flex-col items-center group p-3 md:p-0">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-zinc-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <Award className="w-5 h-5 md:w-8 md:h-8 text-zinc-900 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-sm md:text-lg font-bold text-zinc-900 mb-1 md:mb-2 leading-tight">Corretor como Autoridade</h4>
            <p className="text-zinc-500 leading-relaxed text-xs md:text-sm max-w-xs mx-auto">Seja visto como o especialista da sua região.</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center group p-3 md:p-0">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-zinc-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-5 h-5 md:w-8 md:h-8 text-zinc-900 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-sm md:text-lg font-bold text-zinc-900 mb-1 md:mb-2 leading-tight">Marca Forte</h4>
            <p className="text-zinc-500 leading-relaxed text-xs md:text-sm max-w-xs mx-auto">A imobiliária é lembrada e respeitada.</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center group p-3 md:p-0 col-span-2 md:col-span-1">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-zinc-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <TrendingUp className="w-5 h-5 md:w-8 md:h-8 text-zinc-900 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-sm md:text-lg font-bold text-zinc-900 mb-1 md:mb-2 leading-tight">Confiança Prévia</h4>
            <p className="text-zinc-500 leading-relaxed text-xs md:text-sm max-w-xs mx-auto">O público confia antes mesmo do primeiro contato.</p>
          </div>
        </div>

      </div>
    </Section>
  );
};