import React from 'react';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Problems from '../components/Problems';
import Solutions from '../components/Solutions';
import Products from '../components/Products';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Problems />
      <Solutions />
      <Products />
    </>
  );
};

export default Home;