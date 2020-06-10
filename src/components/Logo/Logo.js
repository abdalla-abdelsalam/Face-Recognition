import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br3 shadow-2" options={{ max : 55 }} style={{ height: 115, width: 140 }} >
        <div className="Tilt-inner pa2">
          <img style={{paddingTop: '0px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;