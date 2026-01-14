import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    "100% Vegetal e Natural",
    "Vegano",
    "Não Testado em Animais",
    "Livre De Parabenos",
    "Livre de Glúten",
    "Sem Conservantes"
  ];

  return (
    <div className="bg-[#063326] text-white py-3 overflow-hidden border-b border-[#ffffff10] relative z-50">
      <div className="flex whitespace-nowrap animate-marquee w-fit">
        {/* Repetindo 10 vezes para garantir preenchimento em telas ultra-wide e loop suave */}
        {[...Array(10)].map((_, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {items.map((item, idx) => (
              <div key={`${groupIndex}-${idx}`} className="flex items-center mx-8 gap-3">
                <li className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em]">{item}</li>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-10%); } /* Move exatamente 1/10 do container (1 grupo de itens) */
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};