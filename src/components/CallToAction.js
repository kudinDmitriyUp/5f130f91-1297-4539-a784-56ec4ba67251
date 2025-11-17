import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's make it
            </h2>
            <ul className="space-y-3 text-lg mb-8">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-picsart-purple rounded-full"></div>
                <span>AI-powered tools</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-picsart-purple rounded-full"></div>
                <span>Professional templates</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-picsart-purple rounded-full"></div>
                <span>Collaborative workspace</span>
              </li>
            </ul>
            <button className="btn-primary flex items-center space-x-2">
              <span>Start creating</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 aspect-video flex items-center justify-center">
            <div className="w-full h-full bg-white bg-opacity-10 rounded-xl backdrop-blur-sm flex items-center justify-center">
              <div className="text-white text-lg opacity-75">Creative Workspace</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;