import React from 'react';
import { ChevronDown, ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const dropdownCardStyle =
    'w-72 rounded-xl shadow-lg px-5 py-4 text-left transition-all';
  const dropdownArrowStyle =
    'absolute top-full left-0 mt-2 space-y-2 z-50';

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">BASE2BRAND</div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 relative">

          {/* Home */}
          <div onClick={() => navigate('/')} className="hover:text-white cursor-pointer">
            Home
          </div>

          {/* About Us */}
          <div className="relative group cursor-pointer">
  <div className="flex items-center gap-1 hover:text-white">
    About Us <ChevronDown className="w-4 h-4" />
  </div>

  <div className="absolute top-full left-0 mt-2 z-50 hidden group-hover:flex bg-black px-4 py-4 rounded-xl shadow-lg gap-4">
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
  <div className="flex items-center gap-1 hover:text-white">
    Services <ChevronDown className="w-4 h-4" />
  </div>

  <div className="absolute top-full left-0 mt-2 z-50 hidden group-hover:flex bg-black px-4 py-4 rounded-xl shadow-lg gap-4">
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
          <div onClick={() => navigate('/portfolio')} className="hover:text-white cursor-pointer">
            Portfolio
          </div>

          {/* Case Study */}
          <div onClick={() => navigate('/case')} className="hover:text-white cursor-pointer">
            Case Study
          </div>

          {/* ERP Integration */}
          <div className="relative group cursor-pointer">
  <div className="flex items-center gap-1 hover:text-white">
    ERP Integration <ChevronDown className="w-4 h-4" />
  </div>

  <div className="absolute top-full left-0 mt-2 z-50 hidden group-hover:flex bg-black px-4 py-4 rounded-xl shadow-lg gap-4">
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
