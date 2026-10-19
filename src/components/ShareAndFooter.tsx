import React, { useState } from 'react';
import { Copy, Check, Share2, Linkedin, Twitter, Download, ExternalLink, ArrowUp } from 'lucide-react';

interface ShareAndFooterProps {
  shareModalOpen?: boolean;
  onCloseShareModal?: () => void;
}

export const ShareAndFooter: React.FC<ShareAndFooterProps> = () => {
  const [copied, setCopied] = useState(false);
  const [downloadSummaryOpen, setDownloadSummaryOpen] = useState(false);
  const articleUrl = typeof window !== 'undefined' ? window.location.href : 'https://chronique-tech-decathlon.com';
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(articleUrl)}`;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(articleUrl);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareLinkedIn = () => {
    const text = encodeURIComponent("Enquête tech passionnante : Comment la puce RFID a révolutionné Décathlon et le retail mondial.");
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}&summary=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent("Comment Décathlon a fait disparaître les files d'attente grâce aux puces RFID passives. Analyse complète :");
    const url = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(articleUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Interactive QR Code & Sharing Section */}
      <section id="partage" className="py-20 bg-slate-900/60 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* QR Code Container */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="p-4 bg-white rounded-2xl shadow-xl border-4 border-cyan-400/30 group">
                  <img
                    src={qrApiUrl}
                    alt="QR Code pour partager cette chronique tech sur mobile"
                    className="w-40 h-40 object-contain rounded-lg group-hover:scale-105 transition-transform"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback SVG QR pattern if external API has network latency
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallbackSvg = document.createElement('div');
                        fallbackSvg.className = 'w-40 h-40 flex flex-col items-center justify-center bg-slate-900 text-cyan-400 p-2 text-center rounded-lg';
                        fallbackSvg.innerHTML = `
                          <div class="text-xs font-mono font-bold mb-1">SCAN ME</div>
                          <div class="text-[10px] text-slate-300">chronique-tech-decathlon.com</div>
                        `;
                        parent.appendChild(fallbackSvg);
                      }
                    }}
                  />
                </div>
                
                <p className="text-xs font-semibold text-slate-300 mt-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Scannez pour partager cette chronique</span>
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Compatible appareil photo iOS & Android
                </p>
              </div>

              {/* Share Controls & Action Buttons */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                    Diffusion & Relais
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Vous avez apprécié cette enquête retail tech ?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    Partagez cette analyse avec vos collègues, équipes supply chain, directeurs retail et passionnés d'innovation IoT.
                  </p>
                </div>

                {/* Link Copy Box */}
                <div className="flex items-center gap-2 p-1.5 bg-slate-900 rounded-xl border border-slate-800">
                  <input
                    type="text"
                    readOnly
                    value={articleUrl}
                    className="bg-transparent text-xs text-slate-300 px-3 py-1.5 focus:outline-none w-full font-mono truncate select-all"
                  />
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap active:scale-95 shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-slate-950" />
                        <span>Copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copier le lien</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Social Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    onClick={handleShareLinkedIn}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors flex items-center gap-2 active:scale-95"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>Partager sur LinkedIn</span>
                  </button>

                  <button
                    onClick={handleShareTwitter}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors flex items-center gap-2 active:scale-95"
                  >
                    <Twitter className="w-4 h-4 text-cyan-400" />
                    <span>Partager sur X</span>
                  </button>

                  <button
                    onClick={() => setDownloadSummaryOpen(true)}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-900 border border-slate-800 rounded-lg transition-colors flex items-center gap-2 active:scale-95"
                  >
                    <Download className="w-4 h-4 text-slate-400" />
                    <span>Fiche mémo PDF</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Summary Modal */}
      {downloadSummaryOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h4 className="text-base font-bold text-white">Fiche Synthèse : RFID Décathlon</h4>
              <button
                onClick={() => setDownloadSummaryOpen(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>
            <div className="text-xs text-slate-300 space-y-2.5 max-h-72 overflow-y-auto pr-1">
              <p><strong className="text-cyan-400">1. Technologie :</strong> Puces RFID UHF passives (norme EPCglobal Gen 2) cousues dans 100% des articles des marques passion.</p>
              <p><strong className="text-cyan-400">2. Caisse :</strong> Bac blindé anti-fuite RF capable d'identifier un panier entier en moins de 100ms sans manipulation.</p>
              <p><strong className="text-cyan-400">3. Logistique :</strong> Tunnels de lecture automatique sur convoyeurs scannant les cartons scellés à 40 km/h.</p>
              <p><strong className="text-cyan-400">4. Précision stock :</strong> Taux de fiabilité monté à 99,5%, permettant le Click & Collect garanti en 1 heure.</p>
              <p><strong className="text-cyan-400">5. Gains :</strong> Inventaires réalisés 10x plus vite et baisse de 40% de la démarque inconnue.</p>
            </div>
            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                onClick={() => setDownloadSummaryOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                Fermer la synthèse
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Master Editorial Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
            <div className="md:col-span-5 space-y-3">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm bg-cyan-400 inline-block" />
                <span>CHRONIQUE TECH · RETAIL & IOT</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Série d’enquêtes indépendantes sur les grandes ruptures technologiques dans le commerce, la supply chain et les objets connectés.
              </p>
              <p className="text-[11px] text-slate-500">
                Sources documentaires : Rapports GS1 France, publications Décathlon Technology, études de cas Zebra Technologies & Avery Dennison.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                Sommaire du dossier
              </span>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#accueil" className="hover:text-cyan-400 transition-colors">Introduction & Genèse</a></li>
                <li><a href="#technologie" className="hover:text-cyan-400 transition-colors">La technologie UHF passive</a></li>
                <li><a href="#simulateur" className="hover:text-cyan-400 transition-colors">Simulateur de caisse</a></li>
                <li><a href="#magasin" className="hover:text-cyan-400 transition-colors">Fiabilité des stocks omnicanaux</a></li>
                <li><a href="#logistique" className="hover:text-cyan-400 transition-colors">Logistique et convoyeurs RFID</a></li>
                <li><a href="#chiffres" className="hover:text-cyan-400 transition-colors">Indicateurs clés et ROI</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                À propos de l'enquête
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ce site web vitrine est une étude de cas pédagogique et technique dédiée à l'un des déploiements IoT les plus réussis de l'histoire du commerce mondial.
              </p>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors flex items-center gap-2"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Haut de page</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© 2026 Chronique Tech — Analyse indépendante consacrée à l'innovation retail.</p>
            <p>Conçu pour une expérience interactive fluide sur tous les écrans.</p>
          </div>

        </div>
      </footer>
    </>
  );
};
