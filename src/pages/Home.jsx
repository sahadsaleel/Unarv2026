import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Music, Star, Users, ChevronRight, Mic, Globe, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import sponsorLogo from '../assets/images1.jpg'
import sponsorPoster from '../assets/images2.jpg'
import singerImage from '../assets/images3.png'

import sponcer1 from '../assets/sponcer1.jpg'
import sponcer2 from '../assets/sponcer2.jpg'
import sponcer3 from '../assets/sponcer3.jpg'
import sponcer4 from '../assets/sponcer4.jpg'
import sponcer5 from '../assets/sponcer5.jpg'
import sponcer6 from '../assets/sponcer6.jpg'

/* ─── Reusable small components ─── */
const GoldStar = ({ size = 20 }) => (
    <svg viewBox="0 0 40 40" width={size} height={size} style={{ display: 'inline-block' }}>
        <polygon points="20,2 24,16 38,16 27,25 31,38 20,30 9,38 13,25 2,16 16,16" fill="#c8a84b" />
        <circle cx="20" cy="20" r="5" fill="#0d1f17" />
    </svg>
)

const GoldDivider = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '20px 0' }}>
        <div style={{ flex: 1, maxWidth: '200px', height: '1px', background: 'linear-gradient(to right, transparent, #c8a84b)' }} />
        <GoldStar size={16} />
        <div style={{ flex: 1, maxWidth: '200px', height: '1px', background: 'linear-gradient(to left, transparent, #c8a84b)' }} />
    </div>
)

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
})

