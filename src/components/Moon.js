import React from 'react'


export default function Moon() {
  return (
    <div className='planet_wrapper'>
         <img className="planet" src='/assets/destination/image-moon.png' alt='moon' />

         <div className='planet_info'>
               <h1 className='planet_txt'> MOON</h1>
               <p> See our planet as you’ve never seen it before. 
                   A perfect relaxing trip away to help regain 
                   perspective and come back refreshed. 
                   While you’re there, take in some history by 
                   visiting the Luna 2 and Apollo 11 landing sites.</p>

                <div className='nums'>
                  <div className='dis'>
                  <p className='nums_header'> 
                    AVG. DISTANCE
                  </p>
                  <p className='nums_txt'>
                    384,400KM
                  </p>
                  </div>
                  <div className='time'>
                  <p className='nums_header'> 
                    EST. TRAVEL TIME
                  </p>
                  <p className='nums_txt'>
                    3 DAYS
                  </p>
                  </div>

                </div>
         </div>
    </div>
  )
}
