import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
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
  )
}
