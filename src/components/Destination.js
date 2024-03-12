import React from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import "../destinations.css"
// import data from "../data.json"

export default function Destination() {

  //  const destinatiosn = data.destinations;
  // console.log(destinations);

  // console.log(data)
  const location = useLocation()

  const isActive = location.pathname === '/destination';


  useEffect(() => {
    // Change the body's background image based on the current location
    if (location.pathname === '/destination' || location.pathname === '/destination/moon' || location.pathname === '/destination/mars' || location.pathname === '/destination/europa' || location.pathname === '/destination/titan') {
      document.body.style.backgroundImage = 'url("/assets/destination/background-destination-desktop.jpg")';
      // Adjust other styles or properties as needed
    } else {
      // Reset the body's background image when leaving the destination page
      document.body.style.backgroundImage =  'url("/assets/home/background-home-desktop.jpg")';
    }
  }, [location.pathname]);

  return (
    <div className='destination_wrapper'>
     <div className='destination_text'> <span> 01 </span> <p>Pick your destination  </p></div>

     <div className='destination_info'>

      <nav className='destinations'>
        <NavLink to="moon" className={isActive ? 'active' : ''}> MOON </NavLink>
        <NavLink to="mars"> MARS </NavLink>
        <NavLink to="europa"> EUROPA </NavLink>
        <NavLink to="titan"> TITAN </NavLink>
      </nav>

      <Outlet />

     </div>

    </div>
  )
}
