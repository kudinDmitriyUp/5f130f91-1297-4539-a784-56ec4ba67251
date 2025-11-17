import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">
              Picsart
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Create</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Business</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Developers</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
            <button className="btn-primary">
              Start creating
            </button>
            <button className="text-gray-700 hover:text-gray-900 font-medium">
              Log in
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Create</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Business</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Developers</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Resources</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <a href="#" className="text-gray-700">Pricing</a>
              <div className="pt-4 border-t border-gray-200">
                <button className="btn-primary w-full mb-3">
                  Start creating
                </button>
                <button className="text-gray-700 font-medium">
                  Log in
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;