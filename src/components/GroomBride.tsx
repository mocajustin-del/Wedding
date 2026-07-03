import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
    name: string;
    role: string;
    parents: string;
    address?: string;
    delay: number;
    direction: 'left' | 'right';
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, parents, address, delay, direction }) => (
    <motion.div
        initial={{ opacity: 0, x: direction === 'left' ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay }}
        className="text-center relative z-10"
    >
        {/* Name */}
        <h3 className="font-serif text-2xl font-bold text-navy-custom dark:text-white mb-2 leading-tight">
            {name}
        </h3>

        {/* Role badge */}
        <div className="inline-flex items-center gap-1.5 bg-primary/10 dark:bg-primary/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[10px] text-primary font-bold tracking-widest uppercase">{role}</span>
        </div>

        {/* Parents */}
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            {parents}
        </p>

        {/* Address */}
        {address && (
            <div className="flex items-start justify-center gap-1.5 mt-3">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">location_on</span>
                <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
                    {address}
                </p>
            </div>
        )}
    </motion.div>
);

export const GroomBride: React.FC = () => {
    return (
        <section className="px-6 py-16 bg-gradient-to-b from-white via-pastel-blue/10 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden relative">
            {/* Decorative background circles */}
            <div className="absolute top-10 right-0 -mr-16 w-48 h-48 rounded-full bg-primary/5 blur-2xl" />
            <div className="absolute bottom-10 left-0 -ml-16 w-48 h-48 rounded-full bg-primary/5 blur-2xl" />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <span className="material-symbols-outlined text-primary text-3xl mb-3 opacity-50">diversity_1</span>
                <h2 className="font-script text-5xl text-primary mb-3">Mempelai</h2>
                <p className="font-serif italic text-sm text-slate-500 dark:text-slate-400">
                    Dengan Memohon Rahmat Allah SWT
                </p>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mt-4" />
            </motion.div>

            {/* Cards Container */}
            <div className="max-w-sm mx-auto space-y-10">
                {/* Groom */}
                <ProfileCard
                    name="Muhammad Syukron Jazuli"
                    role="Putra dari"
                    parents="Bapak Ahmad Muzayin & Ibu Martatik"
                    address="Dusun Ringinsari 04/03, Desa Sugihmanik, Kec. Tanggungharjo, Grobogan"
                    delay={0}
                    direction="left"
                />

                {/* Elegant Ampersand Divider */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-4 py-2"
                >
                    <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-gold-accent/40" />
                    <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center border border-primary/20">
                        <span className="font-script text-3xl text-primary">&</span>
                    </div>
                    <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-gold-accent/40" />
                </motion.div>

                {/* Bride */}
                <ProfileCard
                    name="Eva Alvina"
                    role="Putri dari"
                    parents="Bapak Kasminto (Bpk. Jamin) & Ibu Siti Munawaroh"
                    address="Dusun Krajan 03/02, Desa Tanggungharjo, Kec. Tanggungharjo, Grobogan"
                    delay={0.1}
                    direction="right"
                />
            </div>
        </section>
    );
};
