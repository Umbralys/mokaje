// src/components/home/ProductFeature.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Handmade Candles',
    business: 'ScentedLiving',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop',
    link: '/shop/product/1'
  },
  {
    id: 2,
    name: 'Organic Coffee Beans',
    business: 'Local Brew Co.',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&auto=format&fit=crop',
    link: '/shop/product/2'
  },
  {
    id: 3,
    name: 'Handcrafted Jewelry',
    business: 'Silver & Stone',
    price: 39.95,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop',
    link: '/shop/product/3'
  },
  {
    id: 4,
    name: 'Cleaning Services',
    business: 'Quality Cleaning Co.',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1580256081112-e49377338b7f?w=600&auto=format&fit=crop',
    link: '/shop/product/4'
  }
];

const ProductFeature = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-mocha-800 text-center mb-12">
          Featured Products
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={product.link}>
              <div className="border border-earth-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-azure-50 h-48">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/300x180?text=${product.name.replace(' ', '+')}`;
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-mocha-700">{product.name}</h3>
                  <p className="text-earth-700 mb-2">{product.business}</p>
                  <p className="text-lg font-bold text-earth-600">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;