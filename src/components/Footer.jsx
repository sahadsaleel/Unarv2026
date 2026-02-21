import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import logo1 from '../assets/logo1.jpeg'
import logo2 from '../assets/logo2.jpeg'

const GOLD = '#c8a84b'
const DARK = '#0d1f17'
const PRIMARY = '#1a3a2a'

const Footer = () => {
    return (
        <footer style={{ backgroundColor: DARK, position: 'relative', overflow: 'hidden' }}>
            {/* Gold top border */}
            <div style={{ height: '2px', background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />

            {/* Pattern background */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c8a84b' stroke-width='0.5' opacity='0.3'%3E%3Cpolygon points='40,5 55,25 75,25 62,40 70,60 40,50 10,60 18,40 5,25 25,25'/%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px',
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', color: 'white' }}>

                    {/* Brand — crescent badge instead of star */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <img
                                src={logo2}
                                alt="Unarv 2026 Logo"
                                style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                            />
                            <div>
                                <div style={{ color: GOLD, fontFamily: "'Amiri', serif", fontWeight: 700, fontSize: '20px', lineHeight: 1 }}>Unarv 2026</div>
                                <div style={{ color: 'rgba(200,168,75,0.4)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '3px' }}>KMCC Riyadh</div>
                            </div>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                            A grand cultural evening honoring our community spirit, organized by KMCC Thavanur Constituency, Riyadh.
                        </p>
                        <div style={{ marginBottom: '24px' }}>
                            <img
                                src={logo1}
                                alt="Unarv 2026 Full Logo"
                                style={{ width: '100%', maxWidth: '200px', height: 'auto', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                <a key={i} href="#" style={{
                                    width: '36px', height: '36px', borderRadius: '50%',
                                    border: '1px solid rgba(200,168,75,0.2)',
                                    background: 'rgba(255,255,255,0.04)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: GOLD, textDecoration: 'none',
                                }}>
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 style={{ color: GOLD, fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>Navigation</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {[
                                ['/', 'Home'], ['/about', 'About'], ['/artist', 'Artist'],
                                ['/details', 'Event Details'], ['/sponsors', 'Sponsors'], ['/contact', 'Contact'],
                            ].map(([path, label]) => (
                                <li key={path}>
                                    <Link to={path} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ color: 'rgba(200,168,75,0.3)' }}>›</span> {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: GOLD, fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <MapPin size={15} style={{ color: GOLD, marginTop: '2px', flexShrink: 0 }} />
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.5 }}>Demora Palace auditorium, Riyadh - Batha</span>
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <Phone size={15} style={{ color: GOLD, flexShrink: 0 }} />
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>+966 59 002 6254</span>
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <Mail size={15} style={{ color: GOLD, flexShrink: 0 }} />
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>info@kmccriyadh.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{
                    marginTop: '48px', paddingTop: '24px',
                    borderTop: '1px solid rgba(200,168,75,0.1)',
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px',
                }}>
                    <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>© 2026 Riyadh KMCC Thavanur Constituency. All rights reserved.</p>
                    <p style={{ color: 'rgba(200,168,75,0.35)', fontSize: '14px', fontFamily: 'serif' }}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
