import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-slate-900 text-white py-16 px-6 text-center relative overflow-hidden"
        >
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/20" />
            </div>

            <div className="relative z-10 max-w-sm mx-auto">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <span className="material-symbols-outlined text-primary text-3xl mb-4 inline-block animate-pulse">
                        favorite
                    </span>
                </motion.div>

                <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-script text-4xl text-primary mb-3"
                >
                    Jazuli & Alvina
                </motion.h3>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="font-serif italic text-slate-400 text-sm mb-8"
                >
                    19 Juli 2026
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="border-t border-slate-800 pt-8"
                >
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Merupakan suatu kehormatan dan kebahagiaan bagi kami
                        <br />
                        apabila Bapak/Ibu/Saudara/i berkenan hadir.
                    </p>

                    <a
                        href="https://api.whatsapp.com/send?text=Bismillahirrahmanirrahim%20%0AAssalamualaikum%20Wr.%20Wb.%20%0A%0ATanpa%20mengurangi%20rasa%20hormat%2C%20perkenankan%20kami%20mengundang%20Bapak%2FIbu%2FSaudara%2Fi%20untuk%20hadir%20dan%20memberikan%20doa%20restu%20pada%20acara%20pernikahan%20kami%3A%0A%0A%2AJazuli%20%26%20Alvina%2A%0A%F0%9F%93%85%2019%20Juli%202026%0A%0AInfo%20lengkap%20acara%20dan%20lokasi%20bisa%20dilihat%20pada%20undangan%20digital%20kami%20berikut%3A%0Ahttps%3A%2F%2Fwedinginvit.netlify.app%20%0A%0AMerupakan%20suatu%20kehormatan%20dan%20kebahagiaan%20apabila%20Anda%20berkenan%20hadir.%20%0A%0AWassalamualaikum%20Wr.%20Wb."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-green-500/10 hover:bg-green-500/20 text-green-500 border border-green-500/30 transition-all text-sm font-semibold mx-auto"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                        </svg>
                        Bagikan Undangan
                    </a>

                    <p className="text-xs text-slate-600 mt-8 font-display tracking-wider uppercase">
                        Terima kasih atas doa restu Anda
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
};
