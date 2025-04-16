

import { Button, Card, CardContent } from '@mui/material';
import { motion , AnimatePresence} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
    const [activeTab, setActiveTab] = useState('mission');

    const partners = [
        { name: 'Adobe', logo: '/logos/adobe.png' },
        { name: 'Google Ads', logo: '/logos/google.png' },
        { name: 'Clutch', logo: '/logos/clutch.png' },
        { name: 'HubSpot', logo: '/logos/hubspot.png' },
        { name: 'Meta', logo: '/logos/meta.png' },
        { name: 'Klaviyo', logo: '/logos/klaviyo.png' },
        { name: 'Shopify', logo: '/logos/shopify.png' },
      ];

      const historyData = [
        {
          year: "2020",
          title: "Healthy Bedroom",
          description:
            "Healthy Bedroom, a luxurious mattress seller, has thrived under our guidance for four years. Through meticulous Google Ads and SEO strategies, we've positioned Healthy Bedroom at the forefront of the luxury mattress market.",
        },
        {
          year: "2021",
          title: "Vyatr",
          description:
            "Vyatr joined hands with us to revolutionize their digital outreach. With strategic marketing and brand positioning, we helped them scale new heights.",
        },
        // Add 6 more objects as per your data
      ];
      
      const boxVariants = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
      };

      const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % historyData.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

    const content = {
        mission: {
          title: 'MISSION',
          text: `Our mission is to create innovative products through our Shopify based expertise in mobile app and web development. We emphasize quality, consumer satisfaction and transparency.
      
      We aim to become a remarkable platform for our clients by providing premier IT-based services and solutions in website and application development.`,
        },
        vision: {
          title: 'VISION',
          text: `The vision in our mind is the future we wish to create. The vision of the company is to be the leader in the digital space while transforming businesses for tomorrow.`,
        },
        values: {
          title: 'VALUES',
          text: `Integrity, transparency, innovation, and client success are our core values. We strive to deliver top-tier solutions and build trust with every client we serve.`,
        },
      };

      
  return (
    <>
    
    <div className="min-h-screen bg-gradient-to-r from-[#3b0a66] to-[#1d1449] flex items-center justify-center text-white" style={{width: "100vw"}}>
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
            src="./images/illustration.png"
            alt="Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </div>
    <div className="bg-[#0f0f0f] text-white py-20 px-6 md:px-16">
    {/* About Us Section */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Us</h2>
      <p className="text-lg leading-relaxed mb-6">
        Base2Brand is one of the rapidly expanding website development and digital marketing companies in the country with offices in India and Canada. Our teams of professionals have constantly delivered distinguished and exceptional results by combining together creative ideas with extensive experience.
      </p>
      <p className="text-lg leading-relaxed">
        Here at Base2Brand, we specialize in providing results-oriented online marketing solutions for small, medium and large businesses across the globe. We help businesses to build a sustainable and expressive association with clients. Experts at Base2Brand have the requisite talent and creativity to provide you with expected growth in the competitive market.
      </p>
    </motion.div>

    {/* Our History Section */}
    <div className="w-full flex flex-col items-center py-10 text-white">
      <h2 className="text-4xl font-bold mt-20 mb-8">Our History</h2>
      <hr className="absolute mt-60 border-t border-gray-300 w-full my-4" />
      <div className="relative h-70 overflow-hidden" style={{width: "80vw", paddingLeft: "20%", zIndex:50, margin:0}}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={boxVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="absolute w-full"
          
            
          >
            <Card className="shadow-xl rounded-2xl p-6" sx={{backgroundColor:"rgba(18, 17, 17, 0.87)",height: "100%", border: "1px solid white", color: "white", width: "40vw"}}>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">
                  {historyData[index].title}
                </h3>
                <p className="mb-4 text-sm">{historyData[index].description}</p>
                <span className="text-xs text-gray-500">{historyData[index].year}</span>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex mt-4 gap-2">
        {historyData.map((_, i) => (
          <Button
            key={i}
            size="sm"
            variant={i === index ? "default" : "outline"}
            onClick={() => setIndex(i)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  </div>
  <div className="bg-[#0f0f0f] text-white py-20 px-6 md:px-16">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why Work With <span className="text-white">Base2Brand?</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left Tabs */}
        <div className="flex flex-col gap-6 text-2xl font-bold tracking-wide uppercase">
          {Object.keys(content).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`transition-all ${
                activeTab === key ? 'text-indigo-300' : 'text-white hover:text-indigo-200'
              }`}
            >
              {content[key].title}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl whitespace-pre-line text-lg text-gray-200"
        >
          {content[activeTab].text}
        </motion.div>
      </div>
    </div>

    <div className="bg-[#0f0f0f] text-white py-20 px-6 md:px-16">
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        More About Us
      </motion.h2>

      {/* Info Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
        <motion.div
          className="bg-purple-400/60 hover:bg-purple-400 text-black px-6 py-6 rounded-lg w-full md:w-[300px] transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="font-semibold text-xl mb-2">Team</h3>
          <p className="text-sm flex items-center justify-between">
            We are proud of our experienced and accomplished team.
            <ArrowRight className="w-4 h-4 ml-2" />
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-400/60 hover:bg-blue-400 text-black px-6 py-6 rounded-lg w-full md:w-[300px] transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="font-semibold text-xl mb-2">Career</h3>
          <p className="text-sm flex items-center justify-between">
            Know the latest openings in our organization.
            <ArrowRight className="w-4 h-4 ml-2" />
          </p>
        </motion.div>
      </div>

      {/* Partners */}
      <motion.h3
        className="text-2xl font-semibold text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Our Trusted Partners Collaborate Seamlessly To Drive Mutual Success
      </motion.h3>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner, index) => (
          <motion.img
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            className="h-12 object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  </>
  );
};

export default About;

