"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Microscope, Wrench, ArrowRight, Construction } from "lucide-react";

interface Step {
    id: string;
    title: string;
    price: string;
    desc: string;
    detail: string;
    icon: React.ReactNode;
}

const steps: Step[] = [
    {
        id: "01",
        title: "Digital Consultation",
        price: "FREE",
        desc: "Initial discovery call to map your requirements.",
        detail: "Strategic analysis of your architectural goals, technical feasibility and system planning.",
        icon: <MessageSquare size={32} strokeWidth={2.5} />,
    },
    {
        id: "02",
        title: "Technical Inspection",
        price: "$149",
        desc: "On-site diagnostics with laser precision.",
        detail: "Structural analysis, site scanning and feasibility modeling for high-end execution.",
        icon: <Microscope size={32} strokeWidth={2.5} />,
    },
    {
        id: "03",
        title: "Project Execution",
        price: "FIXED",
        desc: "Precision engineering implementation.",
        detail: "Full-scale development with high-grade materials and real-time progress monitoring.",
        icon: <Wrench size={32} strokeWidth={2.5} />,
    },
];

export default function UltraWorkflow() {
    return (
        <section className="relative py-24 md:py-40 px-6 bg-white overflow-hidden">

            <div className="absolute inset-0 z-0 opacity-[0.04]"
                style={{ backgroundImage: `radial-gradient(#eab308 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-24"
                >
                    <div className="inline-flex items-center gap-3 bg-zinc-50 border border-zinc-200 px-6 py-2 rounded-full mb-8">
                        <Construction size={16} className="text-yellow-600" />
                        <span className="text-yellow-600 tracking-[0.3em] uppercase text-[11px] font-black">
                            Operational Protocol
                        </span>
                    </div>

                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                        <span className="text-black">PREMIUM</span> <br />
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
                            <div className="relative h-full min-h-[540px] p-8 bg-white rounded-[3rem] border border-zinc-200 shadow-xl transition-all duration-500 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/10 flex flex-col justify-between">

                                {/* Card Header */}
                                <div className="flex justify-between items-start">
                                    {/* VIP Yellow Numbering */}
                                    <span className="text-7xl font-black text-yellow-500/20 group-hover:text-yellow-500 transition-colors duration-500 italic">
                                        {step.id}
                                    </span>
                                    <div className="bg-black text-white px-4 py-1.5 rounded-lg text-[11px] font-black tracking-tighter">
                                        {step.price}
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="space-y-6">
                                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-zinc-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                                        {step.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-bold text-black mb-3 tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-yellow-600 text-[10px] font-black uppercase tracking-[0.15em] mb-4">
                                            {step.desc}
                                        </p>
                                        <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                                            {step.detail}
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <button className="w-full flex items-center justify-between bg-zinc-900 text-white group-hover:bg-yellow-500 group-hover:text-black p-5 rounded-2xl transition-all duration-300 font-bold uppercase text-[11px] tracking-widest">
                                        <span>Initiate Phase</span>
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}