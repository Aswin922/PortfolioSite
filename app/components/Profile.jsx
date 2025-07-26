"use client";
import { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AswinUNair_Resume_Software_Developer.pdf";
    link.download = "AswinUNair_Resume_Software_Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmail = () => {
    window.location.href =
      "mailto:aswin.nair923@gmail.com?subject=Hire%20Me&body=Hello,%20I%20would%20like%20to%20hire%20you.";
  };

  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/aswin-u-nair-0426061b3/",
      "_blank"
    );
  };

  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-12 gap-8">
        {/* Left Section */}
        <div className="col-span-8 place-self-center text-center sm:text-left space-y-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-snug">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              Aswin U Nair
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Full-stack Developer",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block mt-2"
            />
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto sm:mx-0">
            I'm a passionate Full Stack Developer with over two years of
            experience in building scalable web applications using Java, Spring
            Boot, ReactJS, and SQL.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <button
              onClick={() => setIsOpen(true)}
              className="border border-gray-500 px-6 py-3 rounded-full text-white font-medium hover:bg-gray-800 transition"
            >
              Hire Me
            </button>
            <button
              onClick={handleDownload}
              className="border border-gray-500 px-6 py-3 rounded-full text-white font-medium hover:bg-gray-800 transition"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-span-4 flex justify-center">
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/profile_pic.jpg"
              alt="Profile pic"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>

      {/* Hire Me Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-4">Hire Me</h2>
            <p className="text-gray-700">📧 Email: aswin.nair923@gmail.com</p>
            <p className="text-gray-700">📞 Contact: +91 6282953844</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleEmail}
                className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800"
              >
                Email Me
              </button>
              <button
                onClick={handleLinkedIn}
                className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800"
              >
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}