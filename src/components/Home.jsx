import React, { useState } from "react";
import Pajero from '../assets/pajeroHome.jpg';
import { PiLineVerticalLight } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import pajeroWhite from '../assets/pajero1.jpg';
import pajeroBlack from '../assets/pajero2.jpg';

const Home = () => {
    const images = [pajeroWhite, pajeroBlack];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
    };

    return (
        <div className="relative">
            {/* Background Image */}
            <img src={Pajero} alt="Pajero" className="w-full h-screen object-cover" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-6 space-y-2 md:space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-lemon font-bold">
                    Designed for the Brave
                </h1>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-lemon font-bold">
                    Crafted for the Bold
                </h1>
                <p className="text-white text-sm md:text-lg lg:text-xl max-w-xs md:max-w-md font-lemon">
                    The Mitsubishi Pajero stands strong, ready for those who seek adventure and embrace challenges.
                    With its bold design and powerful performance, it’s the perfect partner for fearless explorers.
                </p>
                <div className="mt-4 md:mt-6">
                    <button className="text-white bg-white bg-opacity-30 px-3 md:px-6 py-2 rounded-lg hover:bg-opacity-50 transition ease-in-out duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Stats Section (Hidden on Mobile) */}
            <div className="hidden md:flex absolute bottom-0 left-0 p-4 md:p-8 flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <div className="text-white text-center font-lemon">
                    <h1 className="text-lg md:text-xl"><span className="font-bold text-xl md:text-2xl">400</span> ml</h1>
                    <p className="text-sm">Range</p>
                </div>
                <div className="text-5xl md:text-6xl text-white flex items-center justify-center">
                    <PiLineVerticalLight />
                </div>
                <div className="text-white text-center font-lemon">
                    <h1 className="text-lg md:text-xl"><span className="font-bold text-xl md:text-2xl">6.55</span> sec</h1>
                    <p className="text-sm">ZERO TO 60 MPH</p>
                </div>
                <div className="text-5xl md:text-6xl text-white flex items-center justify-center">
                    <PiLineVerticalLight />
                </div>
                <div className="text-white text-center font-lemon">
                    <h1 className="text-lg md:text-xl"><span className="font-bold text-xl md:text-2xl">20</span> MPG</h1>
                    <p className="text-sm">Fuel Efficiency</p>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-96 right-10 md:top-64 md:right-16 transform -translate-y-1/2 z-10">
                <button
                    className="text-2xl md:text-3xl text-white hover:scale-150 p-1 md:p-2 rounded-full transition duration-300 ease-in-out"
                    onClick={handlePrevImage}
                >
                    <IoIosArrowBack />
                </button>
            </div>
            <div className="absolute top-96 right-4 md:top-64 md:right-10 transform -translate-y-1/2 z-10">
                <button
                    className="text-2xl md:text-3xl text-white hover:scale-150 p-1 md:p-2 rounded-full transition duration-300 ease-in-out"
                    onClick={handleNextImage}
                >
                    <IoIosArrowForward />
                </button>
            </div>

            {/* Description and Changing Image */}
            <div className="absolute bottom-5 right-0 max-w-xs md:max-w-sm bg-white bg-opacity-20 p-3 md:p-6 rounded-xl px-2 py-2 mr-4 md:mr-8">
                <h1 className="text-white font-semibold text-lg md:text-xl font-lemon">Model Color</h1>
                <img src={images[currentImageIndex]} alt="Pajero" className="w-full h-36 md:h-64 object-cover rounded-md mt-4 hover:scale-110 duration-500" />
            </div>
        </div>
    );
};

export default Home;
