"use client"

import Image from "next/image"
import Logo from "../../../public/Logo/logo_full_size.svg"
import { AiOutlineUser } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { BsMinecartLoaded } from "react-icons/bs";

const Header = () => {
  return (
    <>
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-top">
                    <div className="navbar-inner-top">
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
                    </div>
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
    </>
  )
}

export default Header