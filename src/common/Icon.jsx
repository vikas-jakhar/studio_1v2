const Icon = ({ icon, className }) => {
    const iconList = {
        About_Line: (
            <svg className=" w-full h-[59px]" viewBox="0 0 1440 59" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        Featured_Line: (
            <svg width="1433" height="59" viewBox="0 0 1433 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H460L506.5 58H932L968 1H1440.5" stroke="url(#paint0_linear_198_72)" />
                <defs>
                    <linearGradient id="paint0_linear_198_72" x1="-108" y1="30" x2="1553.5" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0" />
                        <stop offset="0.511" stop-color="white" />
                        <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>

        ),
        Impact_line: (
            <svg width="1439" height="59" viewBox="0 0 1439 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H546.5L575 58H858L883 1H1440.5" stroke="url(#paint0_linear_242_160)" />
                <defs>
                    <linearGradient id="paint0_linear_242_160" x1="-108" y1="30" x2="1553.5" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0" />
                        <stop offset="0.511" stop-color="white" />
                        <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        Clients_line: (
            <svg width="1440" height="59" viewBox="0 0 1440 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H447.5L483.5 58H971L989.5 1H1440.5" stroke="url(#paint0_linear_198_76)" />
                <defs>
                    <linearGradient id="paint0_linear_198_76" x1="0" y1="24.5" x2="1440.5" y2="24.5" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0" />
                        <stop offset="0.511" stop-color="white" />
                        <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        Star: (
            <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5817 0.894339C15.8811 -0.0269717 17.1845 -0.0269742 17.4838 0.894337L20.4691 10.0821C20.603 10.4942 20.987 10.7731 21.4202 10.7731H31.0808C32.0496 10.7731 32.4523 12.0127 31.6686 12.5821L23.853 18.2605C23.5025 18.5152 23.3559 18.9665 23.4897 19.3786L26.475 28.5664C26.7744 29.4877 25.7199 30.2538 24.9362 29.6844L17.1206 24.006C16.7701 23.7514 16.2955 23.7514 15.945 24.006L8.12939 29.6844C7.34568 30.2538 6.29119 29.4877 6.59054 28.5664L9.57584 19.3786C9.70972 18.9665 9.56306 18.5152 9.21257 18.2605L1.39696 12.5821C0.613246 12.0127 1.01602 10.7731 1.98474 10.7731H11.6454C12.0786 10.7731 12.4626 10.4942 12.5964 10.0821L15.5817 0.894339Z" fill="#FFA800" />
            </svg>
        )
    };
    return (
        <span className={` inline-block ${className}`}>
            {icon && iconList[icon]}
        </span>

    );
};

export default Icon;