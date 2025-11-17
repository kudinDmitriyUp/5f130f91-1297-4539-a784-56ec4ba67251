import React from 'react';
import { Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
      <div className="container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          {/* Awards */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Award className="w-5 h-5" />
              <div>
                <div className="font-medium">Editor's Choice</div>
                <div className="text-xs">on App Store</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Award className="w-5 h-5" />
              <div>
                <div className="font-medium">Editor's Choice</div>
                <div className="text-xs">on Google Play</div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="gradient-text">Design</span> made easy
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            The only AI-powered creative companion you'll ever need to grow your brand. 
            Get it all done with Picsart's ultimate creative suite.
          </p>

          {/* CTA Button */}
          <button className="btn-primary text-lg px-8 py-4 mb-16">
            Get started for free
          </button>

          {/* Product Demo */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-4 aspect-square flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full"></div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-4 aspect-square flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-4 aspect-square flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-4 border-white"></div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-4 aspect-square flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Smart Background Modal */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-6 max-w-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Smart Background</h3>
                    <X className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">A pink background</h4>
                    <p className="text-gray-600 text-sm">with studio lighting</p>
                  </div>
                  <button className="btn-primary w-full">
                    Generate background
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;