import React from 'react';
import hero_thefn from "../assets/image/webp/hero_thefn.webp";
import red_line from "../assets/image/webp/red_line.webp";
import CommonButton from '../common/CommonButton';

const Hero = () => {
    return (
        <div className=' bg-hero bg-cover bg-no-repeat bg-center sm:pt-24 md:pt-0 lg:py-10 xl:py-0 xl:min-h-[810px] flex items-center relative' id='hero'>
            <div className="container mt-9 py-10 relative z-[1]">
                <div className=" flex flex-col-reverse md:flex-row items-center pt-10 justify-between">
                    <div className=" flex relative z-[1] xl:pb-8 flex-col justify-center max-w-[492px] items-center md:items-start w-full md:w-1/2 mt-6 md:mt-0">
                        <h2 className='font-orbitron font-bold text-white text-4xl sm:text-5xl xl:text-7xl xl:leading-[93.6px] text-center md:text-left tracking-wide'>Welcome to 1v2 Studio</h2>
                        <p className='max-w-[465px] font-poppins text-base sm:text-xl pb-0.5 text-white opacity-70 font-normal mt-4 text-center md:text-left'>Leading the Way in Creating Unique and Innovative Experiences on Roblox.</p>
                        <CommonButton ButtonName="Contact Us" ButtonClass=" mt-10" />
                    </div>
                    <div className=" max-w-[602px] w-full sm:w-8/12 md:w-1/2 xl:w-full absolute md:relative opacity-60 md:opacity-100">
                        <img src={hero_thefn} alt="hero_thefn" className='w-full' />
                    </div>
                </div>
            </div>
            <img src={red_line} alt="red_line" className=' absolute bottom-2 hidden xl:flex lg:left-16 left-2' />
        </div>
    )
}

export default Hero;