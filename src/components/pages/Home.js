import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import './Pages.css';
import picOfMe from './me.jpg';

function Home() {
  return (
    <div>
        <HeroSection />
        <div className='about-me-container'>
            
            <div className='about-me-body'>
              <h1 id="about-me-title">About Me</h1>
              <img src={picOfMe} alt="Neha Deshmukh" id='pic-of-me'/>
              <p className='about-me-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <p className='about-me-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <h2 className='about-me-text'>gsytryrt</h2>
                
            </div>
            
        </div>
        <Cards />
        <Footer />

    </div>
  );
}

export default Home;