"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Wrench, Shield, Star, Mouse } from 'lucide-react';

export default function UpdatedHandymanHero() {
    // Images array from your public folder
    const images = ['/1.jpg', '/2.jpg', '/3.jpg'];
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full min-h-screen bg-[#020202] overflow-hidden font-sans selection:bg-orange-500/30">

            {/* DYNAMIC BACKGROUND CAROUSEL */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImg}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.6, scale: 1 }} // Opacity thori barhai hai taake image dikhe
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${images[currentImg]})` }}
                    />
                </AnimatePresence>

                {/* LIGHTER OVERLAYS */}
                {/* Bottom to Top subtle dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

                {/* Very subtle orange radial glow only in the corner */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(249,115,22,0.08),transparent_40%)] z-10" />
            </div>

            {/* VIP NAVBAR */}
            <nav className="absolute top-0 w-full z-50 px-6 md:px-12 py-10 flex justify-between items-center max-w-screen-2xl left-1/2 -translate-x-1/2">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-3 group cursor-pointer"
                >
                    <div className="relative">
                        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                            <Wrench size={20} className="text-black -rotate-12 group-hover:rotate-0 transition-transform" />
                        </div>
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white uppercase">
                        Apex<span className="text-orange-500">Handy</span>
                    </span>
                </motion.div>

                <div className="hidden lg:flex gap-12 text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">
                    {['Services', 'Elite Projects', 'Process', 'Reviews'].map((item) => (
                        <a key={item} href="#" className="relative group hover:text-white transition-colors">
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                <button className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:bg-orange-500 hover:text-black transition-all shadow-xl">
                    Get an Estimate
                </button>
            </nav>

            {/* MAIN CONTENT AREA */}
            <div className="relative z-20 container mx-auto px-6 min-h-screen flex flex-col justify-center">
                <div className="max-w-5xl">
                    {/* PREMIUM LABEL */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-[1px] w-12 bg-orange-500" />
                        <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-2">
                            <Star size={12} fill="currentColor" /> Denver's #1 Premium Maintenance
                        </span>
                    </motion.div>

                    {/* MAIN HEADING */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-9xl font-black text-white uppercase leading-[0.85] tracking-tighter"
                    >
                        Mastering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-amber-900 drop-shadow-2xl">
                            The Craft.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 text-gray-300 text-lg md:text-2xl max-w-2xl font-light leading-relaxed tracking-wide drop-shadow-md"
                    >
                        Exclusive property care for sophisticated estates. We don’t just fix—we <span className="text-white font-medium italic underline decoration-orange-500/50">engineer perfection</span>.
                    </motion.p>

                    {/* VIP BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 flex flex-wrap gap-6"
                    >
                        <button className="group relative px-10 py-6 bg-orange-500 rounded-2xl overflow-hidden transition-all active:scale-95 shadow-[0_10px_30px_rgba(249,115,22,0.3)]">
                            <span className="relative z-10 flex items-center gap-4 text-black font-black uppercase tracking-widest text-xs">
                                Consult An Expert <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        </button>

                        <button className="px-10 py-6 border border-white/20 rounded-2xl text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all backdrop-blur-sm bg-white/5">
                            View Showcase
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* FLOATING STATUS CARD (Bottom Right) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-12 right-12 z-30 hidden xl:block"
            >
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex items-center gap-6 shadow-2xl">
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-orange-500/20 bg-slate-900 flex items-center justify-center text-[8px] text-white font-black uppercase tracking-tighter overflow-hidden">
                                VIP
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-white font-black text-xs uppercase tracking-widest">500+ Luxury Estates</p>
                        <p className="text-gray-500 text-[10px] font-bold uppercase">Trusted in Denver, CO</p>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}