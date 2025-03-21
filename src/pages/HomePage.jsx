// src/pages/HomePage.jsx
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/home/Hero';
import CategoryList from '../components/home/CategoryList';
import ProductFeature from '../components/home/ProductFeature';
import CommunityImpact from '../components/home/CommunityImpact';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <CategoryList />
      <ProductFeature />
      <CommunityImpact />
    </MainLayout>
  );
};

export default HomePage;