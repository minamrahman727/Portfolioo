"use client";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function ContactCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-700 p-6">
      <div className="w-full max-w-5xl bg-gradient-to-t from-neutral-900 to-neutral-700 rounded-2xl shadow-lg border border-neutral-900 overflow-hidden transform transition hover:scale-105">
        <div className="flex flex-col items-center p-8 text-base">
          <h2 className="text-2xl font-bold text-neutral-100 mb-6">Contact Me</h2>
          <div className="space-y-4 w-full">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-neutral-300" />
              <Link
                href="mailto:minamrahman727@gmail.com"
                className="block text-neutral-300 hover:underline text-base"
              >
                Email: minamrahman727@gmail.com
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-neutral-300" />
              <Link
                href="tel:+923369289269"
                className="block text-neutral-300 hover:underline text-base"
              >
                Phone: +923369289269
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-neutral-300" />
              <p className="block text-base text-neutral-300">
                <span className="font-semibold">Address:</span>{" "}
R-1586 Overseas block North Town Residency Phase 1              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-white" />
              <Link
                href="https://www.linkedin.com/in/syedminamurrehman"
                className="block text-white text-base hover:underline"
              >
                LinkedIn: <span className="hover:text-blue-400">@syedminamurrehman</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <FaGithub className="text-white" />
              <Link
                href="https://www.github.com/minamrahman727"
                className="block text-white text-base hover:underline"
              >
                GitHub: <span className="hover:text-blue-400">minamrahman727</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <FaInstagram className="text-white" />
              <Link
                href="https://www.instagram.com/syedminamurrehman"
                className="block text-white text-base hover:underline"
              >
                Instagram: <span className="hover:text-blue-400">@syedminamurrehman</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <FaFacebook className="text-white" />
              <Link
                href="https://www.facebook.com/profile.php?id=100078720140776"
                className="block text-white text-base hover:underline"
              >
                Facebook: <span className="hover:text-blue-400">S.Minam</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
