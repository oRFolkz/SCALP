
import React from 'react';

export const FooterBanner: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-parallax" style={{ backgroundImage: `url('https://d3eomlzmsu8e9b.cloudfront.net/media/wysiwyg/produtos/noorskin/true-skin/parallax-agua.jpg')` }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white font-sans">
        <h2 className="text-4xl md:text-7xl font-black mb-6 drop-shadow-xl uppercase tracking-tighter">
          Reconnect your <span className="text-white">light</span>
        </h2>
        <p className="text-lg md:text-2xl font-light mb-12 max-w-3xl mx-auto opacity-90">
          Nós somos luz. Existimos para <strong>nutrir cada célula com amor</strong> e manifestarmos nossa <strong>beleza essencial</strong>.
        </p>
        <a 
          href="https://www.noorskin.com.br/nossa-essencia" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#063326] text-white px-10 py-4 rounded-none font-bold text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-2xl uppercase tracking-widest"
        >
          Conheça a Noorskin
        </a>
      </div>
    </section>
  );
};
