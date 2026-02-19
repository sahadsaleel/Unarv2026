import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Artist from './pages/Artist'
import EventDetails from './pages/EventDetails'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact'

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/artist" element={<Artist />} />
                    <Route path="/details" element={<EventDetails />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
