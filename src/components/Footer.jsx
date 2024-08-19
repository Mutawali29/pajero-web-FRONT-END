import React from "react";
import USA from '../assets/usa.png';
import unitedKingdom from '../assets/unitedKingdom.png';
import japan from '../assets/japan.png';
import pajeroF from '../assets/pajeroFooter.png';
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            {/* Bagian Lokasi */}
            <div className="flex flex-col md:flex-row justify-between p-6 space-y-8 md:space-y-0 md:space-x-6">
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center space-x-2">
                        <img src={USA} alt="USA" className="h-5" />
                        <p className="font-bold">UNITED STATES</p>
                    </div>
                    <p className="max-w-xs text-xs">
                        4031 Aspen Grove Drive, Suite 700, Franklin, TN 37067, USA
                    </p>
                </div>
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center space-x-2">
                        <img src={unitedKingdom} alt="unitedKingdom" className="h-5" />
                        <p className="font-bold">UNITED KINGDOM</p>
                    </div>
                    <p className="max-w-xs text-xs">
                        The Gate, International Drive, Solihull, B90 4WA, United Kingdom
                    </p>
                </div>
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center space-x-2">
                        <img src={japan} alt="japan" className="h-5" />
                        <p className="font-bold">JAPAN</p>
                    </div>
                    <p className="max-w-xs text-xs">
                        1-21, Shiboura 3-chome, Minato-ku, Tokyo 180-8410, Japan
                    </p>
                </div>
            </div>

            {/* Garis Pemisah */}
            <div className="p-6">
                <hr className="border-black w-full mt-[-20px]" />
            </div>

            {/* Bagian Konten Footer */}
            <div className="flex flex-col md:flex-row justify-between p-6 space-y-8 md:space-y-0">
                <div>
                    <p className="text-base font-bold">@2023 Pajero Auto</p>
                </div>
                <div>
                    <h1 className="text-base font-bold">HEADQUARTERS</h1>
                    <p className="max-w-xs text-xs">
                        Mitsubishi Avenue 21, 6121 SH Born, The Netherlands
                        Postal Address P.O. Box 157, 6130 AD Sittard, The Netherlands
                    </p>
                </div>
                <div>
                    <h1 className="text-base font-bold">SITE MAP</h1>
                    <div className="flex flex-col space-y-2">
                        <p className="text-xs cursor-pointer hover:font-bold">Home</p>
                        <p className="text-xs cursor-pointer hover:font-bold">About</p>
                        <p className="text-xs cursor-pointer hover:font-bold">Contact</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-base font-bold">CERTIFIED PRE-OWNED</h1>
                    <p className="max-w-xs text-xs">
                        Every Certified Pre-Owned Mitsubishi (CPO) vehicle is reconditioned from only the best cars available, so you can enjoy the same exceptional driving experience as the original owner.
                    </p>
                </div>
            </div>

            {/* Gambar Pajero Footer */}
            <div className="p-6">
                <img src={pajeroF} alt="pajeroF" className="w-full" />
            </div>

            {/* Bagian Ikon Sosial dan Link Footer */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 space-y-6 md:space-y-0">
                <div className="flex space-x-6 text-2xl">
                    <FaInstagram className="transform hover:scale-125 duration-500" />
                    <IoLogoYoutube className="transform hover:scale-125 duration-500" />
                    <AiOutlineFacebook className="transform hover:scale-125 duration-500" />
                </div>
                <div>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
                        <li className="relative group cursor-pointer">
                            <span className="relative z-10">Site Map</span>
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-black transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer">
                            <span className="relative z-10">Term of Use</span>
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-black transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer">
                            <span className="relative z-10">Privacy Policy</span>
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-black transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer">
                            <span className="relative z-10">Cookie Policy</span>
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-black transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;
