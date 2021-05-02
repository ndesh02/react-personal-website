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
              <br></br>
              <br></br>
              <br></br>
              <p className='about-me-text'>
                  Hi! I'm a first year computer engineering student at the University of Waterloo. 
              </p>
              <p className='about-me-text'>
                  My interests include machine learning, game development and web development. I know a variety of programming languages such as C++, Java, C#, Python, HTML, CSS and Javascript.
              </p>
              <p className='about-me-text'>
                  Some of my hobbies are skiing, rollerblading, reading and bullet journaling.
              </p>
              
                
            </div>
            
        </div>
        <Cards />
        <Footer />

    </div>
  );
}

export default Home;