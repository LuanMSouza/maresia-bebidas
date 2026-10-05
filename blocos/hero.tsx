import Image from "next/image";

export default function Hero() {
    return (
        <div data-secao="Início" className="flex items-center justify-center flex-col min-h-[85vh] md:min-h-[70vh] text-center p-6 md:p-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    // as duas lojas (as mesmas do rodapé), cada uma com o seu número: atacado
                    // (distribuidora) 99186-8515, varejo (adega) 99773-9347. Horário só da adega: o da
                    // distribuidora no site é "comercial", sem hora exata, então fica de fora
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "@id": "https://maresia-bebidas.com/#empresa",
                                "name": "Maresia Bebidas",
                                "url": "https://maresia-bebidas.com",
                                "logo": "https://maresia-bebidas.com/icon.png",
                                "foundingDate": "2007",
                                "areaServed": "Baixada Santista",
                                "contactPoint": [
                                    { "@type": "ContactPoint", "telephone": "+5513991868515", "contactType": "sales", "name": "Atacado (distribuidora)", "availableLanguage": "Portuguese" },
                                    { "@type": "ContactPoint", "telephone": "+5513997739347", "contactType": "sales", "name": "Varejo (adega)", "availableLanguage": "Portuguese" }
                                ]
                            },
                            {
                                "@type": "LiquorStore",
                                "@id": "https://maresia-bebidas.com/#adega",
                                "name": "Maresia Bebidas - Adega (varejo)",
                                "parentOrganization": { "@id": "https://maresia-bebidas.com/#empresa" },
                                "image": "https://maresia-bebidas.com/opengraph-image.jpg",
                                "url": "https://maresia-bebidas.com",
                                "telephone": "+5513997739347",
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
                                "openingHoursSpecification": [{
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    "opens": "07:30",
                                    "closes": "19:00"
                                }]
                            },
                            {
                                "@type": "WholesaleStore",
                                "@id": "https://maresia-bebidas.com/#distribuidora",
                                "name": "Maresia Bebidas - Distribuidora (atacado)",
                                "parentOrganization": { "@id": "https://maresia-bebidas.com/#empresa" },
                                "image": "https://maresia-bebidas.com/opengraph-image.jpg",
                                "url": "https://maresia-bebidas.com",
                                "telephone": "+5513991868515",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Rua Conselheiro Rodrigues Alves, 206",
                                    "addressLocality": "Santos",
                                    "addressRegion": "SP",
                                    "addressCountry": "BR"
                                }
                            }
                        ]
                    }),
                }}
            />

            <div
                className="w-72 scale-140 md:w-96 lg:w-96 mb-6 md:mb-8 drop-shadow-[0_0_20px_rgba(56,182,255,0.4)]"
                style={{ animation: "fade-in-down 0.8s ease both" }}
            >
                <Image
                    src="/logo.png"
                    alt="Maresia Bebidas"
                    width={384}
                    height={192}
                    priority
                    className="w-full h-auto"
                />
            </div>

            <div className="flex flex-col items-center">
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-maresia-blue font-black tracking-tighter uppercase leading-[0.9]"
                    style={{ animation: "fade-in 0.5s ease 0.25s both" }}
                >
                    Maresia <br className="block md:hidden" /> Bebidas
                </h1>

                <p
                    className="text-slate-400 text-sm md:text-lg lg:text-xl mt-6 max-w-[280px] sm:max-w-md md:max-w-2xl leading-relaxed"
                    style={{ animation: "fade-in 0.6s ease 0.4s both" }}
                >
                    Referência em Santos: <span className="text-white font-semibold">Logística pesada</span> para grandes eventos e
                    uma <span className="text-white font-semibold block md:inline">loja completa</span> aberta ao público.
                </p>

                <div
                    className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto justify-center px-4 sm:px-0"
                    style={{ animation: "fade-in 0.6s ease 0.55s both" }}
                >
                    <a
                        href="https://wa.me/5513991868515?text=Ol%C3%A1!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-maresia-blue text-maresia-dark font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all text-sm md:text-base text-center"
                    >
                        Solicitar entrega (Atacado)
                    </a>
                    <a
                        href="https://maps.google.com/?q=Av.+Affonso+Penna,+589,+Santos,+SP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-white/5 active:scale-95 transition-all text-sm md:text-base text-center"
                    >
                        Visite nossa Loja
                    </a>
                </div>
            </div>
        </div>
    );
}
