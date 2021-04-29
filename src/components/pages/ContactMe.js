import React from 'react';
import '../../App.js';
import './Pages.css';
import Footer from '../Footer';
import './ContactMe.css'

export default function ContactMe(){
    return(
    <div className='everything'>
        <div className='container' id='contact-me-container'>
        <h1>Contact Me</h1>
        <h2> </h2>
        <h2>Phone: 289-926-7906</h2>
        <h2></h2>
        <h2>Email: <a href='mailto:ndesh02@uwaterloo.ca'>ndesh02@uwaterloo.ca</a></h2>
        <h2></h2>
        <h2>Linkedin: <a target = '_blank' href='https://www.linkedin.com/in/neha-deshmukh-1117951b0/'>linkedin.com/in/neha-deshmukh-1117951b0/</a></h2>
        <h2></h2>
        <h2>Github: <a target='_blank' href = 'https://github.com/ndesh02'>github.com/ndesh02</a></h2>
        </div>
        
        <Footer/>
    </div>
    
    
    
    );
}