import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import './Pages.css';
function Home() {
  return (
    <div>
        <HeroSection />
        <div className='about-me-container'>
            <h1>Placeholder</h1>
        </div>
        <Cards />
        <Footer />

    </div>
  );
}

export default Home;