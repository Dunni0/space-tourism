import React from 'react'

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Crew() {
  const location = useLocation()



  useEffect(() => {
    // Change the body's background image based on the current location
    if (location.pathname === '/crew') {
      document.body.style.backgroundImage = 'url("/assets/crew/background-crew-desktop.jpg")';
      // Adjust other styles or properties as needed
    } else {
      // Reset the body's background image when leaving the destination page
      document.body.style.backgroundImage =  'url("/assets/home/background-home-desktop.jpg")';
    }
  }, [location.pathname]);

  const settings = {
      dots: true,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      fadeSpeed: 1000
    };
  return (
    <div className='crew_wrapper'>
     <div className='crew_text'> <span> 02 </span> <p> MEET YOUR CREW </p></div>
     <Slider {...settings} className='crew_info'>
         <div>
          <div className='crew_con' >
            <div className='crew_txt'>
            <span> COMMANDER </span>
            <h1> DOUGLAS HURLEY</h1>
            <p> Douglas Gerald Hurley is an American engineer, 
                former Marine Corps pilot and former NASA astronaut.
                He launched into space for the third time as commander 
                of Crew Dragon Demo-2.
            </p>
            </div>
            <img className='crew_img' src='/assets/crew/image-douglas-hurley.png' alt='crew img'/>
          </div>
          </div>

          <div>
          <div className='crew_con'>
           <div className='crew_txt'>
            <span> MISSION SPECIALIST  </span>
            <h1 className='long'> MARK SHUTTLEWORTH </h1>
            <p> Mark Richard Shuttleworth is the founder and CEO of Canonical, 
              the company behind the Linux-based Ubuntu operating system. 
              Shuttleworth became the first South African to travel to space as a space tourist.
            </p>
            </div>
            {/* <img className='crew_img' src='/assets/crew/image-victor-glover.png' alt='crew img'/> */}

            <img  id='crew_img' src='/assets/crew/image-mark-shuttleworth.png' alt='crew img'/>
          </div>
          </div>

          <div>
          <div className='crew_con'>
            <div className='crew_txt'>
            <span> PILOT </span>
            <h1> VICTOR GLOVER </h1>
            <p> Pilot on the first operational flight of the SpaceX 
              Crew Dragon to the International Space Station.
               Glover is a commander in the U.S. Navy where
                he pilots an F/A-18.He was a crew member of Expedition 64, 
              and served as a station systems flight engineer. 
            </p>
            </div>
            <img id='crew___img' src='/assets/crew/image-victor-glover.png' alt='crew img'/>
          </div>
          </div>

          <div>
          <div className='crew_con'>
            <div className='crew_txt'>
            <span> FLIGHT ENGINEER </span>
            <h1> ANOUSHEH ANSARI </h1>
            <p> Anousheh Ansari is an Iranian American engineer 
              and co-founder of Prodea Systems. Ansari was the fourth
               self-funded space tourist, the first self-funded woman 
               to fly to the ISS, and the first Iranian in space. 
            </p>
            </div>
            <img id="crew__img" src='/assets/crew/image-anousheh-ansari.png' alt='crew img'/>
          </div>
          </div>

        </Slider>
    </div>
  )
}
