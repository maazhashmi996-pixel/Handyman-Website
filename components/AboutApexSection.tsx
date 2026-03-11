"use client";
import React from "react";
import { motion, Variants } from "motion/react";
import { ShieldCheck, Zap, Construction, Wrench, CheckCircle } from "lucide-react";

// Explicitly define variants with proper Types
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function ApexBioSection() {
    return (
        <section className="relative px-6 py-32 bg-[#0a0a0a] text-white overflow-hidden">
            {/* Background Texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(#f59e0b 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto"
            >
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT: MISSION STATEMENT */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
                        <div className="inline-flex items-center gap-2 text-yellow-500 font-black uppercase tracking-[0.2em] text-[10px] border border-yellow-500/30 px-4 py-2 rounded-full">
                            <Wrench size={14} /> Operational Doctrine
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                            Apex <br /> <span className="text-zinc-600">Handyman</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-yellow-500 pl-6">
                            We started with one simple idea: people deserve honest, reliable help when something in their home or business needs fixing. No hidden costs. Just skilled work done right.
                        </p>

                        <div className="flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-yellow-500 text-black px-8 py-4 font-black uppercase text-xs tracking-[0.2em] rounded-full"
                            >
                                Get Consultation
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* RIGHT: BIO CONTENT */}
                    <motion.div variants={itemVariants} className="lg:col-span-7 grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Honest Service", desc: "No complicated processes, only transparent solutions." },
                            { title: "Skilled Expertise", desc: "Maintenance, repairs, and office care treated with precision." },
                            { title: "Free Consultation", desc: "We inspect, recommend, and only then move forward." },
                            { title: "Total Reassurance", desc: "Knowing you have someone you can trust to call." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5, borderColor: "#f59e0b" }}
                                className="bg-zinc-900/40 p-8 rounded-[2rem] border border-zinc-800 transition-colors"
                            >
                                <CheckCircle className="text-yellow-500 mb-4" size={24} />
                                <h4 className="font-black uppercase tracking-wider mb-2">{feature.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* BOTTOM QUOTE SECTION */}
                <motion.div variants={itemVariants} className="mt-32 p-12 bg-gradient-to-r from-zinc-900 to-black rounded-[3rem] border border-zinc-800 text-center relative">
                    <Construction className="mx-auto text-zinc-800 mb-6" size={48} />
                    <h3 className="text-3xl md:text-5xl font-black italic max-w-3xl mx-auto leading-tight">
                        "When something needs fixing, you shouldn’t have to stress about who to call. You should already know."
                    </h3>
                    <p className="mt-8 font-black text-[10px] uppercase tracking-[0.4em] text-yellow-500">— APEX HANDYMAN</p>
                </motion.div>
            </motion.div>

            {/* Diagnostic Visualization */}
            <div className="mt-20 container mx-auto text-center">

                <p className="mt-8 text-zinc-700 text-[10px] font-black uppercase tracking-[0.3em]">System Integrity Verified | Apex Handyman @ 2026</p>
            </div>
        </section>
    );
}