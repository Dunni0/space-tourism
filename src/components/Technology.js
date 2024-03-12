import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "./../data.json"

export default function Technology() {
 const technologies = data.technology
 const [value, setValue] = useState(0);
 const { name, images, description } = technologies[value];
   
  const location = useLocation();

  useEffect(() => {
    // Change the body's background image based on the current location
    if (location.pathname === "/technology") {
      document.body.style.backgroundImage =
        'url("/assets/technology/background-technology-desktop.jpg")';
      // Adjust other styles or properties as needed
    } else {
      // Reset the body's background image when leaving the destination page
      document.body.style.backgroundImage =
        'url("/assets/home/background-home-desktop.jpg")';
    }
  }, [location.pathname]);

  return (
    <div className="techWrapper">
      <div className="tech_text">
        <span> 02 </span> <p> MEET YOUR CREW </p>
      </div>

      <div className="tech_info">
      
      <div className="btn">

      {technologies.map((technology, index) => (
                <button
                  key={index}
                  className={index === value ? "activeBtn" : ""}
                  onClick={() => setValue(index)}
                >
                  {index + 1}
              </button>
      ))}
      </div>
        <div className="techInfoInner">
          

          <div className="tech_txt">
            <p> THE TERMINOLOGY... </p>
            <h1> {name} </h1>
            <p className="txt">
            {description}
            </p>
          </div>


          <img  
            className="portrait"       
            src={images.portrait}
            alt="technology"
          />

          <img
          className="landscape"
            src={images.landscape}
            alt="technology"
          />
        </div>
      </div>
    </div>
  );
}
