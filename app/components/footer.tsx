import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t  from-neutral-900 to-neutral-700 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Syed Minam ur Rehman</h2>
            <p className="text-sm text-neutral-400 mt-2">
              © 2025 Syed Minam ur Rehman. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/about">
              <p className="text-sm text-neutral-400 hover:text-white transition duration-300">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-sm text-neutral-400 hover:text-white transition duration-300">Contact</p>
            </Link>
            <Link href="/privacy">
              <p className="text-sm text-neutral-400 hover:text-white transition duration-300">Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
