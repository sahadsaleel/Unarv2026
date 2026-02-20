import React from 'react'
import { motion } from 'framer-motion'
import { Music, Star, Award, CheckCircle, Mic, Globe } from 'lucide-react'
import singerImage from '../assets/images3.png'

const Artist = () => {
    return (
        <div className="pt-20">
            {/* Dark mosaic hero */}
            <section className="relative pattern-bg py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark/60"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gold text-sm uppercase tracking-[0.3em] font-bold mb-4">Chief Performer</p>
                    <h1 className="text-6xl md:text-8xl font-black text-white font-amiri mb-3">I. P. Sidhique</h1>
                    <div className="text-gold/50 text-lg">ഐ. പി. സിദ്ദീഖ്</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 mosque-overlay h-32 opacity-40"></div>
            </section>

            {/* Bio */}
            <section className="section-padding pattern-bg-light">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        {/* Left: Portrait box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5"
                        >
                            <div className="relative">
                                {/* Gold glow */}
                                <div className="absolute -inset-6 bg-gold/10 blur-3xl rounded-full"></div>
                                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-gold/20 bg-primary aspect-[4/5] flex flex-col items-center justify-center shadow-2xl">
                                    <img
                                        src={singerImage}
                                        alt="I. P. Sidhique"
                                        className="w-100 h-100 object-cover absolute inset-0"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark p-8">
                                        <p className="text-gold text-xs uppercase tracking-widest mb-1">Chief Performer</p>
                                        <h3 className="text-white text-2xl font-bold font-amiri">I. P. Sidhique</h3>
                                        <p className="text-white/50 text-sm">Renowned Malayalam Playback Singer</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Bio content */}
                        <div className="lg:col-span-7">
                            <span className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                                <Star className="w-4 h-4" /> Artist Profile
                            </span>
                            <h2 className="text-4xl font-bold font-amiri text-primary mb-6">The Voice That Moves Hearts</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                I. P. Sidhique is a celebrated Malayalam singer and stage performer with an extraordinary ability to connect emotionally with his audience. His voice carries warmth, soul, and a depth of feeling that transcends language.
                            </p>
                            <p className="text-slate-500 leading-relaxed mb-10">
                                Having performed across the Gulf region, India, and Europe, his expansive repertoire spans Sufi devotional music, folk ballads, film hits, and contemporary pop. His performance at Unarv 2026 promises to be an evening of pure musical magic for the Malayali community in Riyadh.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    "Award-winning Playback Singer",
                                    "1000+ Stage Performances Globally",
                                    "Sufi & Devotional Music Expert",
                                    "Malayalam Music Icon – GCC",
                                    "Performer of the Year – Multiple",
                                    "Community Ambassador – Riyadh"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { icon: Mic, label: 'Performances', value: '1000+' },
                                    { icon: Globe, label: 'Countries', value: '15+' },
                                    { icon: Award, label: 'Awards', value: '50+' },
                                ].map(({ icon: Icon, label, value }, i) => (
                                    <div key={i} className="islamic-card p-6 text-center">
                                        <Icon className="w-6 h-6 text-gold mx-auto mb-2" />
                                        <div className="text-2xl font-black text-primary font-amiri">{value}</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wider">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Artist
