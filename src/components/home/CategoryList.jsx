// src/components/home/CategoryList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaStore, FaTools, FaPaintBrush } from 'react-icons/fa';

const categories = [
  { 
    id: 1, 
    name: 'Food & Dining', 
    count: 134, 
    icon: <FaUtensils className="text-white" size={24} />,
    color: 'bg-earth-600',
    link: '/directory/food-dining'
  },
  { 
    id: 2, 
    name: 'Retail', 
    count: 96, 
    icon: <FaStore className="text-white" size={24} />,
    color: 'bg-azure-400',
    link: '/directory/retail'
  },
  { 
    id: 3, 
    name: 'Services', 
    count: 112, 
    icon: <FaTools className="text-white" size={24} />,
    color: 'bg-sage-500',
    link: '/directory/services'
  },
  { 
    id: 4, 
    name: 'Artisans', 
    count: 78, 
    icon: <FaPaintBrush className="text-white" size={24} />,
    color: 'bg-earth-400',
    link: '/directory/artisans'
  },
];

const CategoryList = () => {
  return (
    <section className="py-16 bg-earth-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-mocha-800 text-center mb-12">
          Browse Categories
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={category.link}>
              <div className="bg-white border border-earth-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`${category.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-mocha-700 mb-1">{category.name}</h3>
                <p className="text-earth-800">{category.count} Local Businesses</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;