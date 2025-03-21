// src/components/home/CommunityImpact.jsx
import React from 'react';

const impactStats = [
  { label: 'Donated', value: '$45K+' },
  { label: 'Businesses Supported', value: '124' },
  { label: 'Community Projects', value: '8' }
];

const CommunityImpact = () => {
  return (
    <section className="py-16 bg-earth-600 text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">
      Our Community Impact
    </h2>
    
    <p className="text-center max-w-3xl mx-auto mb-12">
      Every purchase made on Mokaje directly supports local communities. 
      15% of proceeds fund business development, food banks, and outreach 
      programs in underserved areas.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {impactStats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="w-32 h-32 rounded-full border-2 border-white border-opacity-70 bg-white bg-opacity-20 flex items-center justify-center mx-auto">
            <div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default CommunityImpact;