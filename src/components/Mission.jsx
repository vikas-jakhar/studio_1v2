import React from 'react'
import Icon from '../common/Icon';
import dino_mission from "../assets/image/webp/dino_mission.webp";
import mission_red_line from "../assets/image/webp/mission_red_line.webp";
import red_line from "../assets/image/webp/red_line.webp";
import CommonHeading from '../common/CommonHeading';

const Mission = () => {
    return (
        <div className='relative bg-black min-h-[992px] pb-2 pt-px -mt-1 bg-mission bg-no-repeat bg-cover z-[2]'>
            <div className="mt-10 relative z-[2]" data-aos="fade-up" data-aos-duration="1500">
                <CommonHeading HeadingName="Mission & Vision" />
                <Icon icon="About_Line" className='flex justify-center absolute  w-[800px] sm:w-[1250px] md:w-[1440px] left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-6 lg:-bottom-3 xl:-bottom-6' />
            </div>
            <div className="container pt-16 flex justify-center">
                <div className="max-w-[1041px] min-h-[700px] w-full bg-mission_border bg-100 bg-no-repeat mt-2.5 py-[42px] px-4 flex flex-col items-center">
                    <div className="max-w-[927px] w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-5" data-aos="fade-up" data-aos-duration="1500">
                        <div className="max-w-[546px] w-full flex flex-col md:items-start items-center">
                            <div className=" relative px-6">
                                <img src={mission_red_line} alt="mission_red_line" className='absolute top-1 left-1 w-full' />
                                <p className='font-bold font-orbitron text-42 text-white tracking-wide'>Mission</p>
                            </div>
                            <p className='font-poppins text-center md:text-left font-normal text-lg text-white opacity-70 mt-5'>Our mission is to create groundbreaking games that inspire and entertain, fostering a community of passionate players and developers. We aim to push the limits of creativity and innovation on the Roblox platform, delivering experiences that are both memorable and impactful.</p>
                        </div>
                        <img src={dino_mission} alt="dino_mission" className='max-w-[289px] w-full' />
                    </div>
                    <div className="max-w-[927px] w-full flex items-start justify-between mt-8 pt-0.5 gap-5 lg:gap-10" data-aos="fade-up" data-aos-duration="1500">
                        <img src={dino_mission} alt="dino_mission" className='max-w-[289px] w-full hidden md:flex' />
                        <div className="w-full flex flex-col md:items-start items-center">
                            <div className=" relative px-6">
                                <img src={mission_red_line} alt="mission_red_line" className='absolute top-0 left-1 w-full h-full' />
                                <p className='font-bold font-orbitron text-42 text-white tracking-wide'>Vision</p>
                            </div>
                            <p className='font-poppins font-normal text-center md:text-left text-lg text-white opacity-70 mt-5'>Our vision is to be a leading force in the gaming industry, recognized for our unique approach and commitment to excellence. We aspire to build a diverse and inclusive community where creativity thrives, and players can explore new worlds, connect with others, and create unforgettable memories.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={red_line} alt="red_line" className='absolute bottom-44 hidden xl:flex lg:left-16 left-2' />
        </div>
    )
}

export default Mission