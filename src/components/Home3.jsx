import React from "react";
import { motion } from "framer-motion";
import { HiArrowSmRight } from "react-icons/hi";
import pajeroInner from '../assets/pajeroInner.jpg';
import pajero5 from '../assets/pajero5.jpg';
import pajeroHD from '../assets/pajeroHD.jpeg';
import { useInView } from 'react-intersection-observer';

const Home3 = () => {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });
    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <>
        <section id="home3" className="min-h-screen">
            <div className="flex flex-col md:flex-row justify-between p-6 space-y-4 md:space-y-0 md:space-x-4">
                <motion.div
                    className="text-white space-y-1 bg-black" // urutan animasi pertama
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    ref={ref1}
                >
                    <h1 className="text-3xl md:text-4xl font-bold max-w-lg p-6">
                        Easy to Drive With Light Steering and a Compliant Ride
                    </h1>
                    <p className="max-w-md p-6 mt-[-50px] text-sm md:text-base">
                        Enjoy effortless handling with precise steering and a smooth ride. The Pajero combines agility with comfort, making every drive enjoyable. Whether on rugged trails or city streets, its balanced performance ensures a pleasant driving experience in all conditions.
                    </p>
                    <div className="p-6">
                        <div className="flex items-center mt-[-30px]">
                            <p className="cursor-pointer">Learn More</p>
                            <HiArrowSmRight className="text-xl ml-3" />
                        </div>
                        <hr className="border-white w-28 " />
                    </div>
                </motion.div>
                <motion.div // urutan animasi kedua
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    ref={ref2}
                >
                    <img src={pajeroInner} alt="pajeroInner" className="w-full md:w-auto" />
                </motion.div>
            </div>
            <div className="flex flex-col md:flex-row justify-between p-6 mt-[-40px] space-y-4 md:space-y-0 md:space-x-4">
                <motion.div // urutan animasi ketiga
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, delay: 0.30 }}
                    ref={ref3}
                >
                    <img src={pajero5} className="w-full h-96 object-cover" />
                </motion.div>
                <motion.div
                    className="text-white bg-black space-y-0" // urutan animasi keempat
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, delay: 0.45 }}
                    ref={ref3}
                >
                    <h1 className="text-3xl md:text-4xl font-bold max-w-lg p-6">Simple Storage and Functional with Large the Space</h1>
                    <p className="max-w-md p-6 text-sm md:text-base">Practical storage solutions and versatile features make the Pajero an excellent choice. With ample space and smart design, it meets your needs for both everyday use and adventure. The thoughtful layout ensures you have room for everything while on the go.</p>
                    <div className="p-6">
                        <div className="flex items-center mt-[-30px]">
                            <p>Learn More</p>
                            <HiArrowSmRight className="text-xl ml-3" />
                        </div>
                        <hr className="border-white w-28 " />
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col p-6">
                <motion.div
                    className="flex items-start md:items-center justify-between"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, delay: 0.60 }}
                    ref={ref4}
                >
                    <h1 className="text-3xl md:text-4xl font-bold max-w-lg ">The Spacius, Luxurious Pajero Inferior for Your Life Relaxation</h1>
                    <p className="max-w-xl  text-sm md:text-base text-left">Experience the spacious, luxurious interior of the Pajero, designed for your ultimate comfort. With premium materials and thoughtful features, it ensures a relaxing drive and refined journey, whether you're exploring the city or the great outdoors.</p>
                </motion.div>
                <motion.div
                    className="flex  mt-[-20px] "
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, delay: 0.75 }}
                    ref={ref4}
                >
                    <img src={pajeroHD} alt="pajeroHD" className="w-full md:w-auto mt-16" />
                </motion.div>
            </div>
            <div className="flex flex-col md:flex-row p-6 space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-1">
                    <p className="text-lg font-bold">01</p>
                    <hr className="border-black w-full" />
                    <p className="text-xl md:text-2xl font-bold">Dynamic Shield</p>
                    <p className="max-w-md mt-4 text-sm md:text-base">Dynamic Shield gives the Pajero a bold, distinctive look, blending style with strong protection for a standout presence on the road</p>
                </div>
                <div className="flex-1">
                    <p className="text-lg font-bold">02</p>
                    <hr className="border-black w-full" />
                    <p className="text-xl md:text-2xl font-bold">Hexaguard Horizon</p>
                    <p className="max-w-md mt-4 text-sm md:text-base">Hexaguard Horizon provides advanced protection with its unique design. Engineered for durability, it ensures your safety while enhancing style</p>
                </div>
                <div className="flex-1">
                    <p className="text-lg font-bold">03</p>
                    <hr className="border-black w-full" />
                    <p className="text-xl md:text-2xl font-bold">Horizontal Axis</p>
                    <p className="max-w-md mt-4 text-sm md:text-base">Horizontal Axis delivers a sleek, modern design with optimal functionality. It combines style and precision, enhancing your driving experience with elegance</p>
                </div>
            </div>
        </section>
        </>
    );
};

export default Home3;
