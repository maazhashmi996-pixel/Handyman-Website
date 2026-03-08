"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Send,
    Phone,
    Mail,
    ArrowUpRight,
    HardHat,
    ShieldCheck,
    Zap,
} from "lucide-react";

export default function FinalSectionCommand() {
    return (

        <section className="relative overflow-hidden px-6 py-32 bg-[#0d001a] selection:bg-cyan-500 selection:text-white">

            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-cyan-600/30 rounded-full blur-[120px]"
                />
                {/* Bottom Right - Vivid Purple/Pink */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        y: [0, -40, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px]"
                />
                {/* Center Glow - Deep Indigo */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
            </div>

            {/* Subtle Grid Pattern for Technical Feel */}
            <div className="absolute inset-0 opacity-[0.05] z-0"
                style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            <div className="container mx-auto relative z-20">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT PANEL */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 space-y-12"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 text-cyan-300 text-[10px] font-black uppercase tracking-[0.4em] shadow-lg"
                            >
                                <Zap size={14} className="fill-cyan-300" /> System Online
                            </motion.div>

                            <h2 className="text-7xl md:text-[110px] font-black text-white uppercase leading-[0.8] tracking-tighter">
                                Build <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400">
                                    The Future.
                                </span>
                            </h2>

                            <p className="text-indigo-100/70 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                                Experience the next gen <span className="text-white font-bold border-b-2 border-cyan-400">Engineering Command.</span> Secure your deployment slot today.
                            </p>
                        </div>

                        {/* VIBRANT CONTACT CARDS */}
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: Phone, label: "Hotline", val: "+1 (800) FIX-TECH", color: "text-cyan-400", border: "border-cyan-500/30" },
                                { icon: Mail, label: "Inquiries", val: "ops@futurefix.us", color: "text-purple-400", border: "border-purple-500/30" },
                            ].map((itemData, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 15, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    className={`flex items-center gap-6 p-6 border ${itemData.border} rounded-[2.5rem] transition-all bg-white/5 backdrop-blur-3xl shadow-2xl`}
                                >
                                    <div className={`p-4 bg-white/5 rounded-2xl ${itemData.color}`}>
                                        <itemData.icon size={24} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-indigo-300/60 uppercase tracking-[0.3em] font-black mb-1">{itemData.label}</p>
                                        <p className="text-xl text-white font-bold tracking-tight">{itemData.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT PANEL FORM (ULTRA GLASS) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 bg-gradient-to-br from-white/[0.12] to-white/[0.02] border border-white/20 p-10 md:p-16 rounded-[4rem] backdrop-blur-3xl relative shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
                    >
                        <form className="space-y-10 relative z-10">
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] text-cyan-300 uppercase font-black tracking-[0.3em] ml-2">Partner Name</label>
                                    <input
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 outline-none transition-all font-bold placeholder:text-white/20"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] text-cyan-300 uppercase font-black tracking-[0.3em] ml-2">Secure Email</label>
                                    <input
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 outline-none transition-all font-bold placeholder:text-white/20"
                                        placeholder="nexus@domain.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] text-cyan-300 uppercase font-black tracking-[0.3em] ml-2">Deployment Type</label>
                                <div className="relative">
                                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-cyan-400 outline-none appearance-none cursor-pointer font-bold">
                                        <option className="bg-indigo-950">Industrial Maintenance</option>
                                        <option className="bg-indigo-950">Luxury Estate Upkeep</option>
                                        <option className="bg-indigo-950">Structural Engineering</option>
                                    </select>
                                    <ArrowUpRight size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-cyan-400 pointer-events-none" />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#000' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
                            >
                                Initialize Data Stream
                                <Send size={18} strokeWidth={3} />
                            </motion.button>
                        </form>
                    </motion.div>

                </div>

                {/* FOOTER */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-300/50"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
                        <p>© 2026 FUTUREFIX COMMAND CENTER</p>
                    </div>
                    <div className="flex gap-12">
                        {['Privacy', 'Security', 'Terms'].map(link => (
                            <span key={link} className="hover:text-white cursor-pointer transition-colors">{link}</span>
                        ))}
                    </div>
                    <ShieldCheck size={24} className="opacity-40" />
                </motion.div>
            </div>
        </section>
    );
}