import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import logo2 from '../assets/logo2.jpeg'

const NAV_GOLD = '#c8a84b'
const NAV_DARK = '#0d1f17'
const NAV_PRIMARY = '#1a3a2a'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Artist', path: '/artist' },
    { name: 'Details', path: '/details' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [location.pathname])

    useEffect(() => {
        setIsOpen(false)
        window.scrollTo(0, 0)
    }, [location.pathname])

    const isTransparent = isHome && !scrolled
    const navStyle = {
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: isTransparent ? 'transparent' : NAV_DARK,
        boxShadow: isTransparent ? 'none' : '0 2px 20px rgba(0,0,0,0.4)',
    }

    return (
        <nav style={navStyle}>
            {/* Gold top line */}
            <div style={{ height: '2px', background: `linear-gradient(to right, transparent, ${NAV_GOLD}, transparent)` }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

                    {/* ── Logo (no star icon) ── */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                        <img
                            src={logo2}
                            alt="Unarv 2026 Logo"
                            style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                        />
                        <div>
                            <div style={{ color: NAV_GOLD, fontFamily: "'Amiri', serif", fontWeight: 700, fontSize: '20px', lineHeight: 1 }}>
                                Unarv 2026
                            </div>
                            <div style={{ color: 'rgba(200,168,75,0.5)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '2px' }}>
                                KMCC Riyadh
                            </div>
                        </div>
                    </Link>

                    {/* ── Desktop links (no Book Seats button) ── */}
                    <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
                        {navLinks.map(link => {
                            const isActive = location.pathname === link.path
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    style={{
                                        color: isActive ? NAV_GOLD : 'rgba(255,255,255,0.7)',
                                        fontWeight: 600, fontSize: '14px', letterSpacing: '0.04em',
                                        textDecoration: 'none', paddingBottom: '4px',
                                        borderBottom: isActive ? `2px solid ${NAV_GOLD}` : '2px solid transparent',
                                        transition: 'color 0.2s, border-color 0.2s',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.color = NAV_GOLD }}
                                    onMouseLeave={e => { e.currentTarget.style.color = isActive ? NAV_GOLD : 'rgba(255,255,255,0.7)' }}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                    </div>

                    {/* ── Mobile hamburger ── */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(o => !o)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: NAV_GOLD, padding: '8px' }}
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* ── Mobile dropdown (no Book Seats button) ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ overflow: 'hidden', backgroundColor: NAV_DARK, borderTop: `1px solid rgba(200,168,75,0.15)` }}
                    >
                        <div style={{ padding: '16px 24px 24px' }}>
                            {navLinks.map(link => {
                                const isActive = location.pathname === link.path
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        style={{
                                            display: 'block', padding: '14px 16px',
                                            color: isActive ? NAV_GOLD : 'rgba(255,255,255,0.75)',
                                            fontWeight: 600, fontSize: '17px', textDecoration: 'none',
                                            borderRadius: '10px',
                                            backgroundColor: isActive ? 'rgba(200,168,75,0.08)' : 'transparent',
                                            marginBottom: '4px', textAlign: 'center',
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
