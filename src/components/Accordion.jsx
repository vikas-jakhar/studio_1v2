import React, { useState } from 'react';
import Icon from "../common/Icon";
import { Heading, accordion_Data } from "../common/Helper";
import faq_left from "../assets/image/webp/faq_left.webp";
import faq_right from "../assets/image/webp/faq_right.webp";

const Accordion = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='relative bg-faq bg-cover bg-no-repeat bg-black pt-px sm:pt-5 pb-4 -mt-1' id='faq'>
            <div className="mt-3 relative z-[2]" data-aos="fade-up" data-aos-duration="1500">
                <Heading HeadingName="FAQ" />
                <Icon icon="Faq_Line" className='flex justify-center absolute w-[800px] sm:w-[1250px] md:w-[1540px] left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-6 lg:-bottom-3 xl:-bottom-6' />
            </div>
            <div className="container pt-7 sm:pt-20 -mt-1 relative z-[1]">
                <div className="py-1 flex flex-col items-center">
                    {accordion_Data.map((item, index) => (
                        <div key={index} className="w-full flex py-2 sm:py-0 sm:mt-6 justify-center relative duration-300 ease-linear" data-aos="zoom-in-up" data-aos-duration="1500">
                            <div className={`${openIndex === index ? "border-sky_blue bg-[linear-gradient(0deg,_#9E0000_-14.1%,_#FF1212_123.08%)] shadow-[-15.4px_15.4px_15.4px_0px_#CCCCCC0F_inset,-7.7px_7.7px_7.7px_0px_#FFFFFF0F_inset,_15.4px_-15.4px_15.4px_0px_#FFFFFF0F_inset,_7.7px_-7.7px_7.7px_0px_#CCCCCC0F_inset] h-auto" : "border-light_brown backdrop-blur-xl"} accordion max-w-[884px] w-full border-[1px] duration-300 ease-linear overflow-hidden`}>
                                <div
                                    className={`${openIndex === index ? 'pt-[15.2px] pb-1.5' : 'py-[19px]'} accordion-header relative z-[1] px-5 flex items-center justify-between gap-1.5 cursor-pointer`}
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <div className="flex items-start sm:items-center gap-1.5">
                                        <h3 className="text-white font-orbitron font-medium text-base sm:text-lg">{item.title}</h3>
                                    </div>
                                    <Icon icon={`${openIndex === index ? 'Accordion_Open' : 'Accordion_Close'}`} />
                                </div>
                                <div
                                    className={`accordion-content flex items-start gap-3 pl-5 pb-[15.2px] max-w-[759px] w-full duration-700 ease-in-out overflow-hidden ${openIndex === index ? ' relative' : 'translate-y-full top-24 absolute'}`}
                                >
                                    <p className='text-white font-poppins text-base sm:text-lg font-normal opacity-70'>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <img src={faq_left} alt="faq_left" className='absolute top-0 -translate-y-1/2 left-0' />
            <img src={faq_right} alt="faq_right" className='absolute top-0 -translate-y-1/2 right-0' />
        </div>
    )
}

export default Accordion;
