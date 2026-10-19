import React from 'react';
import { TrendingDown, Clock, ShieldCheck, Zap, Database, Check } from 'lucide-react';

export const KeyMetricsSection: React.FC = () => {
  const metrics = [
    {
      value: '1,2 Mrd',
      label: 'Articles pucés par an',
      desc: 'Premier utilisateur mondial de technologie RFID dans le secteur du sport et de l’habillement.',
      highlight: 'Volume mondial massif'
    },
    {
      value: '÷ 3',
      label: 'Temps de passage en caisse',
      desc: 'Le client dépose son panier dans le bac. Moins de 15 secondes suffisent pour régler et partir.',
      highlight: 'Fluidité totale'
    },
    {
      value: '10x',
      label: 'Vitesse des inventaires',
      desc: 'D’un week-end complet avec fermeture de magasin à une tournée de 45 minutes avec raquette mobile.',
      highlight: 'Productivité décuplée'
    },
    {
      value: '99,5%',
      label: 'Précision des stocks magasin',
      desc: 'Contre environ 80% avant le projet RFID. Permet le retrait Click & Collect garanti en 1 heure.',
      highlight: 'Omnicanal sans faille'
    },
    {
      value: '- 40%',
      label: 'Baisse de la démarque inconnue',
      desc: 'Chaque article volé ou égaré est immédiatement identifié par son code de série unique aux portiques.',
      highlight: 'Sécurisation native'
    },
    {
      value: '100%',
      label: 'Marques passion équipées',
      desc: 'Kiprun, Quechua, Tribord, Oxelo, Btwin, Domyos : toutes les étiquettes intègrent la puce dès l’usine.',
      highlight: 'Standardisation globale'
    }
  ];

  return (
    <section id="chiffres" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            Les Chiffres Clés
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Le ROI d’une transformation : L'impact économique chiffré
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed text-base sm:text-lg">
            Investir dans un milliard de puces par an représentait un coût initial faramineux. Mais les gains de productivité, la satisfaction client et la fiabilité des stocks ont offert un retour sur investissement historique à Décathlon.
          </p>
        </div>

        {/* 6-Card Metric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-slate-400 font-medium">{item.highlight}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover:scale-150 transition-transform" />
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 tabular-nums tracking-tight mb-2">
                  {item.value}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.label}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-cyan-400/90">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Indicateur validé par les études de cas GS1 & Retail</span>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Marketer Executive Takeaway */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
              Synthèse Stratégique & Growth Retail
            </span>
            <h4 className="text-lg font-bold text-white mb-2">
              La technologie qui s'efface pour laisser place à l'expérience
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              La réussite de Décathlon prouve qu'une innovation IoT réussie n'est pas celle qui s'affiche bruyamment, mais celle qui élimine les frictions : plus d'attente aux caisses, plus d'employés épuisés par des inventaires manuels, et des sportifs qui trouvent instantanément leur équipement.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#simulateur"
              className="px-5 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors inline-flex items-center gap-2 active:scale-95"
            >
              <span>Revoir la simulation</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
