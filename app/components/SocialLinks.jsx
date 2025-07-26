import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section className="py-12 bg-black text-center">
      <h2 className="text-xl font-semibold mb-4">
        Let&apos;s Connect <span className="text-red-500">❤️</span>
      </h2>
      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/aswin-u-nair-0426061b3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 text-3xl transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/Aswin_UNI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 text-3xl transition-transform hover:scale-110"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/aswin_uni/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 text-3xl transition-transform hover:scale-110"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}