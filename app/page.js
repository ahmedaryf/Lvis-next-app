"use client"
import React, { useEffect, useState } from 'react';
import PageRapper from "./components/PageRapper";
import ReactPlayer from 'react-player';
import picture from '../public/images/ocean-night1.jpg'
import Image from 'next/image';

export default function Home() {
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
    <PageRapper>
      <main className="min-h-screen bg-gradient-to-r from-cyan-300 to-blue-500 dark:from-cyan-800 dark:to-blue-900">
        <div className="w-screen overflow-hidden md:h-[85vh] relative">
          {isMobile ? (
            <Image src={picture} alt='Image' className='w-screen h-auto'/>
          ) : (
            <ReactPlayer
              playing={true}
              muted={true}
              loop={true}
              url="https://res.cloudinary.com/db95xjjk2/video/upload/v1692536683/hanifarubay-s_dwaxr4.mp4"
              width="100%"
              height="auto"
              className="w-screen h-auto"
            />
          )}

          <div className="bg-black/20 py-2 w-full absolute top-[75%] md:top-[85%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="text-5xl md:text-8xl font-medium md:font-bold text-white text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_60%)] ">
              LVIS Hotels
            </h2>
            <h1 className="text-center text-white md:text-2xl">
              Accommodation for visitors of Hanifaru bay
            </h1>
          </div>
        </div>
        <div></div>
      </main>
    </PageRapper>
  );
}
