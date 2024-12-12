import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { GraduationCap, Search, ShoppingCart,Home, Menu, X, HelpCircle } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-primary py-1 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <GraduationCap className="h-8 w-8 text-white" />
            </Link>
            <h1 className="ml-2 text-xl font-semibold text-white">
              Books.com
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-white hover:bg-primary-dark p-2 rounded-full transition-colors duration-200">
              <Home className="h-5 w-5" />
            </Link>
            <Link to="/collections" className="text-white hover:bg-primary-dark p-2 rounded-full transition-colors duration-200">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <button className="text-white hover:bg-primary-dark p-2 rounded-full transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <a href="#contact" className="text-white hover:bg-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Help
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-primary-dark p-2 rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link onClick={()=>{setIsMenuOpen(false)}} to="/" className="text-white hover:bg-primary-dark block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              <Home className="h-5 w-5 inline-block mr-2" />
              Home
            </Link>
            <Link onClick={()=>{setIsMenuOpen(false)}} to="/collections" className="text-white hover:bg-primary-dark block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              <ShoppingCart className="h-5 w-5 inline-block mr-2" />
              Collection
            </Link>
            <a onClick={()=>{setIsMenuOpen(false)}} href="#contact" className="text-white hover:bg-primary-dark block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              <HelpCircle className="h-5 w-5 inline-block mr-2" />
              Help
            </a>
            <button onClick={()=>{setIsMenuOpen(false)}} className="text-white hover:bg-primary-dark w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              <Search className="h-5 w-5 inline-block mr-2" />
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

