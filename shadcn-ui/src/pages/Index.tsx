import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/landing/HeroSection';
import FeaturedValueChains from '@/components/landing/FeaturedValueChains';
import HowItWorks from '@/components/landing/HowItWorks';
import PlatformStats from '@/components/landing/PlatformStats';
import SuccessStories from '@/components/landing/SuccessStories';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedValueChains />
      <HowItWorks />
      <PlatformStats />
      <SuccessStories />
    </Layout>
  );
};

export default Index;