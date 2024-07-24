const Icon = ({ icon, className }) => {
    const iconList = {

    };
    return (
        <span className={` inline-block ${className}`}>
            {icon && iconList[icon]}
        </span>

    );
};

export default Icon;