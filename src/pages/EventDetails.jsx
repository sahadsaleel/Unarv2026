import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Navigation, Info, ListChecks } from 'lucide-react'

const StarSvg = ({ className }) => (
    <svg viewBox="0 0 40 40" className={className}>
        <polygon points="20,2 24,16 38,16 27,25 31,38 20,30 9,38 13,25 2,16 16,16" fill="currentColor" />
        <circle cx="20" cy="20" r="5" fill="#0d1f17" />
    </svg>
)

const EventDetails = () => {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-24 pattern-bg overflow-hidden">
                <div className="absolute inset-0 bg-dark/80"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <StarSvg className="w-10 h-10 text-gold mx-auto mb-5" />
                    <h1 className="section-title text-white mb-4">Event Details</h1>
                    <div className="gold-divider"><span className="text-gold">✦</span></div>
                    <p className="text-white/60 max-w-lg mx-auto">All the information you need to join us at Unarv 2026.</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 mosque-overlay h-24 opacity-40"></div>
            </section>

            {/* Content */}
            <section className="section-padding pattern-bg-light">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Sidebar Info */}
                        <div className="space-y-6">
                            {[
                                {
                                    Icon: Calendar,
                                    title: 'When',
                                    lines: ['Saturday, 21 March 2026', 'Doors open at 6:30 PM', 'Programme begins 7:00 PM']
                                },
                                {
                                    Icon: MapPin,
                                    title: 'Where',
                                    lines: ['KMCC Riyadh', 'Thavanur Constituency Hall', 'Kingdom of Saudi Arabia']
                                },
                                {
                                    Icon: Info,
                                    title: 'Entry',
                                    lines: ['By invitation / registration', 'Contact the committee', 'for your pass']
                                },
                            ].map(({ Icon, title, lines }, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`islamic-card p-7 ${i === 2 ? 'bg-primary border-gold/20' : ''}`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${i === 2 ? 'bg-gold/20' : 'bg-primary/10 border border-gold/20'}`}>
                                        <Icon className={`w-6 h-6 ${i === 2 ? 'text-gold' : 'text-gold'}`} />
                                    </div>
                                    <h3 className={`font-bold text-lg mb-3 ${i === 2 ? 'text-white' : 'text-primary'}`}>{title}</h3>
                                    {lines.map((l, j) => (
                                        <p key={j} className={`text-sm ${i === 2 ? 'text-white/60' : 'text-slate-500'}`}>{l}</p>
                                    ))}
                                </motion.div>
                            ))}
                        </div>

                        {/* Programme + Map */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="islamic-card p-10">
                                <div className="flex items-center space-x-3 mb-10">
                                    <div className="w-12 h-12 bg-primary/10 border border-gold/20 rounded-xl flex items-center justify-center">
                                        <ListChecks className="text-gold w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary font-amiri">Programme Flow</h3>
                                        <p className="text-slate-400 text-sm">21 March 2026 — Riyadh KMCC</p>
                                    </div>
                                </div>

                                <div className="space-y-0 ml-4 border-l-2 border-gold/20 pl-8 relative">
                                    {[
                                        { time: '6:30 PM', event: 'Doors Open', desc: 'Guest registration and seating' },
                                        { time: '7:00 PM', event: 'Inauguration Ceremony', desc: 'Welcome address by KMCC leadership' },
                                        { time: '7:30 PM', event: 'Unarv 2026 Launch', desc: 'Official commencement of the programme' },
                                        { time: '7:45 PM', event: 'A. P. Sidhique — Act 1', desc: 'Opening medley & soulful hits' },
                                        { time: '8:45 PM', event: 'Intermission', desc: 'Community interaction & refreshments' },
                                        { time: '9:15 PM', event: 'A. P. Sidhique — Act 2', desc: 'Grand finale performance' },
                                        { time: '10:30 PM', event: 'Vote of Thanks', desc: 'Programme concludes' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="relative pb-8 last:pb-0">
                                            <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-gold ring-4 ring-gold/20"></div>
                                            <div className="text-xs font-black text-gold uppercase tracking-widest mb-1">{item.time}</div>
                                            <h4 className="text-lg font-bold text-primary font-amiri">{item.event}</h4>
                                            <p className="text-slate-400 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Map placeholder styled */}
                            <div className="islamic-card h-48 relative flex items-center justify-center bg-slate-50 overflow-hidden">
                                <div className="absolute inset-0 pattern-bg-light opacity-50"></div>
                                <div className="relative text-center text-slate-400">
                                    <Navigation className="w-10 h-10 mx-auto mb-2 text-gold" />
                                    <p className="font-bold text-primary">KMCC Riyadh – Thavanur Hall</p>
                                    <p className="text-sm">Kingdom of Saudi Arabia</p>
                                </div>
                                <div className="absolute bottom-4 right-4">
                                    <button className="bg-primary text-gold text-sm px-5 py-2 rounded-full font-bold border border-gold/20">
                                        Open Maps
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EventDetails
