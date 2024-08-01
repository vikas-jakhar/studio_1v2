import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IMAGE_SLIDER } from "../common/Helper";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageSlider = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5.5,
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

    return (
        <div className='bg-black pt-6 -mt-1 relative z-[1]'>
            <div className=" mt-1 py-9 bg-light_black imageslider">
                <Slider {...sliderSettings}>
                    {IMAGE_SLIDER.map((index) => (
                        <div key={index} className='flex justify-center items-center h-full'>
                            <div className="flex h-[88px] items-center justify-center" data-aos="zoom-in" data-aos-duration="1500">
                                <img
                                    src={index.image}
                                    alt={`slide-${index}`}
                                    className={index.width || ""}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ImageSlider;
