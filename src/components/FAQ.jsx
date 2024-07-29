import React, { useState } from 'react';
import Icon from "../common/Icon";
import { Heading, accordion_Data } from "../common/Helper";

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=' relative bg-faq bg-cover bg-no-repeat bg-black pt-5 pb-4 -mt-1'>
            <div className="mt-3 relative z-[2]" data-aos="fade-up" data-aos-duration="1500">
                <Heading HeadingName="Featured Projects" />
                <Icon icon="Featured_Line" className='flex justify-center absolute w-[800px] sm:w-[1250px] md:w-[1540px] left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-6 lg:-bottom-3 xl:-bottom-6' />
            </div>
            <div className="container pt-20 mt-2">
                <div className="py-1 flex flex-col items-center">
                    {accordion_Data.map((item, index) => (
                        <div key={index} className={`${openIndex === index ? "border-[#3EBFFF] bg-[linear-gradient(0deg,_#9E0000_-14.1%,_#FF1212_123.08%)] shadow-[-15.4px_15.4px_15.4px_0px_#CCCCCC0F_inset,-7.7px_7.7px_7.7px_0px_#FFFFFF0F_inset,_15.4px_-15.4px_15.4px_0px_#FFFFFF0F_inset,_7.7px_-7.7px_7.7px_0px_#CCCCCC0F_inset]" : "border-[#5A5555] backdrop-blur-xl"} accordion max-w-[884px] mt-6 w-full border-[1px]`}>
                            <div
                                className={`${openIndex === index ? 'pt-[17px] pb-1.5' : 'py-5'} accordion-header px-5 flex items-start sm:items-center justify-between gap-1.5 cursor-pointer`}
                                onClick={() => handleToggle(index)}
                                aria-expanded={openIndex === index}
                            >
                                <div className="flex items-start sm:items-center gap-1.5">
                                    <h3 className="text-white font-orbitron font-medium text-base sm:text-lg">{item.title}</h3>
                                </div>
                                <Icon icon={`${openIndex === index ? 'Accordion_Open' : 'Accordion_Close'}`} />
                            </div>
                            {openIndex === index && (
                                <div className="accordion-content flex items-start gap-3 pl-5 pb-[17px] max-w-[759px] w-full">
                                    <p className='text-white font-poppins text-base sm:text-lg font-normal opacity-70'>{item.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ
