import React from 'react';
import { ArrowRight } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mix, edit, and play <br />
              <span className="gradient-text">better together</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Create stunning visuals with our comprehensive suite of editing tools. 
              From basic adjustments to advanced AI-powered features.
            </p>
            <button className="btn-primary flex items-center space-x-2">
              <span>Get started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="text-gray-400 text-lg">Interactive Demo</div>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Better design. <br />
              <span className="gradient-text">Less time.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Speed up your creative process with AI-powered tools that understand 
              your vision and help bring it to life in seconds.
            </p>
            <button className="btn-primary flex items-center space-x-2">
              <span>Try AI tools</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="lg:order-1 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="text-gray-400 text-lg">AI Tools Demo</div>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Multiply</span> your ideas
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Turn one great idea into multiple variations. Create content for 
              different platforms, audiences, and formats with ease.
            </p>
            <button className="btn-primary flex items-center space-x-2">
              <span>Explore templates</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="text-gray-400 text-lg">Template Gallery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;