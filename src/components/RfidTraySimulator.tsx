import React, { useState, useEffect } from 'react';
import { ShoppingBag, RefreshCw, Radio, Check, Sparkles, Shield, ArrowRight, Plus, Trash2, Clock } from 'lucide-react';
import { ProductItem } from '../types';

const CATALOG: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Chaussures Kiprun KD500',
    category: 'Running',
    brand: 'Kalenji / Kiprun',
    price: 85.00,
    epcCode: 'urn:epc:id:sgtin:326090.009412.593810',
    weight: '280g',
    iconName: '👟'
  },
  {
    id: 'prod-2',
    name: 'Veste Imperméable MH500',
    category: 'Randonnée',
    brand: 'Quechua',
    price: 65.00,
    epcCode: 'urn:epc:id:sgtin:326090.014298.118940',
    weight: '430g',
    iconName: '🧥'
  },
  {
    id: 'prod-3',
    name: 'Ballon de Football Hybride F500',
    category: 'Football',
    brand: 'Kipsta',
    price: 18.00,
    epcCode: 'urn:epc:id:sgtin:326090.008431.774921',
    weight: '420g',
    iconName: '⚽'
  },
  {
    id: 'prod-4',
    name: 'Gourde Inox Isotherme 0.8L',
    category: 'Bivouac',
    brand: 'Quechua',
    price: 15.00,
    epcCode: 'urn:epc:id:sgtin:326090.003182.239011',
    weight: '310g',
    iconName: '🍶'
  },
  {
    id: 'prod-5',
    name: 'Lunettes de Natation Xbase',
    category: 'Natation',
    brand: 'Nabaiji',
    price: 7.50,
    epcCode: 'urn:epc:id:sgtin:326090.001928.980314',
    weight: '90g',
    iconName: '🥽'
  },
  {
    id: 'prod-6',
    name: 'Chaussettes Respirantes x3',
    category: 'Fitness',
    brand: 'Domyos',
    price: 6.00,
    epcCode: 'urn:epc:id:sgtin:326090.002819.447192',
    weight: '110g',
    iconName: '🧦'
  }
];

