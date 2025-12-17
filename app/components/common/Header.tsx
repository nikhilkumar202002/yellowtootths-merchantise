"use client"

import Image from "next/image"
import Logo from "../../../public/Logo/logo_full_size.svg"
import { AiOutlineUser } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { BsMinecartLoaded } from "react-icons/bs";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../../styles/Common.css"

const tickerItems = [
  "Trending now: style, tech & more at unbeatable prices!",
  "Free shipping on orders over $50 this week only!",
  "New Summer Collection: Up to 30% OFF",
];

const Header = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % tickerItems.length);
        }, 5000); // Changes every 5 seconds

        return () => clearInterval(interval);
    }, []);

  return (
    <>
        <header className="navbar">
            <div className="navbar-container px-10 bg-black">
             
                <div className="navbar-top">
                    {/* <div className="navbar-inner-top">
                        <div className="navbar-inner-top-menu flex gap-3 items-center justify-end text-xs">
                            <div className="navbar-inner-top-item">
                                Help
                            </div>
                            <div className="navbar-inner-top-item">
                                Order & Tracking
                            </div>
                            <div className="navbar-inner-top-item">
                                Signup
                            </div>
                            <div className="navbar-inner-top-item">
                                Login
                            </div>
                        </div>
                    </div> */}
                        <div className="navbar-top-flex w-full grid grid-cols-3 justify-between items-center py-3">
                            <div className="navbar-logo">
                                <Image src={Logo} alt="Yellowtooths Merchantise" width={150} height={0}/>
                            </div>

                            <div className="navbar-menu">
                                <div className="navbar-menu-items flex gap-8 items-center justify-center">
                                    
                                        <a href="">Home</a>
                                        <a href="">Collections</a>
                                        <a href="">Shop</a>
                                        <a href="">Trending</a>
                                        <a href="">New Arrivals</a>
                                    
                                </div>
                            </div>

                            <div className="navbar-right flex gap-4 items-center justify-end">
                                <div className="navbar-right-item">
                                    <AiOutlineUser/>
                                </div>
                                <div className="navbar-right-item">
                                    <GrFavorite/>
                                </div>
                                <div className="navbar-right-item">
                                    <BsMinecartLoaded/>
                                </div>
                            </div>
                        </div>                
                </div>
            </div>
        </header>
             <div className="navbar-ticker overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index} // Key is crucial for Framer Motion to detect change
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="navbar-ticker-item"
        >
          <h4>{tickerItems[index]}</h4>
        </motion.div>
      </AnimatePresence>
    </div>
    </>
  )
}

export default Header