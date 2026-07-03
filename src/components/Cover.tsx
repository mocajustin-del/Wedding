import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FallingPetals } from './FallingPetals';

interface CoverProps {
    isOpen: boolean;
    onOpen: () => void;
}

export const Cover: React.FC<CoverProps> = ({ isOpen, onOpen }) => {
    return (
        <AnimatePresence>
            {!isOpen && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white overflow-hidden bg-cover bg-center"
                    style={{
                        backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url('/cover-photo.jpeg')"
                    }}
                >
                    <div className="absolute inset-0 floral-bg opacity-20 MixBlendMode-overlay pointer-events-none" />

                    {/* Falling Petals Effect */}
                    <FallingPetals />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-center z-10 px-6 max-w-sm mt-12"
                    >
                        <span className="font-serif italic tracking-[0.3em] text-sm uppercase text-slate-300">The Wedding Of</span>

                        <h1 className="font-script text-6xl md:text-7xl mt-6 mb-8 pb-4 leading-relaxed text-primary drop-shadow-lg text-gradient-gold">
                            Jazuli & Alvina
                        </h1>

                        <div className="space-y-6 mb-12">
                            <p className="font-serif italic text-slate-300 text-sm">Kepada Yth. Bapak/Ibu/Saudara/i</p>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-3 px-6 inline-block">
                                <p className="font-display font-semibold text-lg">Tamu Undangan</p>
                            </div>
                        </div>

                        <button
                            onClick={onOpen}
                            className="group relative inline-flex items-center justify-center gap-2 bg-primary/90 hover:bg-primary text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:shadow-2xl overflow-hidden animate-[glow_2s_ease-in-out_infinite]"
                        >
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                            <span className="material-symbols-outlined text-lg group-hover:animate-bounce">mail</span>
                            <span>Buka Undangan</span>
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

