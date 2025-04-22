import React from 'react';
import Link from 'next/link'; // Assuming you're using Next.js
import { SiDailydotdev } from 'react-icons/si';

const NavigationBar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    // { name: 'About', path: '/about' },
    // { name: 'Service', path: '/service' },
    // { name: 'Pricing', path: '/pricing' },
    // { name: 'Contact', path: '/contact' },
  ];

  return (
    <main className=" sticky top-0 w-full p-4 bg shadow-md z-50  ">
      <div className="flex items-center justify-between 2xl:w-[50%] w-full px-4 mx-auto border border-black ">
        {/* Logo */}
        <div className="text-xl font-bold text-black">
          <Link href="/" className="flex items-center space-x-2">
            <SiDailydotdev className="text-2xl " />
            <span>Aurelien Dev</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-gray-700 hover:text-black transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Language */}
        <div className="text-sm hover:text-black transition">EN</div>
      </div>
    </main>
  );
};

export default NavigationBar;
