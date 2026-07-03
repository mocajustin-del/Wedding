import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FloatingAudioPlayerProps {
    isOpen: boolean;
}

export const FloatingAudioPlayer: React.FC<FloatingAudioPlayerProps> = ({ isOpen }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (isOpen && audioRef.current) {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch((error) => console.log("Audio autoplay prevented by browser", error));
        }
    }, [isOpen]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play()
                    .catch((error) => console.log("Audio play failed", error));
            }
            setIsPlaying(!isPlaying);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <audio
                ref={audioRef}
                loop
                // User's requested song
                src="/shania.mp3"
            />
            <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                onClick={togglePlay}
                className={`fixed bottom-24 right-6 md:right-10 z-40 w-14 h-14 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border-2 transition-all group ${isPlaying
                        ? 'bg-slate-900 border-slate-700 animate-[spin_4s_linear_infinite]'
                        : 'bg-white/90 dark:bg-slate-800/90 border-primary/20 hover:scale-110 active:scale-95'
                    }`}
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                {/* Vinyl Record details */}
                {isPlaying && (
                    <>
                        <div className="absolute inset-1 rounded-full border border-slate-700/50" />
                        <div className="absolute inset-2 rounded-full border border-slate-700/50" />
                        <div className="absolute inset-3 rounded-full border border-slate-700/50" />
                    </>
                )}

                {/* Center Label / Icon */}
                <div className={`w-5 h-5 rounded-full flex items-center justify-center z-10 ${isPlaying ? 'bg-primary' : 'bg-transparent text-primary'}`}>
                    <span className="material-symbols-outlined text-sm" style={{ color: isPlaying ? 'white' : 'inherit' }}>
                        {isPlaying ? 'music_note' : 'music_off'}
                    </span>
                </div>
            </motion.button>

            {/* Sound Wave Animation (Only visible when playing) */}
            {isPlaying && (
                <div className="fixed bottom-[110px] right-6 md:right-10 z-30 flex gap-1 items-end h-4 w-14 justify-center pointer-events-none">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ height: ['4px', '16px', '4px'] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
                            className="w-1 bg-primary rounded-full opacity-70"
                        />
                    ))}
                </div>
            )}
        </>
    );
};
