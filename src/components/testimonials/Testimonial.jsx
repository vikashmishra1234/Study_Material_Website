

import { motion } from 'framer-motion'
import { Star, User } from 'lucide-react'
import { testimonials } from './testimonials'

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-center text-white mb-12">What Our Users Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <User className="text-gray-500" />
            </div>
          )}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{testimonial.name}</h2>
            <p className="text-gray-600">{testimonial.role}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

