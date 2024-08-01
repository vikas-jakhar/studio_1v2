import React, { useEffect, useState } from 'react';
import logo from "../assets/image/webp/logo.webp";
import { NAV_LINKS_LIST } from './Helper';
import nav_top from "../assets/image/webp/nav_top_hover.webp";
import nav_bottom from "../assets/image/webp/nav_bottom_hover.webp";
import { Link } from 'react-router-dom';
import CommonButton from './CommonButton';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const TOGGLE_OPEN = () => {
        if (window.innerWidth < 1280) {
            setOpen(prevOpen => !prevOpen);
        }
    };

    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1280) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        };

        handleOverflow();

        const handleScroll = () => {
            const scrolled = document.documentElement.scrollTop;
            const navBar = document.querySelector(".menu");
            if (navBar) {
                if (scrolled > 200) {
                    navBar.classList.add("backdrop-blur-lg");
                } else {
                    navBar.classList.remove("backdrop-blur-lg");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleOverflow);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className='fixed top-0 left-0 w-full z-20 menu' id='navbar'>
            <div className="container py-1.5">
                <nav className='flex justify-between items-center'>
                    <a href="#navbar" className='md:w-[86px] md:h-[86px] w-16 h-16 flex'>
                        <img src={logo} alt="logo" className='w-full' />
                    </a>
                    <div className={`${open ? "left-0" : "-left-full"} flex items-center xl:pl-16 z-10 absolute flex-col w-full h-screen justify-center gap-10 top-0 bg-hero bg-no-repeat bg-cover bg-center xl:relative xl:bg-none xl:flex-row xl:gap-0 xl:h-fit xl:w-fit xl:left-auto transition-slow`}>
                        {NAV_LINKS_LIST.map((index) => (
                            <div key={index} className="px-4 relative">
                                <div className="group">
                                    <img src={nav_top} alt="nav_top" className={`${index.hover_top || ""} absolute -top-4 left-0 w-full opacity-0 group-hover:opacity-100 -z-[1] transition-slow`} />
                                    <Link to={index.link} onClick={TOGGLE_OPEN} className='font-poppins group font-normal text-base opacity-70 text-white transition-slow hover:opacity-100 relative z-[2]'> {index.heading}</Link>
                                    <img src={nav_bottom} alt="nav_bottom" className={`${index.hover_bottom || ""} absolute -bottom-4 left-0 w-full opacity-0 group-hover:opacity-100 -z-[1] transition-slow`} />
                                </div>
                            </div>
                        ))}
                        <CommonButton ButtonName="Get Started" ButtonClass="flex sm:hidden" />
                    </div>
                    <div className="flex items-center gap-10 cursor-pointer">
                        <CommonButton ButtonName="Get Started" ButtonClass="hidden sm:flex" />
                        <div onClick={TOGGLE_OPEN} className="w-7 h-5 relative xl:hidden flex z-20">
                            <span className={`${open ? "top-1/2 rotate-45" : "top-0"} absolute w-full h-1 bg-white transition-slow`}></span>
                            <span className={`${open ? "opacity-0" : "opacity-100"} absolute w-full h-1 bg-white top-1/2 -translate-y-1/2`}></span>
                            <span className={`${open ? "top-1/2 -rotate-45" : "bottom-0"} absolute w-full h-1 bg-white transition-slow`}></span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
