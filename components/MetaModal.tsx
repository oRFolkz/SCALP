
import React from 'react';

interface MetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MetaModal: React.FC<MetaModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-none max-w-xl w-full p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>
        
        <h2 className="text-3xl font-voyage mb-6 text-rose-900 uppercase tracking-widest">O que é M.E.T.A.?</h2>
        <div className="prose prose-rose">
          <p className="text-lg text-gray-700 leading-relaxed">
            M.E.T.A. (Mecanismo de Eficácia de Tecnologia Ativa) é o nosso padrão de qualidade que define os benefícios imediatos e de longo prazo que cada produto entrega para a saúde da sua pele.
          </p>
          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-rose-300 pl-4">
              <h4 className="font-bold text-rose-800 uppercase text-xs tracking-widest">M.E.T.A. Imediata</h4>
              <p className="text-sm text-gray-600">Resultados percebidos logo após a primeira aplicação do produto.</p>
            </div>
            <div className="border-l-4 border-rose-800 pl-4">
              <h4 className="font-bold text-rose-950 uppercase text-xs tracking-widest">M.E.T.A. Tratamento</h4>
              <p className="text-sm text-gray-600">Benefícios cumulativos que transformam a saúde e aparência da pele com o uso contínuo.</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="mt-10 w-full bg-rose-900 text-white py-4 rounded-none font-bold hover:bg-rose-950 transition-colors uppercase tracking-[0.2em] text-xs"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};
