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
              <h1 className="resume-title">Summary of Qualifications</h1>
              {/* <img src={picOfMe} alt="resume 1" className='resume-pic'/> */}
              <p className='resume-text'>
                •	Programming Languages: Java, Python, C++, C#, CSS, JavaScript, HTML5, SQL query
                <br></br>
                <br></br>
                •	Gained experience with Machine Learning by creating a model to drive a 1/10th scale autonomous car and also completing a Machine Learning course by Stanford on Coursera
                <br></br>
                <br></br>
                •	Python for Everybody Specialization (comprises of 5 courses on Coursera): Learned valuable skills such as how to create and structure relational databases using SQL, create data structures in Python and access web data 
                <br></br>
                <br></br>
                •	Experience working as part of a cohesive and well-functioning team to achieve specific goals within a certain time frame
                <br></br>
                <br></br>
                •	Highly motivated to learn, grow and problem solve
                <br></br>
                <br></br>
                •	Adept in using HTML, CSS and JavaScript for web development
                <br></br>
                <br></br>
                •	Proficient in reading and writing French (French Immersion Certificate)
                <br></br>
                <br></br>

              </p>
              
            </div>

            <div className='resume-body' id="resume-2">
              <h1 className="resume-title">Experience</h1>
              {/* <img src={picOfMe} alt="resume 2"  className='resume-pic'/> */}
              <h2 className='resume-text'>Research Assistant, Engineering Ideas Clinic University of Waterloo, January 2021 to April 2021</h2>

              <p className='resume-text'>
                •	Spearheaded the development of a Machine Learning model to create a 1/10th scale autonomous vehicle using Azure, Jupyter Notebooks and Anaconda
                <br></br>
                <br></br>
                •	Designed simulations of a steam engine and a governor using Godot game engine from scratch; aided  students in understanding these machines in a virtual environment
                <br></br>
                <br></br>
                •	Created an autonomous Flappy Bird game in Godot to help students understand PID control
                <br></br>
                <br></br>

              </p>

              <h2 className='resume-text'>Assistant Teacher, Spirit of Math Schools Newmarket, September 2016 to June 2020</h2>
              <p className='resume-text'>
                •	Partnered with teacher to plan and implement lessons following school's curriculum, goals, and objectives.
                <br></br>
                <br></br>
                •	Performed special tasks such as tutoring and additional explanations to help struggling students learn and grow.
                <br></br>
                <br></br>
                •	Kept classrooms clean, neat and properly sanitized for student health and classroom efficiency.
                <br></br>
                <br></br>

              </p>

            </div>

            <div className='resume-body' id="resume-3">
              <h1 className="resume-title">Projects and Extracurriculars</h1>
              {/* <img src={picOfMe} alt="resume 3"  className='resume-pic'/> */}

              <h2 className='resume-text'>Personal Website, built using React Framework, March 2021</h2>
              <p className='resume-text'>
                •	Built a personal website showcasing my resume and projects in under two weeks
                <br></br>
                <br></br>
                •	Used the React framework to boost productivity and improve readability of code
                <br></br>
                <br></br>
                •	Used HTML, CSS and JavaScript to build the website efficiently
                <br></br>
                <br></br>

              </p>

              <h2 className='resume-text'>Action RPG, built using Godot game engine, April 2021</h2>
              <p className='resume-text'>
                •	Used Godot to create an Action RPG called Fox Vs Bats, a fully playable game with multiple levels
                <br></br>
                <br></br>
                •	C# and game design concepts were used to program the game
                <br></br>
                <br></br>

              </p>

              <h2 className='resume-text'>FIRST Robotics Competition Programming, Electrical and Build, January 2019 to March 2020</h2>
              <p className='resume-text'>
                •	Learned to wire a Robot safely using industrial materials for the Robot to pass strict safety regulations.
                <br></br>
                <br></br>
                •	Used Java and Object-Oriented programming concepts to create Robot Code in VS Code as part of the  programming team.
                <br></br>
                <br></br>
                •	Learned how to conduct myself in a machine shop as well as how to use various tools in a safe manner.
                <br></br>
                <br></br>

              </p>

              <h2 className='resume-text'>President of Robotics Club, Newmarket High School, September 2019 to June 2020</h2>
              <p className='resume-text'>
                •	Led the club’s participation in multiple Robotics competitions such as VEX and FIRST.
                <br></br>
                <br></br>
                •	Managed the team of club executives and assigned tasks to further the club’s development.
                <br></br>
                <br></br>
                •	Learned valuable leadership, conflict resolution and time management skills.
                <br></br>
                <br></br>

              </p>


            </div>

            <div className='resume-body' id="resume-4">
              <h1 className="resume-title">Education</h1>
              {/* <img src={picOfMe} alt="resume 3"  className='resume-pic'/> */}
              <p className='resume-text'>
                University of Waterloo, September 2020 to April 2025 Candidate for Bachelor of Applied Science in Computer Engineering 
                <br></br>
                <br></br>
                Honors and Achievements: President’s Scholarship ($2000), Nortel Networks Scholarship ($3500)
                <br></br>
                <br></br>
                President’s Honor Roll throughout high school as well as various Math competition awards
                <br></br>
                <br></br>
              </p>
              
            </div>

        </div>
            <Footer/>
        </div>
        
    );
}