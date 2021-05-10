import React from 'react';
import '../../App.js';
import './Pages.css';
import Footer from '../Footer';
import './Projects.css'
import foxProj2 from './foxProj2.jpg'
import foxProj3 from './foxProj3.jpg';
import hackProj from './me.jpg'
import websiteProj from './scrnshtWebsite.png'

export default function Products(){
    return(
    <div className='everything'>
        <div className='container' id='projects-container'>
        <h1 className='projects'>Projects</h1>
        </div>
        
        <div className='projects-list'>
            
            <div className='projects-body' id="project-1">
              <h1 className="project-title">Fox vs Bats</h1>
              <img src={foxProj3} alt="Project 1" className='project-pic'/>
              <br></br>
              <br></br>
              <br></br>
              <p className='project-text'>
                  Fox vs Bats is an action rpg created in the game engine Godot.   
              </p>
              <p className='project-text'>
                  The game has 5 levels and is fully playable.
              </p>
              <p className='project-text'>
                  The goal is for the player to kill all of the bats in all levels.
              </p>
              <p className='project-text'>
                  At the start of each level they begin with 4 hearts and must defeat the bats before the bats manage to kill them.
              </p>
              <p className='project-text'>
                  The levels get increasingly difficult and the number of bats on each increases as the player progresses.
              </p>
              <p className='project-text'>
                  The source code can be found on my github at <a target='_blank' href='https://github.com/ndesh02/Fox-VS-Bats'>github.com/ndesh02/Fox-Vs-Bats</a> and the playable game can be found under the exports folder.
              </p>
            </div>

            <div className='projects-body' id="project-2">
              <h1 className="project-title">Personal Website</h1>
              <img src={websiteProj} alt="Project 2"  className='project-pic'/>
              <br></br>
              <br></br>
              <br></br>
              <p className='project-text'>
                  A website created to showcase my projects and resume.   
              </p>
              <p className='project-text'>
                  This website was created using the React framework and is mobile responsive.
              </p>
              <p className='project-text'>
                  A combination of HTML, CSS and Javacript was used to create this website.
              </p>
              <p className='project-text'>
                  The source code can be found on my github at <a target='_blank' href='https://github.com/ndesh02/react-personal-website'>github.com/ndesh02/react-personal-website</a>.
              </p>
            </div>

            {/* <div className='projects-body' id="project-3">
              <h1 className="project-title">About Me</h1>
              <img src={hackProj} alt="Project 3"  className='project-pic'/>
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
            </div> */}

        </div>
        <Footer/>
    </div>
    
    
    
    );
}