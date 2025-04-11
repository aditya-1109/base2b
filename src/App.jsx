import React, { useState } from 'react';
import { ArrowRight, Search, ShoppingBag, Code, Smartphone, PenTool, Globe, Star, Phone, ChevronLeft, ChevronRight, CheckCircle, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    comment: ''
  });

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
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering <span className="text-orange-500">Businesses</span> With<br />
            Seamless <span className="text-orange-500">Websites</span>, Intuitive <span className="text-orange-500">Apps</span><br />
            & Data-Driven <span className="text-orange-500">Marketing</span>
          </h1>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold mt-8">
            Request a Quote
          </button>
          <div className="flex items-center justify-center gap-2 mt-8">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2">4.9 out of 5 (112+ Reviews)</span>
          </div>
          <p className="text-gray-300 mt-4">
            Trusted by over 200+ innovative eCommerce brands, we're your partner in success.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-100/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">250+</h3>
              <p className="text-gray-400">Products</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-gray-400">Employees</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">5+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services For Your Digital Transformation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<ShoppingBag className="w-8 h-8" />}
              title="Shopify Development"
              color="text-green-500"
            />
            <ServiceCard
              icon={<Globe className="w-8 h-8" />}
              title="Digital Marketing"
              color="text-purple-500"
            />
            <ServiceCard
              icon={<Code className="w-8 h-8" />}
              title="Web Development"
              color="text-blue-500"
            />
          </div>
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

      {/* Detailed Footer */}
      <footer className="bg-[#0d0d0d] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-blue-400 mb-4">DIGITAL MARKETING</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Search Engine Optimization</li>
                <li>Content Writing</li>
                <li>Google Ads (PPC)</li>
                <li>Facebook Ad Agency</li>
                <li>YouTube Marketing</li>
                <li>Conversion Optimization Agency</li>
                <li>Social Media Optimization</li>
                <li>Online Reputation Management</li>
                <li>Email Marketing Providers</li>
                <li>E-commerce Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-4">WEB/MOBILE DEVELOPMENT</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Remix Framework</li>
                <li>Laravel Development</li>
                <li>MEAN Stack Development</li>
                <li>ASP.NET Development</li>
                <li>MERN Stack Development</li>
                <li>Native iOS and Android</li>
                <li>Hybrid apps Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-4">GRAPHIC DESIGN</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Branding & Identity</li>
                <li>Website & App Design</li>
                <li>Motion Graphics</li>
                <li>Social Media Design</li>
                <li>2D & Infographic Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-4">ECOMMERCE DEVELOPMENT</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Shopify Theme Development</li>
                <li>Woo Commerce Development</li>
                <li>Magento Development</li>
                <li>Big Commerce Development</li>
                <li>Open Cart Development</li>
                <li>Shopify App Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Services</li>
                <li>About Us</li>
                <li>Blogs</li>
                <li>Career</li>
                <li>Hire Resources</li>
                <li>Case Studies</li>
                <li>Customer Support</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h5 className="font-bold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-blue-400"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-blue-400"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-blue-400"><Youtube className="w-5 h-5" /></a>
                </div>
              </div>
              <div>
                <h5 className="font-bold mb-4">WORKING HOURS:</h5>
                <p className="text-gray-400">Mon-Fri: 10 Am- 07 Pm</p>
                <p className="text-gray-400">Sat-Sun: Holiday</p>
              </div>
              <div>
                <h5 className="font-bold mb-4">INDIA (HEADQUARTER)</h5>
                <p className="text-gray-400">F-209, Sector 74, Mohali, 160074</p>
                <p className="text-gray-400">IND +91 9872487850</p>
              </div>
              <div>
                <div className="mb-4">
                  <h5 className="font-bold mb-2">USA</h5>
                  <p className="text-gray-400">7311 Gladys Ave El Cerrito CA 94530,</p>
                  <p className="text-gray-400">USA, +1 720 9035933</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2">UK</h5>
                  <p className="text-gray-400">7 Snow Avenue, Blaby, LE8 4BR</p>
                  <p className="text-gray-400">UK +44 2080953232</p>
                  <p className="text-gray-400">UK +44 7448435973</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

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

export default App;