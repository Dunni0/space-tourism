import React from 'react'


export default function Titan() {
  return (
    <div className='planet_wrapper'>
         <img className="planet" src='/assets/destination/image-titan.png' alt='moon' />

         <div className='planet_info'>
               <h1 className='planet_txt'> TITAN </h1>
               <p> The only moon known to have a dense atmosphere other than Earth, 
                 Titan is a home away from home (just a few hundred degrees colder!).
                 As a bonus, you get striking views of the Rings of Saturn.</p>

                <div className='nums'>
                  <div className='dis'>
                  <p className='nums_header'> 
                    AVG. DISTANCE
                  </p>
                  <p className='nums_txt'>
                    1.6 BIL. KM
                  </p>
                  </div>
                  <div className='time'>
                  <p className='nums_header'> 
                    EST. TRAVEL TIME
                  </p>
                  <p className='nums_txt'>
                    7 YEARS
                  </p>
                  </div>

                </div>
         </div>
      </div>
  )
}
