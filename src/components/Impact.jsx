import React from 'react'
import Icon from '../common/Icon';
import { Heading, Impact_Data } from "../common/Helper";
import impact_bottom_right from "../assets/image/webp/impact_bottom_right.png";
import impact_top_left from "../assets/image/webp/impact_top_left.png";
import impact_dino from "../assets/image/webp/impact_dino.png";
import red_line from "../assets/image/webp/red_line.png";

const Impact = () => {
    return (
        <div className=' relative pt-2.5 pb-5 -mt-5 min-h-[746px] bg-black bg-impact bg-cover bg-no-repeat'>
            <div className=" relative z-[2]" data-aos="fade-up" data-aos-duration="1500">
                <Heading HeadingName="Our Impact" />
                <Icon icon="Impact_line" className='flex justify-center absolute w-[800px] sm:w-[1250px] md:w-[1540px] left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-6 lg:-bottom-3 xl:-bottom-6' />
            </div>
            <div className="container pt-10 sm:pt-24 relative z-[1]">
                <div className=" mt-4 flex items-center xl:justify-between gap-8 sm:gap-14 xl:gap-0 justify-center flex-wrap xl:flex-nowrap">
                    <h2 className=' font-orbitron font-bold text-5xl sm:text-6xl xl:text-64 leading-[73px] xl:leading-[83px] text-white tracking-wide max-w-[265px]' data-aos="zoom-in" data-aos-duration="1500">What 1v2 Studio</h2>
                    <img src={impact_dino} alt="impact_dino" className=' max-w-[445px] w-full' data-aos="zoom-in" data-aos-duration="1500" />
                    <div className="max-w-[293px] w-full flex flex-col items-start gap-[14px] mt-6 xl:mt-0" data-aos="zoom-in" data-aos-duration="1500">
                        {Impact_Data.map((i) => (
                            <div key={i.id} className="font-poppins gap-2 font-semibold text-29 text-white flex items-end leading-[48px]"><span className='text-36 leading-[58px] bg-[linear-gradient(127.48deg,_#FF1E2F_14.2%,_#3EBFFF_80.38%)] bg-clip-text text-transparent'> {i.no} </span><p> {i.text}</p></div>
                        ))}
                    </div>
                </div>
            </div>
            <img src={impact_top_left} alt="impact_top_left" className=' absolute top-0 left-0 -translate-y-1/2' />
            <img src={impact_bottom_right} alt="impact_bottom_right" className=' absolute bottom-0 right-0 translate-y-1/2 z-[1]' />
            <img src={red_line} alt="red_line" className=' absolute bottom-9 lg:left-16 left-2' />
        </div>
    )
}

export default Impact