import Link from "next/link";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiCplusplus, SiNextdotjs } from "react-icons/si";

const skills = [
  { Icon: FaHtml5, label: "HTML", color: "text-orange-500" },
  { Icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
  { Icon: FaCss3Alt, label: "CSS", color: "text-blue-600" },
  { Icon: FaJs, label: "JavaScript", color: "text-yellow-500" },
  { Icon: FaPython, label: "Python", color: "text-blue-400" },
  { Icon: SiNextdotjs, label: "Next.js", color: "text-neutral-100" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-teal-400" },
  { Icon: SiCplusplus, label: "C++", color: "text-blue-700" },
  { Icon: FaGithub, label: "GitHub", color: "text-white" },
  { Icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/syed-minam-ur-rehman/", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://github.com/minamrahman727", label: "GitHub", Icon: FaGithub },
  { href: "https://instagram.com/syedminamurrehman", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.facebook.com/profile.php?id=100078720140776", label: "Facebook", Icon: FaFacebookF },
];

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-700 flex flex-col items-center px-5 py-10">
      <div className="max-w-4xl w-full bg-gradient-to-t from-neutral-900 to-neutral-700 border border-neutral-300 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-10 transform hover:-translate-y-1">
        <figure className="flex justify-center pb-4">
          <Image
            src="/team/minam2.jpg"
            alt="Syed Minam Ur Rehman smiling and professional."
            width={150}
            height={150}
            className="w-36 h-36 rounded-full object-cover border-2 border-stone-500 hover:animate-pulse transition-all duration-300"
          />
        </figure>
        <h2 className="text-center font-serif text-neutral-100 lg:text-3xl md:text-xl sm:text-4xl py-2">
          Syed Minam Ur Rehman
        </h2>
        <p className="text-center font-mono text-neutral-200 opacity-75 text-base">
passionate Front-End Developer        </p>
        <section className="py-5">
          <h3 className="text-2xl font-bold text-center text-neutral-100 mb-5">About Me</h3>
            <p className="text-neutral-200 text-base text-justify">
            I am a dedicated web developer driven by a passion for crafting innovative digital experiences. With expertise spanning a diverse array of programming languages and state-of-the-art frameworks, I excel at merging cutting-edge technology with refined design principles.
            </p>
        </section>
        <section className="py-5">
          <h3 className="text-2xl font-bold text-center text-neutral-100 mb-5">My Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-center">
            {skills.map(({ Icon, label, color }) => (
              <li
                key={label}
                className="flex flex-col items-center text-neutral-200 transform hover:scale-110 transition-transform duration-300"
              >
                <Icon size={35} className={color} />
                <span className="text-sm font-bold mt-1">{label}</span>
              </li>
            ))}
          </ul>
        </section>
        <footer className="py-5">
          <h3 className="text-2xl font-extrabold font-mono text-center text-neutral-100 mb-5">
            Connect with me
          </h3>
          <nav>
            <ul className="flex justify-center gap-5">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label} className="transform hover:scale-110 transition-transform duration-300">
                  <Link
                    href={href}
                    aria-label={`Visit my ${label} profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none focus:ring-2 focus:ring-neutral-100 rounded"
                  >
                    <Icon size={35} className="text-white hover:text-neutral-100 transition-colors duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </div>
    </section>
  );
};

export default AboutMe;
