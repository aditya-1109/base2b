import React from 'react';
import { Card, CardContent , Button} from "@mui/material";
import { LucideBarChart, LucideZap,LucideAlertTriangle, LucideSettings, LucideWifiOff, LucideWarehouse, LucideUsers, LucideSettings2, LucideRepeat } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

export default function Erp() {

    const integrations = [
        {
          title: 'Uni-Commerce Custom Integration',
          description: 'We have successfully integrated Shopify with Uni-Commerce, enabling seamless synchronization of sales, inventory, and order data.',
          imgSrc: '/images/unicommerce.png', // Replace with your actual path
          highlight: true,
        },
        {
          title: 'Odoo Custom Integration',
          description: 'Our team has integrated Shopify with Odoo, optimizing financial management, CRM, and inventory control for smoother operations.',
          imgSrc: '/images/odoo.png',
        },
        {
          title: 'Custom Loop Integration',
          description: 'Our team has integrated Shopify with Custom Loop, optimizing returns management and enabling an efficient reverse logistics process for businesses.',
          imgSrc: '/images/customloop.png',
        },
        {
          title: 'Increff Custom Integration',
          description: 'Shopify integrated with Increff to enhance inventory accuracy and fulfill customer orders more efficiently.',
          imgSrc: '/images/increff.png',
        },
        {
          title: 'Custom Recharge Integration',
          description: 'We developed a custom Recharge integration to enable recurring billing and subscriptions directly in Shopify.',
          imgSrc: '/images/recharge.png',
        },
        {
          title: 'Order Wise Custom Integration',
          description: 'Integrated Order Wise to simplify order management, syncing orders and inventory in real-time with Shopify.',
          imgSrc: '/images/orderwise.png',
        },
      ];

    const services = [
        {
          title: 'Third-Party Integrations',
          description: 'Without custom integrations, your Shopify store relies heavily on manual processes to manage product updates, orders, and customer data....',
          iconColor: 'text-cyan-400',
          bg: 'hover:shadow-lg shadow-cyan-500/50',
        },
        {
          title: 'Custom Payment Gateway Integration',
          description: 'Shipping integration simplifies your store\'s shipping and logistics with custom integrations for your chosen carrier or fulfillment partner. Our custom integrations ...',
          iconColor: 'text-yellow-400',
        },
        {
          title: 'Custom Shipping Integration',
          description: 'Shipping integration simplifies your store\'s shipping and logistics with custom integrations for your chosen carrier or fulfillment partner. Our custom integrations ...',
          iconColor: 'text-lime-400',
        },
        {
          title: 'Custom API Integration',
          description: 'Our team can create and manage secure custom APIs to integrate with any system you need to streamline your Shopify workflow.',
          iconColor: 'text-orange-300',
        },
        {
          title: 'CRM Integration Service',
          description: 'Keep your sales and marketing in sync by integrating CRM tools directly into your Shopify store with real-time data updates.',
          iconColor: 'text-cyan-300',
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



    <section className="bg-black text-white py-16 px-4 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What If Your Store is Without Custom Integration Feature?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-[#1a001a] to-black text-white border-none shadow-xl">
            <CardContent className="flex flex-col items-center text-center py-10 px-6">
              <LucideBarChart size={48} className="text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Increased Manual Effort</h3>
              <p className="text-sm text-gray-300">
                Without custom integrations, your Shopify store depends on manual
                processes for product updates,
              </p>
            </CardContent>
          </Card>

          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Card className="bg-gradient-to-b from-[#1f0033] to-black border-none shadow-2xl rounded-2xl ring-2 ring-purple-500">
              <CardContent className="flex flex-col items-center text-center py-10 px-6">
                <LucideSettings2 size={48} className="text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Limited Functionality and Scalability
                </h3>
                <p className="text-sm text-gray-300">
                  Default Shopify apps and features often have limitations in terms of functionality and scalability.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <Card className="bg-gradient-to-br from-[#001a1a] to-black text-white border-none shadow-xl">
            <CardContent className="flex flex-col items-center text-center py-10 px-6">
              <LucideWarehouse size={48} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Disconnected Systems and Poor Data Flow
              </h3>
              <p className="text-sm text-gray-300">
                Without custom integration, your Shopify store may face disconnected CRM, ERP, and accounting.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#b7ceff] text-black py-16 px-4 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Benefits of Custom Shopify Integration</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card className="bg-transparent text-black shadow-none">
            <CardContent className="flex flex-col items-center text-center py-6 px-4">
              <LucideBarChart size={48} className="text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalability</h3>
              <p className="text-sm">
                As your business grows, your Shopify store needs to grow with it. Custom integrations allow your store to scale seamlessly,
                ensuring that you can handle increased traffic, more orders, and a growing product catalog without sacrificing performance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent text-black shadow-none">
            <CardContent className="flex flex-col items-center text-center py-6 px-4">
              <LucideZap size={48} className="text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Improved Efficiency</h3>
              <p className="text-sm">
                Automating processes like order fulfillment, inventory tracking, and customer communications reduces manual effort
                and the potential for errors. This improves overall efficiency, allowing you to focus on strategic business goals
                rather than repetitive tasks.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent text-black shadow-none">
            <CardContent className="flex flex-col items-center text-center py-6 px-4">
              <LucideWarehouse size={48} className="text-purple-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Order and Inventory Sync</h3>
              <p className="text-sm">
                Shopify custom integrations streamline order processing and inventory sync, automating real-time updates across systems.
                This enhances efficiency, accuracy, and business performance by ensuring seamless synchronization of order data and stock levels.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-black bg-gradient-to-b from-[#0a011a] to-[#060013] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">Get FREE Consultation</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#121212] border border-gray-700 text-white p-4 rounded-md focus:outline-none w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[#121212] border border-gray-700 text-white p-4 rounded-md focus:outline-none w-full"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="bg-[#121212] border border-gray-700 text-white p-4 rounded-md focus:outline-none w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-[#121212] border border-gray-700 text-white p-4 rounded-md focus:outline-none w-full"
          />
          <textarea
            placeholder="Your comment"
            rows={4}
            className="bg-[#121212] border border-gray-700 text-white p-4 rounded-md focus:outline-none w-full md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 w-fit mx-auto md:col-span-2"
          >
            Send comment
          </button>
        </form>
      </div>
    </section>

    <section className="bg-[#121424] py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Custom Shopify Integration Services</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border border-gray-700 bg-[#1a1b2e] ${service.bg || ''} transition-all`}
            >
              <div className={`text-3xl mb-4 ${service.iconColor}`}>
                {/* Use actual icons as needed */}
                <span>📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-yellow-100 py-16 px-4 text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Custom Shopify Integrations We Have Worked On
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-yellow-200 border border-yellow-300 shadow-sm hover:shadow-lg transition ${
                item.highlight ? 'shadow-yellow-400' : ''
              }`}
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4 rounded-full object-contain"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-800">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-yellow-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Custom Shopify Integrations We Have Worked On
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fff9d6] shadow-md hover:shadow-xl transition-shadow rounded-xl p-6 text-center flex flex-col items-center space-y-4"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300">
                <img src={item.imgSrc} alt={item.title} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
