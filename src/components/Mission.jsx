import React from 'react'
import Icon from '../common/Icon';
import { Heading } from "../common/Helper";

const Mission = () => {
    return (
        <div className=' relative bg-black min-h-[992px] pb-2 pt-24 -mt-1 bg-mission bg-no-repeat bg-cover'>
            <div className="mt-10 relative z-[2]" data-aos="fade-up" data-aos-duration="1500">
                <Heading HeadingName="Mission & Vision" HeadingClass="text-white" />
                <Icon icon="About_Line" className=' flex justify-center absolute  w-[800px] sm:w-[1250px] md:w-[1440px] left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-6 lg:-bottom-3 xl:-bottom-6' />
            </div>
            <div className="container pt-16 flex justify-center">
                <div className="max-w-[1041px] min-h-[700px] w-full bg-mission_border bg-100 bg-no-repeat mt-2.5">

                </div>
            </div>
        </div>
    )
}

export default Mission