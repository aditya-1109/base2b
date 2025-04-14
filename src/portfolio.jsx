import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { ArrowRight } from 'lucide-react';


export default function Portfolio() {
    const [selected, setSelected] = useState('All');

    const categories = ['All', 'Web Design', 'Mobile App Design', 'Graphics', 'Email'];

    const portfolioItems = [
        {
          title: 'dip',
          category: 'Web Design',
          year: 2023,
          image: '/portfolio/dip.png',
          description: 'Biodegradable Laundry Detergent & Dishwasher Sheets',
        },
        {
          title: 'Bev',
          category: 'Graphics',
          year: 2023,
          image: '/portfolio/bev.png',
          description: 'Premium wines made with California grapes',
        },
        // Add more items as needed
      ];

    const filteredItems =
    selected === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === selected);

    

      
  return (
    <div>

        <div className="w-full min-h-screen bg-gradient-to-r from-[#3b0a66] to-[#1d1449] flex items-center justify-center text-white">
              <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
                {/* Left Section */}
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="space-y-6 text-center md:text-center"
                >
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    We Create Smart Ideas For <br />
                    Your Brand Growth
                  </h1>
                  <p className="text-base md:text-lg text-gray-300 max-w-xl">
                    Our team of experts generate innovative concepts and strategies to drive your growth,
                    offering smart solutions that propel your business forward and achieve your objectives efficiently.
                  </p>
                  <Button
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(to right, #7F00FF, #4A00E0)',
                      borderRadius: '30px',
                      paddingX: 3,
                      paddingY: 1,
                      textTransform: 'none',
                      fontWeight: 'bold',
                    }}
                    endIcon={<ArrowRight />}
                  >
                    Request a Quote
                  </Button>
                </motion.div>
        
                {/* Right Illustration */}
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="mt-12 md:mt-0"
                >
                  <img
                    src="/illustration.png"
                    alt="Illustration"
                    className="w-full max-w-md mx-auto"
                  />
                </motion.div>
              </div>
            </div>

      <div className="bg-gradient-to-br from-[#1a0d2e] to-[#0c0c0c] text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featuring Our Expertise In An Impressive Work Gallery
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {categories.map((cat, index) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full border ${
              selected === cat
                ? 'bg-blue-500 text-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            } transition-all duration-300`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Cards */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.title}
            className="rounded-xl overflow-hidden shadow-lg bg-black/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.title} className="w-full h-auto" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-1">{item.description}</p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold">Industry:</span> {item.category} &nbsp;|&nbsp;{' '}
                <span className="font-semibold">Year:</span> {item.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  )
}
