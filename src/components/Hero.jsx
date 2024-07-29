import React from 'react';
import hero_thefn from "../assets/image/webp/hero_thefn.png";
import { Button } from "../common/Helper";
import red_line from "../assets/image/webp/red_line.png";

const Hero = () => {
    return (
        <div className=' bg-hero bg-cover bg-no-repeat bg-center min-h-screen lg:min-h-[810px] flex items-center relative'>
            <div className="container mt-9 py-10 relative z-[1]">
                <div className=" flex flex-col-reverse md:flex-row items-center pt-10 justify-between">
                    <div className=" flex xl:pb-8 flex-col justify-center max-w-[492px] items-center md:items-start w-full md:w-1/2 mt-6 md:mt-0">
                        <h2 className='font-orbitron font-bold text-white text-4xl sm:text-5xl xl:text-7xl xl:leading-[93.6px] text-center md:text-left tracking-wide'>Welcome to 1v2 Studio</h2>
                        <p className='max-w-[465px] font-poppins text-base sm:text-xl pb-0.5 text-white opacity-70 font-normal mt-4 text-center md:text-left'>Leading the Way in Creating Unique and Innovative Experiences on Roblox.</p>
                        <Button buttonName="Contact Us" buttonClass=" mt-10" />
                    </div>
                    <div className=" max-w-[602px] w-8/12 md:w-1/2 xl:w-full">
                        <img src={hero_thefn} alt="hero_thefn" className='w-full' />
                    </div>
                </div>
            </div>
            <img src={red_line} alt="red_line" className=' absolute bottom-2 lg:left-16 left-2' />
        </div>
    )
}

export default Hero;