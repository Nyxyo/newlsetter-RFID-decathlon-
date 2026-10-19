import React from 'react';
import { ArrowDown, Radio, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unboxed Metadata Header (No pills, clean typographic separators) */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-cyan-400 font-medium tracking-wide mb-6">
          <span className="uppercase">Chronique Tech & Retail</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">Transformation IoT & Logistique</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Temps de lecture : 6 min</span>
        </div>

        {/* Hero Title and Subtitle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              La révolution <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">RFID</span> chez Décathlon : Comment les puces intelligentes ont transformé le commerce de sport
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Dès 2014, l’enseigne sportive a osé un virage industriel historique : équiper chaque article d’une étiquette radiofréquence miniaturisée dès sa confection. En remplaçant le bip-bip du code-barres par une lecture sans fil instantanée, Décathlon a aboli l’attente en caisse et bâti la chaîne logistique la plus agile au monde.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#technologie"
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-lg shadow-md shadow-cyan-950/40 transition-all duration-150 flex items-center gap-2 whitespace-nowrap active:scale-95"
              >
                <span>Comprendre la technologie</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#simulateur"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap active:scale-95"
              >
                <Radio className="w-4 h-4 text-cyan-400" />
                <span>Tester le simulateur de bac</span>
              </a>
            </div>

            {/* Quiet author / editorial citation */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-4 text-xs text-slate-400">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-cyan-400">
                CT
              </div>
              <div>
                <p className="text-slate-200 font-medium">Rédaction Growth & Retail Tech</p>
                <p className="text-slate-500">Dossier documenté d'après les retours d'expérience industriels Décathlon & GS1</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl group">
              <img
                src="/src/assets/images/hero_decathlon_rfid_1792403923225.jpg"
                alt="Magasin Décathlon moderne avec bornes de caisse RFID automatique"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container in case of loading error
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center';
                    fallback.innerHTML = `
                      <div class="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 font-bold text-xl">RFID</div>
                      <h4 class="text-white font-bold text-lg mb-2">Décathlon Magasin Connecté</h4>
                      <p class="text-slate-400 text-xs">Bornes de caisse automatiques sans contact</p>
                    `;
                    parent.appendChild(fallback);
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">En magasin : Encaissement "Drop & Pay"</span>
                  <span className="text-cyan-400 font-mono">RFID UHF Gen 2</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Les articles déposés dans le bac sont identifiés à 360° en moins de 100 millisecondes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Metric Highlight Strip below the Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-800/70 hover:border-slate-700 transition-colors">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Déploiement mondial</div>
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">100% des articles</div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              Marques passion étiquetées dès la fabrication dans les usines partenaires.
            </div>
          </div>

          <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-800/70 hover:border-slate-700 transition-colors">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Vitesse d'encaissement</div>
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 tabular-nums">&lt; 500 ms</div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              Pour scanner l'intégralité d'un panier sans manipulation ni visée optique.
            </div>
          </div>

          <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-800/70 hover:border-slate-700 transition-colors">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Précision de stock</div>
            <div className="text-2xl sm:text-3xl font-bold text-teal-300 tabular-nums">99,5% en temps réel</div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              Élimination quasi-totale des ruptures de stock fantômes sur l'app et le web.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
