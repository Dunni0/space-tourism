import React from 'react'


export default function Europa() {


  return (
    <div className='planet_wrapper'>

      <div className='spinning-circle'>
         <img className="planet" src='/assets/destination/image-europa.png' alt='moon' />
     </div>
         <div className='planet_info'>
               <h1 className='planet_txt'> EUROPA </h1>
               <p> The smallest of the four Galilean moons orbiting Jupiter,
                 Europa is a winter lover’s dream. With an icy surface, 
                 it’s perfect for a bit of ice skating, curling, hockey, 
                 or simple relaxation in your snug wintery cabin.</p>

                <div className='nums'>
                  <div className='dis'>
                  <p className='nums_header'> 
                    AVG. DISTANCE
                  </p>
                  <p className='nums_txt'>
                    648 MIL. KM
                  </p>
                  </div>
                  <div className='time'>
                  <p className='nums_header'> 
                    EST. TRAVEL TIME
                  </p>
                  <p className='nums_txt'>
                    3 YEARS
                  </p>
                  </div>

                </div>
         </div>
      </div>
  )
}
