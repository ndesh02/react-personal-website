import React from 'react';
import '../../App.js';
import './Pages.css';
import Footer from '../Footer';

export default function ContactMe(){
    return(
    <div className='everything'>
        <div className='container' id='contact-me-container'>
        <h1>Contact Me</h1>
        <h2>Phone: 289-926-7906</h2>
        <h2>Email: ndesh02@uwaterloo.ca</h2>
        <h2>Linkedin</h2>
        <h2>Github</h2>
        </div>
        
        <Footer/>
    </div>
    
    
    
    );
}