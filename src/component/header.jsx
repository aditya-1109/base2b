import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Phone, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);


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
            <div onClick={() => navigate("/about")} className="cursor-pointer text-white hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:font-bold flex items-center gap-1">
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
            {/* Nav Item */}
            <div
              onClick={() => navigate("/service")}
              className="cursor-pointer text-white hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:font-bold flex items-center gap-1"
            >
              Services <ChevronDown className="w-4 h-4" />
            </div>

            {/* Dropdown Wrapper */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-4 z-50 hidden w-[100vw] group-hover:flex flex-row flex-wrap max-w-5xl bg-black px-6 py-6 rounded-2xl shadow-xl gap-6 transition-all duration-300">
              {/* Service Cards */}
              {[
                {
                  title: "Shopify Development",
                  desc: "Craft seamless, user-friendly eCommerce stores.",
                  bg: "bg-purple-300 hover:bg-purple-400",
                },
                {
                  title: "Digital Marketing",
                  desc: "Boost online reach with data-driven campaigns.",
                  bg: "bg-blue-200 hover:bg-blue-300",
                },
                {
                  title: "UI/UX Design",
                  desc: "Design engaging, intuitive user experiences.",
                  bg: "bg-purple-300 hover:bg-purple-400",
                },
                {
                  title: "Ecommerce",
                  desc: "Drive sales with scalable online store solutions.",
                  bg: "bg-blue-200 hover:bg-blue-300",
                },
                {
                  title: "Web Development",
                  desc: "Responsive, high-performing websites built right.",
                  bg: "bg-purple-300 hover:bg-purple-400",
                },
                {
                  title: "Mobile App Dev",
                  desc: "Custom mobile apps tailored to your goals.",
                  bg: "bg-blue-200 hover:bg-blue-300",
                },
                {
                  title: "DevOps Services",
                  desc: "Ensure uptime with smooth deployment pipelines.",
                  bg: "bg-purple-300 hover:bg-purple-400",
                },
                {
                  title: "AI Services",
                  desc: "Leverage smart solutions to transform operations.",
                  bg: "bg-blue-200 hover:bg-blue-300",
                },
                {
                  title: "Customer Support",
                  desc: "24/7 support that puts your customers first.",
                  bg: "bg-purple-300 hover:bg-purple-400",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`w-[250px] min-w-[250px] rounded-xl text-black cursor-pointer px-5 py-4 transition-all ${item.bg}`}
                >
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm mt-2">{item.desc}</p>
                </div>
              ))}
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
            <div
              onClick={() => navigate("/ERP")}
              className="cursor-pointer text-white hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:font-bold flex items-center gap-1"
            >
              ERP Integration <ChevronDown className="w-4 h-4" />
            </div>

            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-50 hidden group-hover:flex flex-row flex-wrap w-[100vw] max-w-5xl bg-black px-6 py-6 rounded-2xl shadow-xl gap-6 transition-all duration-300">

              {/* Card 1 */}
              <div className="w-64 rounded-xl bg-[#D8B4FE] text-black hover:bg-[#C084FC] cursor-pointer px-5 py-4 transition-all">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-sm">
                    Uni-Commerce Integration With Shopify
                  </p>
                  <ArrowRight className="w-4 h-4 mt-1" />
                </div>
                <p className="text-xs mt-2 text-gray-700">
                  Streamline inventory control via seamless Uni-Commerce & Shopify syncing.
                </p>
              </div>

              {/* Card 2 */}
              <div className="w-64 rounded-xl bg-[#BFDBFE] text-black hover:bg-[#93C5FD] cursor-pointer px-5 py-4 transition-all">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-sm">
                    Odoo Integration With Shopify
                  </p>
                  <ArrowRight className="w-4 h-4 mt-1" />
                </div>
                <p className="text-xs mt-2 text-gray-700">
                  Enhance workflows by linking Odoo ERP with your Shopify backend.
                </p>
              </div>

              {/* Card 3 */}
              <div className="w-64 rounded-xl bg-[#D8B4FE] text-black hover:bg-[#C084FC] cursor-pointer px-5 py-4 transition-all">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-sm">
                    EasyEcom Integration With Shopify
                  </p>
                  <ArrowRight className="w-4 h-4 mt-1" />
                </div>
                <p className="text-xs mt-2 text-gray-700">
                  Automate order & inventory tasks with EasyEcom–Shopify integration.
                </p>
              </div>

              {/* Card 4 */}
              <div className="w-64 rounded-xl bg-[#BFDBFE] text-black hover:bg-[#93C5FD] cursor-pointer px-5 py-4 transition-all">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-sm">
                    Increff Integration With Shopify
                  </p>
                  <ArrowRight className="w-4 h-4 mt-1" />
                </div>
                <p className="text-xs mt-2 text-gray-700">
                  Boost stock accuracy using Increff's smart inventory sync with Shopify.
                </p>
              </div>

              {/* Card 5 */}
              <div className="w-64 rounded-xl bg-[#D8B4FE] text-black hover:bg-[#C084FC] cursor-pointer px-5 py-4 transition-all">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-sm">
                    Recharge Integration With Hydrogen
                  </p>
                  <ArrowRight className="w-4 h-4 mt-1" />
                </div>
                <p className="text-xs mt-2 text-gray-700">
                  Build fast, subscription-ready Shopify sites with Hydrogen + Recharge.
                </p>
              </div>

              {/* Card 6 */}
              <div className="w-64 rounded-xl bg-[#BFDBFE] text-black hover:bg-[#93C5FD] cursor-pointer px-5 py-4 transition-all">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-sm">
                    OrderWise Integration With Shopify
                  </p>
                  <ArrowRight className="w-4 h-4 mt-1" />
                </div>
                <p className="text-xs mt-2 text-gray-700">
                  Sync and manage orders smoothly with Shopify + OrderWise integration.
                </p>
              </div>
            </div>
          </div>


        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <div className="inline-block rounded-full p-[2px] bg-gradient-to-r from-blue-500 to-purple-500">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Contact
            </button>
          </div>
          <div className="relative inline-flex items-center justify-center">
            <motion.span
              className="absolute w-12 h-12 bg-gray-600 rounded-full opacity-30"
              animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.span
              className="absolute w-12 h-12 bg-gray-600 rounded-full opacity-20"
              animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1,
              }}
            />
            <button className="relative z-10 p-4 rounded-full bg-gray-800">
              <Phone className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
