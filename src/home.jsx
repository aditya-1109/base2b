import React, {useState} from 'react';
import { Star, ArrowRight, ShoppingBag, Globe, Code } from 'lucide-react';
import { Button } from '@mui/material';
import {
    FaShopify,
    FaBullhorn,
    FaShoppingCart,
    FaPencilRuler,
    FaLaptopCode,
    FaMobileAlt,
    FaBrain,
    FaHeadset,
    FaCogs,
  FaPuzzlePiece,
  FaCashRegister,
  FaCode,
  FaUsers,
  FaChartLine,
  FaSearch,
  FaProjectDiagram,
  FaDraftingCompass,
  FaClipboardCheck,
  FaRocket,
  FaAward,
  FaThumbsUp,
  FaUserFriends,
  FaStar,
  } from "react-icons/fa";

  import {
    SiHtml5,
    SiCss3,
    SiAngular,
    SiJavascript,
    SiReact,
    SiFlutter,
  } from "react-icons/si";


function ServiceCard({ icon, title, color }) {
    return (
      <div className="bg-[#1a1a1a] p-8 rounded-lg hover:bg-[#222] transition-colors">
        <div className={`mb-6 ${color}`}>{icon}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex items-center text-blue-400">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    );
  }


export default function Home() {
    const [activeCategory, setActiveCategory] = useState("FRONTEND");

  const TechIcon = ({ Icon }) => (
    <div className="bg-[#0f0f1f] border border-blue-700 rounded-md p-6 flex justify-center items-center hover:scale-105 transition-all shadow-lg text-4xl text-white">
      <Icon />
    </div>
  );
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    comment: ''
  });

  const stats = [
    { icon: FaAward, label: "Years of IT Industry", value: "5+" },
    { icon: FaProjectDiagram, label: "Successfull Project", value: "250+" },
    { icon: FaStar, label: "Ratings on Clutch", value: "4.9+" },
    { icon: FaUserFriends, label: "Happy Client", value: "100+" },
    { icon: FaLaptopCode, label: "Website Designed", value: "100+" },
  ];

  const techData = {
    FRONTEND: [SiHtml5, SiCss3, SiAngular],
    BACKEND: [],
    ECOMMERCE: [SiJavascript, SiReact],
    FRAMEWORK: [SiFlutter],
  };
  

  const steps = [
    { label: "Research", icon: <FaSearch /> },
    { label: "Planning", icon: <FaProjectDiagram /> },
    { label: "Design", icon: <FaDraftingCompass /> },
    { label: "Development", icon: <FaCode /> },
    { label: "Testing", icon: <FaClipboardCheck /> },
    { label: "Launch", icon: <FaRocket /> },
  ];

  const features = [
    { icon: <FaCogs />, label: "ERP Software" },
    { icon: <FaPuzzlePiece />, label: "Custom apps & Integrations" },
    { icon: <FaCashRegister />, label: "POS" },
    { icon: <FaCode />, label: "Shopify API Integration" },
    { icon: <FaUsers />, label: "CRM" },
    { icon: <FaChartLine />, label: "CRO (Conversion Rate Optimization)" },
  ];

  const erpLogos = [
    { name: "Unicommerce", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Unicommerce_logo.svg/512px-Unicommerce_logo.svg.png" },
    { name: "Odoo", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Odoo_logo.png" },
    { name: "EasyEcom", src: "https://cdn.easyecom.io/assets/img/logo.svg" },
    { name: "Increff", src: "https://www.increff.com/wp-content/uploads/2022/07/Logo.svg" },
    { name: "Orderwise", src: "https://forterro.com/themes/custom/forterro/images/forterro-logo.svg" },
    { name: "Custom Recharge", src: "https://cdn-icons-png.flaticon.com/512/854/854878.png" }, // placeholder
  ];

  const services = [
    { icon: <FaShopify className="text-4xl text-green-400" />, title: "Shopify Development", color: "from-green-500/30" },
    { icon: <FaBullhorn className="text-4xl text-purple-400" />, title: "Digital Marketing", color: "from-purple-500/30" },
    { icon: <FaShoppingCart className="text-4xl text-blue-400" />, title: "Ecommerce Development", color: "from-blue-500/30" },
    { icon: <FaPencilRuler className="text-4xl text-orange-400" />, title: "Graphic & UI/UX Designing", color: "from-orange-500/30" },
    { icon: <FaLaptopCode className="text-4xl text-pink-400" />, title: "Web Development", color: "from-pink-500/30" },
    { icon: <FaMobileAlt className="text-4xl text-sky-400" />, title: "Mobile App Development", color: "from-sky-500/30" },
    { icon: <FaBrain className="text-4xl text-green-300" />, title: "AI Development", color: "from-green-300/30" },
    { icon: <FaHeadset className="text-4xl text-yellow-400" />, title: "Support Services", color: "from-yellow-400/30" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };
  return (
    <div>
       <section className="relative bg-black text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16">
        {/* Left Content */}
        <div className="text-center md:text-center md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Empowering <span className="text-orange-400">Businesses</span> With
            <br /> Seamless <span className="text-orange-400">Websites</span>, Intuitive <span className="text-orange-400">Apps</span>
            <br /> & Data-Driven <span className="text-orange-400">Marketing</span>
          </h1>

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #6C63FF, #8A2BE2)",
              borderRadius: "999px",
              padding: "0.75rem 2rem",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Request a Quote
          </Button>

          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
            <Star className="text-yellow-400" fill="yellow" />
            <span className="font-semibold text-white">4.9</span>
            <span className="text-sm">out of 5 (112+ Reviews)</span>
          </div>

          <p className="text-gray-400 text-sm">
            Trusted by over 200+ innovative eCommerce brands, we're your partner in success.
          </p>
        </div>

        {/* Right Image (Background Hero Image Style) */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="/images/hero-banner.jpg" // Replace with your image path
            alt="Hero Banner"
            className="rounded-xl w-full h-auto shadow-xl"
          />
        </div>
      </div>

      {/* Logos row */}
      <div className="bg-gray-900 py-6 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-6 items-center">
          {[
            "hubspot.png",
            "meta.png",
            "klaviyo.png",
            "shopify.png",
            "dme.png",
            "googleads.png",
            "clutch.png",
            "whatsapp.png",
          ].map((logo, index) => (
            <img
              key={index}
              src={`/logos/${logo}`} // Place your logos in public/logos
              alt="partner-logo"
              className="h-10 object-contain"
            />
          ))}
        </div>
      </div>
    </section>

    <section className="bg-black text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Our Services For Your Digital Transformation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 bg-gradient-to-br ${service.color} to-transparent hover:scale-105 transition-transform duration-300 border border-white/10`}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <a
              href="#"
              className="text-sm text-white underline hover:text-green-300"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-black text-white px-6 py-16 md:px-16 flex flex-col md:flex-row gap-10 items-center">
      {/* Left image */}
      <div className="flex-1">
        <img
          src="https://i.imgur.com/4kbPTdb.png" // Your screenshot or actual asset here
          alt="Shopify Partner Badge"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Right content */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          We Excel in Shopify Development Services
        </h2>
        <p className="text-gray-300">
          In Shopify development services, we don't just meet expectations; we exceed them. With a proven track record of success, we outperform in every aspect of Shopify development.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-white text-xl">{item.icon}</div>
              <span className="text-sm text-white">{item.label}</span>
            </div>
          ))}
        </div>

        {/* ERP Integration logos */}
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Our ERP Integration Services
          </h3>
          <div className="flex flex-wrap gap-4 items-center">
            {erpLogos.map((erp, index) => (
              <img
                key={index}
                src={erp.src}
                alt={erp.name}
                className="h-10 max-w-[120px] object-contain"
              />
            ))}
          </div>
        </div>

        <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm transition">
          Read More
        </button>
      </div>
    </section>

    <section className="bg-gradient-to-b from-[#0f0f1f] to-black text-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Working Process</h2>
      <p className="text-gray-300 mb-12 text-sm">How we work for our customer</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 transition-transform hover:scale-105"
          >
            <div className="w-20 h-20 rounded-full bg-[#1a1a2e] flex items-center justify-center text-2xl text-white shadow-lg border border-violet-500 ring-2 ring-violet-600 ring-opacity-40 hover:ring-4 hover:ring-opacity-70">
              {step.icon}
            </div>
            <span className="text-sm">{step.label}</span>
          </div>
        ))}
      </div>

      <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all">
        Request a Quote
      </button>
    </section>

    <section className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Technologies we use
      </h2>
      <p className="text-gray-300 text-center mb-12 max-w-xl mx-auto text-sm">
        We use cutting-edge technologies to craft fully automated solutions
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Menu */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {Object.keys(techData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full py-4 px-6 rounded-md border text-left font-medium transition-all
                ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                    : "bg-[#1a1a1a] text-gray-300 border-gray-700 hover:bg-[#2a2a2a]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Description + Icons */}
        <div className="flex-1">
          <p className="text-gray-300 mb-6 text-sm">
            At our company, we leverage cutting-edge technologies for{" "}
            <span className="text-white font-semibold lowercase">{activeCategory.toLowerCase()}</span>{" "}
            development to deliver seamless user experiences. From React to Angular, our team ensures
            fast, responsive, and visually stunning websites and applications.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {techData[activeCategory].map((Icon, index) => (
              <TechIcon key={index} Icon={Icon} />
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-r from-[#0a0a0f] to-[#0f0f1f] text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Our Achievements & Milestones
        </h2>
        <p className="text-gray-300 text-sm">
          Explore our company’s remarkable achievements, milestones, and records that
          showcase our success and expertise
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
        {stats.map(({ icon: Icon, label, value }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Icon className="text-blue-400 text-3xl mb-2" />
            <h3 className="text-xl font-bold">{value}</h3>
            <p className="text-sm text-gray-300">{label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#0b0c10] text-white px-6 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          Have A Dream ?<br />We Have A Team!
        </h2>
        <p className="text-gray-300 mb-4">
          At our place, we have a stellar team of experts dedicated to bringing your vision to life. 
          With extensive experience and a deep understanding of diverse industries, our team is equipped 
          to handle any challenge that comes our way.
        </p>
        <p className="text-gray-300 mb-4">
          Throughout the project, we prioritize clear communication and transparency, guiding you 
          through every step and addressing any doubts or questions that may arise. Despite our high-quality 
          services, we remain committed to offering competitive pricing to ensure accessibility for businesses 
          of all sizes.
        </p>
        <p className="text-gray-300 mb-4">
          Having successfully completed hundreds of projects, we bring a wealth of knowledge and expertise to 
          each new endeavor, guaranteeing exceptional results that exceed expectations.
        </p>

        <div className="text-sm text-white mb-4 font-semibold">Our client list includes:</div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-200 list-disc list-inside mb-6">
          <li>Startups due to our cost-effectiveness</li>
          <li>Corporates due to our reliability and scalability</li>
          <li>Industries due to our expertise and versatility</li>
        </ul>

        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition">
          Let's Discuss Your Project
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src=""
          alt="Illustration"
          className="max-w-[90%] md:max-w-[100%]"
        />
      </div>
    </section>

    

     

      {/* Project Start Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-4">Do You Have a Project to Start?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Together We'll<br />Complete It!</h2>
          <p className="mb-8">Let's connect</p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="World map"
                className="rounded-lg opacity-20"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">GET IN TOUCH</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-3 bg-[#1a1a1a] rounded-lg"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 bg-[#1a1a1a] rounded-lg"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full p-3 bg-[#1a1a1a] rounded-lg"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <select
                  name="service"
                  className="w-full p-3 bg-[#1a1a1a] rounded-lg"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select Services</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
                <textarea
                  name="comment"
                  placeholder="Your comment"
                  rows={4}
                  className="w-full p-3 bg-[#1a1a1a] rounded-lg"
                  value={formData.comment}
                  onChange={handleInputChange}
                ></textarea>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-8 py-3 rounded-full"
                >
                  Send comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
