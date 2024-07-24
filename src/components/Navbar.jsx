import React, { useState } from 'react'
import logo from "../assets/image/webp/logo.png";
import { nav_link, Button } from '../common/Helper';
import nav_top from "../assets/image/webp/nav_top_hover.png";
import nav_bottom from "../assets/image/webp/nav_bottom_hover.png";

const Navbar = () => {
    const [open, setopen] = useState(false);
    const toggleopen = () => {
        setopen(!open);
    }
    return (
        <div className=' fixed top-0 left-0 w-full' id='navbar'>
            <div className="container py-1.5">
                <nav className=' flex justify-between items-center'>
                    <a href="#navbar" className=' md:w-[86px] md:h-[86px] w-16 h-16 flex'>
                        <img src={logo} alt="logo" className=' w-full' />
                    </a>
                    <div className={`${open ? "left-0" : "-left-full"} flex items-center xl:pl-16 z-10 absolute flex-col w-full h-screen justify-center gap-10 top-0 bg-hero bg-no-repeat bg-cover bg-center xl:relative xl:bg-none xl:flex-row xl:gap-0 xl:h-fit xl:w-fit xl:left-auto transition-slow`}>
                        {nav_link.map((index) => (
                            <div className="px-4 relative">
                                <div className="group">
                                    <img src={nav_top} alt="nav_top" className="absolute -top-4 group-hover:-top-[8px] left-0 w-full opacity-0 group-hover:opacity-100 -z-[1] transition-slow" />
                                    <a onClick={toggleopen} key={index} href="#navbar" className='font-poppins group font-normal text-base opacity-70 text-white transition-slow hover:opacity-100 relative z-[1]'>
                                        {index.heading}
                                    </a>
                                    <img src={nav_bottom} alt="nav_bottom" className="absolute -bottom-4 group-hover:-bottom-[8px] left-0 w-full opacity-0 group-hover:opacity-100 -z-[1] transition-slow" />
                                </div>
                            </div>
                        ))}
                        <Button buttonName="Get Started" buttonClass=" flex sm:hidden" />
                    </div>
                    <div className=" flex items-center gap-10 cursor-pointer">
                        <Button buttonName="Get Started" buttonClass=" hidden sm:flex" />
                        <div onClick={toggleopen} className=" w-7 h-5 relative xl:hidden flex z-20">
                            <span className={`${open ? "top-1/2 rotate-45" : "top-0"} absolute w-full h-1 bg-white transition-slow`}></span>
                            <span className={`${open ? "opacity-0" : "opacity-100"} absolute w-full h-1 bg-white top-1/2 -translate-y-1/2`}></span>
                            <span className={`${open ? "top-1/2 -rotate-45" : "bottom-0"} absolute w-full h-1 bg-white transition-slow`}></span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;