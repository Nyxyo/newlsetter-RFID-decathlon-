import React, { useState } from 'react';
import { RfidTraySimulator } from './RfidTraySimulator';
import { Smartphone, CheckCircle, MapPin, Zap, RefreshCw, ShoppingCart, Search } from 'lucide-react';

const STORES = [
  { id: 'paris', name: 'Décathlon Paris - Madeleine', stock: 18, aisle: 'Allée 4B · Rayon Trail', lastSync: 'Il y a 4 min' },
  { id: 'lille', name: 'Décathlon Campus - Villeneuve d\'Ascq', stock: 42, aisle: 'Allée 2A · Rayon Running', lastSync: 'Il y a 1 min' },
  { id: 'lyon', name: 'Décathlon Lyon - Part-Dieu', stock: 11, aisle: 'Allée 6C · Rayon Randonnée', lastSync: 'Il y a 7 min' },
  { id: 'marseille', name: 'Décathlon Marseille - Grand Littoral', stock: 26, aisle: 'Allée 3B · Rayon Outdoor', lastSync: 'Il y a 2 min' },
  { id: 'bordeaux', name: 'Décathlon Bordeaux - Mérignac', stock: 15, aisle: 'Allée 5A · Rayon Montagne', lastSync: 'Il y a 5 min' },
];

export const StoreImpactSection: React.FC = () => {
  const [selectedStore, setSelectedStore] = useState(STORES[0]);
  const [isSyncing, setIsSyncing] = useState(false);

  const simulateLiveSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
    }, 400);
  };

  return (
    <section id="magasin" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            Impact Client & Magasin
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Le shopping réinventé : De l'encaissement instantané à la fin des ruptures invisibles
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed text-base sm:text-lg">
            La véritable prouesse de la RFID n'est pas seulement technologique : elle a radicalement transformé le parcours des sportifs et le quotidien des conseillers en magasin.
          </p>
        </div>

        {/* Pillar 1: Drop & Go Checkout Tray (Photo + Explanation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
              <Zap className="w-4 h-4" />
              <span>Pilier 1 · L'encaissement éclair</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              Le passage en caisse sans douchette : Déposer, payer et partir en 15 secondes
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Avant la RFID, un client avec 12 articles devait attendre que chaque code-barres soit retourné, lissé et bipé un à un. Avec le bac RFID Décathlon :
            </p>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Détection omnidirectionnelle :</strong> Le panier complet est posé en vrac dans la cuve. Les puces répondent simultanément à travers le sac de courses.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Désactivation antivol invisible :</strong> Dès le paiement carte bancaire validé, le système désactive le marqueur antivol dans la puce. Aucun macaron plastique à détacher à la pince.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Temps en caisse divisé par 3 :</strong> Fluidification totale des heures de pointe le samedi après-midi.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/checkout_basket_rfid_1792403924598.jpg"
                alt="Bac d'encaissement instantané RFID en magasin Décathlon"
                className="w-full h-[340px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/85 backdrop-blur-md rounded-xl border border-slate-800 text-xs">
                <span className="font-bold text-white">Technologie en situation réelle :</span>
                <span className="text-slate-300 ml-1.5">
                  La cuve de caisse détecte immédiatement chaussures et textiles sans aucune manipulation manuelle.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The Interactive Simulator Component */}
        <div className="mb-20">
          <RfidTraySimulator />
        </div>

        {/* Pillar 2: Stock Reliability & Omnichannel Live Sync */}
        <div className="pt-12 border-t border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Smartphone className="w-4 h-4" />
              <span>Pilier 2 · Précision des stocks omnicanale</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              Fin des mauvaises surprises : La certitude que votre article est bien en rayon
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Le pire cauchemar du consommateur ? Consulter un site web indiquant <em>"En stock dans votre magasin"</em>, faire 20 minutes de route, et apprendre du vendeur que le produit a disparu ou était mal comptabilisé.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between font-bold text-white">
                <span>Précision d'inventaire traditionnelle :</span>
                <span className="text-rose-400">~ 80% (erreurs régulières)</span>
              </div>
              <div className="flex items-center justify-between font-bold text-white">
                <span>Précision d'inventaire RFID Décathlon :</span>
                <span className="text-emerald-400 font-mono">99,5% (précision quasi-parfaite)</span>
              </div>
              <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                Grâce aux raquettes de lecture RFID connectées, les conseillers d'allée scannent des milliers d'articles en quelques minutes le matin avant l'ouverture.
              </p>
            </div>
          </div>

          {/* Interactive Stock Availability Tester */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Simulateur de disponibilité en direct
                  </span>
                </div>
                <button
                  onClick={simulateLiveSync}
                  className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium transition-colors"
                >
                  <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                  <span>Synchroniser l'ERP</span>
                </button>
              </div>

              {/* Product preview */}
              <div className="py-4 flex items-center gap-3.5 border-b border-slate-800/80">
                <span className="text-3xl p-2 rounded-xl bg-slate-900 border border-slate-800">🧥</span>
                <div>
                  <h4 className="text-sm font-bold text-white">Veste Quechua MH500 Imperméable · Taille L</h4>
                  <p className="text-xs text-slate-400">Code EPC : SGTIN-96-DECATHLON-849102</p>
                </div>
              </div>

              {/* Store selector buttons */}
              <div className="mt-4">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Sélectionnez un magasin Décathlon pour vérifier le stock géolocalisé :
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {STORES.map((store) => (
                    <button
                      key={store.id}
                      onClick={() => {
                        setSelectedStore(store);
                        simulateLiveSync();
                      }}
                      className={`p-2.5 rounded-lg text-left border transition-all text-xs cursor-pointer ${
                        selectedStore.id === store.id
                          ? 'bg-cyan-950/40 border-cyan-400/80 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900'
                      }`}
                    >
                      <div className="font-semibold truncate">{store.name}</div>
                      <div className="text-[11px] text-cyan-400 font-mono mt-0.5">
                        {store.stock} en stock en rayon
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected store status card */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-white">{selectedStore.name}</span>
                  <span className="text-emerald-400 font-semibold font-mono flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    En stock garanti ({selectedStore.stock} pièces)
                  </span>
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Emplacement physique :</span>
                    <span className="font-medium text-slate-200">{selectedStore.aisle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Dernier inventaire RFID :</span>
                    <span className="font-mono text-cyan-300">{selectedStore.lastSync}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Retrait Click & Collect :</span>
                    <span className="text-teal-300 font-semibold">Prêt en 1 heure</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
