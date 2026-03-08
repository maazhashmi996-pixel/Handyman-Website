"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Droplets, Warehouse, TreePine, ShieldCheck, Zap } from "lucide-react";

const services = [
    {
        title: "Residential Estates",
        code: "STR-A1",
        icon: <Building2 size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
        color: "from-blue-600 via-cyan-500 to-emerald-400",
        shadow: "shadow-blue-500/40"
    },
    {
        title: "Aquatic Systems",
        code: "H2O-P5",
        icon: <Droplets size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
        img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2022",
        color: "from-indigo-600 via-blue-500 to-sky-400",
        shadow: "shadow-indigo-500/40"
    },
    {
        title: "Commercial Hubs",
        code: "CORP-X",
        icon: <ShieldCheck size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
        color: "from-fuchsia-600 via-purple-500 to-indigo-400",
        shadow: "shadow-fuchsia-500/40"
    },
    {
        title: "Garage Automation",
        code: "LOG-M9",
        icon: <Warehouse size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
        img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070",
        color: "from-orange-600 via-amber-500 to-yellow-400",
        shadow: "shadow-orange-500/40"
    },
    {
        title: "Landscape Design",
        code: "ENV-G2",
        icon: <TreePine size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
        img: "https://images.unsplash.com/photo-1558905612-ad6d19610f1b?q=80&w=2022",
        color: "from-emerald-600 via-green-500 to-lime-400",
        shadow: "shadow-emerald-500/40"
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
        /* BACKGROUND: Deep Electric Blue to Dark Teal Gradient */
        <section className="relative py-24 md:py-36 px-6 bg-[#000b2e] overflow-hidden min-h-screen">

            {/* VIBRANT MESH ANIMATION: Background ko maza denay k liye */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-blue-600/40 blur-[150px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/30 blur-[130px] rounded-full"
                />
            </div>

            {/* Bright Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.07] z-0 pointer-events-none"
                style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '50px 50px' }}
            />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-xl px-5 py-2.5 rounded-full border border-cyan-400/40 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                        <Zap size={14} className="text-cyan-300 fill-cyan-300 animate-pulse" />
                        <span className="text-cyan-100 uppercase tracking-[0.4em] text-[10px] font-black italic">
                            System Architecture
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-[85px] font-black text-white mt-4 tracking-tighter leading-[0.9]">
                        Advanced <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                            Engineering
                        </span>
                    </h2>

                    <p className="text-cyan-100/60 mt-8 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
                        Precision engineered systems combining <span className="text-white underline decoration-cyan-500/50 underline-offset-4 font-bold">modern architecture</span>,
                        automation and <span className="text-cyan-300 font-bold">intelligent infrastructure</span>.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((item, index) => {
                        const xInitial = isMobile ? 0 : (index % 2 === 0 ? -100 : 100);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: xInitial, scale: 0.9 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 60 }}
                                whileHover={{ y: -15, scale: 1.02 }}
                                className="group relative rounded-[50px] overflow-hidden backdrop-blur-3xl bg-white/[0.03] border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.4)] min-h-[450px]"
                            >
                                {/* Image with Vibrant Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-30 contrast-[130%] saturate-[150%] group-hover:scale-125 group-hover:opacity-50 transition duration-[1.5s] ease-out"
                                    />
                                    {/* Hover Color Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />
                                </div>

                                {/* Deep Gradient Bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#000b2e] via-[#000b2e]/40 to-transparent z-10" />

                                {/* Card Content */}
                                <div className="relative z-20 p-10 flex flex-col justify-end h-full min-h-[450px]">
                                    <motion.div
                                        whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1 }}
                                        className={`w-20 h-20 rounded-[32px] flex items-center justify-center mb-10 bg-gradient-to-br ${item.color} shadow-[0_15px_40px_-5px_rgba(0,0,0,0.5)] border-2 border-white/30 transition-all duration-500`}
                                    >
                                        {item.icon}
                                    </motion.div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`h-[2px] w-12 bg-gradient-to-r ${item.color} rounded-full`}></div>
                                            <span className="text-[11px] text-cyan-200/50 font-black tracking-[0.4em] uppercase">
                                                {item.code}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-cyan-100/50 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                                            Advanced structural design with automation and
                                            high-performance systems for modern environments.
                                        </p>
                                    </div>
                                </div>

                                {/* Interactive Glowing Rim */}
                                <div className={`absolute inset-0 rounded-[50px] border-2 border-transparent group-hover:border-cyan-400/30 transition-all duration-700 z-30`} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer Tag */}
                <div className="text-center mt-24">
                    <motion.span
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="px-10 py-4 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-[10px] font-black tracking-[0.6em] uppercase backdrop-blur-md"
                    >
                        System Architecture Mapping
                    </motion.span>
                </div>
            </div>
        </section>
    );
}