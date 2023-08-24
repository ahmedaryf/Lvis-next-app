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
        <div className='px-6 mb-0 md:mb-2'>
        <h5 className='text-5xl md:text-8xl mb-4 font-medium md:font-bold text-white text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_60%)] -m-14 md:-mt-24'>Hanifaru Bay</h5>
        <p className='text-lg'>Hanifaru Bay is located in Baa Atoll of the Maldives. It gained international recognition for its rich marine biodiversity and its designation as a marine protected area, A UNESCO Biosphere Reserve. Hanifaru Bay is renowned for being a feeding ground and aggregation site for several species of marine animals, most notably Manta rays and Whale Sharks. During certain times of the year, particularly from May to November, an extraordinary phenomenon called the &quot;Hanifaru Bay feeding frenzy&quot; occurs. Large numbers of plankton, particularly a species called &quot;Thallasemia&quot; or &quot;sea tomato,&quot; gather in the bay, attracting hundreds of manta rays and whale sharks that come to feed on the abundant food.</p> <br />
        <p className='text-lg hidden md:block'>This unique spectacle has made Hanifaru Bay a popular destination for snorkelers and divers who want to witness the mesmerizing sight of these gentle giants congregating in large numbers. However, due to the fragile ecosystem and the need for conservation, there are strict regulations in place to protect the area and minimize the impact of human activity.</p> <br />
        <p className='text-lg hidden md:block'>Visitors to Hanifaru Bay must obtain permits and adhere to guidelines established by the local authorities to ensure the preservation of the marine life and the delicate balance of the ecosystem. These guidelines may include restrictions on the number of people allowed in the water at a time, maintaining a safe distance from the marine animals, and prohibiting the use of certain equipment that could harm Manta rays.</p> <br />
        <p className='text-lg hidden md:block'>Hanifaru Bay serves as a reminder of the importance of preserving our marine ecosystems and the incredible biodiversity they support. Efforts are being made by local authorities, conservation organizations, and the tourism industry to promote responsible tourism practices and protect this natural treasure for future generations to enjoy.</p>
        </div>
    </div>
  )
}
