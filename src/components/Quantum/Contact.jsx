'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const ContactInfo = () => {
  return (
    <div id='contact' className="bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-3xl w-full mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-gray-800">
          Get in Touch
        </h1>
        <p className="text-gray-600 mb-8 text-center text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          We're here to help and answer any question you might have. We look forward to hearing from you and helping you achieve your academic goals.
        </p>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ContactItem 
            icon={<Mail className="w-6 h-6 text-blue-600" />}
            title="Email"
            content="vikashmishra8371@gmail.com"
            link="mailto:vikashmishra8371@gmail.com"
          />
          <ContactItem 
            icon={<Phone className="w-6 h-6 text-blue-600" />}
            title="Phone"
            content="+91-8979481819"
            link="tel:+918979481819"
          />
          <ContactItem 
            icon={<MapPin className="w-6 h-6 text-blue-600" />}
            title="Address"
            content="Near New Bus Stand, Mathura, Uttar Pradesh, India"
            link="https://maps.app.goo.gl/xXhtgwGsudtd1rHu7"
          />
        </div>
      </motion.div>
    </div>
  )
}

const ContactItem = ({ icon, title, content, link }) => {
  return (
    <motion.a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl transition-all duration-300 ease-in-out hover:bg-blue-50 hover:shadow-md group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="mb-4 p-3 bg-blue-100 rounded-full"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <div>
        <p className="text-sm font-medium text-gray-500 mb-2">{title}</p>
        <p className="text-base sm:text-lg text-gray-800 group-hover:text-blue-700 transition-colors duration-300 mb-2">
          {content}
        </p>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 mt-2" />
    </motion.a>
  )
}

export default ContactInfo

