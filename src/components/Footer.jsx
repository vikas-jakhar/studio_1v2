import React from 'react'
import red_line from "../assets/image/webp/debbie_red_line.webp";
import { Button, Footer_Icon } from '../common/Helper';
import logo from "../assets/image/webp/logo.webp";
import Icon from '../common/Icon';
import red_line_left from "../assets/image/webp/red_line.webp";
import footer_right_red from "../assets/image/webp/footer_right_red.webp";
import footer_left_red from "../assets/image/webp/footer_left_red.webp";
import blur_img from "../assets/image/webp/blur_img.webp";

const Footer = () => {
    const current_year = new Date().getFullYear();
    return (
        <div className='bg-footer bg-cover bg-no-repeat sm:pt-20 py-2 -mt-1 bg-black relative' id='footer'>
            <div className="container mt-12 pt-1.5 flex-col flex items-center pb-10 relative z-[1]">
                <div className="mt-px px-3 bg-newsletter bg-100 bg-no-repeat max-w-[900px] w-full min-h-[317px] flex flex-col items-center py-11">
                    <p className=' text-white font-bold text-3xl sm:text-42 font-orbitron text-center sm:leading-[63px]'>Subscribe to <span className=' relative py-0.5 pr-4'> <img src={red_line} alt="red_line" className=' absolute w-full top-1 -left-2 hidden lg:flex' />our newsletter</span></p>
                    <p className=' font-poppins font-normal pb-px text-base sm:text-lg opacity-70 text-white max-w-[554px] text-center mt-3'>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
                    <form id='emailform' method="get" className=' mt-9 flex-col gap-5 sm:gap-0 sm:flex-row p-1.5 flex items-center justify-between border-[1px] border-light_gray max-w-[489px] w-full'>
                        <input type="email" className='pl-1.5 max-w-[310px] w-full bg-transparent outline-none font-poppins font-normal text-lg text-white opacity-70' placeholder='Enter your email' required />
                        <Button buttonName="Submit Now" />
                    </form>
                </div>
                <img src={logo} alt="logo" className=' mt-12 w-[86px]' />
                <p className='mt-5 font-poppins font-normal text-white text-lg opacity-70 text-center max-w-[538px] w-full'>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
                <div className="flex items-center mt-4 gap-5 pb-px mb-0.5">
                    {Footer_Icon.map((index) => (
                        <a key={index} href={index.link} className=' p-2 w-[43px] h-[43px] grid place-items-center bg-red rounded-full border-sky_blue border-2 duration-300 ease-linear hover:shadow-[0px_0px_0px_2px_white,_0px_0px_4px_4px_blue]'>
                            <Icon icon={index.icon} className="flex" />
                        </a>
                    ))}
                </div>  
            </div>
            <img src={blur_img} alt="blur_img" className=' absolute top-0 left-1/2 -translate-x-1/2' />
            <p className='w-full font-poppins font-normal text-white opacity-50 text-base text-center pt-[22px] pb-[14px] border-light_gray border-t-2 mb-px'>Copyright@{current_year} All right reserved</p>
            <img src={red_line_left} alt="red_line_left" className=' absolute -top-12 lg:left-16 left-2 hidden sm:flex' />
            <img src={red_line_left} alt="red_line" className=' absolute bottom-[12%] lg:right-16 right-2 z-[1] hidden sm:flex' />
            <img src={footer_right_red} alt="footer_right_red" className='absolute bottom-0 right-0' />
            <img src={footer_left_red} alt="footer_left_red" className=' absolute top-16 left-0 -translate-y-1/2' />
        </div>
    )
}

export default Footer
