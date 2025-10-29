import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f6eeee] shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          <p className="text-[17px] lg:text-xl font-bold text-[#e88585]">
            Hi, I'm Clarie
          </p>

        
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-[#e88585] hover:text-[#d17575] hover:border-t transition">Home</Link>
            <Link to="/shop-my-life" className="text-[#e88585] hover:text-[#d17575] hover:border-t transition">Shop My Life</Link>
            <Link to="/work-with-me" className="text-[#e88585] hover:text-[#d17575] hover:border-t transition">Work With Me</Link>
          </div>

        
          <div className="flex md:hidden items-center space-x-4 text-[#e88585] text-xl">
            <Link to="/" className="hover:text-[#d17575]" title="Home">
              <FaHome size={15}/>
            </Link>
            <Link to="/shop-my-life" className="hover:text-[#d17575]" title="Shop My Life">
              <FaCartShopping size={15}/>
            </Link>
            <Link to="/work-with-me" className="hover:text-[#d17575]" title="Work With Me">
              <MdWork size={15} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
