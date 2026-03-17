"use client";
import { motion } from "motion/react"

export default function Hero() {
    return (
        <div className="flex items-center justify-center flex-col min-h-[85vh] md:min-h-[70vh] text-center p-6 md:p-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Maresia Bebidas",
                        "image": "https://maresia-bebidas.com.br/logo.png",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Av. Affonso Penna, 589",
                            "addressLocality": "Santos",
                            "addressRegion": "SP",
                            "postalCode": "11020-001",
                            "addressCountry": "BR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": -23.9615,
                            "longitude": -46.3150
                        },
                        "url": "https://maresia-bebidas.com.br",
                        "telephone": "+5513991868515"
                    }),
                }}
            />
            <motion.img
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                src="/logo.png"
                // Ajuste de escala: menor no mobile para não ocupar a tela toda
                className="w-72 scale-140 md:w-96 lg:w-96 mb-6 md:mb-8 drop-shadow-[0_0_20px_rgba(56,182,255,0.4)]"
            />

            <div className="flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    // Título fluido: text-4xl (mobile) -> 6xl (tablet) -> 8xl (desktop)
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-maresia-blue font-black tracking-tighter uppercase leading-[0.9]">
                    Maresia <br className="block md:hidden" /> Bebidas
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    // Texto menor no mobile para manter a elegância
                    className="text-slate-400 text-sm md:text-lg lg:text-xl mt-6 max-w-[280px] sm:max-w-md md:max-w-2xl leading-relaxed">
                    Referência em Santos: <span className="text-white font-semibold">Logística pesada</span> para grandes eventos e
                    uma <span className="text-white font-semibold block md:inline">loja completa</span> aberta ao público.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: .8 }}
                    // No mobile, botões ocupam a largura total (flex-col)
                    className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto justify-center px-4 sm:px-0">
                    <button
                        onClick={() => window.open('https://wa.me/5513991868515?text=Ol%C3%A1!', "_blank")}
                        className="w-full sm:w-auto cursor-pointer px-8 py-4 bg-maresia-blue text-maresia-dark font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all text-sm md:text-base">
                        Solicitar entrega (Atacado)
                    </button>
                    <button
                        onClick={() => window.open("https://maps.google.com", "_blank")}
                        className="w-full sm:w-auto cursor-pointer px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-white/5 active:scale-95 transition-all text-sm md:text-base">
                        Visite nossa Loja
                    </button>
                </motion.div>
            </div>
        </div>
    )
}