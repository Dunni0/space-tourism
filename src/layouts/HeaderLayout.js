import React from "react";
import { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"

export default function HeaderLayout() {
 
  const navRef = useRef()
  
  const showNav = (e) => {
    e.preventDefault()
    navRef.current.classList.toggle('resNav')
  }
    

  return (
    <div className="rootLayout">
 

      <header>
        <div>
          <img className="logo" src="./assets/shared/logo.svg" alt="logo" />
        </div>

        <nav ref={navRef} className="main_nav">
          <NavLink to="/">
            <b> 00 </b> Home
          </NavLink>
          <NavLink to="destination">
            <b> 01 </b> Destination
          </NavLink>
          <NavLink to="crew">
            <b> 02 </b> Crew
          </NavLink>
          <NavLink to="technology">
            <b> 03 </b> Technology
          </NavLink>
          <button onClick={showNav} className= "nav_btn">
            <FaTimes/>
          </button>
        </nav>
          <button onClick={showNav} className= "nav_btn">
            <FaBars />
          </button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
