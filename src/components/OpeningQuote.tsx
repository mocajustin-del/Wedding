import React from 'react';
import { motion } from 'framer-motion';

export const OpeningQuote: React.FC = () => {
    return (
        <section className="px-8 py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="max-w-sm mx-auto text-center"
            >
                <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-primary/40 text-4xl transform -scale-x-100">format_quote</span>
                </div>
                
                <h3 className="font-serif font-bold text-navy-custom dark:text-slate-200 text-lg mb-6 tracking-widest">
                    QS. AR-RUM: 21
                </h3>
                
                <p className="font-serif italic text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base mb-6">
                    "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
                </p>

                <div className="flex justify-center">
                    <span className="material-symbols-outlined text-primary/40 text-4xl">format_quote</span>
                </div>
                
                <div className="mt-8 flex justify-center">
                    <div className="h-px w-16 bg-primary/30"></div>
                </div>
            </motion.div>
        </section>
    );
};
