import React from 'react';
import '../../App.js';
import './Pages.css';
import Footer from '../Footer';
import './Projects.css'
import picOfMe from './me.jpg';

export default function Products(){
    return(
    <div className='everything'>
        <div className='container' id='projects-container'>
        <h1 className='projects'>Projects</h1>
        </div>
        
        <div className='projects-list'>
            
            <div className='projects-body' id="project-1">
              <h1 className="project-title">About Me</h1>
              <img src={picOfMe} alt="Project 1" className='project-pic'/>
              <p className='project-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <p className='project-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <h2 className='project-text'>gsytryrt</h2>
            </div>

            <div className='projects-body' id="project-2">
              <h1 className="project-title">About Me</h1>
              <img src={picOfMe} alt="Project 2"  className='project-pic'/>
              <p className='project-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <p className='project-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <h2 className='project-text'>gsytryrt</h2>
            </div>

            <div className='projects-body' id="project-3">
              <h1 className="project-title">About Me</h1>
              <img src={picOfMe} alt="Project 3"  className='project-pic'/>
              <p className='project-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <p className='project-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <h2 className='project-text'>gsytryrt</h2>
            </div>

        </div>
        <Footer/>
    </div>
    
    
    
    );
}