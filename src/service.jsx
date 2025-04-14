import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { ArrowRight } from 'lucide-react';

export default function Service() {

    const tools = [
        { name: 'Illustrator', icon: '/tools/illustrator.png' },
        { name: 'Photoshop', icon: '/tools/photoshop.png' },
        { name: 'Figma', icon: '/tools/figma.png' },
        { name: 'After Effect', icon: '/tools/aftereffect.png' },
      ];

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

    <div className="bg-[#0f0f0f] text-white px-6 md:px-20 py-20">
    <div className="flex flex-col md:flex-row mt-30 items-center justify-between gap-10">
    <motion.img
          src="/services/marketing-mockup.png"
          alt="Marketing"
          className="w-[250px] md:w-[300px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">DIGITAL MARKETING</h2>
          <p className="text-gray-300 text-base mb-6">
            We offer expert Digital Marketing services to boost your brand's online visibility and reach.
            Did you know? 81% of shoppers research online before buying. Let us optimize your digital strategy
            for success. Harnessing the power of data-driven insights and cutting-edge techniques, we tailor
            digital marketing campaigns that resonate with your target audience and drive conversions effectively.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform">
            Read More
          </button>
        </motion.div>

        
      </div>
    <div className="flex flex-col md:flex-row mt-30 items-center justify-between gap-10">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">DIGITAL MARKETING</h2>
          <p className="text-gray-300 text-base mb-6">
            We offer expert Digital Marketing services to boost your brand's online visibility and reach.
            Did you know? 81% of shoppers research online before buying. Let us optimize your digital strategy
            for success. Harnessing the power of data-driven insights and cutting-edge techniques, we tailor
            digital marketing campaigns that resonate with your target audience and drive conversions effectively.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform">
            Read More
          </button>
        </motion.div>

        <motion.img
          src="/services/marketing-mockup.png"
          alt="Marketing"
          className="w-[250px] md:w-[300px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
      {/* Tools Row */}
      <div className="grid grid-cols-2 mt-30 md:grid-cols-4 gap-6 mb-20">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="flex items-center justify-center border border-[#2e2e2e] rounded-lg py-4 px-6 shadow-inner bg-[#111]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <img src={tool.icon} alt={tool.name} className="w-6 h-6 mr-3" />
            <span className="text-sm font-semibold">{tool.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Digital Marketing */}
      <div className="flex flex-col md:flex-row mt-30 items-center justify-between gap-10">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">DIGITAL MARKETING</h2>
          <p className="text-gray-300 text-base mb-6">
            We offer expert Digital Marketing services to boost your brand's online visibility and reach.
            Did you know? 81% of shoppers research online before buying. Let us optimize your digital strategy
            for success. Harnessing the power of data-driven insights and cutting-edge techniques, we tailor
            digital marketing campaigns that resonate with your target audience and drive conversions effectively.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform">
            Read More
          </button>
        </motion.div>

        <motion.img
          src="/services/marketing-mockup.png"
          alt="Marketing"
          className="w-[250px] md:w-[300px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
    </div>
  )
}
