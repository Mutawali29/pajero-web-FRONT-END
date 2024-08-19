import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import pajeroVid from '../assets/pajero.mp4';

const Home4 = () => {
    // Set up animations
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: false, threshold: 0.1 });

    return (
        <>
        <section id="home4" className="min-h-screen">
            {/* Bagian 1: Tanpa animasi */}
            <div className="p-6 mt-8">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <p className="text-3xl md:text-5xl font-bold max-w-full md:max-w-xl mb-4 md:mb-0">
                        A Glimpse Into The Pajero's Tail Light Inspiration and Styling
                    </p>
                    <p className="text-base md:text-xl max-w-full md:max-w-xl">
                        Discover the design elements and innovative features that give the Pajero its distinctive look, combining style and functionality.
                    </p>
                </div>
            </div>

            {/* Bagian 2: Animasi */}
            <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6">
                {/* Animasi pertama */}
                <motion.div
                    className="bg-white border border-black rounded-xl transition-transform transform hover:-translate-y-1 hover:scale-105 hover:text-white hover:bg-black"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    ref={ref1}
                >
                    <div className="flex items-center justify-between p-6 border-black transition-colors hover:text-white">
                        <p className="text-xl font-bold">About Us</p>
                        <MdArrowOutward className="text-xl font-bold" />
                    </div>
                    <div className="p-6">
                        <p className="max-w-sm">
                            Pajero delivers exceptional SUVs known for their performance and style. Our vehicles combine powerful engineering with comfort and reliability, ensuring an outstanding driving experience.
                        </p>
                    </div>
                </motion.div>

                {/* Animasi kedua */}
                <motion.div
                    className="bg-white border border-black rounded-xl transition-transform transform hover:-translate-y-1 hover:scale-105 hover:bg-black hover:text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, delay: 0.30 }}
                    ref={ref2}
                >
                    <div className="flex items-center justify-between p-6 border-black transition-colors hover:text-white">
                        <p className="text-xl font-bold">Test Drive</p>
                        <MdArrowOutward className="text-xl font-bold" />
                    </div>
                    <div className="p-6">
                        <p className="max-w-sm">
                            Experience the thrill of driving a Pajero. Our test drive offers a chance to feel the power, comfort, and handling of our SUVs firsthand. Discover why Pajero is the perfect blend of performance and luxury for every journey.
                        </p>
                    </div>
                </motion.div>

                {/* Animasi ketiga */}
                <motion.div
                    className="bg-white border border-black rounded-xl transition-transform transform hover:-translate-y-1 hover:scale-105 hover:bg-black hover:text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, delay: 0.45 }}
                    ref={ref3}
                >
                    <div className="flex items-center justify-between p-6 border-black transition-colors hover:text-white">
                        <p className="text-xl font-bold">Latest News</p>
                        <MdArrowOutward className="text-xl font-bold" />
                    </div>
                    <div className="p-6">
                        <p className="max-w-sm">
                            Stay updated with the latest from Pajero. Discover our newest innovations, upcoming models, and exciting announcements that showcase our commitment to delivering cutting-edge technology and exceptional driving experiences.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bagian 4: Animasi */}
            <div className="p-6 mt-6">
                <motion.div
                    className="w-full mx-auto rounded-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, delay: 0.60 }}
                    ref={ref4}
                >
                    <video className="w-full rounded-lg" controls autoPlay loop>
                        <source src={pajeroVid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>

            {/* Bagian 5: Animasi */}
            <div className="p-6">
                <motion.div
                    className="bg-black p-6 rounded-md space-y-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, delay: 0.75 }}
                    ref={ref5}
                >
                    <div className="text-4xl md:text-6xl font-semibold text-white">
                        HELLO@PAJERO.CO
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between text-lg mt-8 md:mt-24">
                        <button className="text-black bg-white rounded-md p-2 transform hover:scale-110 duration-300">
                            Order Now
                        </button>
                        <div className="flex flex-col md:flex-row text-xl space-y-4 md:space-y-0 md:space-x-8 text-white mt-4 md:mt-0">
                            <p className="cursor-pointer transform hover:scale-90 duration-300">Facebook</p>
                            <p className="cursor-pointer transform hover:scale-90 duration-300">Youtube</p>
                            <p className="cursor-pointer transform hover:scale-90 duration-300">Instagram</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
        </>
    );
};

export default Home4;
