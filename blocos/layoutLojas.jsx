"use client";
import { motion } from "motion/react"
import { useEffect, useState } from "react";

export default function Lojas() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkStatus = () => {
            const agora = new Date();
            const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda...
            const hora = agora.getHours();
            const minutos = agora.getMinutes();
            const horarioAtual = hora + minutos / 60;

            const diaUtil = diaSemana >= 1 && diaSemana <= 6;
            const horarioAbrir = 7.5; // 07:30
            const horarioFechar = 19;  // 19:00

            if (diaUtil && horarioAtual >= horarioAbrir && horarioAtual < horarioFechar) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000);
        return () => clearInterval(interval);
    }, []);


    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-4 md:p-6 max-w-7xl mx-auto mt-8 md:mt-16">

            {/* CARD 1: LOGÍSTICA B2B */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="relative h-[500px] md:h-[450px] lg:h-[480px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group border border-white/5 bg-black shadow-2xl">
                <img
                    src="/caminhão.jpeg"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-[1.5s] ease-in-out"
                    alt="Frota Maresia"
                />

                <div className="relative h-full flex flex-col justify-end p-6 md:p-8 lg:p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <span className="text-maresia-blue text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2">
                        Operação Logística B2B
                    </span>

                    {/* AQUI A MÁGICA: text-2xl base, xl no tablet/laptop pequeno, 4xl só em telas grandes */}
                    <h3 className="text-2xl md:text-xl lg:text-4xl font-bold text-white leading-[1.1] tracking-tight">
                        LOGÍSTICA <br className="hidden lg:block" /> DE CARGA PESADA
                    </h3>

                    <p className="text-slate-400 mt-3 text-sm md:text-xs lg:text-lg max-w-sm leading-relaxed">
                        A força por trás dos grandes estoques. Atendimento exclusivo para <span className="text-white font-medium">CNPJ</span> com frota própria.
                    </p>

                    <div className="mt-6 flex gap-4">
                        <button
                            onClick={() => window.open('https://wa.me/5513991868515', "_blank")}
                            className="cursor-pointer text-xs lg:text-sm font-bold text-white border-b-2 border-maresia-blue pb-1 hover:text-maresia-blue transition-all">
                            Solicitar um vendedor →
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* CARD 2: ATACADO VAREJO */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative h-[500px] md:h-[450px] lg:h-[480px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group border border-white/5 bg-[#0D1117] shadow-2xl">

                <div className="absolute inset-0 bg-gradient-to-br from-maresia-blue/10 via-transparent to-transparent opacity-50" />

                <div className="relative h-full flex flex-col justify-end p-6 md:p-8 lg:p-10">
                    <span className="text-maresia-blue text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2">
                        Atacado Direto ao Público
                    </span>

                    <h3 className="text-2xl md:text-xl lg:text-4xl font-bold text-white leading-[1.1] tracking-tight">
                        O PREÇO DO ATACADO, <br />
                        <span className="text-maresia-blue">DISPONÍVEL PARA VOCÊ.</span>
                    </h3>

                    <p className="text-slate-400 mt-3 text-sm md:text-xs lg:text-lg max-w-sm leading-relaxed">
                        A mesma tabela dos grandes comércios, agora no varejo. Retire sua bebida trincando ou garanta o volume.
                    </p>

                    <div className="mt-6 flex items-center gap-4 lg:gap-8 border-t border-white/5 pt-5">
                        <div className="flex flex-col">
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg lg:text-2xl font-bold text-white italic">1x</span>
                                <span className="text-[8px] lg:text-[10px] text-maresia-blue font-bold uppercase">Gelada</span>
                            </div>
                            <span className="text-[8px] lg:text-[10px] text-slate-500 uppercase leading-none">Varejo</span>
                        </div>

                        <div className="w-px h-6 lg:h-10 bg-white/10" />

                        <div className="flex flex-col">
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg lg:text-2xl font-bold text-white italic">∞</span>
                                <span className="text-[8px] lg:text-[10px] text-green-500 font-bold uppercase">Melhor Preço</span>
                            </div>
                            <span className="text-[8px] lg:text-[10px] text-slate-500 uppercase leading-none">Atacado</span>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-10 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                        <div className="flex items-center gap-2">


                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full animate-pulse ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
                                <span className={`text-[13px] rounded-full animate-pulse font-bold uppercase tracking-widest whitespace-nowrap ${isOpen ? 'text-green-500' : 'text-red-500'}`}>
                                    {isOpen ? "Loja Aberta agora" : "Loja Fechada agora"}
                                </span>
                            </div>


                        </div>
                        <span className="text-[9px] text-slate-600 font-mono tracking-tighter uppercase">
                            Est. 2007 — Santos/SP
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}