
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const ToxicLoad: React.FC = () => {
  const reveal1 = useReveal();
  const reveal2 = useReveal();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Bloco 1: Texto Esquerda, Foto Direita */}
        <div className="flex flex-wrap -mx-4 items-stretch mb-12 lg:mb-24">
          <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
             <div ref={reveal1.ref} className={`bg-[#063326] p-12 md:p-16 h-full flex flex-col justify-center rounded-xl text-white animeTexto ${reveal1.className}`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight uppercase tracking-wider">
                  Be free from <br /><span className="font-normal italic">toxic load</span>
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light">
                  Nosso ideal de beleza é saúde. Por isso, reduzir a exposição a essas substâncias nocivas através de cosméticos limpos e entregar nutrientes que fortalecem o sistema de desintoxicação é fundamental.
                </p>
                <div className="w-20 h-1 bg-white/20"></div>
             </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className={`h-full min-h-[400px] animeZoom ${reveal1.className} rounded-xl shadow-2xl overflow-hidden`}>
              <img 
                src="https://d3eomlzmsu8e9b.cloudfront.net/media/wysiwyg/produtos/noorskin/true-skin/img07-true-skin.jpg" 
                alt="Clean Beauty Ritual" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bloco 2: Foto Esquerda, Texto Direita */}
        <div className="flex flex-wrap -mx-4 items-stretch">
          <div className="w-full lg:w-6/12 px-4 order-2 lg:order-1">
            <div className={`h-full min-h-[400px] animeZoom ${reveal2.className} rounded-xl shadow-2xl overflow-hidden`}>
              <img 
                src="https://essentialnutrition-upload-files.s3.us-east-1.amazonaws.com/site-nutrition/produtos/true-skin/img08-true-skin.jpg" 
                alt="Saúde da Pele" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 order-1 lg:order-2 mb-8 lg:mb-0">
             <div ref={reveal2.ref} className={`bg-[#2D2926] p-12 md:p-16 h-full flex flex-col justify-center rounded-xl text-white animeTexto ${reveal2.className}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight uppercase tracking-widest opacity-90">
                  Renovação e <br /><span className="font-normal italic">Regeneração</span>
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                  <p>
                    O nosso corpo tem uma incrível capacidade de regeneração e desintoxicação. Todos os dias estamos expostos a milhares de substâncias que vão se acumulando em nossas células.
                  </p>
                  <p>
                    A carga tóxica pode causar danos a diversos sistemas do nosso corpo, entre eles o sistema imune, endócrino e neurológico. Escolher True Skin é optar por um caminho de pureza.
                  </p>
                </div>
                <div className="w-20 h-1 bg-gray-500/30 mt-8"></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
