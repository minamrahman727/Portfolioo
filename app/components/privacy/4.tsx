import Link from "next/link";
import React from "react";
import {
  FaEnvelopeOpenText,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-700 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        <header>
          <h1 className="text-4xl font-extrabold text-center text-white hover:text-neutral-400 transition-colors duration-300 mb-6">
            Privacy Policy
          </h1>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-200 mb-4">
            1. Introduction
          </h2>
          <p className="text-white/90 text-base">
            At smrehman.vercel.app, we are committed to protecting the privacy
            and security of our users. This Privacy Policy outlines how we
            collect, use, share, and safeguard your information when you visit
            our website. By accessing or using our website, you agree to the
            practices described in this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-200 mb-4">
            2. Data Collection
          </h2>
          <p className="text-white/90 text-base">
            We may collect personal and non-personal information in the
            following ways:
          </p>
          <ul className="list-disc list-inside text-white/80 text-sm mt-4">
            <li>
              <span className="font-semibold text-white">
                Personal Information:
              </span>{" "}
              Since our website does not require users to sign up or create
              accounts, we do not actively collect personal information such as
              names, email addresses, or phone numbers.
            </li>
            <li className="mt-2">
              <span className="font-semibold text-white">
                Non-Personal Information:
              </span>{" "}
              We may collect non-personal data such as your IP address, browser
              type, device information, and usage data (e.g., pages visited,
              time spent on the website, and interactions with the website).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-200 mb-4">
            3. Data Usage
          </h2>
          <p className="text-white/90 text-base">
            We use the collected data to:
          </p>
          <ul className="list-disc list-inside text-white/80 text-sm mt-4">
            <li>Improve the functionality and performance of our website.</li>
            <li>Analyze trends, administer the website, and track user interactions.</li>
            <li>Ensure a secure and seamless experience for all visitors.</li>
            <li>Provide customer support when necessary.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-200 mb-4">
            4. Data Sharing
          </h2>
          <p className="text-white/90 text-base">
            We do not sell, rent, or share your personal information with third
            parties for marketing purposes. However, we may share non-personal
            information with service providers and partners for analytics,
            security, and operational purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-200 mb-4">
            5. Your Rights
          </h2>
          <p className="text-white/90 text-base">As a user, you have the following rights:</p>
          <ul className="list-disc list-inside text-white/80 text-sm mt-4">
            <li>
              <span className="font-semibold text-white">Access:</span> You have
              the right to request access to the personal data we hold about
              you.
            </li>
            <li className="mt-2">
              <span className="font-semibold text-white">Correction:</span> You
              may request updates or corrections to your personal information if
              you believe it is inaccurate or incomplete.
            </li>
            <li className="mt-2">
              <span className="font-semibold text-white">Deletion:</span> You
              may request the deletion of your non-personal data at any time, if
              applicable.
            </li>
            <li className="mt-2">
              <span className="font-semibold text-white">Opt-Out:</span> You can
              opt out of any data collection or tracking processes if required.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-200 mb-4">
            6. Contact Us
          </h2>
          <p className="text-white/90 text-base">
            If you have any questions or concerns about this Privacy Policy or
            how your data is used, please contact us at:
          </p>
          <ul className="list-inside text-white/80 text-sm mt-4">
            <li className="flex items-center">
              <span className="mr-2 text-white">Email:</span>
              <Link
                className="flex items-center hover:text-neutral-200 transition-colors"
                href="mailto:minamrahman727@gmail.com"
              >
                <FaEnvelopeOpenText className="mr-2 w-5 h-5" />
                minamrahman727@gmail.com
              </Link>
            </li>
            <li className="flex items-center mt-4">
              <span className="mr-2 text-white">Instagram:</span>
              <Link
                className="flex items-center hover:text-neutral-200 transition-colors"
                href="https://instagram.com/syedminamurrehman"
                target="_blank"
              >
                <FaInstagram className="mr-2 w-5 h-5" />
                @syedminamurrehman
              </Link>
            </li>
            <li className="flex items-center mt-4">
              <span className="mr-2 text-white">LinkedIn:</span>
              <Link
                className="flex items-center hover:text-neutral-200 transition-colors"
                href="https://linkedin.com/in/syedminamurrehman"
                target="_blank"
              >
                <FaLinkedin className="mr-2 w-5 h-5" />
                Syed Minam ur Rehman
              </Link>
            </li>
            <li className="flex items-center mt-4">
              <span className="mr-2 text-white">GitHub:</span>
              <Link
                className="flex items-center hover:text-neutral-200 transition-colors"
                href="https://github.com/minamrahman727"
                target="_blank"
              >
                <FaGithub className="mr-2 w-5 h-5" />
                minamrahman727
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
