"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TikaIcon, JamaraIcon, ChangaIcon, PingIcon, PujaFlowerIcon } from './DashainIcons';
import DipakFlame from './DipakFlame';

const DiyaIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 text-amber-400" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c0 3-3 5-3 8a3 3 0 0 0 6 0c0-3-3-5-3-8z" fill="currentColor" opacity="0.9" />
        <path d="M2 17h20c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5z" />
        <path d="M12 6v1" />
    </svg>
);

const dashainCards = [
    {
        id: 'tika',
        icon: <TikaIcon className="w-6 h-6 text-amber-400" />,
        nepaliText: 'टीका',
        title: 'Tika - Blessings',
        subtitle: 'Foundation of Trust',
        description: "Elders' blessings and our clients' trust — the foundation of everything we build.",
        accentColor: 'from-red-500/30 via-amber-500/10 to-transparent',
    },
    {
        id: 'jamara',
        icon: <JamaraIcon className="w-6 h-6 text-emerald-400" />,
        nepaliText: 'जमरा',
        title: 'Jamara - Growth',
        subtitle: 'Nurtured Success',
        description: 'Nine days of patient care. That is exactly how we grow your brand and technology stack.',
        accentColor: 'from-emerald-500/30 via-green-500/10 to-transparent',
    },
    {
        id: 'changa',
        icon: <ChangaIcon className="w-6 h-6 text-amber-400" />,
        nepaliText: 'चङ्गा',
        title: 'Changa - New Heights',
        subtitle: 'Soaring Digital Reach',
        description: 'Kites soaring high in the October sky — your business, flying higher every season.',
        accentColor: 'from-amber-500/30 via-yellow-500/10 to-transparent',
    },
    {
        id: 'ping',
        icon: <PingIcon className="w-6 h-6 text-purple-400" />,
        nepaliText: 'पिङ',
        title: 'Ping - Joy',
        subtitle: 'Effortless Flow',
        description: 'The thrill of the bamboo swing — delightful digital experiences that feel completely effortless.',
        accentColor: 'from-purple-500/30 via-indigo-500/10 to-transparent',
    },
];

export const DashainBanner: React.FC = () => {
    return (
        <section className="relative w-full bg-[#120524] text-white overflow-hidden pt-12 sm:pt-16 px-4 sm:px-8 lg:px-16">
            {/* Top Hanging Lights Animation */}
            <div className="absolute top-0 inset-x-0 flex justify-between items-start pointer-events-none z-20 px-2 sm:px-6">
                {[...Array(16)].map((_, i) => {
                    const angle = 5 + (i % 3) * 2;      // swing amplitude: 5°, 7°, 9°
                    const duration = 3 + (i % 3) * 0.4; // one-way swing time

                    return (
                        <motion.div
                            key={i}
                            style={{ transformOrigin: "top center" }}
                            initial={{ rotate: -angle }}
                            animate={{ rotate: angle }}
                            transition={{
                                duration,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut",
                                delay: i * 0.1,
                            }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-0.5 h-3 sm:h-6 bg-emerald-600/80" />
                            <div className="w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 border border-yellow-300/40 shadow-[0_0_10px_rgba(245,158,11,0.6)] flex items-center justify-center">
                                <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-yellow-200 opacity-90" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Glowing Ambient Lights */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[350px] bg-purple-600/15 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
            <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

            {/* Left & Right Dipak Flames (Hidden on mobile for clean UI, visible on md+) */}
            <DipakFlame className="w-20 h-20 sm:w-28 sm:h-28 absolute top-32 left-4 md:left-12 lg:left-20 pointer-events-none hidden md:block" />
            <DipakFlame className="w-20 h-20 sm:w-28 sm:h-28 absolute top-32 right-4 md:right-12 lg:right-20 pointer-events-none hidden md:block" />

            {/* Floating Sparkles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => {
                    const size = 3 + ((i * 7) % 4);
                    const top = (i * 37 + 13) % 100;
                    const left = (i * 53 + 17) % 100;
                    const duration = 4 + (i % 3);

                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-amber-300/40"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                top: `${top}%`,
                                left: `${left}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    );
                })}
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto relative mt-6 sm:mt-10 z-10 space-y-8 sm:space-y-12">
                {/* Header Text */}
                <div className="text-center space-y-3 sm:space-y-4 pt-4">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase"
                    >
                        <DiyaIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse" />
                        <span>VIJAYA DASHAMI 2083</span>
                        <DiyaIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-6xl md:text-7xl pt-2 sm:pt-4 pb-1 sm:pb-2 font-extrabold tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 drop-shadow-[0_4px_25px_rgba(245,158,11,0.4)]"
                    >
                        शुभ विजयादशमी
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto space-y-1 text-slate-300 text-xs sm:text-base md:text-lg font-normal px-2"
                    >
                        <p>May Maa Durga&apos;s blessings bring you success, prosperity and fresh beginnings.</p>
                        <p className="font-semibold text-purple-200">
                            Happy Dashain from all of us at <span className="text-amber-300 font-bold">Cornor Tech</span>. 🙏
                        </p>
                    </motion.div>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
                    {dashainCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="group relative bg-[#1c0a38]/80 hover:bg-[#250d4a] rounded-2xl p-5 sm:p-6 border border-purple-500/20 shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
                        >
                            <motion.span
                                className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                                animate={{ width: ['20%', '70%', '20%'] }}
                                whileHover={{ width: '90%' }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <motion.span
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                                animate={{ width: ['40%', '80%', '40%'] }}
                                whileHover={{ width: '90%' }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                            />

                            <div className={`absolute inset-0 bg-gradient-to-br ${card.accentColor} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                            <div className="relative z-10 flex items-center justify-between mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-purple-950/80 border border-purple-400/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                    {card.icon}
                                </div>
                                <span className="text-2xl sm:text-3xl font-black text-purple-600/20 group-hover:text-amber-400/30 transition-colors select-none">
                                    {card.nepaliText}
                                </span>
                            </div>

                            <div className="relative z-10 space-y-1.5 sm:space-y-2">
                                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                                    {card.title}
                                </h3>

                                <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className="flex justify-center pt-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-bold text-xs sm:text-base shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] flex items-center gap-2 transition-all duration-300"
                    >
                        <span>Start your new beginning this Dashain</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>

            {/* Continuous Marquee Footer */}
            <div className="mt-12 sm:mt-14 -mx-4 sm:-mx-8 lg:-mx-16 py-3 bg-purple-950/70 border-t border-purple-500/20 overflow-hidden flex whitespace-nowrap">
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="flex items-center gap-6 sm:gap-8 font-bold text-xs sm:text-sm tracking-widest text-purple-200 uppercase"
                >
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <PujaFlowerIcon className="w-5 h-5 text-amber-400" />
                            <span>BLESSINGS</span>
                            <PujaFlowerIcon className="w-5 h-5 text-amber-400" />
                            <span>NEW BEGINNINGS</span>
                            <PujaFlowerIcon className="w-5 h-5 text-amber-400" />
                            <span>FAMILY</span>
                            <PujaFlowerIcon className="w-5 h-5 text-amber-400" />
                            <span>PROSPERITY</span>
                            <PujaFlowerIcon className="w-5 h-5 text-amber-400" />
                            <span>SUCCESS</span>
                            <PujaFlowerIcon className="w-5 h-5 text-amber-400" />
                            <span>शुभ विजयादशमी</span>
                            <PingIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
                            <span>पिङ</span>
                            <ChangaIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                            <span>चङ्गा</span>
                            <TikaIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                            <span>टीका</span>
                            <JamaraIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                            <span>जमरा</span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};