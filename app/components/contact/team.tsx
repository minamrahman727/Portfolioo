import Link from "next/link";
import MapEmbed from "../map";
import { FaInstagram, FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaMobileRetro, FaRegEnvelopeOpen } from "react-icons/fa6";

const TeamSection = () => {
  return (
    <section className="bg-gradient-to-b from-neutral-900 to-neutral-700 py-8 min-h-screen">
      <div className="max-w-7xl mx-auto rounded-3xl text-white flex flex-col md:flex-row items-center justify-center gap-8 px-4 transition-all duration-500">
        <div className="w-full md:w-1/2 flex justify-center">
          <MapEmbed />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-mono font-bold py-5 text-center md:text-left">
            Contact Me
          </h3>
          <div className="space-y-6">
            <div>
              <p className="text-xl flex items-center">
                <FaMobileRetro className="mr-2" /> Phone No
              </p>
              <p className="text-base">
                <Link
                  href="tel:+923369289269"
                  aria-label="Call Phone Number"
                  className="hover:underline transition-colors duration-200"
                >
                  +92-336-9289269
                </Link>
              </p>
            </div>
            <div>
              <p className="text-xl flex items-center">
                <FaRegEnvelopeOpen className="mr-2" /> Email Me
              </p>
              <p className="text-base">
                <Link
                  href="mailto:minamrahman727@gmail.com?subject=Inquiry&body=Hello, I want to contact you for hiring you"
                  aria-label="Send Email"
                  className="hover:underline transition-colors duration-200"
                >
                  minamrahman727@gmail.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start gap-6 mt-8">
            <Link
              href="https://instagram.com/syedminam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-transform transform hover:scale-110"
            >
              <FaInstagram size={35} />
            </Link>
            <Link
              href="https://linkedin.com/syedminamurrehman"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-transform transform hover:scale-110"
            >
              <FaLinkedinIn size={35} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-transform transform hover:scale-110"
            >
              <FaFacebookF size={35} />
            </Link>
            <Link
              href="https://github.com/minamrahman727"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform transform hover:scale-110"
            >
              <FaGithub size={35} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
