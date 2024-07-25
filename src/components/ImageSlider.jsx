import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import honair from "../assets/image/webp/honair.png";
import roblox from "../assets/image/webp/roblox.png";
import lava from "../assets/image/webp/lava.png";
import dino from "../assets/image/webp/dino.png";
import cat from "../assets/image/webp/cat.png";
import phone from "../assets/image/webp/phone.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageSlider = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    const images = [
        honair,
        roblox,
        lava,
        dino,
        cat,
        phone,
    ];

    return (
        <div className='bg-black py-6 -mt-1'>
            <div className=" mt-1 py-9 bg-light_black">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index} className='flex justify-center items-center h-full'>
                            <div className="flex h-[88px] items-center justify-center" data-aos="zoom-in" data-aos-duration="1500">
                                <img src={image} alt={`slide-${index}`} className='w-[151px] transition-all duration-500' />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ImageSlider;
