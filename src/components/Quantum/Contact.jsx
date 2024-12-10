import React from 'react'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const ContactInfo = () => {
  return (
    <div id='contact' className="bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full mx-auto transition-all duration-300 ease-in-out hover:shadow-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800 animate-fade-in">Get in Touch</h1>
        <p className="text-gray-600 mb-8 text-center text-sm sm:text-base">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
        <div className="grid gap-6 sm:gap-8">
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
            content="Near New Bus Stand, Mathura, Uttar Pradesh ,India"
            link="https://maps.app.goo.gl/xXhtgwGsudtd1rHu7"
          />
        </div>
      </div>
    </div>
  )
}


const ContactItem = ({ icon, title, content, link }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl transition-all duration-300 ease-in-out hover:bg-blue-50 hover:shadow-md group"
    >
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div className="flex-grow">
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <p className="text-base sm:text-lg text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
          {content}
        </p>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
    </a>
  )
}

export default ContactInfo

