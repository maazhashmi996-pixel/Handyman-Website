"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Microscope, Wrench, ArrowRight, Zap } from "lucide-react";

interface Step {
    id: string;
    title: string;
    price: string;
    desc: string;
    detail: string;
    icon: React.ReactNode;
    color: string;
    glow: string;
}

const steps: Step[] = [
    {
        id: "01",
        title: "Digital Consultation",
        price: "FREE",
        desc: "Initial discovery call to map your requirements.",
        detail: "Strategic analysis of your architectural goals, technical feasibility and system planning.",
        icon: <MessageSquare size={30} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />,
        color: "from-blue-600 via-cyan-500 to-blue-400",
        glow: "rgba(37,99,235,0.5)",
    },
    {
        id: "02",
        title: "Technical Inspection",
        price: "$149",
        desc: "On-site diagnostics with laser precision.",
        detail: "Structural analysis, site scanning and feasibility modeling for high-end execution.",
        icon: <Microscope size={30} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />,
        color: "from-orange-600 via-amber-500 to-orange-400",
        glow: "rgba(249,115,22,0.5)",
    },
    {
        id: "03",
        title: "Project Execution",
        price: "FIXED",
        desc: "Precision engineering implementation.",
        detail: "Full-scale development with high-grade materials and real-time progress monitoring.",
        icon: <Wrench size={30} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />,
        color: "from-purple-600 via-indigo-500 to-purple-400",
        glow: "rgba(147,51,234,0.5)",
    },
];

export default function UltraWorkflow() {
    return (
        <section className="relative py-24 md:py-36 px-6 bg-[#1e1b4b] overflow-hidden">

            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-fuchsia-600/40 blur-[140px] rounded-full"
                />
                {/* Electric Blue Blob */}
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-cyan-500/30 blur-[140px] rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 via-purple-900/40 to-[#1e1b4b]" />
            </div>
            <div
                className="absolute inset-0 opacity-[0.1] z-0 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 md:mb-28"
                >
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-2xl px-5 py-2.5 rounded-full border border-white/30 mb-6 shadow-2xl">
                        <Zap size={14} className="text-yellow-300 fill-yellow-300 animate-bounce" />
                        <span className="text-white tracking-[0.4em] uppercase text-[10px] font-black">Workflow Protocol</span>
                    </div>

                    <h2 className="text-5xl md:text-[85px] font-black text-white mt-6 tracking-tighter leading-none drop-shadow-2xl">
                        Intelligent <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-cyan-300">
                            Process.
                        </span>
                    </h2>
                </motion.div>

                {/* CARDS GRID */}
                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -20, scale: 1.02 }}
                            className="group relative h-[520px] rounded-[50px] backdrop-blur-3xl bg-white/10 border border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500"
                        >
                            <CardContent step={step} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CardContent({ step }: { step: Step }) {
    return (
        <>
            {/* Overlay Gradient - Making cards look more "Bright" on hover */}
            <div
                className={`absolute inset-0 opacity-20 group-hover:opacity-60 transition-opacity duration-700 bg-gradient-to-br ${step.color} blur-[100px]`}
            />

            <div className="relative z-10 p-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                    <span className="text-8xl font-black text-white/10 group-hover:text-white/30 transition-colors duration-500 tracking-tighter">
                        {step.id}
                    </span>
                    <div className={`bg-white text-indigo-950 px-5 py-2 rounded-full text-[10px] font-black tracking-widest shadow-xl`}>
                        {step.price}
                    </div>
                </div>

                <div className="space-y-6">
                    <div
                        style={{ boxShadow: `0 0 50px ${step.glow}` }}
                        className={`w-20 h-20 rounded-[30px] flex items-center justify-center bg-gradient-to-br ${step.color} border-2 border-white/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}
                    >
                        {step.icon}
                    </div>

                    <div>
                        <h3 className="text-3xl font-black text-white mb-4 tracking-tight group-hover:scale-105 transition-transform origin-left">
                            {step.title}
                        </h3>
                        <p className="text-white/80 text-sm font-bold mb-3 uppercase tracking-tighter">
                            {step.desc}
                        </p>
                        <p className="text-white/60 text-xs leading-relaxed group-hover:text-white transition-colors">
                            {step.detail}
                        </p>
                    </div>
                </div>

                <button className={`group/btn flex items-center justify-between bg-white text-indigo-900 py-4 px-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.2)]`}>
                    <span className="relative z-10">Start Step</span>
                    <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" strokeWidth={3} />
                </button>
            </div>

            <div className={`absolute inset-0 rounded-[50px] border-2 border-white/10 group-hover:border-white/40 transition-all duration-500`} />
        </>
    );
}