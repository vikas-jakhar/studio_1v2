import React, { useEffect, useState } from 'react';
import Scroll from "../assets/image/svg/scrolltotop.svg";

const ScrollToTop = () => {
    const ScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const [visible, setvisible] = useState(false);
    const ToggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400) {
            setvisible(true);
        }
        else if (scrolled <= 400) {
            setvisible(false);
        };
    };
    useEffect(() => {
        window.addEventListener('scroll', ToggleVisible);
        return () => {
            window.removeEventListener('scroll', ToggleVisible)
        }
    }, [])
    return (
        <div onClick={ScrollTop} className=" animate-bounce place-items-center xl:w-16 xl:h-16 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 rounded-full fixed right-[4%] bottom-[4%] cursor-pointer shadow-[0_0_10px_#003E92_inset] duration-300 ease-linear hover:shadow-[0px_0px_5px_2px_#003E92,0_0_20px_white] z-10" style={{ display: visible ? 'grid' : 'none' }}>
            <img src={Scroll} alt="Scroll" className='lg:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6' />
        </div>
    )
}
export default ScrollToTop
