"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const ProfileSection = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/AswinUNair_CV.pdf"; 
        link.download = "AswinUNair_CV.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      const handleEmail = () => {
        window.location.href = "mailto:aswin.nair923@gmail.com?subject=Hire%20Me&body=Hello,%20I%20would%20like%20to%20hire%20you.";
      };
    
      const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/in/aswin-u-nair-0426061b3/", "_blank");
      };

    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-9 place-self-center text-center sm:text-left">
                <div className="grid grid-rows-1 sm:grid-rows-12">
                <div className="row-span-4">
                <h1 className="text-white mb-2 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
                    <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 h-[50px] lg:h-[100px]">
                    Hello, I&apos;m{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        "Aswin U Nair",
                        1000,
                        "Full-stack Developer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                </div>
                <div className="row-span-4">
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                I'm a passionate Full Stack Developer with over two years of experience in building scalable web applications 
                using Java, Spring Boot, ReactJS, and SQL. 
                I love creating robust backend systems and user-friendly frontends while ensuring quality, security, and 
                smooth deployment through CI/CD and agile practices.
                </p>
                </div>
                <div className="row-span-4">
                    <button onClick={() => setIsOpen(true)} className="border border-white px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white hover:text-black">
                    Hire Me
                    </button>
                    {isOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                            <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                            X
                            </button>
                            <h2 className="text-xl font-bold mb-4 text-black">Hire Me</h2>
                            <p className="text-gray-700">📧 Email: aswin.nair923@gmail.com</p>
                            <p className="text-gray-700">📞 Contact: +91 6282953844</p>
                            <div className="flex justify-between mt-4">
                            <button onClick={handleEmail} className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Email Me</button>
                            <button onClick={handleLinkedIn} className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">LinkedIn</button>
                            </div>
                        </div>
                        </div>
                    )}
                    <button onClick={handleDownload} className="border border-white px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download CV
                    </span>
                    </button>
                </div>
                </div>
                </div>
                <div className="col-span-3">
                <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
                    <Image
                    src="/profile_pic.jpg"
                    alt="Profile pic"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={250}
                    height={250}
                    />
                </div>
                </div>
            </div>
        </section>
    );
}

export default ProfileSection;