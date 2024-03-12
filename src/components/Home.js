import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    // Change the body's background image based on the current location
    if (location.pathname === '/home') {
        document.body.style.backgroundImage = 'url("/assets/technology/background-technology-desktop.jpg")';
        
      // Adjust other styles or properties as needed
    } else {
      // Reset the body's background image when leaving the destination page
      document.body.style.backgroundImage =  'url("/assets/technology/background-technology-desktop.jpg")';
    }
  }, [location.pathname]);

  return (
    <div className='homeCon'>
      <div className='intro_txt'>
        <span> SO, YOU WANT TO TRAVEL TO </span>
        <h1 className='space'> SPACE </h1>
        <p className='text'>
          Let’s face it; if you want to go to space, you might as well <br/>
          genuinely go to outer space and not hover kind of on the <br/>
          edge of it. Well sit back, and relax because we’ll give you a <br/>
          truly out of this world experience!
        </p>
      </div>

      <div className='circle'>
         <h2> EXPLORE</h2>
      </div>
    </div>
  )
}
