import React from 'react'
import Icon from '../common/Icon';
import { IMPACT_DATA } from "../common/Helper";
import impact_bottom_right from "../assets/image/webp/impact_bottom_right.webp";
import impact_top_left from "../assets/image/webp/impact_top_left.webp";
import impact_dino from "../assets/image/webp/impact_dino.webp";
import red_line from "../assets/image/webp/red_line.webp";
import CommonHeading from '../common/CommonHeading';

const Impact = () => {
    return (
        <div className=' relative pt-2.5 pb-5 xl:pb-2.5 -mt-5 lg:py-16 xl:pt-2.5 xl:min-h-[746px] bg-black bg-impact bg-cover bg-no-repeat' id='impact'>
            <div className=" relative z-[2]" data-aos="fade-up" data-aos-duration="1500">
                <CommonHeading HeadingName="Our Impact" />
                <Icon icon="Impact_line" className='flex justify-center absolute w-[800px] sm:w-[1250px] md:w-[1540px] left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-6 lg:-bottom-3 xl:-bottom-6' />
            </div>
            <div className="container pt-10 sm:pt-24 relative z-[2]">
                <div className=" mt-4 flex items-center gap-8 sm:gap-14 xl:gap-9 lg:gap-5 justify-center xl:justify-start flex-wrap lg:flex-nowrap">
                    <h2 className=' font-orbitron font-bold text-2xl sm:text-5xl lg:text-6xl xl:text-64 leading-[73px] xl:leading-[83px] text-white tracking-wide xl:max-w-[312px]' data-aos="zoom-in" data-aos-duration="1500">What 1v2 Studio</h2>
                    <img src={impact_dino} alt="impact_dino" className=' max-w-[445px] w-10/12 sm:w-[40%] xl:w-full' data-aos="zoom-in" data-aos-duration="1500" />
                    <div className="max-w-[293px] w-full flex flex-col items-center sm:items-start gap-[14px] mt-2 sm:mt-6 xl:mt-0" data-aos="zoom-in" data-aos-duration="1500">
                        {IMPACT_DATA.map((i) => (
                            <div key={i.id} className="font-poppins gap-2 font-semibold text-lg sm:text-2xl md:text-29 text-white flex items-end md:leading-[48px]"><span className='md:text-36 text-2xl sm:text-3xl md:leading-[58px] bg-[linear-gradient(127.48deg,_#FF1E2F_14.2%,_#3EBFFF_80.38%)] bg-clip-text text-transparent'> {i.no} </span><p> {i.text}</p></div>
                        ))}
                    </div>
                </div>
            </div>
            <img src={impact_top_left} alt="impact_top_left" className=' absolute top-0 left-0 -translate-y-1/2' />
            <img src={impact_bottom_right} alt="impact_bottom_right" className=' absolute bottom-0 right-0 translate-y-1/2 z-[1]' />
            <img src={red_line} alt="red_line" className='hidden xl:flex absolute bottom-9 lg:left-16 left-2' />
        </div>
    )
}

export default Impact