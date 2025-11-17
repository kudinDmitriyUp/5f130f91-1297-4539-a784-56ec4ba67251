import React from 'react';

const Stats = () => {
  const stats = [
    { number: '18+', label: 'million downloads', sublabel: 'across all platforms' },
    { number: '1M+', label: 'paying subscribers', sublabel: 'and growing' },
    { number: '20+', label: 'supported languages', sublabel: 'worldwide' },
    { number: '300M+', label: 'monthly active users', sublabel: 'creating content' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="gradient-text">150 million+</span> creators
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Recognized by global businesses and media
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;