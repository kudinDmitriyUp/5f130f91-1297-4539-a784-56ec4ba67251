import React, { useState } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6 shadow-lg z-50">
      <div className="container-max section-padding">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">About our cookies</h3>
            <p className="text-gray-600 text-sm">
              We use cookies to improve how our site works and how we or our advertising partners market to you. Find out more about{' '}
              <a href="#" className="text-picsart-purple hover:underline">how we use cookies</a>.
            </p>
          </div>
          <div className="flex space-x-3">
            <button 
              className="bg-picsart-purple hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              onClick={() => setIsVisible(false)}
            >
              Accept All
            </button>
            <button 
              className="bg-picsart-pink hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              onClick={() => setIsVisible(false)}
            >
              Reject All
            </button>
            <button className="text-picsart-purple hover:text-purple-700 px-6 py-2 text-sm font-medium transition-colors">
              Manage Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;