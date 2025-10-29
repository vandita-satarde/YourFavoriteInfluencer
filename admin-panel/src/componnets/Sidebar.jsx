import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'; // icon for menu toggle


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <>

      {/* Mobile Toggle Button */}
      <div className='md:hidden fixed z-10 flex justify-between items-center w-full p-6 bg-[#0E1836] text-[#F5F9FE] '>
        <h1 className='text-[18px] font-bold '>Admin Panel</h1>
        <button onClick={toggleSidebar} >
          {isOpen ? <X size={24} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`text-[15px] md:text-[18px] lg:text-[17px] fixed z-5 bg-[#f38f8f] text-[#dffbec] p-6 md:p-8 w-[230px] md:w-[290px] h-full ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col justify-between  `}>
        <div>
          <p className='text-[25px] hidden md:block'>Admin Panel</p>
          <div className='py-18 md:py-11 px-2 md:px-4 space-y-4 md:space-y-5 lg:space-y-3 '>
            <p><Link to='/dashboard'>Dashboard</Link></p>
            <p><Link to='/AddProducts' >Add Products</Link></p>
          </div>
        </div>
        <button onClick={handleLogout} className='  bg-red-400 w-full h-9 md:h-12 lg:h-9 rounded-xs cursor-pointer '>Log Out</button>
      </div>
    </>
  )
}

export default Sidebar
