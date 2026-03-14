"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Zap, Construction, Wrench, CheckCircle } from "lucide-react";

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
        <section className="relative px-6 py-24 bg-white text-[#1a1a1a] overflow-hidden">
            {/* Subtle Background Texture */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `radial-gradient(#eab308 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto relative z-10"
            >
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT: MISSION STATEMENT */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
                        <div className="inline-flex items-center gap-2 text-yellow-600 font-black uppercase tracking-[0.2em] text-[9px] border border-yellow-600/20 px-4 py-1.5 rounded-full bg-yellow-50/50">
                            <Wrench size={12} /> Operational Doctrine
                        </div>

                        {/* Heading: Darker Black and Smaller Size */}
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-black">
                            Apex <br /> <span className="text-zinc-400">Handyman</span>
                        </h2>

                        <p className="text-zinc-600 text-base md:text-lg leading-relaxed border-l-4 border-yellow-500 pl-6 font-medium max-w-md">
                            We started with one simple idea: people deserve honest, reliable help when something in their home or business needs fixing. No hidden costs.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "#000" }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-black text-white px-8 py-4 font-black uppercase text-[10px] tracking-[0.2em] rounded-full shadow-lg transition-colors"
                            >
                                Get Consultation
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* RIGHT: BIO CONTENT */}
                    <motion.div variants={itemVariants} className="lg:col-span-7 grid md:grid-cols-2 gap-5">
                        {[
                            { title: "Honest Service", desc: "No complicated processes, only transparent solutions." },
                            { title: "Skilled Expertise", desc: "Maintenance, repairs, and office care treated with precision." },
                            { title: "Free Consultation", desc: "We inspect, recommend, and only then move forward." },
                            { title: "Total Reassurance", desc: "Knowing you have someone you can trust to call." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5, borderColor: "#eab308" }}
                                className="bg-zinc-50 p-7 rounded-[2rem] border border-zinc-100 transition-all hover:shadow-xl hover:bg-white"
                            >
                                <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mb-5">
                                    <CheckCircle className="text-black" size={20} />
                                </div>
                                <h4 className="font-black uppercase tracking-wider mb-2 text-black text-sm">{feature.title}</h4>
                                <p className="text-zinc-500 text-xs leading-relaxed font-medium">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* BOTTOM QUOTE SECTION */}
                <motion.div variants={itemVariants} className="mt-24 p-12 bg-black rounded-[3.5rem] text-center relative shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px]" />

                    <Construction className="mx-auto text-yellow-500/20 mb-6" size={40} />

                    <h3 className="text-2xl md:text-4xl font-black italic max-w-3xl mx-auto leading-tight text-white">
                        "When something needs fixing, you shouldn’t have to stress about who to call. <span className="text-yellow-500 font-black">You should already know.</span>"
                    </h3>

                    <p className="mt-8 font-black text-[10px] uppercase tracking-[0.5em] text-yellow-500/80">
                        — APEX HANDYMAN OFFICIAL —
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}