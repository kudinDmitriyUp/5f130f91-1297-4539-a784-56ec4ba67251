import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and App Downloads */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold gradient-text mb-6">
              Picsart
            </div>
            <div className="mb-6">
              <h4 className="font-semibold mb-4">Get The Free App</h4>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 transition-colors">
                  📱 App Store
                </div>
                <div className="bg-gray-800 rounded-lg px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 transition-colors">
                  🤖 Google Play
                </div>
                <div className="bg-gray-800 rounded-lg px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 transition-colors">
                  💻 Microsoft
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Image Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Colors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fonts</a></li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">For Businesses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Developers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Google Drive</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For specific Industries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quicktools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Avatar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Center</a></li>
            </ul>
          </div>
          
          {/* Popular Features */}
          <div>
            <h4 className="font-semibold mb-4">Explore Picsart's most popular features and content</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Training program</span>
              <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Remove background</span>
              <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Upscale image</span>
              <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Photo enhancer</span>
              <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Face swap</span>
              <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">Background generator</span>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Picsart, Inc. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;