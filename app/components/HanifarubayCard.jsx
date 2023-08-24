import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import hanifarubay from '../../public/images/manta.jpg'
import ReactPlayer from 'react-player'


export default function HanifarubayCard() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Update the isMobile state based on window width
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };
    
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <div>
        {isMobile ? <Image src={hanifarubay} alt='Hanifaru bay image' /> : 
            <ReactPlayer url='/videos/hanifarubay-s.mp4' playing={true} loop={true} muted={true} width={'100%'} height={'auto'} />
        }
        <div className='p-4 mb-6'>
        <h5 className='text-3xl md:text-7xl text-center my-4'>Hanifaru Bay</h5>
        <p>Hanifaru Bay is located in Baa Atoll of the Maldives. It gained international recognition for its rich marine biodiversity and its designation as a marine protected area, A UNESCO Biosphere Reserve. Hanifaru Bay is renowned for being a feeding ground and aggregation site for several species of marine animals, most notably Manta rays and Whale Sharks. During certain times of the year, particularly from May to November, an extraordinary phenomenon called the &quot;Hanifaru Bay feeding frenzy&quot; occurs. Large numbers of plankton, particularly a species called &quot;Thallasemia&quot; or &quot;sea tomato,&quot; gather in the bay, attracting hundreds of manta rays and whale sharks that come to feed on the abundant food.</p>
        </div>
    </div>
  )
}
