import React from 'react';
import { ArrowRight } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Engage a <span className="gradient-text">creative community</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join a community of 150+ million creators sharing tips, trends, 
              and inspiration. Discover new techniques and showcase your work.
            </p>
            <button className="btn-primary flex items-center space-x-2">
              <span>Join community</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center">
              <div className="text-gray-400 text-lg">Community Feed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;