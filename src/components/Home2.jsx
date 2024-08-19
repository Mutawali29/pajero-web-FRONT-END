import React from "react";
import { motion } from "framer-motion";
import { GoPlusCircle } from "react-icons/go";
import pajero3 from '../assets/pajero3.jpg';
import pajero4 from '../assets/pajero4.jpeg';
import { useInView } from 'react-intersection-observer';

const Home2 = () => {
    const { ref: imgRef1, inView: imgInView1 } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });
    const { ref: imgRef2, inView: imgInView2 } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    return (
        <>
        <section id="home2" className="min-h-screen">
            {/* Bagian pertama: Header dan paragraf */}
            <div className="p-6 flex flex-col md:flex-row md:justify-between">
                <div className="text-4xl font-bold mb-4 md:mb-0">
                    <h1>
                        Master the Road with the Legendary Pajero’s Power and Precision
                    </h1>
                </div>
                <p className="text-lg md:mr-6">
                    With rugged 4WD capability and refined handling, the Pajero is built for both adventure and comfort. Whether on tough terrain or city streets, the Pajero delivers confident performance with style and reliability.
                </p>
            </div>

            {/* Bagian kedua: Tombol dan ikon */}
            <div className="p-6 flex flex-col md:flex-row md:justify-between">
                <button className="text-white bg-black p-2 rounded-lg mb-4 md:mb-0 transition-colors duration-300 hover:bg-gray-600">
                    All-Wheel Drive
                </button>
                <button className="text-white bg-black p-2 rounded-lg transition-colors duration-300 hover:bg-gray-600">
                    Environmental Friendliness
                </button>
            </div>

            {/* Bagian ketiga: Gambar dengan animasi */}
            <div className="p-6 flex flex-col md:flex-row md:justify-between">
                <motion.img
                    src={pajero3}
                    alt="pajero3"
                    className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0"
                    initial={{ scale: 0.8 }}
                    animate={imgInView1 ? { scale: 1 } : { scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    ref={imgRef1}
                />
                <motion.img
                    src={pajero4}
                    alt="pajero4"
                    className="w-full md:w-1/2 h-auto object-cover"
                    initial={{ scale: 0.8 }}
                    animate={imgInView2 ? { scale: 1 } : { scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    ref={imgRef2}
                />
            </div>

            {/* Bagian keempat: Spesifikasi dan performa */}
            <div className="p-6 flex flex-col md:flex-row md:justify-between">
                <div className="text-4xl font-bold mb-4 md:mb-0">
                    <h1>Unveiling Advanced Specifications and Performance Excellence.</h1>
                </div>
                <div className="max-w-xl">
                    <p>
                        Discover the cutting-edge features and powerful performance that set this product apart. Designed for optimal efficiency and superior capability, it delivers a seamless blend of innovation, durability, and precision to elevate your experience on every journey.
                    </p>
                </div>
            </div>

            {/* Bagian kelima: Garis horizontal dan detail spesifikasi */}
            <div>
                <hr className="border-black w-11/12 mx-auto my-4" />
                {/* Bagian pertama spesifikasi */}
                <div className="flex flex-col md:flex-row items-center justify-between p-6">
                    <GoPlusCircle className="text-6xl mb-4 md:mb-0 md:ml-20" />
                    <div className="flex items-baseline mb-4 md:mb-0 md:mr-96">
                        <span className="text-6xl font-bold">4360</span>
                        <p className="text-3xl ml-2">ml</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-xl font-bold max-w-sm text-right mr-32">
                            Pajero SUV, 4360 mm long, perfect for all terrains
                        </p>
                    </div>
                </div>

                <hr className="border-black w-11/12 mx-auto my-4" />
                {/* Bagian kedua spesifikasi */}
                <div className="flex flex-col md:flex-row items-center justify-between p-6">
                    <GoPlusCircle className="text-6xl mb-4 md:mb-0 md:ml-20" />
                    <div className="flex items-baseline mb-4 md:mb-0 md:mr-96">
                        <span className="text-6xl font-bold">2500</span>
                        <p className="text-3xl ml-2">rpm</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-xl font-bold max-w-sm text-right mr-32">
                            Pajero delivers exceptional performance at just 2500rpm
                        </p>
                    </div>
                </div>

                <hr className="border-black w-11/12 mx-auto my-4" />
                {/* Bagian ketiga spesifikasi */}
                <div className="flex flex-col md:flex-row items-center justify-between p-6">
                    <GoPlusCircle className="text-6xl mb-4 md:mb-0 md:ml-20" />
                    <div className="flex items-baseline mb-4 md:mb-0 md:mr-96">
                        <span className="text-6xl font-bold">2830</span>
                        <p className="text-3xl ml-2">mm</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-xl font-bold max-w-sm text-right mr-32">
                            Pajero, with a wheelbase of 2830mm, offers a stable ride
                        </p>
                    </div>
                </div>
                <hr className="border-black w-11/12 mx-auto my-4" />
            </div>
        </section>
        </>
    );
};

export default Home2;
