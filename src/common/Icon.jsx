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
        Clients_Line: (
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
        Faq_Line: (
            <svg width="1434" height="59" viewBox="0 0 1434 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H603L636.5 58H784.5L809.5 1H1440.5" stroke="url(#paint0_linear_198_77)" />
                <defs>
                    <linearGradient id="paint0_linear_198_77" x1="-146.5" y1="30" x2="1584" y2="0.999999" gradientUnits="userSpaceOnUse">
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
        ),
        Accordion_Open: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19.5" stroke="white" />
                <path d="M13 19L19 19H21L27 19C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21L21 21L19 21L13 21C12.4477 21 12 20.5523 12 20C12 19.4477 12.4477 19 13 19Z" fill="white" />
            </svg>
        ),
        Accordion_Close: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19.5" stroke="white" />
                <path d="M21 13C21 12.4477 20.5523 12 20 12C19.4477 12 19 12.4477 19 13V18.9999L13 18.9999C12.4477 18.9999 12 19.4476 12 19.9999C12 20.5522 12.4477 20.9999 13 20.9999L19 20.9999V27C19 27.5523 19.4477 28 20 28C20.5523 28 21 27.5523 21 27V20.9999L27 20.9999C27.5523 20.9999 28 20.5522 28 19.9999C28 19.4476 27.5523 18.9999 27 18.9999L21 18.9999V13Z" fill="white" />
            </svg>
        ),
        Twitter: (
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2962 0.0688477H19.3135L12.7213 8.40528L20.477 19.747H14.4046L9.64908 12.8674L4.20643 19.747H1.18747L8.23881 10.83L0.798828 0.0697548H7.02533L11.3242 6.35791L16.2962 0.0688477ZM15.2377 17.7495H16.9095L6.11685 1.96201H4.32286L15.2377 17.7495Z" fill="white" />
            </svg>
        ),
        Discord: (
            <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7341 1.662C17.371 1.02656 15.8951 0.56535 14.3578 0.298875C14.3443 0.298444 14.3309 0.300974 14.3185 0.306286C14.3061 0.311598 14.295 0.319565 14.286 0.329623C14.1015 0.667841 13.8863 1.10855 13.7428 1.44677C12.1122 1.20079 10.4539 1.20079 8.82328 1.44677C8.67979 1.0983 8.46456 0.667841 8.26983 0.329623C8.25958 0.309125 8.22884 0.298875 8.19809 0.298875C6.66073 0.56535 5.19512 1.02656 3.82175 1.662C3.8115 1.662 3.80125 1.67225 3.791 1.6825C1.00326 5.85386 0.234583 9.91247 0.613797 13.9301C0.613797 13.9506 0.624046 13.9711 0.644544 13.9813C2.48937 15.3342 4.26246 16.1541 6.01504 16.6973C6.04579 16.7076 6.07654 16.6973 6.08679 16.6768C6.49675 16.1131 6.86571 15.5187 7.18343 14.8935C7.20393 14.8525 7.18343 14.8115 7.14244 14.8013C6.55824 14.5758 6.00479 14.3093 5.46159 14.0018C5.4206 13.9813 5.4206 13.9199 5.45135 13.8891C5.56409 13.8071 5.67682 13.7149 5.78956 13.6329C5.81006 13.6124 5.84081 13.6124 5.86131 13.6226C9.38698 15.2317 13.1894 15.2317 16.674 13.6226C16.6945 13.6124 16.7253 13.6124 16.7458 13.6329C16.8585 13.7251 16.9713 13.8071 17.084 13.8994C17.125 13.9301 17.125 13.9916 17.0738 14.0121C16.5408 14.3298 15.9771 14.586 15.3929 14.8115C15.3519 14.8218 15.3417 14.873 15.3519 14.9038C15.6799 15.529 16.0489 16.1234 16.4486 16.6871C16.4793 16.6973 16.5101 16.7076 16.5408 16.6973C18.3036 16.1541 20.0767 15.3342 21.9216 13.9813C21.9421 13.9711 21.9523 13.9506 21.9523 13.9301C22.4033 9.28728 21.2041 5.25941 18.7751 1.6825C18.7649 1.67225 18.7546 1.662 18.7341 1.662ZM7.71638 11.4806C6.66073 11.4806 5.77931 10.5069 5.77931 9.30778C5.77931 8.10864 6.64023 7.13499 7.71638 7.13499C8.80278 7.13499 9.6637 8.11889 9.65345 9.30778C9.65345 10.5069 8.79253 11.4806 7.71638 11.4806ZM14.86 11.4806C13.8043 11.4806 12.9229 10.5069 12.9229 9.30778C12.9229 8.10864 13.7838 7.13499 14.86 7.13499C15.9464 7.13499 16.8073 8.11889 16.797 9.30778C16.797 10.5069 15.9464 11.4806 14.86 11.4806Z" fill="white" />
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