import React from 'react'
import logo from "../assets/image/webp/logo.png";

const Navbar = () => {
    return (
        <div className=' fixed top-0 left-0 w-full' id='navbar'>
            <div className="container py-1.5">
                <nav className=' flex justify-between items-center'>
                    <a href="#navbar" className=' w-[86px] h-[86px] flex'>
                        <img src={logo} alt="logo" className=' w-full' />
                    </a>
                    <div className="">
                        <a href="#navbar" className='font-poppins font-normal text-base opacity-70 text-white duration-300 ease-linear relative after:bg-nav_hover after:absolute after:left-0 after:top-0 after:content-[""] after:bg-cover after:w-full after:h-full'>Home</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;