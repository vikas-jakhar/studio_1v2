import React from 'react';
import { Team_Data } from "../common/Helper";
import Icon from '../common/Icon';
import Slider from 'react-slick';
import CommonHeading from '../common/CommonHeading';

const Team = () => {
    const sliderSettings = {
        slidesToShow: 2.7,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
        ]
    };

    return (
        <div className='bg-featured bg-no-repeat bg-cover bg-center -mt-20 md:py-20 pt-12 pb-2 bg-black sm:min-h-[872px] overflow-hidden' id='featured'>
            <div className="mt-4 relative z-[2]" data-aos="fade-up" data-aos-duration="1500">
                <CommonHeading HeadingName="Meet Our Team" />
                <Icon icon="Featured_Line" className='flex justify-center absolute w-[800px] sm:w-[1250px] md:w-[1540px] left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-6 lg:-bottom-3 xl:-bottom-6' />
            </div>
            <div className="container mt-20 pt-[18px] pb-11 relative z-[2]">
                <div className="mb-px">
                    <Slider {...sliderSettings}>
                        {Team_Data.map(project => (
                            <div key={project.id} className="slide-item">
                                <div className="bg-slider bg-100 bg-no-repeat w-full h-full min-h-[461px] p-[20px]" data-aos="zoom-in" data-aos-duration="1500">
                                    <img src={project.imgSrc} alt={project.altText} className='w-full' />
                                    <p className='mt-4 mb-3 font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide'>{project.heading}</p>
                                    <p className=' font-poppins font-normal text-base sm:text-lg text-white opacity-70'>
                                        Embark on an epic adventure in Dino Island, where you can explore a prehistoric world filled with dinosaurs and hidden treasures.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Team;
