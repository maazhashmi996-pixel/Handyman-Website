"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Droplets, Warehouse, TreePine, ShieldCheck, Zap, Construction, ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Residential Estates",
        code: "STR-A1",
        icon: <Building2 size={28} />,
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
        accent: "#FBBF24"
    },
    {
        title: "Aquatic Systems",
        code: "H2O-P5",
        icon: <Droplets size={28} />,
        img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2022",
        accent: "#FBBF24"
    },
    {
        title: "Commercial Hubs",
        code: "CORP-X",
        icon: <ShieldCheck size={28} />,
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
        accent: "#FBBF24"
    },
    {
        title: "Garage Automation",
        code: "LOG-M9",
        icon: <Warehouse size={28} />,
        img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070",
        accent: "#FBBF24"
    },
    {
        title: "Landscape Design",
        code: "ENV-G2",
        icon: <TreePine size={28} />,
        img: "https://images.unsplash.com/photo-1558905612-ad6d19610f1b?q=80&w=2022",
        accent: "#FBBF24"
    },
];

export default function ServiceGrid() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="relative py-24 md:py-40 px-6 bg-[#0f0f0f] overflow-hidden min-h-screen font-sans">

            {/* VIBRANT BACKGROUND ELEMENTS */}
            <div className="absolute inset-0 z-0">
                {/* Sharp White Grid */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
                />

                {/* Yellow "Laser" Beams */}
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1], x: [-100, 100, -100] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-0 left-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent rotate-45 blur-sm"
                />

                {/* Dynamic White Glow */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[2px] w-12 bg-yellow-500"></span>
                            <span className="text-yellow-500 uppercase tracking-[0.5em] text-[12px] font-black">
                                Construction Portfolio
                            </span>
                        </div>
                        <h2 className="text-6xl md:text-[100px] font-black text-white tracking-tighter leading-[0.85]">
                            ELITE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                                STRUCTURES.
                            </span>
                        </h2>
                    </div>
                    <p className="text-zinc-400 max-w-sm text-lg border-l-2 border-yellow-500 pl-6 py-2 italic font-medium">
                        Redefining the boundaries of modern infrastructure through high-fidelity engineering.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((item, index) => {
                        const xInitial = isMobile ? 0 : (index % 2 === 0 ? -50 : 50);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: xInitial }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative h-[500px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
                            >
                                {/* High-Contrast Image Handler */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                                    />
                                    {/* Bold Vignette */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                                </div>

                                {/* Content Layer */}
                                <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                                    {/* Top Row: Code & Icon */}
                                    <div className="flex justify-between items-start">
                                        <div className="bg-white text-black p-4 rounded-2xl group-hover:bg-yellow-500 transition-colors duration-500">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-white font-black text-xl tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">
                                                {item.code}
                                            </span>
                                            <div className="h-1 w-0 group-hover:w-full bg-yellow-500 transition-all duration-500" />
                                        </div>
                                    </div>

                                    {/* Bottom Row: Text & Action */}
                                    <div className="space-y-4">
                                        <h3 className="text-4xl font-black text-white leading-tight">
                                            {item.title.split(' ')[0]} <br />
                                            <span className="text-yellow-500">{item.title.split(' ')[1]}</span>
                                        </h3>
                                        <p className="text-zinc-400 text-sm font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            Standardized high-end execution with aerospace grade materials and precision monitoring.
                                        </p>
                                        <div className="pt-4 flex items-center gap-4 text-white font-bold text-xs uppercase tracking-[0.2em]">
                                            <span>View Specifications</span>
                                            <div className="bg-white/10 p-2 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sharp Outline on Hover */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/50 rounded-3xl transition-all duration-500 z-30 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Dynamic Footer Tag */}
                <div className="mt-32 flex flex-col items-center">
                    <div className="w-px h-24 bg-gradient-to-b from-yellow-500 to-transparent mb-8" />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="group cursor-pointer relative"
                    >
                        <div className="absolute inset-0 bg-yellow-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <span className="relative px-12 py-5 rounded-full border border-white/10 bg-black text-white text-[12px] font-black tracking-[0.8em] uppercase block hover:border-yellow-500 transition-colors">
                            Explore All Systems
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}