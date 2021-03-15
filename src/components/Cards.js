import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image9 from './img-9.jpg';
import image8 from './img-8.jpg';
function Cards() {
    return (
        <div className='cards'>
      <h1>Check out my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' >
            <CardItem
              src={image8}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/projects'
            />
            <CardItem
              src={image9}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/projects'
            />
            <CardItem
              src={image9}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image8}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/projects'
            />
            <CardItem
              src={image9}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/projects'
            />
            <CardItem
              src={image9}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/projects'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
