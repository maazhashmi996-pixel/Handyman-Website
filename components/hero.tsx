"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden">

            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-no-repeat opacity-70 scale-110 grayscale-[20%] contrast-[120%]" />

                {/* Vibrant Gradient Overlays for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-blue-600/20" />

                {/* Neon Scanner Animation */}
                <motion.div
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_35px_rgba(249,115,22,1)] z-10"
                />
            </div>

            {/* Navbar */}
            <nav className="absolute top-0 w-full z-50 px-6 md:px-8 py-6 md:py-8 flex justify-between items-center container mx-auto left-1/2 -translate-x-1/2">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl md:text-3xl font-black tracking-tighter text-white"
                >
                    HANDY<span className="text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">MAN</span>
                </motion.div>

                <div className="hidden md:flex gap-10 text-xs font-bold text-white uppercase tracking-[0.2em]">
                    {['About', 'Services', 'Projects', 'Gallery'].map((item) => (
                        <a key={item} href="#" className="hover:text-orange-400 transition-all hover:scale-110 drop-shadow-md">{item}</a>
                    ))}
                </div>

                <button className="bg-orange-500 text-white px-5 md:px-8 py-3 md:py-4 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                    Quote
                </button>
            </nav>

            {/* Hero Content */}
            <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12">
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Vibrant Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 px-4 md:px-6 py-2 rounded-full text-slate-950 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8 shadow-[0_0_30px_rgba(249,115,22,0.5)] border border-white/20">
                            <Zap size={12} fill="currentColor" /> Elite Property Engineering
                        </div>

                        {/* RESPONSIVE HEADING UPDATE */}
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[150px] font-black text-white uppercase leading-[0.9] md:leading-[0.85] tracking-tighter mb-6 md:mb-8">
                            Precision <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-300 to-white drop-shadow-[0_10px_20px_rgba(249,115,22,0.3)] block mt-2 md:mt-0">
                                Craftsmanship.
                            </span>
                        </h1>

                        <p className="text-white text-base md:text-2xl font-medium max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed drop-shadow-2xl opacity-90 px-4 md:px-0">
                            Transforming your vision into <span className="text-orange-400 font-bold">structural reality</span>. Expert maintenance for the most discerning properties.
                        </p>

                        {/* Ultra Vibrant Button ready theme - Responsive Padding */}
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0_0_50px_rgba(249,115,22,0.8)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-orange-500 text-white px-8 md:px-14 py-5 md:py-7 rounded-full font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px] transition-all flex items-center gap-3 mx-auto shadow-[0_20px_40px_rgba(249,115,22,0.5)] border-t border-white/30"
                        >
                            Initialize Project <ArrowRight size={18} strokeWidth={3} />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-500/20 to-transparent blur-3xl" />
        </div>
    );
}