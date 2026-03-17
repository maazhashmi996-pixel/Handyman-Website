"use client";
import React from "react";
import { motion } from "motion/react";
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

interface ContactItem {
    icon: LucideIcon;
    label: string;
    val: string;
    color: string;
    border: string;
}

export default function FinalSectionCommand() {
    const contactInfo: ContactItem[] = [
        { icon: Phone, label: "Hotline", val: "+1 (800) FIX-TECH", color: "text-yellow-600", border: "border-zinc-200" },
        { icon: Mail, label: "Inquiries", val: "ops@futurefix.us", color: "text-zinc-900", border: "border-zinc-200" },
    ];

    return (
        <section className="relative overflow-hidden px-6 py-32 bg-white selection:bg-yellow-500 selection:text-white">

            <div className="absolute inset-0 z-0 opacity-30">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, 30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-yellow-400 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.15, 0.05],
                        y: [0, -40, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-zinc-200 rounded-full blur-[120px]"
                />
            </div>

            <div className="absolute inset-0 opacity-[0.06] z-0"
                style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
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
                                className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-5 py-2.5 rounded-full text-yellow-600 text-[10px] font-black uppercase tracking-[0.4em] shadow-sm"
                            >
                                <Zap size={14} className="fill-yellow-600 animate-pulse" /> Command Center Online
                            </motion.div>

                            <h2 className="text-7xl md:text-[110px] font-black text-black uppercase leading-[0.8] tracking-tighter">
                                Build <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                    The Future.
                                </span>
                            </h2>

                            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-md leading-relaxed border-l-2 border-yellow-500 pl-6">
                                Experience the next gen <span className="text-black font-bold">Engineering Command.</span> Secure your deployment slot today.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 15, backgroundColor: "#f9f9f9", borderColor: "#eab308" }}
                                    className={`flex items-center gap-6 p-6 border ${item.border} rounded-[2.5rem] transition-all bg-white shadow-lg`}
                                >
                                    <div className={`p-4 bg-zinc-50 rounded-2xl ${item.color}`}>
                                        <item.icon size={24} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-black mb-1">{item.label}</p>
                                        <p className="text-xl text-black font-bold tracking-tight">{item.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT PANEL FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 bg-white border border-zinc-100 p-10 md:p-16 rounded-[4rem] shadow-2xl relative"
                    >
                        <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] text-yellow-600 uppercase font-black tracking-[0.3em] ml-2">Partner Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-8 py-5 text-black focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-bold placeholder:text-zinc-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] text-yellow-600 uppercase font-black tracking-[0.3em] ml-2">Secure Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-8 py-5 text-black focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-bold placeholder:text-zinc-400"
                                        placeholder="nexus@domain.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] text-yellow-600 uppercase font-black tracking-[0.3em] ml-2">Deployment Type</label>
                                <div className="relative">
                                    <select className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-8 py-5 text-black focus:border-yellow-500 outline-none appearance-none cursor-pointer font-bold transition-all">
                                        <option value="industrial">Industrial Maintenance</option>
                                        <option value="luxury">Luxury Estate Upkeep</option>
                                        <option value="structural">Structural Engineering</option>
                                    </select>
                                    <ArrowUpRight size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-600 pointer-events-none" />
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, backgroundColor: '#eab308', color: '#000' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-black text-white py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 flex items-center justify-center gap-4 shadow-xl"
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
                    className="mt-32 border-t border-zinc-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                        <p>© 2026 APEX HANDYMAN</p>
                    </div>
                    <div className="flex gap-12 text-zinc-400">
                        {['Privacy', 'Security', 'Terms'].map(link => (
                            <span key={link} className="hover:text-black cursor-pointer transition-colors">{link}</span>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <Construction size={18} className="text-zinc-200" />
                        <ShieldCheck size={24} className="text-zinc-300" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}