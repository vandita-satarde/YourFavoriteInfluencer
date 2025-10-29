import React from 'react';
import { FaInstagram, FaYoutube, FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <footer className="bg-[#f98e8e] text-[#9a4141] pt-10"> 
      <div className=" mx-5 md:mx-16 lg:mx-50 flex justify-around ">
        
        <div cl>
          <h2 className=" text-[13px] md:text-2xl lg:text-2xl font-bold ">CLARIE</h2>
          <p className="mt-3 text-[9px] md:text-sm lg:text-sm">Creating. Inspiring. Influencing.</p>
        </div>

        <div>
          <h3 className=" text-[11px] md:text-lg lg:text-lg font-semibold ">Quick Links</h3>
          <ul className="space-y-2 text-[9px] md:text-sm lg:text-sm mt-3 ">
            <li><a href="/work-with-me" className="hover:text-[#512c2c]">Work with Me</a></li>                        
            <li><a href="/collab" className="hover:text-[#512c2c]">Collaborations & Events</a></li>
            <li><a href="/shop-my-life" className="hover:text-[#512c2c]">Shop</a></li>
          </ul>
        </div>

        <div>
          <h3 className=" text-[11px] md:text-lg lg:text-lg font-semibold ">Follow Me</h3>
          <div className="flex flex-col md:flex-row lg:flex-row space-x-4 mt-3 ">
            <a href="https://www.instagram.com/chclaireh/reels/" target="_blank" rel="noreferrer" className="hover:text-[#512c2c] text-[16px] md:text-[22px] lg:text-[22px] ">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@clairehsieh4061" target="_blank" rel="noreferrer" className="hover:text-[#512c2c] text-[16px] md:text-[22px] lg:text-[22px]">
              <FaYoutube />
            </a>
            <a href="https://www.threads.com/@chclaireh" target="_blank" rel="noreferrer" className="hover:text-[#512c2c] text-[16px] md:text-[22px] lg:text-[22px]">
              <FaThreads />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-[7px] md:text-[14px] lg:text-sm text-[#784b4b] pt-15 pb-1">
        © 2025 Clarie. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;
