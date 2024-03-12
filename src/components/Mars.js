import React from 'react'


export default function Mars() {
  return (
    <div className='planet_wrapper'>
         <img className="planet" src='/assets/destination/image-mars.png' alt='moon' />

         <div className='planet_info'>
               <h1 className='planet_txt'> MARS </h1>
               <p> Don’t forget to pack your hiking boots.
                  You’ll need them to tackle Olympus Mons, 
                  the tallest planetary mountain in our solar system. 
                  It’s two and a half times the size of Everest!.</p>
                
                <div className='nums'>
                  <div className='dis'>
                  <p className='nums_header'> 
                    AVG. DISTANCE
                  </p>
                  <p className='nums_txt'>
                    225 MIL.
                  </p>
                  </div>
                  <div className='time'>
                  <p className='nums_header'> 
                    EST. TRAVEL TIME
                  </p>
                  <p className='nums_txt'>
                    9 DAYS
                  </p>
                  </div>

                </div>
         </div>
      </div>
  )
}
