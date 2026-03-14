import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BreakfastSpecial from './components/BreakfastSpecial';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import PartyBookings from './components/PartyBookings';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BreakfastSpecial />
      <Menu />
      <WhyChooseUs />
      <PartyBookings />
      <Reviews />
      <Gallery />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
