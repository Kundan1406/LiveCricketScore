import React from 'react';
import ImageSlider from '../components/Slider/ImageSlider';
import { SliderData } from '../components/Slider/SliderData';
import HeroSection from '../components/HeroSection/HeroSection';
import Cards from '../components/Cards/cards';

const Home = () => {
  return (
    <>
    <HeroSection />
    <ImageSlider slides={SliderData} />
    <Cards />
  </>
  );
};

export default Home;
