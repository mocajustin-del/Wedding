import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DigitalEnvelope: React.FC = () => {
    const [copiedBank, setCopiedBank] = useState<string | null>(null);

    const handleCopy = (text: string, bank: string) => {
        navigator.clipboard.writeText(text);
        setCopiedBank(bank);
        setTimeout(() => setCopiedBank(null), 2000);
    };

    return (
        <section className="px-6 py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-sm mx-auto p-8 rounded-3xl bg-pastel-blue/20 dark:bg-slate-800 border border-primary/20 shadow-xl"
            >
                <span className="material-symbols-outlined text-primary text-4xl mb-4">volunteer_activism</span>
                <h2 className="font-script text-4xl text-primary mb-4">Wedding Gift</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 font-serif italic">
                    Bagi Bapak/Ibu/Saudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui nomor rekening di bawah ini.
                </p>

                <div className="space-y-4">
                    {/* Bank Mandiri */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none transform translate-x-2 -translate-y-2">
                            <span className="material-symbols-outlined text-8xl">account_balance</span>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="h-10 mb-4 flex items-center justify-center">
                                <img src="/bank-mandiri-seeklogo.png" alt="Bank Mandiri" className="h-full object-contain" />
                            </div>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Bank Mandiri</p>
                            <p className="text-2xl font-mono text-primary tracking-widest mb-1">1360016086602</p>
                            <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-4">a.n MUHAMMAD SYUKron JAZ</p>

                            <button
                                onClick={() => handleCopy('1360016086602', 'MANDIRI')}
                                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-full text-xs font-bold transition-colors w-full justify-center"
                            >
                                <span className="material-symbols-outlined text-sm">
                                    {copiedBank === 'MANDIRI' ? 'check_circle' : 'content_copy'}
                                </span>
                                {copiedBank === 'MANDIRI' ? 'Berhasil Disalin!' : 'Salin No. Rekening'}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
