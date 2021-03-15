import React from 'react'
import '../../App.js'
import './Pages.css'
import Footer from '../Footer';
import picOfMe from './me.jpg';
import './Resume.css'
export default function Services(){
    return(
        <div className='everything'>
            <div className='container' id='resume-container'>
            <h1>Resume</h1>
        </div>

            <div className='resume-list'>
            
            <div className='resume-body' id="resume-1">
              <h1 className="resume-title">About Me</h1>
              <img src={picOfMe} alt="resume 1" className='resume-pic'/>
              <p className='resume-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <p className='resume-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <h2 className='resume-text'>gsytryrt</h2>
            </div>

            <div className='resume-body' id="resume-2">
              <h1 className="resume-title">About Me</h1>
              <img src={picOfMe} alt="resume 2"  className='resume-pic'/>
              <p className='resume-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <p className='resume-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <h2 className='resume-text'>gsytryrt</h2>
            </div>

            <div className='resume-body' id="resume-3">
              <h1 className="resume-title">About Me</h1>
              <img src={picOfMe} alt="resume 3"  className='resume-pic'/>
              <p className='resume-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <p className='resume-text'>
                  agtfzawyrhieow euiwatoertueritghiwrtohreio biart arut ar
                  auwetihiuett utghraeitgh rtuirtgreatureiugthaeruitghroeithgre
                  a iurth urotrueithreuiohrf
              </p>
              <h2 className='resume-text'>gsytryrt</h2>
            </div>

        </div>
            <Footer/>
        </div>
        
    );
}