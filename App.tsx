import React from 'react';
import { Hero } from './components/Hero';
import { ProblemMechanism } from './components/ProblemMechanism';
import { BenefitsProof } from './components/BenefitsProof';
import { FormulaIngredients } from './components/FormulaIngredients';
import { BrandComparison } from './components/BrandComparison';
import { OfferFAQ } from './components/OfferFAQ';
import { Marquee } from './components/Marquee';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-[#3D3935]">
      <main className="flex-grow">
        <Marquee />
        <Hero />
        <ProblemMechanism />
        <BenefitsProof />
        <FormulaIngredients />
        <BrandComparison />
        <OfferFAQ />
      </main>
    </div>
  );
};

export default App;