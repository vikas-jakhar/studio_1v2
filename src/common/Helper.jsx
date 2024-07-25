export const nav_link = [
    { heading: "Home" },
    { heading: "About Us" },
    { heading: "Portfolio" },
    { heading: "Services" },
    { heading: "Testimonial" },
    { heading: "Contact Us" },
];

export const Button = ({ buttonName, buttonClass }) => {
    return (
        <button className={`py-3 px-[30px] text-nowrap font-poppins font-normal text-white text-base bg-btn  bg-cover bg-no-repeat duration-300 ease-linear hover:drop-shadow-[0px_0px_5px_white] ${buttonClass}`}>{buttonName}</button>
    );
};

export const Heading = ({ HeadingName, HeadingClass }) => {
    return (
        <h2 className={`text-center tracking-wide font-orbitron font-bold text-2xl sm:text-4xl md:text-42 leading-[54px] ${HeadingClass}`}>{HeadingName}</h2>
    );
};