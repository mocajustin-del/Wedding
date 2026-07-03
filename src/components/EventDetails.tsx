import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const EventDetails: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('July 19, 2026 08:00:00').getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
            >
                <span className="material-symbols-outlined text-primary text-4xl mb-4 opacity-50">auto_awesome</span>
                <h2 className="font-script text-5xl text-primary mt-2">Menuju Hari Bahagia</h2>

                {/* Countdown Timer */}
                <div className="flex justify-center gap-3 mt-8">
                    {[
                        { label: 'Hari', value: timeLeft.days },
                        { label: 'Jam', value: timeLeft.hours },
                        { label: 'Menit', value: timeLeft.minutes },
                        { label: 'Detik', value: timeLeft.seconds },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-primary/20 flex flex-col items-center justify-center">
                                <span className="text-xl md:text-2xl font-serif font-bold text-navy-custom dark:text-white">
                                    {String(item.value).padStart(2, '0')}
                                </span>
                                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Akad Nikah Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto max-w-sm w-full p-8 bg-white dark:bg-slate-800 rounded-[2rem] border border-primary/10 shadow-xl shadow-primary/5 relative overflow-hidden mb-6"
            >
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <span className="material-symbols-outlined text-9xl transform rotate-12">mosque</span>
                </div>

                <div className="relative z-10 text-center space-y-6">
                    <div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pastel-blue/50 dark:bg-primary/20 mb-4">
                            <span className="material-symbols-outlined text-primary">menu_book</span>
                        </div>
                        <h3 className="font-serif italic text-sm text-slate-500 dark:text-slate-400 mb-1">Akad Nikah</h3>
                        <h4 className="font-serif text-2xl font-bold text-navy-custom dark:text-white mb-4">Minggu, 19 Juli 2026</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-4 relative">
                        <div className="space-y-2 p-2 relative z-10">
                            <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Waktu</p>
                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">08.00 WIB</p>
                        </div>
                        <div className="absolute left-1/2 top-4 bottom-4 w-px bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2" />
                        <div className="space-y-2 p-2 relative z-10">
                            <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Lokasi</p>
                            <p className="text-sm font-bold leading-tight text-slate-800 dark:text-slate-200">Dsn. Krajan 03/02, Tanggungharjo</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Resepsi Pernikahan Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto max-w-sm w-full p-8 bg-white dark:bg-slate-800 rounded-[2rem] border border-primary/10 shadow-xl shadow-primary/5 relative overflow-hidden mb-6"
            >
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <span className="material-symbols-outlined text-9xl transform rotate-12">calendar_month</span>
                </div>

                <div className="relative z-10 text-center space-y-6">
                    <div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pastel-blue/50 dark:bg-primary/20 mb-4">
                            <span className="material-symbols-outlined text-primary">event</span>
                        </div>
                        <h3 className="font-serif italic text-sm text-slate-500 dark:text-slate-400 mb-1">Resepsi Pernikahan</h3>
                        <h4 className="font-serif text-2xl font-bold text-navy-custom dark:text-white mb-4">Minggu, 19 Juli 2026</h4>

                        <a
                            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Jazuli+%26+Alvina&dates=20260719T010000Z/20260719T060000Z&details=Merupakan+suatu+kehormatan+dan+kebahagiaan+bagi+kami+apabila+Bapak/Ibu/Saudara/i+berkenan+hadir.&location=Dusun+Krajan+03%2F02%2C+Desa+Tanggungharjo%2C+Kec.+Tanggungharjo%2C+Grobogan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 text-primary dark:text-primary hover:bg-primary/10 transition-colors text-xs font-bold uppercase tracking-wider mx-auto"
                        >
                            <span className="material-symbols-outlined text-sm">calendar_add_on</span>
                            Simpan ke Kalender
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4 relative">
                        <div className="space-y-2 p-2 relative z-10">
                            <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Waktu</p>
                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">09.00 WIB - Selesai</p>
                        </div>
                        <div className="absolute left-1/2 top-4 bottom-4 w-px bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2" />
                        <div className="space-y-2 p-2 relative z-10">
                            <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Lokasi</p>
                            <p className="text-sm font-bold leading-tight text-slate-800 dark:text-slate-200">Dsn. Krajan 03/02, Tanggungharjo</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Shared Location Details */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mx-auto max-w-sm w-full p-8 bg-white dark:bg-slate-800 rounded-[2rem] border border-primary/10 shadow-xl shadow-primary/5 relative overflow-hidden"
            >
                <div className="relative z-10 text-center space-y-6">
                    <div>
                        <div className="flex items-center justify-center gap-1.5 mb-2">
                            <span className="material-symbols-outlined text-primary text-lg">home</span>
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider">Kediaman Mempelai Wanita</p>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                            Dusun Krajan 03/02, Desa Tanggungharjo, Kec. Tanggungharjo, Grobogan
                        </p>
                    </div>

                    {/* Mini Map Preview */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700">
                        <iframe
                            src="https://maps.google.com/maps?q=-7.0460012,110.9581147&z=15&output=embed"
                            width="100%"
                            height="150"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                            title="Lokasi Pernikahan"
                        />
                        {/* Pin Badge */}
                        <div className="absolute top-3 left-3 bg-white dark:bg-slate-800 rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-red-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                            <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Lokasi Acara</span>
                        </div>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/TrJRTCejaLdEapgD7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full gap-2 bg-slate-900 dark:bg-primary hover:bg-slate-800 hover:dark:bg-primary/90 text-white px-6 py-4 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                    >
                        <span className="material-symbols-outlined text-lg">directions</span>
                        <span>Petunjuk Arah ke Lokasi</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
