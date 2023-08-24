"use client"
import React, {useState, useEffect } from 'react'
import { useTheme } from "next-themes";
import { BiSolidMoon } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";

function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme('dark');
    
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true);
    }, []);
    
    if (!mounted) {
      return null;
    }

  return (
    
    <div className='mr-6 text-white'>
        {theme === "dark" ? (
        <BsFillSunFill size={30} cursor="pointer" onClick={() => setTheme("light")} />
        ) : (
        <BiSolidMoon size={30} cursor="pointer" onClick={() => setTheme("dark")} />
        )}
    </div>
  )
}

export default ThemeToggle

