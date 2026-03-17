"use client";
import { motion } from "motion/react";

const marcas = [
    { name: "Ambev", logo: "https://logodownload.org/wp-content/uploads/2017/09/ambev-logo-1.png" },
    { name: "Heineken", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Heineken_logo.svg/1280px-Heineken_logo.svg.png" },
    { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" },
    { name: "Red Bull", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Logo_of_Red_bull.svg/1280px-Logo_of_Red_bull.svg.png" },
    { name: "Monster Energy", logo: "https://blog.logomyway.com/wp-content/uploads/2021/06/monster-logo-2-1.jpg" },
    { name: "Diageo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Diageo_-_logo_%28United_Kingdom%2C_1997%29.svg/1280px-Diageo_-_logo_%28United_Kingdom%2C_1997%29.svg.png" },
    { name: "Pernod Ricard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Pernod_Ricard_logo_2019.svg/1280px-Pernod_Ricard_logo_2019.svg.png" },
    { name: "Petropolis", logo: "https://gpexecucao.com.br/bridge-link/?link=https%3A%2F%2Fgpexecucao-library.s3-sa-east-1.amazonaws.com%2Fbaixa_Logo+GP_06042023163542.png" },
];

export default function Marcas() {
    return (
        <section className="py-20 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <span className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase">
                    Trabalhamos Com Grandes Marcas
                </span>
            </div>

            <div className="relative flex">
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

                <div className="relative flex overflow-hidden group">
                    {/* Gradientes laterais para suavizar as bordas */}
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }} // Move exatamente metade do conteúdo total
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex gap-20 items-center whitespace-nowrap px-10"
                    >
                        {/* Bloco 1 */}
                        {marcas.map((marca, index) => (
                            <img
                                key={`b1-${index}`}
                                src={marca.logo}
                                alt={marca.name}
                                className="h-9 w-auto grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer object-contain"
                            />
                        ))}

                        {/* Bloco 2 (Cópia exata para o loop infinito) */}
                        {marcas.map((marca, index) => (
                            <img
                                key={`b2-${index}`}
                                src={marca.logo}
                                alt={marca.name}
                                className="h-9 w-auto grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer object-contain"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}