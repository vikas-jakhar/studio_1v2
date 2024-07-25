const Icon = ({ icon, className }) => {
    const iconList = {
        About_Line: (
            <svg width="1440" height="59" viewBox="0 0 1440 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H460L513 58H924L968 1H1440.5" stroke="url(#paint0_linear_198_71)" />
                <defs>
                    <linearGradient id="paint0_linear_198_71" x1="-131.5" y1="30" x2="1507" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0" />
                        <stop offset="0.511" stop-color="white" />
                        <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ),
    };
    return (
        <span className={` inline-block ${className}`}>
            {icon && iconList[icon]}
        </span>

    );
};

export default Icon;