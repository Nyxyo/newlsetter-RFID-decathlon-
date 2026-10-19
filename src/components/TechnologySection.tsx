import React, { useState } from 'react';
import { Layers, Cpu, Radio, Zap, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { Hotspot } from '../types';
import rfidTagImage from '../assets/images/rfid_chip_microtag_1792403923373.jpg';

const HOTSPOTS: Hotspot[] = [
  {
    id: 'chip',
    x: 51,
    y: 49,
    title: 'Micro-puce silicium (IC)',
    description: 'Composant miniature de moins de 0,5 mm² gravé sur silicium. Elle stocke le code EPC unique sans jamais nécessiter de pile.',
    specs: 'Standard EPC Gen 2 / ISO 18000-6C · Mémoire 96-128 bits'
  },
  {
    id: 'antenna',
    x: 35,
    y: 45,
    title: 'Antenne dipôle en aluminium',
    description: 'Sérigraphie en aluminium ultra-mince optimisée pour capter l’énergie électromagnétique émise par les lecteurs distants.',
    specs: 'Fréquence UHF 860-960 MHz · Rayonnement omnidirectionnel'
  },
  {
    id: 'substrate',
    x: 65,
    y: 78,
    title: 'Substrat textile & colle bio-sourcée',
    description: 'Intégration directe dans les étiquettes de lavage ou étiquettes carton, résistant au transport et aux manipulations.',
    specs: 'Épaisseur < 100 microns · Résistant à l’humidité'
  },
  {
    id: 'security',
    x: 62,
    y: 35,
    title: 'Bit antivol dématérialisé',
    description: 'Remplace les volumineux macarons antivol en plastique. Le bit d’alarme est basculé automatiquement lors du paiement.',
    specs: 'Portique de sortie synchronisé · Détection 3D instantanée'
  }
];

export const TechnologySection: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(HOTSPOTS[0]);
  const [activeTab, setActiveTab] = useState<'comparison' | 'principles'>('comparison');

  return (
    <section id="technologie" className="py-20 md:py-28 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            Le Défi & La Technologie
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Comment une micro-étiquette a rendu obsolète 50 ans de codes-barres
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed text-base sm:text-lg">
            Depuis 1974, la distribution mondiale reposait sur la visée laser ligne par ligne du code EAN13. Un processus lent, faillible et aveugle. Décathlon a fait le choix audacieux d'industrialiser la technologie RFID UHF passive à l'échelle d'un milliard de produits par an.
          </p>
        </div>

        {/* Two-Column Tech Breakdown: Interactive Anatomy vs Explained Physics */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Chip Anatomy with Hotspots */}
          <div className="lg:col-span-6 bg-slate-950/80 rounded-2xl border border-slate-800 p-5 sm:p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Anatomie d'une étiquette connectée Décathlon
              </span>
              <span className="text-xs text-cyan-400 font-mono">UHF 865-868 MHz</span>
            </div>

            {/* Interactive Image Container */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 group">
              <img
                src={rfidTagImage}
                alt="Photographie macro de la puce et de l'antenne RFID sur une étiquette Décathlon"
                className="w-full h-[320px] sm:h-[380px] object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hotspots */}
              {HOTSPOTS.map((spot) => {
                const isSelected = spot.id === selectedHotspot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedHotspot(spot)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.9)] scale-110'
                        : 'bg-slate-900/90 text-cyan-300 border border-cyan-400/50 hover:bg-cyan-500 hover:text-slate-950'
                    }`}
                    title={spot.title}
                    aria-label={spot.title}
                  >
                    <span className="text-xs font-bold font-mono">
                      {spot.id === 'chip' ? '1' : spot.id === 'antenna' ? '2' : spot.id === 'substrate' ? '3' : '4'}
                    </span>
                  </button>
                );
              })}

              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-slate-300 border border-slate-800">
                Cliquez sur les numéros pour inspecter
              </div>
            </div>

            {/* Hotspot details card */}
            <div className="mt-5 p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30">
              <div className="flex items-center justify-between text-xs text-cyan-400 font-mono mb-1">
                <span>Composant actif sélectionné</span>
                <span>{selectedHotspot.specs}</span>
              </div>
              <h4 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                {selectedHotspot.title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedHotspot.description}
              </p>
            </div>
          </div>

          {/* Right Column: Physical Principles & Why Passive RFID changes everything */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-6 shadow-xl">
              <div className="flex items-center gap-3 text-cyan-400 mb-3">
                <Zap className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Le secret : Zéro batterie, 100% onde électromagnétique</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Contrairement à un smartphone ou une balise GPS, la puce RFID cousue dans votre polaire Quechua est <strong className="text-white">totalement passive</strong>. Elle ne contient aucune pile chimique.
              </p>
              
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-cyan-400 font-semibold block mb-1">1. L’onde émise</span>
                  <span className="text-slate-400">Le lecteur en caisse ou le portique logistique envoie une onde radio en fréquence 865 MHz.</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-cyan-400 font-semibold block mb-1">2. L’induction passive</span>
                  <span className="text-slate-400">L'antenne dipôle capte l'onde et génère quelques micro-watts suffisants pour réveiller la puce.</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-cyan-400 font-semibold block mb-1">3. La rétro-diffusion</span>
                  <span className="text-slate-400">La puce renvoie instantanément son code EPC sérialisé unique (norme GS1) sans contact visuel.</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-cyan-400 font-semibold block mb-1">4. Résultat magique</span>
                  <span className="text-slate-400">Même cachée au fond d'un sac de sport, la puce est lue à travers le tissu ou le carton en moins de 10 ms.</span>
                </div>
              </div>
            </div>

            {/* EPC Code Unique Identification Explanation */}
            <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-6 shadow-xl">
              <div className="flex items-center gap-3 text-teal-400 mb-3">
                <Layers className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">La sérialisation unique : Chaque pièce est vivante</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Un code-barres classique dit seulement : <em>"Je suis une paire de baskets Kalenji taille 43"</em>. L'EPC RFID de Décathlon dit : <em>"Je suis l'exemplaire N°849 201 391, fabriqué le 12 mai à l'usine de Ho Chi Minh, expédié vers le hub de Dourges et réceptionné à Lyon Part-Dieu le 18 mai"</em>.
              </p>
              
              <div className="mt-4 p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 flex items-center justify-between overflow-x-auto">
                <span className="text-cyan-400 whitespace-nowrap">urn:epc:id:sgtin:326090.849201.391840</span>
                <span className="text-slate-500 text-[11px] ml-4 whitespace-nowrap">96-bit SGTIN GS1 Standard</span>
              </div>
            </div>

          </div>
        </div>

        {/* Technology Benchmark: Code-barres vs RFID */}
        <div className="mt-14 pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Le Match : Code-barres classique contre RFID Décathlon
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Pourquoi l'ancien monde ne pouvait plus rivaliser avec les cadences du commerce omnicanal.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-slate-950/80 rounded-xl border border-slate-800 shadow-xl overflow-hidden">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/70 text-xs uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-6 font-semibold">Critère de performance</th>
                  <th className="py-4 px-6 font-semibold text-rose-400">Code-barres 1D / 2D classique</th>
                  <th className="py-4 px-6 font-semibold text-cyan-400">RFID UHF Décathlon (Gen 2)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">Visibilité nécessaire</td>
                  <td className="py-4 px-6 text-slate-300 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Ligne de visée optique obligatoire (laser direct)</span>
                  </td>
                  <td className="py-4 px-6 text-cyan-300 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Sans contact ni visée (ondes à travers sacs et cartons)</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">Vitesse de lecture</td>
                  <td className="py-4 px-6 text-slate-300 tabular-nums">1 article à la fois (1,5 à 3 secondes / article)</td>
                  <td className="py-4 px-6 text-cyan-300 tabular-nums font-semibold">Jusqu'à 1 000 étiquettes par seconde en simultané</td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">Portée de détection</td>
                  <td className="py-4 px-6 text-slate-300 tabular-nums">0 à 15 cm maximum devant la douchette</td>
                  <td className="py-4 px-6 text-cyan-300 tabular-nums font-semibold">Jusqu'à 8 à 10 mètres selon l'antenne</td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">Durée d'inventaire magasin (3 500 m²)</td>
                  <td className="py-4 px-6 text-slate-300 tabular-nums">3 à 4 jours (mobilisation de 15 employés)</td>
                  <td className="py-4 px-6 text-cyan-300 tabular-nums font-semibold">45 minutes à pied avec raquette RFID connectée</td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">Niveau de traçabilité</td>
                  <td className="py-4 px-6 text-slate-300">Référence produit générique uniquement</td>
                  <td className="py-4 px-6 text-cyan-300 font-medium">Identifiant EPC mondial unique par unité produite</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
