"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Droplets, Warehouse, TreePine, ShieldCheck, ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Residential Estates",
        code: "STR-A1",
        icon: <Building2 size={28} />,
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
    },
    {
        title: "Aquatic Systems",
        code: "H2O-P5",
        icon: <Droplets size={28} />,
        img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2022",
    },
    {
        title: "Commercial Hubs",
        code: "CORP-X",
        icon: <ShieldCheck size={28} />,
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    },
    {
        title: "Garage Automation",
        code: "LOG-M9",
        icon: <Warehouse size={28} />,
        img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070",
    },
    {
        title: "Landscape Design",
        code: "ENV-G2",
        icon: <TreePine size={28} />,
        img: "/01.jpg",
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
        <section className="relative py-24 md:py-32 px-6 bg-white overflow-hidden min-h-screen">

            {/* VIBRANT BACKGROUND ELEMENTS (Subtle Yellow Grid) */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: `radial-gradient(#eab308 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
                />
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-yellow-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-[2px] w-12 bg-yellow-500"></span>
                            <span className="text-yellow-600 uppercase tracking-[0.4em] text-[11px] font-black">
                                Service Portfolio
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                            <span className="text-yellow-500">ELITE</span> <br />
                            <span className="text-black">STRUCTURES.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 max-w-sm text-lg border-l-4 border-yellow-500 pl-6 py-2 font-medium">
                        High-fidelity maintenance and engineering for sophisticated estates.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="group relative h-[550px] rounded-[3rem] overflow-hidden bg-zinc-100 border border-zinc-200 shadow-xl"
                        >
                            {/* Image Layer - COLORFUL VERSION */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-all duration-700 opacity-100"
                                />
                                {/* Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />
                            </div>

                            {/* Content Layer */}
                            <div className="relative z-20 h-full p-10 flex flex-col justify-between">
                                {/* Top Row */}
                                <div className="flex justify-between items-start">
                                    <div className="bg-yellow-500 text-black p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <span className="text-white font-black text-xl tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity">
                                        {item.code}
                                    </span>
                                </div>

                                {/* Bottom Row */}
                                <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-4xl font-black text-white leading-tight">
                                        {item.title.split(' ')[0]} <br />
                                        <span className="text-yellow-500">{item.title.split(' ')[1]}</span>
                                    </h3>
                                    <p className="text-zinc-200 text-sm font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        Precision-led execution with premium materials and monitoring.
                                    </p>
                                    <div className="pt-4 flex items-center gap-4 text-white font-bold text-xs uppercase tracking-[0.2em]">
                                        <span className="group-hover:text-yellow-500 transition-colors">Details</span>
                                        <div className="bg-white/20 p-2 rounded-full group-hover:bg-yellow-500 group-hover:text-black transition-all">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Action */}
                <div className="mt-24 flex flex-col items-center">
                    <div className="w-[2px] h-20 bg-gradient-to-b from-yellow-500 to-transparent mb-10" />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black text-white px-14 py-6 rounded-full font-black text-[12px] tracking-[0.6em] uppercase shadow-2xl hover:bg-yellow-500 hover:text-black transition-all"
                    >
                        View All Systems
                    </motion.button>
                </div>
            </div>
        </section>
    );
}