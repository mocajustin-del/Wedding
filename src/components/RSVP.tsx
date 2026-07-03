import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface RSVP {
    id: number;
    name: string;
    attendance: string;
    message: string;
    created_at: string;
}

export const RSVP: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        attendance: 'hadir',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [rsvps, setRsvps] = useState<RSVP[]>([]);

    useEffect(() => {
        // Mock initial fetch for development
        const mockRsvps: RSVP[] = [];
        setRsvps(mockRsvps);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Mock network delay
            await new Promise(resolve => setTimeout(resolve, 800));

            const newRsvp: RSVP = {
                id: Date.now(),
                name: formData.name,
                attendance: formData.attendance,
                message: formData.message,
                created_at: new Date().toISOString()
            };

            setRsvps(prev => [newRsvp, ...prev]);
            setIsSubmitted(true);
            setFormData({ name: '', attendance: 'hadir', message: '' });
        } catch (error) {
            console.error('Error submitting RSVP:', error);
            alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="px-6 py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-md mx-auto"
            >
                <div className="text-center mb-10">
                    <span className="material-symbols-outlined text-primary text-4xl mb-2">mark_email_read</span>
                    <h2 className="font-script text-5xl text-primary mt-2">RSVP & Ucapan</h2>
                    <p className="font-serif italic text-sm mt-4 text-slate-500 dark:text-slate-400">
                        Tinggalkan pesan, doa, dan konfirmasi kehadiran Anda
                    </p>
                </div>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 p-6 rounded-2xl text-center shadow-lg"
                    >
                        <span className="material-symbols-outlined text-5xl mb-4 opacity-80">check_circle</span>
                        <h3 className="font-serif font-bold text-xl mb-2">Terima Kasih!</h3>
                        <p className="text-sm">Pesan dan konfirmasi kehadiran Anda telah tersimpan.</p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="mt-6 text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400 hover:text-green-900 underline underline-offset-4 transition-colors"
                        >
                            Kirim Pesan Lain
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">

                        <div className="space-y-1">
                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Nama</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nama Lengkap Anda"
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="attendance" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Kehadiran</label>
                            <div className="relative">
                                <select
                                    id="attendance"
                                    name="attendance"
                                    value={formData.attendance}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer pr-10"
                                >
                                    <option value="hadir">Ya, Saya akan hadir</option>
                                    <option value="tidak_hadir">Maaf, Saya tidak bisa hadir</option>
                                    <option value="ragu">Masih ragu-ragu</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
                                    <span className="material-symbols-outlined text-sm">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Ucapan & Doa</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tuliskan ucapan dan doa untuk kedua mempelai..."
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full group relative inline-flex items-center justify-center gap-2 bg-primary/90 hover:bg-primary text-white px-8 py-4 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            <span className={`material-symbols-outlined text-lg ${isSubmitting ? 'animate-spin' : 'group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform'}`}>
                                {isSubmitting ? 'progress_activity' : 'send'}
                            </span>
                            <span>{isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi'}</span>
                        </button>
                    </form>
                )}

                {/* Live Guestbook Section */}
                {rsvps.length > 0 && (
                    <div className="mt-12 bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden">
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-b border-slate-100 dark:border-slate-700">
                            <h3 className="font-serif font-bold text-center text-xl text-navy-custom dark:text-white flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-primary">diversity_1</span>
                                Buku Tamu ({rsvps.length})
                            </h3>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-[500px] overflow-y-auto custom-scrollbar">
                            {rsvps.map((rsvp) => (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    key={rsvp.id}
                                    className="p-6 transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <span className="font-serif font-bold text-primary text-lg">
                                                {rsvp.name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="flex items-baseline gap-2 mb-1">
                                                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                                                    {rsvp.name}
                                                </h4>
                                                <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${rsvp.attendance === 'hadir' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                        rsvp.attendance === 'tidak_hadir' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                                            'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                                    }`}>
                                                    {rsvp.attendance.replace('_', ' ')}
                                                </span>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-2 italic whitespace-pre-line">
                                                "{rsvp.message}"
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

            </motion.div>
        </section>
    );
};

