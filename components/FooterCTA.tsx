
import React from 'react';

export const FooterCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4F9FF] text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-8 leading-tight">
            Transforme sua rotina em um <br /><span className="font-normal italic">momento de cuidado</span>
          </h2>
          <button className="bg-[#063326] text-white px-12 py-5 text-16 font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-2xl rounded-xl mb-12">
            Descobrir AEROZON
          </button>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 pt-12 border-t border-gray-200/50">
            <span className="text-16 font-bold uppercase tracking-[0.3em] text-[#deb357]">Vegan Formula</span>
            <span className="text-16 font-bold uppercase tracking-[0.3em] text-[#deb357]">Clean Beauty</span>
            <span className="text-16 font-bold uppercase tracking-[0.3em] text-[#deb357]">No Friction</span>
          </div>
        </div>
      </div>
    </section>
  );
};
