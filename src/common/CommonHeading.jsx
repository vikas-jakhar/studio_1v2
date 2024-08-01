import React from 'react'

const CommonHeading = ({ HeadingName, HeadingClass }) => {
    return (
        <h2 className={`text-center tracking-wide font-orbitron font-bold text-2xl sm:text-4xl md:text-42 text-white leading-[54px] ${HeadingClass}`}>{HeadingName}</h2>
    );
};

export default CommonHeading
