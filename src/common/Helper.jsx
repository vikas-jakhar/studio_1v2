import lava_land from "../assets/image/webp/lava_land.png";
import maze from "../assets/image/webp/maze.png";
import dino_island from "../assets/image/webp/dino_island.png";
import cat_washing from "../assets/image/webp/cat_washing.png";
import fireplace from "../assets/image/webp/fireplace.png";
import phone_factory from "../assets/image/webp/phone_factory.png";

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
        <button className={`py-3 px-[30px] text-nowrap font-poppins font-normal text-white text-base bg-btn  bg-100 bg-no-repeat duration-300 ease-linear hover:drop-shadow-[0px_0px_5px_white] ${buttonClass}`}>{buttonName}</button>
    );
};

export const Heading = ({ HeadingName, HeadingClass }) => {
    return (
        <h2 className={`text-center tracking-wide font-orbitron font-bold text-2xl sm:text-4xl md:text-42 text-white leading-[54px] ${HeadingClass}`}>{HeadingName}</h2>
    );
};

export const Projects = [
    { id: 1, imgSrc: lava_land, altText: 'lava_land', heading: "Lava Land", blue_text: "300+", visits: "800+", text: "Embark on thrilling adventures in a volcanic world, featuring unique challenges and excitement, crafted exclusively for Roblox players." },
    { id: 2, imgSrc: maze, altText: 'maze', heading: "3D Maze", blue_text: "300+", visits: "800+", text: "Develop a 3D maze game in Roblox: a fun, challenging project that enhances creativity and problem-solving skills for students." },
    { id: 3, imgSrc: dino_island, altText: 'dino_island', heading: "Dino Island", blue_text: "400+", visits: "700+", text: "Embark on an epic adventure in Dino Island, where you can explore a prehistoric world filled with dinosaurs and hidden treasures." },
    { id: 4, imgSrc: cat_washing, altText: 'cat_washing', heading: "Cat Washing Tycoon", blue_text: "700+", visits: "1200+", text: "Dive into the adorable world of cat care! Build and manage your own cat washing business, upgrade your facilities. " },
    { id: 5, imgSrc: fireplace, altText: 'fireplace', heading: "Fireplace", blue_text: "800+", visits: "1000+", text: "Experience cozy and adventurous gameplay around a virtual hearth, blending relaxation and excitement uniquely on Roblox." },
    { id: 6, imgSrc: phone_factory, altText: 'phone_factory', heading: "Phone Factory", blue_text: "300+", visits: "800+", text: "Phone Factory: Dive into the exciting world of manufacturing in this Roblox game." },
];