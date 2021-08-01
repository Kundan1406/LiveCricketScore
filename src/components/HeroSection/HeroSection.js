import React from 'react';
import '../../App.css';
import { Button } from "react-bootstrap"
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from "react-router-dom";
 

function HeroSection() {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/scores`; 
    history.push(path);
  }

  return (
    <div className='hero-container'>
      <video src='https://media.istockphoto.com/videos/cricket-batsman-on-the-stadium-video-id677740658' autoPlay loop muted />
      <p>ADVENTURE AWAITS</p>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button variant="dark" onClick={routeChange}>
        Rankings
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--pri'
          buttonSize='btn--lar'
          onClick={routeChange}
          >
          Live Scores <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
