import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Plane, ShieldCheck, Phone } from 'lucide-react'
import sponsorLogo from '../assets/images1.jpg'
import sponsorPoster from '../assets/images2.jpg'

import sponcer1 from '../assets/sponcer1.jpg'
import sponcer2 from '../assets/sponcer2.jpg'
import sponcer3 from '../assets/sponcer3.jpg'
import sponcer4 from '../assets/sponcer4.jpg'
import sponcer5 from '../assets/sponcer5.jpg'

const StarSvg = ({ className }) => (
    <svg viewBox="0 0 40 40" className={className}>
        <polygon points="20,2 24,16 38,16 27,25 31,38 20,30 9,38 13,25 2,16 16,16" fill="currentColor" />
        <circle cx="20" cy="20" r="5" fill="#0d1f17" />
    </svg>
)

const Sponsors = () => {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-24 pattern-bg overflow-hidden">
                <div className="absolute inset-0 bg-dark/80"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <StarSvg className="w-10 h-10 text-gold mx-auto mb-5" />
                    <h1 className="section-title text-white mb-4">Our Sponsors</h1>
                    <div className="gold-divider"><span className="text-gold">✦</span></div>
                    <p className="text-white/60">Proudly supported by organizations that share our values.</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 mosque-overlay h-24 opacity-40"></div>
            </section>

            {/* Main Sponsor Feature */}
            <section className="section-padding pattern-bg-light">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-4">
                        <span className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/20 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                            <StarSvg className="w-4 h-4 text-gold" /> Principal Sponsor
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 items-stretch mt-12">
                        {/* Logo Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="islamic-card p-10 flex flex-col items-center justify-center text-center"
                        >
                            <div className="mb-8">
                                <img
                                    src={sponsorLogo}
                                    alt="Global Travel & Tourism"
                                    className="w-56 h-auto object-contain mx-auto drop-shadow-lg"
                                />
                            </div>
                            <h2 className="text-3xl font-black text-primary font-amiri mb-2">Global Travel & Tourism</h2>
                            <p className="text-gold font-semibold mb-6 text-sm uppercase tracking-widest">KSA • UAE • India</p>
                            <p className="text-slate-500 leading-relaxed mb-8 max-w-sm">
                                Your trusted travel partner for visa processing, flight bookings, holiday packages, and corporate travel solutions across the Gulf and beyond.
                            </p>

                            <div className="grid grid-cols-3 gap-4 w-full">
                                {[
                                    { icon: Globe, label: 'GCC Operations' },
                                    { icon: Plane, label: 'Air Ticketing' },
                                    { icon: ShieldCheck, label: 'Visa Services' },
                                ].map(({ icon: Icon, label }, i) => (
                                    <div key={i} className="p-4 bg-cream border border-gold/20 rounded-2xl text-center">
                                        <Icon className="w-6 h-6 text-gold mx-auto mb-2" />
                                        <p className="text-xs text-slate-500 font-semibold">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Poster Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="islamic-card overflow-hidden relative group"
                        >
                            <img
                                src={sponsorPoster}
                                alt="Global Travel & Tourism - Explore the Globe with Global"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[500px]"
                            />
                            {/* Contact overlay */}
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark/90 to-transparent p-8">
                                <p className="text-gold font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Phone className="w-4 h-4" /> Contact
                                </p>
                                <p className="text-white font-bold text-lg">+966 56 488 5282</p>
                                <p className="text-white/70">+966 56 985 3924</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* All Sponsors Grid */}
            <section className="section-padding bg-cream">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="section-title text-primary mb-4">Our Partners</h2>
                        <div className="gold-divider"><span className="text-gold">✦</span></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[sponcer1, sponcer2, sponcer3, sponcer4, sponcer5].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-md border border-gold/10 flex items-center justify-center hover:shadow-lg transition-all"
                            >
                                <img
                                    src={img}
                                    alt={`Sponsor ${i + 1}`}
                                    className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Sponsor */}
            <section className="py-20 bg-primary">
                <div className="absolute inset-0 pattern-bg opacity-20"></div>
                <div className="relative max-w-3xl mx-auto px-4 text-center">
                    <StarSvg className="w-10 h-10 text-gold mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white font-amiri mb-4">Become a Sponsor</h2>
                    <p className="text-white/60 mb-8">
                        Join Global Travel & Tourism in supporting the Malayali community in Riyadh. Contact our committee for sponsorship packages.
                    </p>
                    <a href="/contact" className="btn-gold">Get in Touch</a>
                </div>
            </section>
        </div>
    )
}

export default Sponsors
