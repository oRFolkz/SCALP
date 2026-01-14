
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const Certifications: React.FC = () => {
  const reveal = useReveal();
  const column1 = [
    "Sem microplástico", "Limpeza eficaz e natural", "Clinicamente testado",
    "Dermatologicamente testado", "Hipoalergênico", "Sem fragrância", "Sem sulfato"
  ];
  
  const column2 = [
    "Sem parabenos", "Sem ftalatos", "Sem silicone", "Sem PEG",
    "Sem teste em animais", "Sem carga tóxica", "Vegano"
  ];

  return (
    <section className="bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <div ref={reveal.ref} className={`flex flex-col lg:flex-row items-center justify-between gap-16 animeTexto ${reveal.className}`}>
          <div className="text-center md:text-left flex flex-col items-center lg:items-start lg:w-1/4">
            <div className="w-32 h-32 bg-green-50 rounded-none flex items-center justify-center mb-6">
                <img 
                  src="https://essentialnutrition-upload-files.s3.amazonaws.com/site-noorskin/selo-ewg.svg" 
                  alt="EWG Certification" 
                  className="w-24 rounded-none"
                />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certificação EWG</h3>
            <p className="text-gray-400 text-sm">Ingredientes limpos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 lg:w-3/4">
            <ul className="space-y-4">
              {column1.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-medium font-sans">
                  <div className="w-6 h-6 rounded-none border border-green-200 flex items-center justify-center">
                    <i className="fa-solid fa-check text-green-600 text-[10px]"></i>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {column2.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-medium font-sans">
                  <div className="w-6 h-6 rounded-none border border-green-200 flex items-center justify-center">
                    <i className="fa-solid fa-check text-green-600 text-[10px]"></i>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
