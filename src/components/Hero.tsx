import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const textOpacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);
    const photoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
    const photoY = useTransform(scrollYProgress, [0, 1], [0, 80]);

    return (
        <div ref={sectionRef} className="relative min-h-[95vh] flex flex-col items-center justify-center py-12 px-6 overflow-hidden">
            {/* Parallax Background Photo */}
            <motion.div
                style={{ scale: photoScale, y: photoY }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/cover-photo.jpeg')",
                        filter: 'brightness(0.3) saturate(1.2)',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-background-light dark:to-slate-900" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ opacity: textOpacity }}
                className="w-full max-w-md mx-auto relative z-10"
            >
                <div className="text-center mb-6">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: '0.1em' }}
                        animate={{ opacity: 1, letterSpacing: '0.3em' }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="font-serif italic tracking-[0.3em] text-sm uppercase text-white/80"
                    >
                        The Wedding Of
                    </motion.span>

                    <div className="relative mt-6 mb-6 flex items-center justify-center gap-4">
                        <div className="hidden xs:block h-px w-12 bg-white/30" />
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="font-script text-6xl md:text-7xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                        >
                            Jazuli & Alvina
                        </motion.h1>
                        <div className="hidden xs:block h-px w-12 bg-white/30" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex justify-center gap-3"
                    >
                        <div className="h-px w-8 bg-gold-accent/60 mt-2" />
                        <span className="font-serif italic text-gold-accent text-sm">19 . 07 . 2026</span>
                        <div className="h-px w-8 bg-gold-accent/60 mt-2" />
                    </motion.div>
                </div>

                {/* Couple Photo Circle with decorative frame */}
                <div className="px-8 py-4 relative z-10 mb-6 mt-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative w-56 h-56 mx-auto group"
                    >
                        {/* Outer decorative ring */}
                        <div className="absolute -inset-3 rounded-full border border-gold-accent/30 animate-[spin_40s_linear_infinite]" />
                        <div className="absolute -inset-1.5 rounded-full border border-white/20" />
                        
                        {/* Photo container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/30 shadow-2xl shadow-black/30">
                            <img
                                src="/cover-photo.jpeg"
                                alt="Jazuli & Alvina"
                                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000"
                            />
                            {/* Soft inner vignette */}
                            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.3)]" />
                        </div>

                        {/* Decorative Gold Corner */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-1 -right-1 p-2"
                        >
                            <span className="material-symbols-outlined text-gold-accent text-3xl drop-shadow-lg">flare</span>
                        </motion.div>

                        {/* Second decorative element */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-1 -left-1 p-2"
                        >
                            <span className="material-symbols-outlined text-gold-accent/60 text-2xl drop-shadow-lg">auto_awesome</span>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-center mt-8 px-4"
                >
                    <div className="bg-white/10 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl px-6 py-5 border border-white/15 shadow-xl">
                        <p className="font-serif italic text-white/90 leading-relaxed max-w-xs mx-auto text-sm">
                            Tuhan membuat segala sesuatu indah pada waktunya. Indah saat Dia mempertemukan, indah saat Dia menumbuhkan kasih tulus dari hari ke hari...
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-pastel-blue/10 rounded-full blur-3xl dark:bg-primary/10 z-0" />
            
            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-semibold">Scroll</span>
                    <span className="material-symbols-outlined text-white/50 text-lg">keyboard_arrow_down</span>
                </motion.div>
            </motion.div>
        </div>
    );
};
