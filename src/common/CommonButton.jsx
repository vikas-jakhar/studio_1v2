import React from 'react'

const CommonButton = ({ ButtonName, ButtonClass }) => {
    return (
        <button className={`py-3 px-[30px] text-nowrap font-poppins font-normal text-white text-base bg-btn  bg-100 bg-no-repeat duration-300 ease-linear hover:drop-shadow-[0px_0px_5px_white] ${ButtonClass}`}>{ButtonName}</button>
    );
};

export default CommonButton
