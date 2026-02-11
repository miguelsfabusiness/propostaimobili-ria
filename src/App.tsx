import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Problems } from './components/Problems';
import { Solution } from './components/Solution';
import { Positioning } from './components/Positioning';
import { Process } from './components/Process';
import { Benefits } from './components/Benefits';
import { Investment } from './components/Investment';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200">
      <Header />
      <Hero />
      <Intro />
      <Problems />
      <Solution />
      <Positioning />
      <Process />
      <Benefits />
      <Investment />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;