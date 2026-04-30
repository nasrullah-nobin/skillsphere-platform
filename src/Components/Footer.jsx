import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
<footer className="bg-neutral-primary-soft text-body">
  <div className="w-full p-6 lg:py-10">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

     
      <div>
        <Image src={logo} alt="logo" width={150} className="mb-3 transition hover:scale-105 duration-300" />
        <p className="text-sm hover:text-heading transition duration-300">
          SkillSphere is a modern learning platform helping students build real-world skills and grow their careers.
        </p>
      </div>

      
      <div>
        <h2 className="mb-4 font-semibold text-heading">Quick Links</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/" className="hover:text-blue-600 hover:pl-1 transition-all duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-blue-600 hover:pl-1 transition-all duration-300">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 hover:pl-1 transition-all duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 hover:pl-1 transition-all duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      
      <div>
        <h2 className="mb-4 font-semibold text-heading">Legal</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/terms" className="hover:text-blue-600 hover:pl-1 transition-all duration-300">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-blue-600 hover:pl-1 transition-all duration-300">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

  
      <div>
        <h2 className="mb-4 font-semibold text-heading">Contact</h2>
        <ul className="text-sm space-y-2">
          <li className="hover:text-heading transition">Email: support@skillsphere.com</li>
          <li className="hover:text-heading transition">Phone: +880 1234-567890</li>
          <li className="hover:text-heading transition">Location: Bangladesh</li>
        </ul>

      
        <div className="flex mt-4 gap-4 text-lg">
          <a href="#" className="transition transform hover:scale-125 hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="#" className="transition transform hover:scale-125 hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="transition transform hover:scale-125 hover:text-gray-900">
            <FaGithub />
          </a>
        </div>
      </div>

    </div>

    <hr className="my-6 border-default" />

    <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
      <span className="hover:text-heading transition">
        © 2026 SkillSphere. All Rights Reserved.
      </span>
      <span className="hover:text-heading transition">
        Built with ❤️ using Next.js
      </span>
    </div>

  </div>
</footer>
    );
};

export default Footer;