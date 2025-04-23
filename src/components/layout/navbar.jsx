'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiDailydotdev } from 'react-icons/si';

const NavigationBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 w-full flex justify-center items-center p-4 bg-white shadow-md z-50">
      <div className="flex items-center justify-between w-full 2xl:w-[80%] px-4">
        {/* Logo */}
        <div className="text-xl font-bold text-[#101828]">
          <Link href="/" className="flex items-center space-x-2">
            <SiDailydotdev className="text-2xl" />
            <span>Aurelien Dev</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-bold text-gray-700 hover:text-black transition duration-300 border-b-2 pb-1 ${
                pathname === link.path
                  ? 'border-black text-black'
                  : 'border-transparent hover:border-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Language */}
        <div className="text-sm hover:text-black transition">EN</div>
      </div>
    </header>
  );
};

export default NavigationBar;
