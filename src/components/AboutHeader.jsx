import React from 'react';
import red_line from "../assets/image/webp/red_line.webp";
import Icon from '../common/Icon';
import { Link } from 'react-router-dom';
import nav_top from "../assets/image/webp/nav_top_hover.webp";
import nav_bottom from "../assets/image/webp/nav_bottom_hover.webp";
import { NAV_ABOUT_LINK } from '../common/Helper';

const AboutHeader = () => {
    return (
        <div className=' bg-hero bg-cover bg-no-repeat bg-center pt-1 pb-6 min-h-[70vh] xl:min-h-[636px] flex items-end relative' id='hero'>
            <h2 className='font-orbitron absolute top-[48%] left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold text-white text-4xl sm:text-5xl xl:text-7xl xl:leading-[93.6px] text-center md:text-left tracking-wide text-nowrap'>About us</h2>
            <div className=" relative w-full mb-[43px] left-0">
                <div className=" relative z-[2] gap-2 xl:mb-0 pb-3 lg:pb-3 flex justify-center items-center">
                    {NAV_ABOUT_LINK.map((index) => (
                        <div key={index} className="px-4 relative">
                            <div className="group">
                                <img src={nav_top} alt="nav_top" className={`${index.hover_top || ""} absolute -top-4 left-0 w-full opacity-0 group-hover:opacity-100 -z-[1] transition-slow`} />
                                <Link to={index.link} className='font-poppins group font-normal text-base opacity-70 text-white transition-slow hover:opacity-100 relative z-[2]'> {index.heading}</Link>
                                <img src={nav_bottom} alt="nav_bottom" className={`${index.hover_bottom || ""} absolute -bottom-4 left-0 w-full opacity-0 group-hover:opacity-100 -z-[1] transition-slow`} />
                            </div>
                        </div>
                    ))}
                    <Icon icon="About_Layer" className='flex justify-center absolute w-[800px] sm:w-[1250px] md:w-[1540px] left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-6 lg:-bottom-3 xl:-bottom-6' />
                    <Icon icon="Right_Arrow" className=" absolute left-[49.4%] -translate-x-1/2" />
                </div>
            </div>
            <img src={red_line} alt="red_line" className=' absolute bottom-[85px] hidden xl:flex lg:left-16 left-2' />
        </div>
    )
}

export default AboutHeader;