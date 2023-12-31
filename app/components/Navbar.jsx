"use client"
import React, { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import {FaPagelines} from 'react-icons/fa'
import {GiHamburgerMenu} from  'react-icons/gi'
import {MdClose} from  'react-icons/md'
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '/public/logo.png';

const navLinks = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About',
        url: '/about'
    },
]

const containerVars = {
    initial: {
      transition: {
        staggerDirection: -1,
        staggerChildren: 0.09, // Adjust the stagger delay as needed
      },
    },
    open: {
      transition: {
        staggerDirection: 1,
        staggerChildren: 0.09, // Adjust the stagger delay as needed
        delayChildren: .02
      },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.12, 0, 0.39, 1],
        duration: .5,
      },
    },
  };

  const menuVars = {
    initial: {
      y: -500, opacity: 0, scaleY: 0, scaleX: 0
    },
    animate: {
      y: 0, opacity: 1, scaleY: 1, scaleX: 1
    },
    exit: {
      y: -500, opacity: 0, scaleY: 0, scaleX: 0, transition: {delay: .4, duration: .2}
    }
  }

export default function Navbar() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 1000) {
          ref.current.classList.add('bg-gradient-to-r', 'from-black/10', 'to-black/20', 'dark:from-black/30', 'dark:to-black/60');
         
        } else {
          ref.current.classList.remove('bg-gradient-to-r', 'from-black/10', 'to-black/20', 'dark:from-black/30', 'dark:to-black/60');
        }
      };
  
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    
    <nav ref={ref} className=' bg-transparent duration-1000 px-4 py-6 flex justify-between items-center fixed w-screen z-50'>
        <div className='flex justify-between w-full items-center'>
            <Link href={'/'} className='text-xl w-10 h-10'><Image priority src={Logo} alt='Logo' /></Link>
            <ThemeToggle />
            {
              isOpen ? <MdClose color='white' onClick={() => setIsOpen(false)} size={32} className='block md:hidden' /> :  <GiHamburgerMenu color='white' onClick={() => setIsOpen(true)} size={32} className='block md:hidden' />

            }
        </div>
        {/* Desktop Navbar */}
        <div>
            <ul className=' hidden md:flex'>
            {navLinks.map((navItem, index) => {
                return (
                <li className='mx-4' key={index}><Link href={navItem.url} className='text-white relative'>
                {navItem.url === path && 
                <motion.span layoutId='underline' className='absolute left-0 top-full bg-white block h-[3px] w-full'></motion.span> }
                {navItem.name}
                </Link></li>
                )
            })}
            </ul>
        </div>
        {/* Mobile Navbar */}
        
        <AnimatePresence mode='wait'>
        {isOpen &&
        <motion.div
        variants={menuVars}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{
            duration: 0.2,
            // ease: [0.12, 0, 0.39, 0],
          }}
         className='block md:hidden absolute left-0 top-0 w-full bg-gradient-to-b to-black from-[#616164] min-h-[100vh] z-50 pt-10'>
         <motion.div
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial">
            <MdClose color='white' onClick={() => setIsOpen(false)} size={32} className='block md:hidden me-4 absolute right-0' />
            {navLinks.map((navItem, index) => {
                return (
                    <div key={index} className="overflow-hidden pt-10 ">
                        <motion.h5
                            variants={linkVars}
                            className='mx-4 py-4 text-center' key={index}><Link onClick={() => setIsOpen(false)} href={navItem.url} className='text-3xl text-white [text-shadow:_4px_1px_2px_rgb(0_0_0_/_60%)]'>{navItem.name}</Link>
                        </motion.h5>
                    </div>
                )
            })}
           
            </motion.div>
        </motion.div>
        }
    </AnimatePresence>
   
    
    </nav>
    
  )
}
// color: #616164 #7E2E35  #DAB785
