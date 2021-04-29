import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import foxProj from './pages/foxProj.jpg';
import ideasClinic from './pages/ideasClinic.jpg';
import image8 from './img-8.jpg';
import image9 from './img-8.jpg';
function Cards() {
    return (
        <div className='cards'>
      <h1>Check out my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' >
            <CardItem
              src={foxProj}
              text='An action rpg with 5 levels created in Godot'
              label='Project'
              path='/projects'
            />
            <CardItem
              src={ideasClinic}
              text='Engineering Ideas Clinic Reasearch Assistant at the University of Waterloo'
              label='Experience'
              path='/resume'
            />
            <CardItem
              src={image8}
              text='Mobile responsive website created using React framework'
              label='Project'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image8}
              text='Assistant teacher at Spirit of Math for 4 years'
              label='Experience'
              path='/resume'
            />
            <CardItem
              src={image9}
              text=' -- created at RUHacks'
              label='Hackathon'
              path='/projects'
            />
            <CardItem
              src={image9}
              text='Newmarket High School Robotics President in 2020 - 2021'
              label='Experience'
              path='/resume'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
