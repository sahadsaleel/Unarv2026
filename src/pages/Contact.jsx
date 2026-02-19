import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react'

const GOLD = '#c8a84b'
const DARK = '#0d1f17'
const PRIMARY = '#1a3a2a'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
})

const Contact = () => {
    return (
        <div style={{ paddingTop: '72px' }}>

            {/* ── Hero ── */}
            <section style={{
                position: 'relative', padding: '96px 24px 80px',
                backgroundColor: DARK,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c8a84b' stroke-width='0.5' opacity='0.2'%3E%3Cpolygon points='40,5 55,25 75,25 62,40 70,60 40,50 10,60 18,40 5,25 25,25'/%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px',
                overflow: 'hidden',
                textAlign: 'center',
            }}>
                {/* Mosque silhouette */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'%3E%3Cpath fill='%230d1f17' d='M0,90 C60,80 120,75 180,82 L180,62 L188,62 L188,42 Q196,12 204,42 L204,62 L212,62 L212,82 C280,75 340,82 400,88 C460,94 520,75 580,68 L580,52 L588,52 L588,32 Q596,5 604,32 L604,52 L612,52 L612,68 C680,80 740,96 800,88 C860,80 920,68 980,78 L980,58 L988,58 L988,38 Q996,10 1004,38 L1004,58 L1012,58 L1012,78 C1080,88 1140,96 1200,88 L1200,90 L1440,90 L1440,100 L0,100 Z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundSize: '100% 100%',
                }} />
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ color: GOLD, fontWeight: 700, fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px' }}>Unarv 2026</p>
                    <h1 style={{ fontFamily: "'Amiri', serif", color: 'white', fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 700, margin: '0 0 16px' }}>Get In Touch</h1>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', margin: '16px 0' }}>
                        <div style={{ flex: 1, maxWidth: '120px', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})` }} />
                        <span style={{ color: GOLD, fontSize: '18px' }}>✦</span>
                        <div style={{ flex: 1, maxWidth: '120px', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})` }} />
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '17px', lineHeight: 1.7 }}>
                        Reach out to the KMCC Riyadh Thavanur Committee for event inquiries, sponsorships, or volunteering.
                    </p>
                </div>
            </section>

            {/* ── Contact Cards ── */}
            <section style={{ padding: '80px 24px', backgroundColor: '#fdf6e3', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c8a84b' stroke-width='0.5' opacity='0.1'%3E%3Cpolygon points='40,5 55,25 75,25 62,40 70,60 40,50 10,60 18,40 5,25 25,25'/%3E%3C/g%3E%3C/svg%3E")` }}>
                <div style={{ maxWidth: '960px', margin: '0 auto' }}>

                    {/* Org title */}
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <h2 style={{ fontFamily: "'Amiri', serif", color: PRIMARY, fontSize: '38px', fontWeight: 700, margin: '0 0 6px' }}>KMCC Riyadh</h2>
                        <p style={{ color: GOLD, fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                            Thavanur Niyojaka Mandalam Committee
                        </p>
                    </motion.div>

                    {/* Contact info cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' }}>
                        {[
                            {
                                icon: <MapPin size={28} />,
                                title: 'Address',
                                lines: ['KMCC Riyadh, Thavanur Constituency Hall', 'Riyadh, Kingdom of Saudi Arabia'],
                            },
                            {
                                icon: <Phone size={28} />,
                                title: 'Phone',
                                lines: ['+966 5XX XXX XXX', '+966 5YY YYY YYY'],
                            },
                            {
                                icon: <Mail size={28} />,
                                title: 'Email',
                                lines: ['info@kmccriyadh.org', 'events@thavanur.kmcc'],
                            },
                        ].map(({ icon, title, lines }, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.1)}
                                style={{
                                    background: 'white', borderRadius: '24px', padding: '32px',
                                    border: '1px solid rgba(200,168,75,0.15)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px',
                                }}
                            >
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '16px',
                                    background: 'rgba(26,58,42,0.06)', border: '1px solid rgba(200,168,75,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: GOLD,
                                }}>{icon}</div>
                                <div>
                                    <h3 style={{ color: PRIMARY, fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>{title}</h3>
                                    {lines.map((l, j) => <p key={j} style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6 }}>{l}</p>)}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quick Connect */}
                    <motion.div {...fadeUp(0.3)}
                        style={{
                            background: PRIMARY, borderRadius: '28px', padding: '48px 32px', textAlign: 'center',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c8a84b' stroke-width='0.5' opacity='0.15'%3E%3Cpolygon points='40,5 55,25 75,25 62,40 70,60 40,50 10,60 18,40 5,25 25,25'/%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    >
                        <p style={{ color: 'rgba(200,168,75,0.6)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>
                            Connect Directly
                        </p>
                        <h3 style={{ fontFamily: "'Amiri', serif", color: 'white', fontSize: '32px', fontWeight: 700, margin: '0 0 8px' }}>
                            Reach Us on Social
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', marginBottom: '32px' }}>
                            Our committee is available on WhatsApp and Telegram for quick support.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a
                                href="https://wa.me/9665XXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                                    backgroundColor: '#25D366', color: 'white',
                                    fontWeight: 700, fontSize: '15px',
                                    padding: '14px 28px', borderRadius: '999px',
                                    textDecoration: 'none',
                                }}
                            >
                                <MessageCircle size={20} /> WhatsApp
                            </a>
                            <a
                                href="https://t.me/kmccriyadh"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                                    backgroundColor: '#0088cc', color: 'white',
                                    fontWeight: 700, fontSize: '15px',
                                    padding: '14px 28px', borderRadius: '999px',
                                    textDecoration: 'none',
                                }}
                            >
                                <Send size={20} /> Telegram
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}

export default Contact
