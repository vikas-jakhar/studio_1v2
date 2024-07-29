import React from 'react';
import { Clients_Slider, Heading } from "../common/Helper";
import Icon from '../common/Icon';
import Slider from 'react-slick';
import debbie_red_line from "../assets/image/webp/debbie_red_line.png";

const Clients = () => {
    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 639,
                settings: {
                    dots: false,
                }
            }
        ]
    };
    return (
        <div className=' bg-clients bg-cover bg-no-repeat bg-center bg-black min-h-[805px] py-10 xl:py-2 -mt-9'>
            <div className="mt-3 relative z-[2]" data-aos="fade-up" data-aos-duration="1500">
                <Heading HeadingName="Clients Testimonials" />
                <Icon icon="Clients_line" className='flex justify-center absolute w-[800px] sm:w-[1250px] md:w-[1540px] left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-6 lg:-bottom-3 xl:-bottom-6' />
            </div>
            <div className="container mt-8 sm:pt-24 sm:mt-3 overflow-hidden">
                <div className=" pt-0.5 pb-24 Clients">
                    <Slider {...sliderSettings}>
                        {Clients_Slider.map((index) => (
                            <div key={index} className=" px-[14px] sm:px-14">
                                <div className=" bg-debbie bg-100 bg-no-repeat flex-col-reverse lg:flex-row items-center min-h-[411px] xl:w-[1041px] w-full py-10 px-5 flex lg:items-start gap-3 justify-center">
                                    <div className="max-w-[621px] flex-col flex items-center lg:items-start w-full">
                                        <div className=" relative py-[0.5px] px-5 lg:px-0 lg:pr-6">
                                            <img src={debbie_red_line} alt="debbie_red_line" className=' absolute top-0 lg:-left-4 -left-1 w-full' />
                                            <p className=' text-white text-nowrap relative z-[1] font-orbitron font-bold xl:text-42 text-xl sm:text-4xl tracking-wide xl:leading-[54px]'> {index.heading}</p>
                                        </div>
                                        <p className='mt-4 font-poppins font-normal text-center lg:text-left text-sm sm:text-lg xl:text-2xl xl:leading-9 text-white opacity-70'>
                                            {index.text}
                                        </p>
                                        <div className="flex items-center mt-6 gap-1.5">
                                            <Icon icon="Star" />
                                            <Icon icon="Star" />
                                            <Icon icon="Star" />
                                            <Icon icon="Star" />
                                            <Icon icon="Star" />
                                        </div>
                                    </div>
                                    <img src={index.image} alt="debbie" className=' lg:w-[40%] w-10/12 xl:w-full max-w-[289px]' />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Clients