import Link from 'next/link';
import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';

const FooterComponent = () => {
  const socialMediaLinks = [
    { icon: <CiFacebook />, link: 'https://www.facebook.com' },
    { icon: <CiInstagram />, link: 'https://www.instagram.com' },
    { icon: <CiTwitter />, link: 'https://www.twitter.com' },
    { icon: <FaGithub />, link: 'https://www.github.com' },
    { icon: <CiLinkedin />, link: 'https://www.linkedin.com' },
    { icon: <FaWhatsapp />, link: 'https://www.whatsapp.com' },
  ];
  const pagesLinks = [
    { name: 'About', link: '/about' },
    { name: 'Benefit', link: '/benefit' },
    { name: 'Me', link: '/portfolio' },
    { name: 'Support', link: '/contact' },
  ];
  return (
    <footer className=" w-full h-fit flex justify-center items-center bg-[#101828] fbg-[#242424] ">
      <div className=" w-full 2xl:w-[80%] flex justify-between items-center h-[250px] text-white px-5 py-8">
        <div className=" w-fit h-full flex justify-between items-center gap-4 ">
          <div className="">
            <p className=" text-3xl font-bold ">AURELIEN DEV</p>
          </div>
          <hr className=" h-full w-[1px] bg-[#707070] border-none " />
          <div className=" flex justify-between items-center ">
            <div className="  flex flex-col text-sm text-[#707070] ">
              <div className=" w-full flex gap-3 ">
                {pagesLinks.map((page, index) => (
                  <Link
                    key={index}
                    href={page.link}
                    className="hover:text-white transition duration-300"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
              <p>© 2025 AURELIEN DEV. All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3 ">
          <div className=" flex gap-4 items-center text-[#707070] ">
            {socialMediaLinks.map((social, index) => (
              <Link
                href={social.link}
                target="_blank"
                className=" text-xl hover:text-white transition duration-300"
                key={index}
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <div>
            <div className="flex flex-col text-sm text-[#707070]">
              <p>Contact us:</p>
              <p>
                {/* Email 1:{' '} */}
                <a
                  href="mailto:contact@aurelien.dev"
                  className="hover:text-white transition duration-300"
                >
                  contact@aurelien.dev
                </a>
              </p>
              <p>
                {/* Email 2:{' '} */}
                <a
                  href="mailto:support@aurelien.dev"
                  className="hover:text-white transition duration-300"
                >
                  support@aurelien.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
