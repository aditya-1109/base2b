import React from 'react';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">BASE2BRAND</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">About Us</a>
            <a href="#" className="hover:text-blue-500">Services</a>
            <a href="#" className="hover:text-blue-500">Portfolio</a>
            <a href="#" className="hover:text-blue-500">Case Study</a>
            <a href="#" className="hover:text-blue-500">ERP Integration</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Contact
            </button>
            <button className="p-2 rounded-full bg-gray-800">
              <Phone className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    
  )
}
