"use client";
import React from "react";
import { motion } from "motion/react"; // Latest version check
import {
    Send,
    Phone,
    Mail,
    ArrowUpRight,
    ShieldCheck,
    Zap,
    Construction,
    LucideIcon,
} from "lucide-react";

// Types definition for better safety
interface ContactItem {
    icon: LucideIcon;
    label: string;
    val: string;
    color: string;
    border: string;
}

export default function FinalSectionCommand() {
    const contactInfo: ContactItem[] = [
        { icon: Phone, label: "Hotline", val: "+1 (800) FIX-TECH", color: "text-yellow-500", border: "border-zinc-800" },
        { icon: Mail, label: "Inquiries", val: "ops@futurefix.us", color: "text-white", border: "border-zinc-800" },
    ];

    return (
        <section className="relative overflow-hidden px-6 py-32 bg-[#0a0a0a] selection:bg-yellow-500 selection:text-black">

            {/* BACKGROUND ANIMATIONS */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, 30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-yellow-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.15, 0.05],
                        y: [0, -40, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[120px]"
                />
            </div>

            {/* Industrial Grid */}
            <div className="absolute inset-0 opacity-[0.03] z-0"
                style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
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
                                className="inline-flex items-center gap-3 bg-zinc-900 border border-yellow-500/30 px-5 py-2.5 rounded-full text-yellow-500 text-[10px] font-black uppercase tracking-[0.4em] shadow-lg"
                            >
                                <Zap size={14} className="fill-yellow-500 animate-pulse" /> Command Center Online
                            </motion.div>

                            <h2 className="text-7xl md:text-[110px] font-black text-white uppercase leading-[0.8] tracking-tighter">
                                Build <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-zinc-500">
                                    The Future.
                                </span>
                            </h2>

                            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-md leading-relaxed border-l-2 border-yellow-500 pl-6">
                                Experience the next gen <span className="text-white font-bold">Engineering Command.</span> Secure your deployment slot today.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 15, backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(251,191,36,0.5)" }}
                                    className={`flex items-center gap-6 p-6 border ${item.border} rounded-[2.5rem] transition-all bg-zinc-900/40 backdrop-blur-3xl shadow-2xl`}
                                >
                                    <div className={`p-4 bg-zinc-800 rounded-2xl ${item.color}`}>
                                        <item.icon size={24} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-black mb-1">{item.label}</p>
                                        <p className="text-xl text-white font-bold tracking-tight">{item.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT PANEL FORM - Fixed Nesting Errors */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 bg-gradient-to-br from-zinc-800/40 to-black/40 border border-white/5 p-10 md:p-16 rounded-[4rem] backdrop-blur-3xl relative shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
                    >
                        <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] text-yellow-500 uppercase font-black tracking-[0.3em] ml-2">Partner Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-8 py-5 text-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-bold placeholder:text-zinc-700"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] text-yellow-500 uppercase font-black tracking-[0.3em] ml-2">Secure Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-8 py-5 text-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-bold placeholder:text-zinc-700"
                                        placeholder="nexus@domain.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] text-yellow-500 uppercase font-black tracking-[0.3em] ml-2">Deployment Type</label>
                                <div className="relative">
                                    <select className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-8 py-5 text-white focus:border-yellow-500 outline-none appearance-none cursor-pointer font-bold transition-all">
                                        <option value="industrial" className="bg-[#0a0a0a]">Industrial Maintenance</option>
                                        <option value="luxury" className="bg-[#0a0a0a]">Luxury Estate Upkeep</option>
                                        <option value="structural" className="bg-[#0a0a0a]">Structural Engineering</option>
                                    </select>
                                    <ArrowUpRight size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-500 pointer-events-none" />
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#000' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-yellow-500 text-black py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(251,191,36,0.2)]"
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
                    className="mt-32 border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_10px_#f59e0b]" />
                        <p>© 2026 FUTUREFIX COMMAND CENTER</p>
                    </div>
                    <div className="flex gap-12 text-zinc-500">
                        {['Privacy', 'Security', 'Terms'].map(link => (
                            <span key={link} className="hover:text-white cursor-pointer transition-colors">{link}</span>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <Construction size={18} className="text-zinc-800" />
                        <ShieldCheck size={24} className="opacity-20 text-white" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}