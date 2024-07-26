import React from 'react';
import { Heading, Projects } from "../common/Helper";
import Icon from '../common/Icon';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Featured = () => {
    const sliderSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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
        <div className='bg-featured bg-no-repeat bg-cover bg-center -mt-1 py-20 bg-black min-h-[872px] overflow-hidden'>
            <div className="mt-3 relative z-[2]" data-aos="fade-up" data-aos-duration="1500">
                <Heading HeadingName="Featured Projects" />
                <Icon icon="Featured_Line" className='flex justify-center absolute w-[800px] sm:w-[1250px] md:w-[1540px] left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-6 lg:-bottom-3 xl:-bottom-6' />
            </div>
            <div className="container mt-20 pt-2 pb-11">
                <div className="mb-px">
                    <Slider {...sliderSettings}>
                        {Projects.map(project => (
                            <div key={project.id} className="slide-item">
                                <div className="bg-slider bg-100 bg-no-repeat w-full h-full min-h-[461px] p-[20px]">
                                    <img src={project.imgSrc} alt={project.altText} className='w-full' />
                                    <div className="mt-3 font-poppins text-sm gap-1.5 flex items-start">
                                        <span className='font-bold text-[#3EBFFF]'>{project.blue_text}</span>
                                        <span className='mr-1 font-normal text-white opacity-70'>Active Players</span>
                                        <span className='font-bold text-[#3EBFFF]'>{project.visits}</span>
                                        <span className='mr-1 font-normal text-white opacity-70'>Visits</span>
                                    </div>
                                    <p className='mt-4 mb-3 font-orbitron font-bold text-2xl text-white tracking-wide'>{project.heading}</p>
                                    <p className=' font-poppins font-normal text-lg text-white opacity-70'>
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

export default Featured;
