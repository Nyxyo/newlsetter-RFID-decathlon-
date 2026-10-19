import React, { useState } from 'react';
import { Truck, Box, ShieldCheck, Factory, BarChart3, ArrowRight } from 'lucide-react';
import warehouseImage from '../assets/images/warehouse_rfid_logistics_1792403924629.jpg';

const SUPPLY_CHAIN_STEPS = [
  {
    step: '01',
    title: 'Confection & Encodage à la source',
    location: 'Usines de fabrication partenaires',
    desc: 'Dès l’assemblage du vêtement ou du matériel sportif, l’étiquette RFID est cousue et encodée avec un numéro de série unique mondial (EPC GS1). L’article naît déjà connecté.',
    metric: '100% des marques propres tagguées'
  },
  {
    step: '02',
    title: 'Portiques de lecture haute cadence',
    location: 'Hubs logistiques & Entrepôts mondiaux',
    desc: 'Sur les convoyeurs et les quais de déchargement, des tunnels équipés d’antennes scannent des cartons complets contenant jusqu’à 400 articles en une demi-seconde, sans ouvrir un seul colis.',
    metric: '40 km/h vitesse de passage'
  },
  {
    step: '03',
    title: 'Réception magasin sans rupture',
    location: 'Réserves des points de vente',
    desc: 'À l’arrivée du camion de livraison, l’ensemble de la cargaison est réceptionné et injecté dans l’ERP Décathlon en moins de 15 minutes, contre une demi-journée de comptage manuel auparavant.',
    metric: 'Divisé par 6 le temps de déchargement'
  },
  {
    step: '04',
    title: 'Inventaires continus par raquettes RFID',
    location: 'Surfaces de vente (Rayons)',
    desc: 'Les équipiers de vente arpentent les allées avec une raquette RFID portative. À 2 mètres de distance, elle capte les puces cachées derrière d’autres produits et signale les erreurs de rangement.',
    metric: '3 500 m² inventoriés en 45 min'
  }
];

export const LogisticsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="logistique" className="py-20 md:py-28 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            Logistique & Data
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            De l'usine au rayon : La traçabilité totale d'un milliard de produits
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed text-base sm:text-lg">
            Si le client voit la magie en caisse, le cœur du réacteur économique s’est joué dans la chaîne d'approvisionnement mondiale. Décathlon traite chaque seconde des dizaines de milliers d'événements RFID synchronisés dans le cloud.
          </p>
        </div>

        {/* Warehouse Visual & Live Data Arches */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src={warehouseImage}
                alt="Centre logistique automatisé Décathlon avec convoyeurs et portiques de lecture RFID"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/85 backdrop-blur-md rounded-xl border border-slate-800 text-xs">
                <span className="font-bold text-white">Hub de distribution automatisé :</span>
                <span className="text-slate-300 ml-1.5">
                  Tunnels RFID capables de lire simultanément plusieurs centaines d'articles par carton scellé.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white">
              Zéro ouverture de carton : Le miracle des tunnels radio
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Autrefois, pour vérifier une livraison de 50 000 t-shirts, il fallait ouvrir chaque carton au cutter, compter à la main et risquer d'abîmer le textile.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Aujourd'hui, le carton traverse un portique RFID à 2 mètres par seconde. L’ensemble des puces est réveillé par le faisceau radio, comparé au bon de commande électronique (EDI), et validé instantanément sans intervention humaine.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Taux d'erreur de réception colis :</span>
                  <span className="text-emerald-400 font-mono font-bold">&lt; 0,02%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Gain de temps logistique :</span>
                  <span className="text-cyan-400 font-mono font-bold">+ 300% de vélocité</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Interactive Supply Chain Timeline */}
        <div className="mt-10">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-6">
            Le parcours complet d'un article équipé de puce RFID :
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUPPLY_CHAIN_STEPS.map((step, idx) => (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-slate-950 border-cyan-400/80 shadow-lg shadow-cyan-950/30'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    ÉTAPE {step.step}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium truncate max-w-[140px]">
                    {step.location}
                  </span>
                </div>
                
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {step.desc}
                </p>

                <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-teal-300">
                  {step.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
