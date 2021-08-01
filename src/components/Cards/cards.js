import React from 'react';
import './card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Updates!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.cricbuzz.com/a/img/v1/420x235/i1/c206825/india-leave-out-hardik-shaw-f.jpg'
              text='India leave out Hardik, Shaw for WTC Final, England Tests'
              label='Finals'
              path='/'
            />
           <CardItem
              src='https://www.cricbuzz.com/a/img/v1/595x396/i1/c206994/the-lives-lost-to-the-coronavi.jpg'
              text="Cricket's COVID casualties"
              label='Finals'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='https://www.cricbuzz.com/a/img/v1/420x235/i1/c206984/reminiscing-about-a-revolution.jpg'
              text='Reminiscing about a revolution'
              label='Finals'
              path='/'
            />
            <CardItem
              src='https://www.cricbuzz.com/a/img/v1/595x396/i1/c207001/the-wtc-final-will-get-underwa.jpg'
              text='4000 fans set to be allowed for WTC final'
              label='Finals'
              path='/'
            />
              <CardItem
              src='https://www.cricbuzz.com/a/img/v1/420x235/i1/c206980/mens-ashes-from-december-8-g.jpg'
              text="Men's Ashes from December 8; Gabba to host opener"
              label='Finals'
              path='/'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
