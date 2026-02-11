import React from 'react';
import { Section } from './Section';
import { Search, Map, Zap, Settings2, BarChart3 } from 'lucide-react';

export const Solution: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Diagnóstico estratégico",
      desc: "Entendimento do negócio, do público, da região e dos objetivos reais."
    },
    {
      icon: Map,
      title: "2. Planejamento de campanhas",
      desc: "Definição da estrutura ideal de anúncios, criativos e mensagens para o seu perfil."
    },
    {
      icon: Zap,
      title: "3. Execução e gestão contínua",
      desc: "Criação, ativação e acompanhamento diário da performance das campanhas."
    },
    {
      icon: Settings2,
      title: "4. Otimização constante",
      desc: "Ajustes baseados em dados, comportamento do público e performance real para reduzir custos."
    },
    {
      icon: BarChart3,
      title: "5. Análise de resultados",
      desc: "Avaliação clara do que funciona e do que precisa evoluir através de relatórios honestos."
    }
  ];

  return (
    <Section id="solucao" dark className="border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-[10px] md:text-xs border border-zinc-800 px-2 py-1 inline-block mb-4 md:mb-6">Como eu trabalho</span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            Minha metodologia de trabalho
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Cada projeto começa com estratégia. Não existe fórmula pronta, nem campanha genérica.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-zinc-900/50 border border-zinc-800 p-4 md:p-8 flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center hover:border-zinc-700 transition-colors duration-300 rounded-lg md:rounded-none ${idx === steps.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-black flex items-center justify-center border border-zinc-800 text-emerald-500 rounded-sm">
                  <item.icon className="w-4 h-4 md:w-6 md:h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight">{item.title}</h4>
                <p className="text-zinc-400 leading-relaxed text-xs md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};