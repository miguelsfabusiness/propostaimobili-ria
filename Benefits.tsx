import React from 'react';
import { Section } from './Section';
import { Target, ShieldCheck, BrainCircuit, LineChart } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <Section id="beneficios" className="bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50/50 skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: The "Pitch" */}
          <div className="lg:col-span-5">
            <div className="inline-block px-3 py-1 mb-4 md:mb-6 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Por que me contratar?
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-4 md:mb-6 tracking-tight leading-tight">
              Não sou apenas um gestor de anúncios. Sou seu <span className="text-emerald-600">parceiro de crescimento.</span>
            </h2>
            <p className="text-zinc-500 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 font-light">
              A maioria dos gestores foca apenas no "custo por lead". O meu foco é transformar sua imobiliária e seu nome em uma <strong>referência inevitável</strong> na sua região.
            </p>
            <p className="text-zinc-500 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              Unimos a <strong>performance de vendas</strong> com a construção de <strong>autoridade de marca</strong>.
            </p>

            <div className="border-l-4 border-emerald-500 pl-4 md:pl-6 py-2 bg-zinc-50 rounded-r-lg">
              <p className="italic text-zinc-700 text-xs md:text-base font-medium">
                "O objetivo final não é apenas vender um imóvel hoje, mas garantir que amanhã o cliente procure por VOCÊ, e não pelo concorrente."
              </p>
            </div>
          </div>

          {/* Right Column: The Grid Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
              
              {/* Card 1 */}
              <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-zinc-900 mb-2 leading-tight">Foco em Vendas</h3>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                  Todo o trabalho é orientado para gerar conversas qualificadas e visitas.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-zinc-900 mb-2 leading-tight">Autoridade</h3>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                  Posicionamos o corretor e a imobiliária como os maiores especialistas.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <BrainCircuit className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-zinc-900 mb-2 leading-tight">Estratégia</h3>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                  Fujo do "copia e cola". Entendo o perfil dos seus imóveis e traço a rota.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <LineChart className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-zinc-900 mb-2 leading-tight">Transparência</h3>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                  Relatórios claros. Você saberá exatamente para onde vai cada centavo.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};