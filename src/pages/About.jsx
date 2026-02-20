import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Award, Sparkles } from 'lucide-react'

const StarSvg = ({ className }) => (
    <svg viewBox="0 0 40 40" className={className}>
        <polygon points="20,2 24,16 38,16 27,25 31,38 20,30 9,38 13,25 2,16 16,16" fill="currentColor" />
        <circle cx="20" cy="20" r="5" fill="#0d1f17" />
    </svg>
)

const About = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="relative py-28 pattern-bg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/60"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <StarSvg className="w-12 h-12 text-gold mx-auto mb-6" />
                    <h1 className="section-title text-white mb-4">About Unarv 2026</h1>
                    <div className="gold-divider"><span className="text-gold">✦</span></div>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        ഉണർവ്വ് — An Awakening of Culture, Music & Community Spirit
                    </p>
                </div>
                {/* mosque silhouette */}
                <div className="absolute bottom-0 left-0 right-0 mosque-overlay h-32 opacity-40"></div>
            </section>

            {/* Event Description */}
            <section className="section-padding pattern-bg-light">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-gold font-bold uppercase tracking-widest text-sm block mb-4">The Spirit</span>
                            <h2 className="text-3xl font-bold text-primary font-amiri mb-6">What is Unarv?</h2>
                            <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    "ഉണർവ്വ്" — a revival of our cultural roots and a celebration of the melodies that bind the Malayali diaspora together.
                                </p>
                                <p>
                                    As the flagship event of Riyadh KMCC Thavanur Constituency gathering, Unarv 2026 brings together the very best in Malayalam music with a soul-stirring live performance by the legendary I. P. Sidhique.
                                </p>
                                <p>
                                    This is more than a concert — it is a gathering of hearts, a reminder of home, and an evening that will be etched in memory forever.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Sparkles, color: 'bg-gold/10 border-gold/20', iconColor: 'text-gold', title: 'Cultural Excellence' },
                                { icon: Users, color: 'bg-primary/10 border-primary/20', iconColor: 'text-primary', title: 'Community Unity' },
                                { icon: Heart, color: 'bg-red-500/10 border-red-500/20', iconColor: 'text-red-400', title: 'Shared Heritage' },
                                { icon: Award, color: 'bg-gold/10 border-gold/20', iconColor: 'text-gold', title: 'World-Class Stage' },
                            ].map(({ icon: Icon, color, iconColor, title }, i) => (
                                <div key={i} className={`p-6 rounded-2xl border ${color} flex flex-col items-center justify-center text-center aspect-square`}>
                                    <Icon className={`w-10 h-10 mb-3 ${iconColor}`} />
                                    <span className="font-semibold text-slate-700 text-sm">{title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Organizing Committee */}
            <section className="section-padding bg-primary">
                <div className="absolute inset-0 pattern-bg opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-white mb-4">Organizing Committee</h2>
                        <div className="gold-divider"><StarSvg className="w-4 h-4 text-gold" /></div>
                        <p className="text-white/60 max-w-xl mx-auto">The dedicated team behind Unarv 2026.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { Icon: Users, title: 'Leadership Team', body: 'Experienced coordinators ensuring every aspect of the event is world-class.' },
                            { Icon: Sparkles, title: 'Cultural Wing', body: 'Curating the finest artistic performances that resonate with our community.' },
                            { Icon: Heart, title: 'Volunteers', body: '100+ dedicated volunteers working tirelessly to make Unarv 2026 memorable.' },
                        ].map(({ Icon, title, body }, i) => (
                            <div key={i} className="bg-white/5 border border-gold/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all">
                                <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Icon className="text-gold w-8 h-8" />
                                </div>
                                <h4 className="font-bold text-white text-lg mb-3">{title}</h4>
                                <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
