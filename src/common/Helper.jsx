import lava_land from "../assets/image/webp/lava_land.webp";
import maze from "../assets/image/webp/maze.webp";
import dino_island from "../assets/image/webp/dino_island.webp";
import cat_washing from "../assets/image/webp/cat_washing.webp";
import fireplace from "../assets/image/webp/fireplace.webp";
import phone_factory from "../assets/image/webp/phone_factory.webp";
import debbie from "../assets/image/webp/debbie.webp";
import honair from "../assets/image/webp/honair.webp";
import roblox from "../assets/image/webp/roblox.webp";
import lava from "../assets/image/webp/lava.webp";
import dino from "../assets/image/webp/dino.webp";
import cat from "../assets/image/webp/cat.webp";
import phone from "../assets/image/webp/phone.webp";

export const nav_link = [
    { heading: "Home", link: "hero" },
    { heading: "About Us", link: "about" },
    { heading: "Portfolio", link: "impact" },
    { heading: "Services", link: "featured" },
    { heading: "Testimonial", link: "clients" },
    { heading: "Contact Us", link: "footer" },
];

export const Button = ({ buttonName, buttonClass }) => {
    return (
        <button className={`py-3 px-[30px] text-nowrap font-poppins font-normal text-white text-base bg-btn  bg-100 bg-no-repeat duration-300 ease-linear hover:drop-shadow-[0px_0px_5px_white] ${buttonClass}`}>{buttonName}</button>
    );
};

export const Images = [
    honair,
    roblox,
    lava,
    dino,
    cat,
    phone,
];

export const Widths = {
    0: "w-[151px]",
    1: "w-[159px]",
    2: "w-[234px]",
    3: "w-[234px]",
    4: "w-[225px]",
    5: "w-[234px]",
};

export const Top = {
    0: "group-hover:-top-[3px]",
    1: "group-hover:-top-[6px]",
    2: "group-hover:-top-[5px]",
    3: "group-hover:-top-[5px]",
    4: "group-hover:-top-[9px]",
    5: "group-hover:-top-[9px]",
}

export const Bottom = {
    0: "group-hover:-bottom-[3px]",
    1: "group-hover:-bottom-[6px]",
    2: "group-hover:-bottom-[5px]",
    3: "group-hover:-bottom-[5px]",
    4: "group-hover:-bottom-[9px]",
    5: "group-hover:-bottom-[9px]",
}

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

export const Impact_Data = [
    { id: '1', no: '13', text: 'experiences' },
    { id: '1', no: '10.8k', text: 'active now' },
    { id: '1', no: '1.086', text: 'billion visits' },
];

export const Clients_Slider = [
    { heading: " Debbie Hagenes", text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.", image: debbie, },
    { heading: " Debbie Hagenes", text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.", image: debbie, },
    { heading: " Debbie Hagenes", text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.", image: debbie, },
    { heading: " Debbie Hagenes", text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.", image: debbie, },
];

export const accordion_Data = [
    {
        title: 'What is 1v2 Studio?',
        content: '1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.',
    },
    {
        title: 'How can I contact 1v2 Studio?',
        content: '1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.',
    },
    {
        title: 'Is Lenard The Lemur secure?',
        content: '1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.',
    },
    {
        title: 'What types of games does 1v2 Studio develop?',
        content: '1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.',
    },
    {
        title: 'Can I collaborate with 1v2 Studio on a game project?',
        content: '1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.',
    },
];

export const Footer_Icon = [
    { icon: "Twitter", link: "https://x.com/i/flow/login" },
    { icon: "Discord", link: "https://discord.com/" },
]