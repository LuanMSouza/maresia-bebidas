import { MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-16 md:pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">

                    {/* Coluna 1: Marca e Bio */}
                    <div className="flex flex-col items-start">
                        <h2 className="text-xl md:text-2xl font-black text-white italic mb-6 tracking-tighter">
                            MARESIA<span className="text-maresia-blue">BEBIDAS</span>
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Desde 2007 servindo a Baixada Santista com excelência logística e o melhor preço do mercado.
                        </p>
                    </div>

                    {/* Coluna 2: Unidade Affonso Penna */}
                    <div className="group">
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2 group-hover:text-maresia-blue transition-colors">
                            <MapPin size={16} className="text-maresia-blue" /> Adega (Varejo)
                        </h3>
                        <address className="not-italic text-slate-400 text-sm space-y-2">
                            <p>Av. Affonso Penna, 589</p>
                            <p>Estuário, Santos - SP</p>
                            <p className="pt-2 text-white font-medium italic border-l-2 border-maresia-blue/30 pl-3">
                                Seg a Sáb: 07:30h às 19h
                            </p>
                        </address>
                    </div>

                    {/* Coluna 3: Unidade Macuco */}
                    <div className="group">
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2 group-hover:text-maresia-blue transition-colors">
                            <MapPin size={16} className="text-maresia-blue" /> Distribuidora (B2B)
                        </h3>
                        <address className="not-italic text-slate-400 text-sm space-y-2">
                            <p>Rua Conselheiro Rodrigues Alves, 206</p>
                            <p>Macuco, Santos - SP</p>
                            <p className="pt-2 text-white font-medium italic border-l-2 border-maresia-blue/30 pl-3">
                                Seg a Sex: Comercial
                            </p>
                        </address>
                    </div>

                    {/* Coluna 4: Contato Rápido */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Fale Conosco</h3>
                        <div className="space-y-4">
                            <a href="tel:13997739347" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-maresia-blue/10 transition-colors">
                                    <Phone size={14} className="text-maresia-blue" />
                                </div>
                                <span className="text-sm">(13) 99773-9347</span>
                            </a>
                            <a href="tel:13991868515" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-maresia-blue/10 transition-colors">
                                    <Phone size={14} className="text-maresia-blue" />
                                </div>
                                <span className="text-sm">(13) 99186-8515</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Rodapé Final */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
                        © 2026 MARESIA BEBIDAS — TODOS OS DIREITOS RESERVADOS
                    </p>
                    <a
                        href="https://dvls.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 text-[9px] md:text-[12px] uppercase tracking-[0.2em] hover:-translate-y-0.5 transition-transform"
                    >
                        <span>Powered by</span>
                        <span className="text-white font-bold hover:text-maresia-blue transition-colors underline underline-offset-4 decoration-maresia-blue/30">
                            DV<span className="text-purple-400">L</span>S
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
