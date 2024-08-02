import React from 'react'
import Icon from '../common/Icon';
import about_top_right from "../assets/image/webp/about_top_right.webp";
import gym from "../assets/image/webp/gym.webp";
import gaming_red_line from "../assets/image/webp/gaming_red_line.webp";
import red_line from "../assets/image/webp/red_line.webp";
import about_bottom_left from "../assets/image/webp/about_bottom_left.webp";
import red_circle from "../assets/image/webp/red_circle.webp";
import about_layer from "../assets/image/webp/about_layer.webp";
import CommonButton from '../common/CommonButton';
import CommonHeading from '../common/CommonHeading';

const Studio = () => {
    return (
        <div className='md:pt-24 pt-10 sm:pt-16 pb-2 bg-black -mt-px relative' id='about'>
            <div className="mt-10 relative z-[2]" data-aos="fade-up" data-aos-duration="1500">
                <CommonHeading HeadingName="About 1v2 Studio" />
                <Icon icon="About_Line" className='flex justify-center absolute  w-[800px] sm:w-[1250px] md:w-[1440px] left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-6 lg:-bottom-3 xl:-bottom-6' />
            </div>
            <div className="container sm:pt-24 pt-10 relative z-[2]">
                <div className=" flex lg:flex-row flex-col items-center lg:justify-between xl:pt-2 gap-10">
                    <div className="max-w-[517px] w-8/12 lg:w-full" data-aos="fade-right" data-aos-duration="1500">
                        <img src={gym} alt="gym" className='w-full' />
                    </div>
                    <div className="max-w-[535px] w-full flex flex-col justify-center items-center lg:items-start mt-3 sm:mt-6 lg:mt-0" data-aos="fade-left" data-aos-duration="1500">
                        <p className='font-orbitron text-center lg:text-left flex flex-col items-center font-bold text-white text-xl sm:text-3xl lg:text-3xl xl:text-38 xl:leading-[57px] xl:tracking-wide'>
                            Pushing Boundaries in <span className='relative flex text-nowrap sm:w-full'><img src={gaming_red_line} alt="gaming_red_line" className='absolute hidden sm:flex w-[90%] top-0 -left-4' />Gaming Innovation</span>
                        </p>
                        <p className='font-poppins text-center lg:text-left font-normal text-lg text-white opacity-70 mt-4 py-0.5'>
                            We are an indie game development studio dedicated to crafting innovative experiences on the Roblox platform. Our passion for creativity and excellence drives us to push the boundaries of what’s possible in gaming.
                        </p>
                        <CommonButton ButtonName="Read More" ButtonClass=" mt-10" />
                    </div>
                </div>
            </div>
            <img src={about_top_right} alt="about_top_right" className='absolute top-[6%] right-0 -translate-y-1/2' />
            <img src={red_line} alt="red_line" className='hidden xl:flex absolute bottom-[50px] lg:right-16 right-2 z-[1]' />
            <img src={about_bottom_left} alt="about_bottom_left" className='absolute left-0 bottom-0 translate-y-1/2' />
            <img src={red_circle} alt="red_circle" className='absolute hidden sm:flex top-20 lg:bottom-0 xl:bottom-auto xl:top-10 left-16 lg:top-32 xl:left-0 w-10/12 lg:w-1/2 xl:w-auto z-[1]' />
            <img src={about_layer} alt="about_layer" className='absolute right-0 bottom-[10%]' />
        </div>
    )
}

export default Studio
