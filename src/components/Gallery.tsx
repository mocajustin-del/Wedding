import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
    {
        src: '/cover-photo.jpeg',
        alt: 'Momen kebersamaan kami',
        span: 'col-span-2 row-span-2',
        position: 'center top',
        filter: 'none',
    },
    {
        src: '/photo-1.webp',
        alt: 'Senyum bahagia',
        span: '',
        position: 'center center',
        filter: 'none',
    },
    {
        src: '/photo-2.webp',
        alt: 'Kebersamaan indah',
        span: '',
        position: 'center center',
        filter: 'none',
    },
    {
        src: '/photo-3.png',
        alt: 'Berjalan bersama',
        span: 'col-span-2',
        position: 'center center',
        filter: 'none',
    },
    {
        src: '/photo-4.png',
        alt: 'Tangan yang bertaut',
        span: '',
        position: 'center center',
        filter: 'none',
    },
    {
        src: '/groom.png',
        alt: 'Mempelai pria',
        span: '',
        position: 'center top',
        filter: 'none',
    },
];

export const Gallery: React.FC = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const navigateLightbox = (direction: 'prev' | 'next') => {
        if (lightboxIndex === null) return;
        if (direction === 'prev' && lightboxIndex > 0) {
            setLightboxIndex(lightboxIndex - 1);
        } else if (direction === 'next' && lightboxIndex < photos.length - 1) {
            setLightboxIndex(lightboxIndex + 1);
        }
    };

    return (
        <section className="px-4 py-16 bg-gradient-to-b from-white via-pastel-blue/5 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <span className="material-symbols-outlined text-primary text-3xl mb-2">auto_awesome</span>
                <h2 className="font-script text-5xl text-primary">Momen Bahagia</h2>
                <p className="font-serif italic text-sm mt-4 text-slate-500 dark:text-slate-400">Kisah cinta yang terabadikan</p>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mt-4" />
            </motion.div>

            {/* Masonry-style Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className={`overflow-hidden rounded-2xl shadow-lg cursor-pointer relative group ${photo.span} ${photo.span.includes('row-span-2') ? 'aspect-[3/4]' : photo.span.includes('col-span-2') ? 'aspect-[16/9]' : 'aspect-square'}`}
                        onClick={() => setLightboxIndex(index)}
                    >
                        <div
                            className="w-full h-full bg-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                            style={{
                                backgroundImage: `url(${photo.src})`,
                                backgroundPosition: photo.position,
                                filter: photo.filter,
                            }}
                            aria-label={photo.alt}
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 pointer-events-none">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-white text-lg drop-shadow-lg">zoom_in</span>
                                <span className="text-white text-xs font-semibold drop-shadow-lg">{photo.alt}</span>
                            </div>
                        </div>
                        {/* Corner accent */}
                        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-300 rounded-tr-lg" />
                        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-300 rounded-bl-lg" />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <motion.img
                            key={lightboxIndex}
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            src={photos[lightboxIndex].src}
                            alt={photos[lightboxIndex].alt}
                            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain"
                            style={{
                                objectPosition: photos[lightboxIndex].position,
                            }}
                        />

                        {/* Navigation arrows */}
                        {lightboxIndex > 0 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
                            >
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                        )}
                        {lightboxIndex < photos.length - 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
                            >
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        )}

                        <button
                            onClick={() => setLightboxIndex(null)}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        {/* Photo counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-white text-xs font-bold tracking-wider flex items-center gap-3">
                            <span className="material-symbols-outlined text-sm">photo_library</span>
                            {lightboxIndex + 1} / {photos.length}
                        </div>

                        {/* Caption */}
                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/70 text-sm font-serif italic">
                            {photos[lightboxIndex].alt}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