export const RfidTraySimulator: React.FC = () => {
  // Start with 3 items pre-loaded in tray
  const [basket, setBasket] = useState<ProductItem[]>([CATALOG[0], CATALOG[1], CATALOG[3]]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{
    detectedCount: number;
    latencyMs: number;
    frequencyMhz: number;
    antitheftDeactivated: boolean;
  }>({
    detectedCount: 3,
    latencyMs: 74,
    frequencyMhz: 865.7,
    antitheftDeactivated: true
  });

  const triggerScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setScanResult({
        detectedCount: basket.length,
        latencyMs: Math.floor(Math.random() * 30) + 60,
        frequencyMhz: 865.7,
        antitheftDeactivated: true
      });
      setIsScanning(false);
    }, 380);
  };

  const addItemToBasket = (item: ProductItem) => {
    const newItem = { ...item, id: `${item.id}-${Date.now()}` };
    const updated = [...basket, newItem];
    setBasket(updated);
    // Instant auto-detection simulation
    setIsScanning(true);
    setTimeout(() => {
      setScanResult({
        detectedCount: updated.length,
        latencyMs: Math.floor(Math.random() * 25) + 65,
        frequencyMhz: 865.7,
        antitheftDeactivated: true
      });
      setIsScanning(false);
    }, 250);
  };

  const removeItem = (id: string) => {
    const updated = basket.filter(item => item.id !== id);
    setBasket(updated);
    setScanResult({
      detectedCount: updated.length,
      latencyMs: 58,
      frequencyMhz: 865.7,
      antitheftDeactivated: true
    });
  };

  const clearBasket = () => {
    setBasket([]);
    setScanResult({
      detectedCount: 0,
      latencyMs: 12,
      frequencyMhz: 865.7,
      antitheftDeactivated: false
    });
  };

  const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

  return (
    <div id="simulateur" className="bg-slate-950 rounded-2xl border border-slate-800 p-6 lg:p-8 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1 flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Simulateur Interactif de Caisse Décathlon</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Expérimentez le bac de lecture "Drop & Pay"
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Ajoutez des articles en vrac dans la cuve. Les ondes radio UHF scannent l’ensemble en une fraction de seconde.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={triggerScan}
            disabled={basket.length === 0 || isScanning}
            className="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap active:scale-95"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
            <span>Forcer un re-scan du bac</span>
          </button>
          
          <button
            onClick={clearBasket}
            disabled={basket.length === 0}
            className="px-3 py-2.5 text-xs text-slate-400 hover:text-rose-400 hover:bg-slate-900 border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5"
            title="Vider le bac"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Vider</span>
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Product Shelf Catalog */}
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
            Rayon Magasin : Cliquez pour déposer dans le bac
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {CATALOG.map((item) => (
              <button
                key={item.id}
                onClick={() => addItemToBasket(item)}
                className="group p-3 rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all text-left flex items-center justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-2xl p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                    {item.iconName}
                  </span>
                  <div className="min-w-0">
                    <h5 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-slate-400 truncate">
                      {item.brand} · {item.category}
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-bold text-white tabular-nums">
                    {item.price.toFixed(2)} €
                  </div>
                  <span className="text-[10px] text-cyan-400 flex items-center justify-end gap-1 font-medium">
                    <Plus className="w-3 h-3" />
                    <span>Déposer</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Simulated Physical Bac & Real-Time Terminal Screen */}
        <div className="lg:col-span-7">
          
          {/* Terminal Screen & Tray Hardware Representation */}
          <div className="rounded-2xl border-2 border-slate-700 bg-slate-900/90 overflow-hidden shadow-2xl relative">
            
            {/* Terminal Header */}
            <div className="bg-slate-950 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-xs font-mono font-semibold text-slate-200">
                  BORNE DÉCATHLON EXPRESS · BAC N°04
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono text-cyan-400">
                <span>{scanResult.frequencyMhz} MHz</span>
                <span className="text-slate-600">|</span>
                <span className="text-emerald-400 font-semibold">{scanResult.latencyMs} ms</span>
              </div>
            </div>

            {/* The Physical Basket Simulation View */}
            <div className="p-5 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800 relative">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4 text-cyan-400" />
                  <span>Contenu de la cuve blindée anti-fuite RF</span>
                </span>
                <span className="font-mono text-cyan-300">
                  {basket.length} {basket.length > 1 ? 'articles détectés' : 'article détecté'}
                </span>
              </div>

              {/* Basket visual container */}
              <div className="min-h-[140px] rounded-xl border border-dashed border-slate-700 bg-slate-950/60 p-4 relative flex flex-wrap gap-2.5 items-center justify-center">
                {isScanning && (
                  <div className="absolute inset-0 bg-cyan-950/40 backdrop-blur-[1px] flex flex-col items-center justify-center z-20 rounded-xl">
                    <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-mono text-cyan-300 mt-2 font-semibold">
                      Interrogation électromagnétique UHF...
                    </span>
                  </div>
                )}

                {basket.length === 0 ? (
                  <div className="text-center py-6 text-slate-500">
                    <p className="text-xs font-medium">Le bac est vide</p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Sélectionnez des articles à gauche pour voir la détection instantanée
                    </p>
                  </div>
                ) : (
                  basket.map((item) => (
                    <div
                      key={item.id}
                      className="group/item relative px-3 py-2 bg-slate-900/90 border border-cyan-500/30 rounded-lg flex items-center gap-2 shadow-sm animate-in fade-in zoom-in-95 duration-150"
                    >
                      <span className="text-lg">{item.iconName}</span>
                      <div className="text-left">
                        <div className="text-xs font-bold text-white max-w-[140px] truncate">{item.name}</div>
                        <div className="text-[10px] text-cyan-400 font-mono tabular-nums">{item.price.toFixed(2)} €</div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="opacity-60 hover:opacity-100 hover:text-rose-400 p-1 ml-1 rounded transition-opacity"
                        title="Retirer"
                        aria-label={`Retirer ${item.name}`}
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Instant Receipt / Live Detection Telemetry */}
            <div className="p-5 bg-slate-950">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400">Total panier scanné</span>
                  <div className="text-3xl font-extrabold text-white tabular-nums tracking-tight">
                    {totalPrice.toFixed(2)} €
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Antivol déverrouillé au paiement</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Temps de lecture moyen : 0,074 seconde
                  </span>
                </div>
              </div>

              {/* EPC Serialized Log Stream */}
              <div className="mt-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Flux des puces EPC captées par la cuve :
                </span>
                <div className="max-h-[110px] overflow-y-auto space-y-1.5 pr-1 font-mono text-[11px]">
                  {basket.length === 0 ? (
                    <div className="text-slate-600 italic">En attente de détection...</div>
                  ) : (
                    basket.map((item, idx) => (
                      <div
                        key={`${item.id}-${idx}`}
                        className="flex items-center justify-between px-2.5 py-1 rounded bg-slate-900 border border-slate-800/80 text-slate-300"
                      >
                        <span className="text-cyan-400 truncate max-w-[280px]">
                          {item.epcCode}
                        </span>
                        <span className="text-emerald-400 font-semibold shrink-0 ml-2">
                          [OK · RSSI -42dBm]
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Educational summary badge below tray */}
          <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
            <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white">Pourquoi cette cuve est révolutionnaire :</strong> Les parois métalliques du bac concentrent le champ radiofréquence à l’intérieur pour éviter de scanner par erreur les articles du client voisin, tout en garantissant une lecture à 100% même si les articles sont froissés ou empilés.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
