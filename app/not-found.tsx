'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#120524] text-white flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
       
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 8 }).map((_, i) => {
                    const size = 3 + ((i * 5) % 4);
                    const top = (i * 41 + 11) % 100;
                    const left = (i * 59 + 19) % 100;
                    const duration = 4 + (i % 3);

                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-slate-300/30"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                top: `${top}%`,
                                left: `${left}%`,
                            }}
                            animate={{
                                y: [0, -25, 0],
                                opacity: [0.2, 0.7, 0.2],
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


            <div className="max-w-xl w-full mx-auto text-center relative z-10 space-y-8   p-8 sm:p-12 rounded-3xl shadow">
                
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center  text-red-400 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-inner"
                >
                    <span>Error 404 • Page Not Found</span>
                </motion.div>

          
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-3"
                >
                    <h1 className="text-6xl sm:text-8xl font-black tracking-wider text-transparent bg-clip-text bg-violet-400 ">
                        404
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                        Looks like you&apos;ve wandered off the digital grid.
                    </h2>
                </motion.div>

    
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto"
                >
                    The page you are looking for might have been moved, deleted, or never existed in this dimension. Let&apos;s get you back on track.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
                >
                    {/* Go Back Button */}
                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-purple-100 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-all group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Go Back</span>
                    </button>

                    {/* Return Home Button */}
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-violet-400 text-slate-950 font-bold text-sm hover:text-white flex items-center justify-center gap-2 transition-all "
                    >
                        <Home className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Link>
                </motion.div>

        
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="pt-6  text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4"
                >
                    <span className="text-purple-300">Popular destinations:</span>
                    <Link href="/#service" className="hover:text-amber-300 transition-colors">Services</Link>
                    <span>•</span>
                    <Link href="/#about" className="hover:text-amber-300 transition-colors">About Us</Link>
                    <span>•</span>
                    <Link href="/career" className="hover:text-amber-300 transition-colors">Career</Link>
                </motion.div>
            </div>
        </main>
    );
}