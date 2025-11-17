import React from 'react';

const Tools = () => {
  const tools = [
    { name: 'Docs', icon: '📄', color: 'bg-blue-100' },
    { name: 'Sheets', icon: '📊', color: 'bg-green-100' },
    { name: 'Slides', icon: '📈', color: 'bg-orange-100' },
    { name: 'Forms', icon: '📝', color: 'bg-purple-100' },
    { name: 'PDF', icon: '📋', color: 'bg-red-100' },
    { name: 'Whiteboard', icon: '🎨', color: 'bg-yellow-100' },
    { name: 'Mind Map', icon: '🧠', color: 'bg-pink-100' },
    { name: 'Flowchart', icon: '📊', color: 'bg-indigo-100' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className={`${tool.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}>
                <span className="text-2xl">{tool.icon}</span>
              </div>
              <p className="text-sm font-medium text-gray-700">{tool.name}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            Try now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tools;