import React from 'react';
import { Section } from './Section';
import { MousePointerClick, BarChart, Building2, UserX, Wallet } from 'lucide-react';

const ProblemCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-zinc-100 shadow-lg shadow-zinc-200/50 hover:shadow-2xl hover:shadow-zinc-200/80 transition-all duration-300 hover:scale-[1.02] group h-full flex flex-col relative overflow-hidden">
    {/* Decorative soft glow on hover */}
    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

    <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 relative z-10">
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-zinc-600 group-hover:text-white" />
    </div>
    <h3 className="text-sm md:text-xl font-bold text-zinc-900 mb-2 md:mb-3 relative z-10 leading-tight">{title}</h3>
    <p className="text-zinc-500 leading-relaxed text-xs md:text-sm relative z-10">{description}</p>
  </div>
);

export const Problems: React.FC = () => {
  const problems = [
    {
      icon: MousePointerClick,
      title: "Cliques sem Oportunidade",
      description: "Anúncios que geram cliques, mas não geram oportunidades reais de venda ou captação."
    },
    {
      icon: BarChart,
      title: "Sem Previsibilidade",
      description: "Falta de constância nos resultados. Um mês bom, outro ruim, sem saber o motivo."
    },
    {
      icon: Building2,
      title: "Dependência de Portais",
      description: "Dependência excessiva de portais imobiliários e indicações, sem um canal próprio de aquisição."
    },
    {
      icon: UserX,
      title: "Dificuldade de Posicionamento",
      description: "Dificuldade em se posicionar como referência e autoridade na sua região de atuação."
    },
    {
      icon: Wallet,
      title: "Investimento às Cegas",
      description: "Investimento em impulsionamentos ou anúncios sem uma estratégia clara e definida."
    }
  ];

  return (
    <Section className="bg-zinc-50">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
          Você enfrenta estes desafios hoje?
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base">
          Identificar o gargalo é o primeiro passo para a solução.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-6 max-w-6xl mx-auto">
        {problems.map((prob, idx) => (
          <div 
            key={idx} 
            className={`
              w-full 
              ${idx === problems.length - 1 ? 'col-span-2' : 'col-span-1'} 
              lg:col-span-2 
              ${idx === 3 ? 'lg:col-start-2' : ''}
            `}
          >
            <ProblemCard {...prob} />
          </div>
        ))}
      </div>
    </Section>
  );
};