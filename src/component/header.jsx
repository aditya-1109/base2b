import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Phone, Menu,  X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const dropdownCardStyle =
    'w-72 rounded-xl shadow-lg px-5 py-4 text-left transition-all';
  const dropdownArrowStyle =
    'absolute top-full left-0 mt-2 space-y-2 z-50';

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
<div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 relative">
          {/* your existing nav items here (Home, About Us, etc.) */}
          {/* ... copy the whole md:flex section from your original code ... */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0a0a0a] flex flex-col gap-4 p-4 md:hidden z-50">
            <div onClick={() => { navigate('/'); toggleMobileMenu(); }} className="cursor-pointer">Home</div>
            <div onClick={() => { navigate('/about'); toggleMobileMenu(); }} className="cursor-pointer">About Us</div>
            <div onClick={() => { navigate('/service'); toggleMobileMenu(); }} className="cursor-pointer">Services</div>
            <div onClick={() => { navigate('/portfolio'); toggleMobileMenu(); }} className="cursor-pointer">Portfolio</div>
            <div onClick={() => { navigate('/case'); toggleMobileMenu(); }} className="cursor-pointer">Case Study</div>
            <div onClick={() => { navigate('/ERP'); toggleMobileMenu(); }} className="cursor-pointer">ERP Integration</div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-2" onClick={() => toggleMobileMenu()}>Contact</button>
          </div>
        )}
        {/* Logo */}
        <div className="text-2xl font-bold">BASE2BRAND</div>

        {/* Menu */}
      
        
        <div className="hidden md:flex items-center gap-8 relative">

          {/* Home */}
          <div onClick={() => navigate('/')} className="cursor-pointer text-white hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:font-bold flex items-center gap-1">
            Home
          </div>

          {/* About Us */}
          <div className="relative group cursor-pointer">
  <div onClick={()=>navigate("/about")} className="cursor-pointer text-white hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:font-bold flex items-center gap-1">
    About Us <ChevronDown className="w-4 h-4" />
  </div>

  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 hidden group-hover:flex bg-black px-4 py-4 rounded-xl shadow-lg gap-4">
    <div
      onClick={() => navigate('/about')}
      className="w-64 rounded-xl bg-blue-200 text-black hover:bg-blue-300 cursor-pointer px-5 py-4 transition-all"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold">About Us</p>
          <p className="text-sm">We are super efficient and humble to serve you</p>
        </div>
        <ArrowRight className="w-4 h-4 mt-1" />
      </div>
    </div>

    <div
      className="w-64 rounded-xl bg-purple-300 text-black hover:bg-purple-400 cursor-pointer px-5 py-4 transition-all"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold">Team</p>
          <p className="text-sm">We are proud of our experienced and accomplished team!</p>
        </div>
        <ArrowRight className="w-4 h-4 mt-1" />
      </div>
    </div>

    <div
      className="w-64 rounded-xl bg-blue-200 text-black hover:bg-blue-300 cursor-pointer px-5 py-4 transition-all"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold">Career</p>
          <p className="text-sm">Check Latest Vacancies</p>
        </div>
        <ArrowRight className="w-4 h-4 mt-1" />
      </div>
    </div>
  </div>
</div>


          {/* Services */}
          <div className="relative group cursor-pointer">
  <div onClick={()=>navigate("/service")} className="cursor-pointer text-white hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:font-bold flex items-center gap-1">
    Services <ChevronDown className="w-4 h-4" />
  </div>

  <div className="absolute top-full left-1/2 mt-2 z-50 hidden group-hover:flex bg-black px-4 py-4 rounded-xl shadow-lg gap-4">
    <div className="w-64 rounded-xl bg-blue-200 text-black hover:bg-blue-300 cursor-pointer px-5 py-4 transition-all">
      <div className="flex justify-between items-start">
        <p className="font-semibold">Digital Marketing</p>
        <ArrowRight className="w-4 h-4 mt-1" />
      </div>
    </div>

    <div className="w-64 rounded-xl bg-blue-200 text-black hover:bg-blue-300 cursor-pointer px-5 py-4 transition-all">
      <div className="flex justify-between items-start">
        <p className="font-semibold">Web Development</p>
        <ArrowRight className="w-4 h-4 mt-1" />
      </div>
    </div>

    <div className="w-64 rounded-xl bg-blue-200 text-black hover:bg-blue-300 cursor-pointer px-5 py-4 transition-all">
      <div className="flex justify-between items-start">
        <p className="font-semibold">App Development</p>
        <ArrowRight className="w-4 h-4 mt-1" />
      </div>
    </div>

    <div className="w-64 rounded-xl bg-blue-200 text-black hover:bg-blue-300 cursor-pointer px-5 py-4 transition-all">
      <div className="flex justify-between items-start">
        <p className="font-semibold">Brand Strategy</p>
        <ArrowRight className="w-4 h-4 mt-1" />
      </div>
    </div>
  </div>
</div>


          {/* Portfolio */}
          <div onClick={() => navigate('/portfolio')} className="cursor-pointer text-white hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:font-bold">
            Portfolio
          </div>

          {/* Case Study */}
          <div onClick={() => navigate('/case')} className="cursor-pointer text-white hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:font-bold">
            Case Study
          </div>

          {/* ERP Integration */}
          <div className="relative group cursor-pointer">
          <div onClick={()=> navigate("/ERP")} className="cursor-pointer text-white hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:font-bold flex items-center gap-1">
  ERP Integration <ChevronDown className="w-4 h-4" />
</div>

  <div className="absolute top-full left-1/2 mt-2 z-50 hidden group-hover:flex bg-black px-4 py-4 rounded-xl shadow-lg gap-4">
    <div className="w-64 rounded-xl bg-blue-200 text-black hover:bg-blue-300 cursor-pointer px-5 py-4 transition-all">
      <div className="flex justify-between items-start">
        <p className="font-semibold">ERP Overview</p>
        <ArrowRight className="w-4 h-4 mt-1" />
      </div>
    </div>

    <div className="w-64 rounded-xl bg-blue-200 text-black hover:bg-blue-300 cursor-pointer px-5 py-4 transition-all">
      <div className="flex justify-between items-start">
        <p className="font-semibold">SAP Integration</p>
        <ArrowRight className="w-4 h-4 mt-1" />
      </div>
    </div>

    <div className="w-64 rounded-xl bg-blue-200 text-black hover:bg-blue-300 cursor-pointer px-5 py-4 transition-all">
      <div className="flex justify-between items-start">
        <p className="font-semibold">Custom ERP Solutions</p>
        <ArrowRight className="w-4 h-4 mt-1" />
      </div>
    </div>
  </div>
</div>

        </div>

        {/* Right Buttons */}
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
  );
}
