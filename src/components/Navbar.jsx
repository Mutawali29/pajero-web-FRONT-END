import React, { useState, useEffect } from 'react';
import { MdMenu } from 'react-icons/md';
import { BiExitFullscreen } from 'react-icons/bi';
import pajeroLogo2 from '../assets/pajeroLogo2.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 
        ${scrolled ? 'bg-black bg-opacity-45 backdrop-blur-sm' : 'bg-transparent'}`}
      >
        <div className="flex items-center justify-between p-4 text-white relative">
          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={pajeroLogo2} alt="pajeroLogo" className="h-24" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden z-30">
            <button 
              onClick={toggleMenu} 
              className="text-3xl text-white hover:scale-125 transition-transform duration-300"
            >
              {menuOpen ? <BiExitFullscreen /> : <MdMenu />}
            </button>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-8">
            <li className="relative group cursor-pointer">
              <button onClick={() => scrollToSection('home2')} className="relative z-10">Home</button>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group cursor-pointer">
              <button onClick={() => scrollToSection('home3')} className="relative z-10">Models</button>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group cursor-pointer">
              <button onClick={() => scrollToSection('home4')} className="relative z-10">Beyond the Car</button>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </div>

          {/* Contact Us Button for Desktop */}
          <div className="hidden md:block">
            <button className="relative px-4 py-2 bg-white bg-opacity-30 rounded-lg text-white font-semibold overflow-hidden hover:bg-opacity-45 hover:scale-110 transform duration-300">
              <span className="relative z-10">Contact Us</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-6 z-20">
            <li 
              className="relative group cursor-pointer text-2xl"
              onClick={() => scrollToSection('home2')}
            >
              <span className="relative z-10 group-hover:text-purple-500 transition-all duration-300">Home</span>
            </li>
            <li 
              className="relative group cursor-pointer text-2xl"
              onClick={() => scrollToSection('home3')}
            >
              <span className="relative z-10 group-hover:text-teal-500 transition-all duration-300">Models</span>
            </li>
            <li 
              className="relative group cursor-pointer text-2xl"
              onClick={() => scrollToSection('home4')}
            >
              <span className="relative z-10 group-hover:text-orange-500 transition-all duration-300">Beyond the Car</span>
            </li>
            <li>
              <button 
                className="relative px-4 py-2 bg-white bg-opacity-30 rounded-lg text-white font-semibold overflow-hidden hover:bg-opacity-45 hover:scale-110 transform duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative z-10">Contact Us</span>
              </button>
            </li>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
