import React from 'react';

const CreativeGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unleash creativity with tools that <span className="gradient-text">just work</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Grid Items */}
          <div className="bg-white rounded-2xl p-6 aspect-square flex items-center justify-center shadow-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-lg shadow-sm"></div>
          </div>
          <div className="bg-white rounded-2xl p-6 aspect-square flex items-center justify-center shadow-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl"></div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full shadow-sm"></div>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-xl shadow-sm"></div>
          </div>
          <div className="bg-white rounded-2xl p-6 aspect-square flex items-center justify-center shadow-sm">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm"></div>
          </div>
          <div className="bg-white rounded-2xl p-6 aspect-square flex items-center justify-center shadow-sm">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg"></div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to create, edit, and share amazing content
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeGrid;