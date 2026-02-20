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

            {/* Unified Sponsors Grid */}
            <section className="section-padding pattern-bg-light">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/20 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                            <StarSvg className="w-4 h-4 text-gold" /> Our Partners
                        </span>
                        <h2 className="section-title text-primary">Proudly Supporting Unarv 2026</h2>
                        <div className="gold-divider"><span className="text-gold">✦</span></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Global Travel (Original Big Sponsor) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="islamic-card p-10 flex flex-col items-center justify-center text-center min-h-[320px]"
                        >
                            <img
                                src={sponsorLogo}
                                alt="Global Travel & Tourism"
                                className="w-64 h-auto object-contain mx-auto drop-shadow-lg mb-6"
                            />
                            <h2 className="text-2xl font-black text-primary font-amiri mb-2">Global Travel & Tourism</h2>
                            <p className="text-gold font-semibold text-sm uppercase tracking-widest">KSA • UAE • India</p>
                        </motion.div>

                        {/* Other Sponsors (Now Big) */}
                        {[sponcer1, sponcer2, sponcer3, sponcer4, sponcer5].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="islamic-card p-10 flex flex-col items-center justify-center text-center min-h-[320px]"
                            >
                                <img
                                    src={img}
                                    alt={`Sponsor ${i + 1}`}
                                    className="w-64 h-auto object-contain mx-auto drop-shadow-lg"
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
