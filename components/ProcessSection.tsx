"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Microscope, Wrench, ArrowRight, Zap, Construction } from "lucide-react";

interface Step {
    id: string;
    title: string;
    price: string;
    desc: string;
    detail: string;
    icon: React.ReactNode;
    color: string;
    accent: string;
}

const steps: Step[] = [
    {
        id: "01",
        title: "Digital Consultation",
        price: "FREE",
        desc: "Initial discovery call to map your requirements.",
        detail: "Strategic analysis of your architectural goals, technical feasibility and system planning.",
        icon: <MessageSquare size={32} strokeWidth={2.5} />,
        color: "from-zinc-800 to-zinc-900",
        accent: "#FBBF24", // Safety Yellow
    },
    {
        id: "02",
        title: "Technical Inspection",
        price: "$149",
        desc: "On-site diagnostics with laser precision.",
        detail: "Structural analysis, site scanning and feasibility modeling for high-end execution.",
        icon: <Microscope size={32} strokeWidth={2.5} />,
        color: "from-zinc-800 to-zinc-900",
        accent: "#FBBF24",
    },
    {
        id: "03",
        title: "Project Execution",
        price: "FIXED",
        desc: "Precision engineering implementation.",
        detail: "Full-scale development with high-grade materials and real-time progress monitoring.",
        icon: <Wrench size={32} strokeWidth={2.5} />,
        color: "from-zinc-800 to-zinc-900",
        accent: "#FBBF24",
    },
];

export default function UltraWorkflow() {
    return (
        <section className="relative py-24 md:py-40 px-6 bg-[#0a0a0a] overflow-hidden font-sans">

            {/* Premium Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Charcoal Texture */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")`,
                    }}
                />
                {/* Yellow Ambient Glow */}
                <motion.div
                    animate={{
                        opacity: [0.1, 0.15, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-24"
                >
                    <div className="inline-flex items-center gap-3 bg-zinc-900 border border-yellow-500/30 px-6 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                        <Construction size={16} className="text-yellow-500" />
                        <span className="text-yellow-500 tracking-[0.3em] uppercase text-[11px] font-bold">
                            Operational Protocol
                        </span>
                    </div>

                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
                        PREMIUM <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-600">
                            WORKFLOW.
                        </span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl text-lg font-medium">
                        Standardized engineering excellence delivered through a meticulous three-stage deployment process.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group relative"
                        >
                            <div className="relative h-full min-h-[540px] p-1 bg-gradient-to-b from-zinc-700/50 to-zinc-900/50 rounded-[40px] overflow-hidden transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">

                                <div className="relative h-full w-full bg-[#121212] rounded-[38px] p-10 flex flex-col justify-between overflow-hidden">

                                    {/* Hover Yellow Gradient Reveal */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-yellow-500" />

                                    {/* Card Header */}
                                    <div className="flex justify-between items-start relative z-10">
                                        <span className="text-7xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors duration-500 italic">
                                            {step.id}
                                        </span>
                                        <div className="bg-yellow-500 text-black px-4 py-1.5 rounded-lg text-[11px] font-black tracking-tighter shadow-lg shadow-yellow-500/20">
                                            {step.price}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="relative z-10 space-y-6">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center bg-zinc-900 border border-zinc-700 text-yellow-500 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)] transition-all duration-500"
                                        >
                                            {step.icon}
                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-yellow-500 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-yellow-500/80 text-[10px] font-black uppercase tracking-[0.15em] mb-4">
                                                {step.desc}
                                            </p>
                                            <p className="text-zinc-400 text-sm leading-relaxed font-medium group-hover:text-zinc-300">
                                                {step.detail}
                                            </p>
                                        </div>

                                        {/* Action Button */}
                                        <button className="w-full mt-4 flex items-center justify-between bg-zinc-800 text-white group-hover:bg-yellow-500 group-hover:text-black p-5 rounded-2xl transition-all duration-300 font-bold uppercase text-[11px] tracking-widest border border-zinc-700 group-hover:border-yellow-400">
                                            <span>Initiate Phase</span>
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>

                                    {/* Background Decor */}
                                    <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                                        <Zap size={200} fill="currentColor" className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
        </section>
    );
}