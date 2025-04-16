import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Case() {

    const caseStudies = [
        {
          title: "VIP Number Shop – SEO / Google Ads / Meta Ads / SMM / Influencer Collaboration / ASO",
          description:
            "By combining SEO, social media marketing, paid ads, influencer campaigns, and push notifications, VIP Number Shop successfully increased...",
          image: "/casestudy/vip-number.png",
          link: "#",
        },
        {
          title: "Loria Medical – Meta Ads",
          description:
            "The Partnership Between Loria Medical and our Meta Ads Campaign Strategy resulted in increased visibility and tangible growth in patient consultations...",
          image: "/casestudy/loria.png",
          link: "#",
        },
        {
          title: "The Grill Father – Google Ads / Meta Ads / SMM / SEO",
          description:
            "By implementing a cohesive digital marketing strategy that included social media marketing, SEO, local SEO, and paid ads...",
          image: "/casestudy/grillfather.png",
          link: "#",
        },
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

      <section className="bg-gradient-to-br from-[#1a0d2e] to-[#0c0c0c] text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Developing Custom, Scalable, And Next-Generation Mobile Apps
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {caseStudies.map((item, idx) => (
          <motion.div
            key={item.title}
            className="bg-[#121212] border border-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="text-sm text-blue-400 hover:text-blue-200 mt-auto transition-all"
              >
                Read case study →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  )
}
