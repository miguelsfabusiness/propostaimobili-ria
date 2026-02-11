import React from 'react';
import { Section } from './Section';
import { Layers, MessageSquare, Briefcase, TrendingUp } from 'lucide-react';

const ProcessCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-zinc-900/50 p-4 md:p-6 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 group rounded-lg md:rounded-none hover:bg-zinc-900">
    <Icon className="w-6 h-6 md:w-8 md:h-8 text-zinc-500 mb-3 md:mb-4 group-hover:text-emerald-500 transition-colors" />
    <h3 className="text-sm md:text-lg font-bold text-white mb-2 md:mb-3 uppercase tracking-wide">{title}</h3>
    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{description}</p>
  </div>
);

export const Process: React.FC = () => {
  return (
    <Section id="como-funciona" dark className="border-t border-zinc-900">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">O Processo na Prática</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
          O trabalho é construído para fortalecer tanto o corretor quanto a imobiliária, criando um ecossistema de autoridade, visibilidade e oportunidades.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <ProcessCard 
          icon={Layers}
          title="Estruturação"
          description="Campanhas desenhadas e alinhadas à sua imagem profissional e objetivos de negócio."
        />
        <ProcessCard 
          icon={MessageSquare}
          title="Comunicação"
          description="Mensagens claras e estratégicas para atrair o perfil exato de cliente que você busca."
        />
        <ProcessCard 
          icon={Briefcase}
          title="Fortalecimento"
          description="Construção simultânea da sua marca pessoal e institucional no mercado."
        />
        <ProcessCard 
          icon={TrendingUp}
          title="Crescimento"
          description="Escala sustentável e previsível das suas oportunidades de vendas."
        />
      </div>
    </Section>
  );
};