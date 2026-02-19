import React from 'react'
import { motion } from 'framer-motion'

const EventCard = ({ icon: Icon, title, description }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-2xl shadow-lg border border-primary/5 hover:border-primary/20 transition-all text-center"
        >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </motion.div>
    )
}

export default EventCard