/* ─── Main Page ─── */
const Home = () => {
    return (
        <div style={{ background: '#fdf6e3' }}>

            {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
            <section
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#0d1f17',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c8a84b' stroke-width='0.5' opacity='0.25'%3E%3Cpolygon points='40,5 55,25 75,25 62,40 70,60 40,50 10,60 18,40 5,25 25,25'/%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '80px 80px',
                    paddingTop: '80px',
                }}
            >
                {/* Radial glow */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(26,58,42,0.8) 0%, rgba(13,31,23,0.95) 70%)',
                    pointerEvents: 'none',
                }} />

                {/* Mosque silhouette */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 160'%3E%3Cpath fill='%230d1f17' fill-opacity='0.9' d='M0,144 C60,130 120,120 180,130 L180,100 L188,100 L188,70 Q196,20 204,70 L204,100 L212,100 L212,130 C280,120 340,130 400,140 C460,150 520,120 580,110 L580,85 L588,85 L588,50 Q596,5 604,50 L604,85 L612,85 L612,110 C680,125 740,150 800,140 C860,130 920,110 980,125 L980,95 L988,95 L988,65 Q996,15 1004,65 L1004,95 L1012,95 L1012,125 C1080,140 1140,155 1200,140 L1200,144 L1440,144 L1440,160 L0,160 Z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    backgroundSize: '100% 100%',
                    opacity: 0.7,
                    pointerEvents: 'none',
                }} />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: '900px', width: '100%' }}>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                        style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}
                    >
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '12px',
                            border: '1px solid rgba(200,168,75,0.35)',
                            padding: '10px 24px', borderRadius: '999px',
                            background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)',
                        }}>
                            <GoldStar size={16} />
                            <span style={{ color: '#c8a84b', fontSize: '12px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                                KMCC Riyadh Thavanur Constituency Committee Presents
                            </span>
                            <GoldStar size={16} />
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}
                    >
                        <h1 style={{
                            fontFamily: "'Amiri', serif",
                            fontSize: 'clamp(72px, 15vw, 140px)',
                            fontWeight: 900, lineHeight: 0.9,
                            margin: '0 0 8px 0',
                            background: 'linear-gradient(135deg, #c8a84b 0%, #f5d78e 45%, #c8a84b 100%)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        }}>
                            Unarv
                        </h1>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(22px, 4vw, 38px)', fontFamily: "'Noto Sans Malayalam', sans-serif", marginBottom: '8px' }}>
                            ഉണർവ്വ്
                        </div>
                        <div style={{ color: 'rgba(200,168,75,0.5)', fontSize: '20px', fontWeight: 700, letterSpacing: '0.3em' }}>
                            ── 2026 ──
                        </div>
                    </motion.div>

                    {/* Event chips */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', margin: '36px 0' }}
                    >
                        {[
                            { icon: <Calendar size={15} />, text: '21 March 2026 · Saturday' },
                            { icon: <Clock size={15} />, text: '7:00 PM' },
                            { icon: <MapPin size={15} />, text: 'Demora Palace auditorium, Riyadh - batha' },
                        ].map(({ icon, text }, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                color: 'white', fontSize: '13px', fontWeight: 600,
                                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(200,168,75,0.2)',
                                padding: '8px 18px', borderRadius: '999px',
                            }}>
                                <span style={{ color: '#c8a84b' }}>{icon}</span> {text}
                            </div>
                        ))}
                    </motion.div>

                    {/* Artist name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                        style={{ marginBottom: '40px' }}
                    >
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
                            Chief Performer
                        </p>
                        <h2 style={{ fontFamily: "'Amiri', serif", color: 'white', fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, margin: '0 0 4px 0' }}>
                            I. P. Sidhique
                        </h2>
                        <p style={{ color: '#c8a84b', fontSize: '14px', fontWeight: 600 }}>Renowned Malayalam Singer</p>
                    </motion.div>

                    {/* CTAs
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                        style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <Link to="/contact" style={{
                            backgroundColor: '#c8a84b', color: '#1a3a2a',
                            fontWeight: 700, fontSize: '16px',
                            padding: '14px 32px', borderRadius: '999px',
                            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                            boxShadow: '0 6px 24px rgba(200,168,75,0.35)',
                        }}>
                            Book Your Seats <ChevronRight size={18} />
                        </Link>
                        <Link to="/about" style={{
                            color: '#c8a84b', fontWeight: 700, fontSize: '16px',
                            padding: '14px 32px', borderRadius: '999px',
                            textDecoration: 'none', border: '1px solid rgba(200,168,75,0.35)',
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                        }}>
                            Learn More
                        </Link>
                    </motion.div> */}
                </div>
            </section>


            {/* ══════════════════════════════════════════
          EVENT INFO STRIP
      ══════════════════════════════════════════ */}
            <section style={{
                backgroundColor: '#1a3a2a',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c8a84b' stroke-width='0.5' opacity='0.1'%3E%3Cpolygon points='40,5 55,25 75,25 62,40 70,60 40,50 10,60 18,40 5,25 25,25'/%3E%3C/g%3E%3C/svg%3E")`,
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'rgba(200,168,75,0.15)' }}>
                        {[
                            { icon: <Calendar size={24} />, label: 'Date', value: '21 March 2026' },
                            { icon: <Clock size={24} />, label: 'Time', value: '7:00 PM' },
                            { icon: <MapPin size={24} />, label: 'Venue', value: 'Demora palace auditorium, Riyadh - batha' },
                            { icon: <Mic size={24} />, label: 'Performer', value: 'I. P. Sidhique' },
                        ].map(({ icon, label, value }, i) => (
                            <div key={i} style={{
                                backgroundColor: '#1a3a2a',
                                padding: '28px 24px', textAlign: 'center',
                            }}>
                                <div style={{ color: '#c8a84b', marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>{icon}</div>
                                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
                                <div style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}>{value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════
          ABOUT THE EVENT
      ══════════════════════════════════════════ */}
            <section style={{ padding: '80px 24px', backgroundColor: '#fdf6e3', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c8a84b' stroke-width='0.5' opacity='0.12'%3E%3Cpolygon points='40,5 55,25 75,25 62,40 70,60 40,50 10,60 18,40 5,25 25,25'/%3E%3C/g%3E%3C/svg%3E")` }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <p style={{ color: '#c8a84b', fontWeight: 700, fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>About the Event</p>
                        <h2 style={{ fontFamily: "'Amiri', serif", fontSize: 'clamp(32px, 5vw, 52px)', color: '#1a3a2a', margin: '0 0 8px 0', fontWeight: 700 }}>
                            An Evening to Remember
                        </h2>
                        <GoldDivider />
                        <p style={{ color: '#6b7280', fontSize: '17px', lineHeight: 1.8, maxWidth: '640px', margin: '0 auto' }}>
                            Unarv 2026 is a grand cultural evening celebrating the Malayali spirit in the heart of Riyadh, brought to you by the KMCC Thavanur Constituency Committee.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {[
                            { icon: <Music size={32} />, title: 'Live Melodies', body: 'Soul-stirring Malayalam hits performed live by the maestro I. P. Sidhique in one magical evening.' },
                            { icon: <Users size={32} />, title: 'Community Spirit', body: 'Come together with the Malayali diaspora of Riyadh in a powerful celebration of heritage and belonging.' },
                            { icon: <Star size={32} />, title: 'Cultural Heritage', body: 'A curated programme blending devotional music, folk classics, and contemporary hits in an elegant setting.' },
                        ].map(({ icon, title, body }, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.15)}
                                style={{
                                    background: 'white', borderRadius: '24px', padding: '36px',
                                    border: '1px solid rgba(200,168,75,0.15)',
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                                    textAlign: 'center',
                                }}
                            >
                                <div style={{
                                    width: '64px', height: '64px', borderRadius: '16px',
                                    background: 'rgba(26,58,42,0.06)', border: '1px solid rgba(200,168,75,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 20px', color: '#c8a84b',
                                }}>{icon}</div>
                                <h3 style={{ color: '#1a3a2a', fontSize: '20px', fontWeight: 700, marginBottom: '12px', fontFamily: "'Amiri', serif" }}>{title}</h3>
                                <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: '15px' }}>{body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════════
          ARTIST SPOTLIGHT
      ══════════════════════════════════════════ */}
            <section style={{
                padding: '80px 24px',
                backgroundColor: '#1a3a2a',
                backgroundImage: `url("data:image/svg+xml,%3Csv xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c8a84b' stroke-width='0.5' opacity='0.12'%3E%3Cpolygon points='40,5 55,25 75,25 62,40 70,60 40,50 10,60 18,40 5,25 25,25'/%3E%3C/g%3E%3C/svg%3E")`,
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                    {/* Text */}
                    <motion.div {...fadeUp()}>
                        <p style={{ color: '#c8a84b', fontWeight: 700, fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px' }}>Featured Artist</p>
                        <h2 style={{ fontFamily: "'Amiri', serif", color: 'white', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, margin: '0 0 8px 0' }}>I. P. Sidhique</h2>
                        <p style={{ color: 'rgba(200,168,75,0.6)', fontFamily: "'Noto Sans Malayalam', sans-serif", marginBottom: '24px', fontSize: '18px' }}>ഐ. പി. സിദ്ദീഖ്</p>
                        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px', maxWidth: '480px' }}>
                            A household name among Malayalam music lovers, I. P. Sidhique's powerful vocals and emotional depth have captivated audiences across the Middle East and beyond. Unarv 2026 will be his most intimate performance yet in Riyadh.
                        </p>
                        <div style={{ display: 'flex', gap: '32px', marginBottom: '36px' }}>
                            {[{ n: '1000+', l: 'Performances' }, { n: '15+', l: 'Countries' }, { n: '50+', l: 'Awards' }].map(({ n, l }, i) => (
                                <div key={i} style={{ textAlign: 'center' }}>
                                    <div style={{ fontFamily: "'Amiri', serif", color: '#c8a84b', fontSize: '32px', fontWeight: 900, lineHeight: 1 }}>{n}</div>
                                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>{l}</div>
                                </div>
                            ))}
                        </div>
                        <Link to="/artist" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            backgroundColor: '#c8a84b', color: '#1a3a2a',
                            fontWeight: 700, padding: '12px 28px', borderRadius: '999px',
                            textDecoration: 'none', fontSize: '15px',
                        }}>
                            View Full Profile <ChevronRight size={16} />
                        </Link>
                    </motion.div>

                    {/* Artist card */}
                    <motion.div {...fadeUp(0.2)} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            width: '320px', height: '400px', borderRadius: '32px',
                            background: 'linear-gradient(135deg, #0d1f17, #2a5a3a)',
                            border: '2px solid rgba(200,168,75,0.25)',
                            display: 'flex', flexDirection: 'column',
                            position: 'relative', overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                        }}>
                            <img
                                src={singerImage}
                                alt="A. P. Sidhique"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'contrast(1.1) brightness(0.9)',
                                }}
                            />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', background: 'linear-gradient(to top, rgba(13,31,23,0.95), transparent)' }}>
                                <p style={{ color: '#c8a84b', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>Chief Performer</p>
                                <p style={{ color: 'white', fontFamily: "'Amiri', serif", fontSize: '22px', fontWeight: 700, margin: 0 }}>I. P. Sidhique</p>
                                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '2px' }}>Malayalam Playback Singer</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ══════════════════════════════════════════
          ORGANIZER SECTION
      ══════════════════════════════════════════ */}
            <section style={{ padding: '80px 24px', backgroundColor: '#fdf6e3' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div {...fadeUp()}
                        style={{
                            background: 'white', borderRadius: '32px',
                            border: '1px solid rgba(200,168,75,0.2)',
                            boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
                            padding: '56px 48px',
                        }}
                    >
                        <GoldStar size={48} />
                        <GoldDivider />
                        <p style={{ color: '#c8a84b', fontWeight: 700, fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>
                            Organized by
                        </p>
                        <h3 style={{ fontFamily: "'Amiri', serif", color: '#1a3a2a', fontSize: '36px', fontWeight: 700, margin: '0 0 4px 0' }}>
                            Riyadh KMCC
                        </h3>
                        <p style={{ color: '#c8a84b', fontWeight: 600, fontSize: '15px', marginBottom: '20px', letterSpacing: '0.05em' }}>
                            Thavanur Constituency Committee
                        </p>
                        <GoldDivider />
                        <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.8, margin: '20px 0 32px' }}>
                            Committed to preserving the cultural identity of the Malayali community in Saudi Arabia through impactful events, social welfare, and community development initiatives.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/about" style={{
                                backgroundColor: '#1a3a2a', color: '#c8a84b',
                                fontWeight: 700, padding: '12px 28px', borderRadius: '999px',
                                textDecoration: 'none', fontSize: '15px',
                                border: '1px solid rgba(200,168,75,0.3)',
                            }}>
                                Our Mission
                            </Link>
                            <Link to="/contact" style={{
                                backgroundColor: '#c8a84b', color: '#1a3a2a',
                                fontWeight: 700, padding: '12px 28px', borderRadius: '999px',
                                textDecoration: 'none', fontSize: '15px',
                            }}>
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ══════════════════════════════════════════
          SPONSOR BANNER
      ══════════════════════════════════════════ */}
            <section style={{
                padding: '56px 24px',
                backgroundColor: '#0d1f17',
                borderTop: '1px solid rgba(200,168,75,0.15)',
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Our Partners</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {/* Core Logo */}
                        <div style={{ background: 'white', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
                            <img
                                src={sponsorLogo}
                                alt="Global Travel & Tourism"
                                style={{ height: '64px', width: 'auto', objectFit: 'contain', display: 'block' }}
                            />
                        </div>

                        {/* New Sponsors */}
                        {[sponcer1, sponcer2, sponcer3, sponcer4, sponcer5, sponcer6].map((img, i) => (
                            <div key={i} style={{ background: 'white', padding: '12px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                                <img
                                    src={img}
                                    alt={`Sponsor ${i + 1}`}
                                    style={{ height: '48px', width: 'auto', objectFit: 'contain', display: 'block' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
