"use client"
import React from 'react'
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';


export default function PageRapper({children, delay}) {
    const path = usePathname();

     
  return (
   
        <motion.div
        key={path}
        initial = 'initialState'
        animate = 'animateState'
        exit = 'exitState'
        transition={{
          duration: 1,
          delay: delay
        }}
            variants={{
                initialState:{
                    opacity: 0,
                    
                    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                },
                animateState: {
                    opacity: 1,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                },
                exitState: {
                    opacity: 0,
                    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                }
            }} 
            >
                {children}
        </motion.div>
    
  )
}


