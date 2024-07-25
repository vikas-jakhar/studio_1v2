import React from 'react'
import { Heading } from "../common/Helper";
import Icon from '../common/Icon';
import about_top_left from "../assets/image/webp/about_top_left.png";
import gym from "../assets/image/webp/gym.png";

const About = () => {
    return (
        <div className='py-24 bg-black -mt-px relative'>
            <div className="mt-5 relative z-[1]" data-aos="fade-up" data-aos-duration="1500">
                <Heading HeadingName="About 1v2 Studio" HeadingClass="text-white" />
                <Icon icon="About_Line" className=' flex justify-center absolute w-[1920px] left-1/2 -translate-x-1/2 -bottom-3' />
            </div>
            <div className="container pt-24 relative z-[1]">
                <div className=" flex flex-row justify-between">
                    <div className="max-w-[517px]">
                        <img src={gym} alt="gym" className=' w-full' />
                    </div>
                    <div className="max-w-[535px] flex flex-col justify-center">
                        <p className='font-orbitron font-bold text-white text-38 leading-[57px] tracking-wide'>
                            Pushing Boundaries in Gaming Innovation
                        </p>
                    </div>
                </div>
            </div>
            <img src={about_top_left} alt="about_top_left" className=' absolute top-0 right-0' />
        </div>
    )
}

export default About
