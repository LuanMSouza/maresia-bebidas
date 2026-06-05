import { Truck, ThermometerSnowflake, BadgePercent, Clock } from "lucide-react";

const diferenciais = [
    {
        title: "Logística Própria",
        description: "Frota dedicada para garantir que seu estoque nunca fique vazio. Entrega rápida em toda a Baixada.",
        icon: <Truck className="w-8 h-8 text-maresia-blue" />,
    },
    {
        title: "Bebida Trincando",
        description: "Da nossa loja para sua mão na temperatura ideal.",
        icon: <ThermometerSnowflake className="w-8 h-8 text-blue-400" />,
    },
    {
        title: "Preço de Carga",
        description: "Negociação direta com as maiores indústrias. Preço de atacado disponível para todos.",
        icon: <BadgePercent className="w-8 h-8 text-green-500" />,
    },
    {
        title: "Pronta Entrega",
        description: "Estoque massivo para eventos de qualquer porte.",
        icon: <Clock className="w-8 h-8 text-slate-400" />,
    },
];

export default function Diferenciais() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-maresia-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-maresia-blue text-xs font-bold tracking-[0.3em] uppercase">
                        Por que escolher a Maresia?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
                        EXCELÊNCIA EM <br /> CADA DETALHE.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {diferenciais.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 group-hover:bg-maresia-blue/10 group-hover:scale-110 transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
