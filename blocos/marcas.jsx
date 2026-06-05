import Image from "next/image";

const marcas = [
    { name: "Ambev", logo: "/logos/Ambev.webp" },
    { name: "Heineken", logo: "/logos/Heineken.webp" },
    { name: "Coca-Cola", logo: "/logos/Coca-cola.webp" },
    { name: "Red Bull", logo: "/logos/Redbull.webp" },
    { name: "Monster Energy", logo: "/logos/Monster.webp" },
    { name: "Diageo", logo: "/logos/Diageo.webp" },
    { name: "Pernod Ricard", logo: "/logos/Pernod-Ricard.webp" },
    { name: "Grupo Petrópolis", logo: "/logos/Grupo-Petrópolis.webp" },
];

export default function Marcas() {
    return (
        <section className="py-20 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <span className="text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                    Trabalhamos Com Grandes Marcas
                </span>
            </div>

            <div className="relative flex">
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

                <div className="relative flex overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

                    <div
                        className="flex gap-20 items-center whitespace-nowrap px-10"
                        style={{ animation: "marquee 30s linear infinite" }}
                    >
                        {marcas.map((marca, index) => (
                            <div key={`b1-${index}`} className="relative h-9 w-36 flex-shrink-0">
                                <Image
                                    src={marca.logo}
                                    alt={marca.name}
                                    fill
                                    sizes="144px"
                                    loading="lazy"
                                    className="object-contain grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                                />
                            </div>
                        ))}
                        {marcas.map((marca, index) => (
                            <div key={`b2-${index}`} className="relative h-9 w-36 flex-shrink-0" aria-hidden="true">
                                <Image
                                    src={marca.logo}
                                    alt=""
                                    fill
                                    sizes="144px"
                                    loading="lazy"
                                    className="object-contain grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
