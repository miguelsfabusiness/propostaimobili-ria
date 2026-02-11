import React from 'react';
import { Section } from './Section';

export const Intro: React.FC = () => {
  return (
    <Section id="proposta" className="bg-white border-b border-zinc-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-zinc-900 mb-8 tracking-tight">
          O mercado mudou. A forma de atrair clientes também.
        </h2>
        <div className="prose prose-lg mx-auto text-zinc-600 leading-relaxed space-y-6">
          <p>
            O mercado imobiliário está cada vez mais competitivo. Não basta apenas anunciar imóveis, é preciso estratégia, posicionamento e presença constante na mente do público certo.
          </p>
          <p>
            Hoje, quem se destaca não é quem grita mais, mas quem aparece com consistência, clareza e autoridade.
          </p>
          <p className="font-medium text-zinc-900 text-xl border-l-4 border-emerald-500 pl-4 italic">
            "Meu papel é exatamente esse: usar o tráfego pago para colocar você à frente das pessoas certas, com campanhas inteligentes e bem estruturadas."
          </p>
        </div>
      </div>
    </Section>
  );
};