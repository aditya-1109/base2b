import React, {useState} from 'react';
import { Star, ArrowRight, ShoppingBag, Globe, Code } from 'lucide-react';



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
    <div>
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

    </div>
  )
}
