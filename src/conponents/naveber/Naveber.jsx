import React from 'react';


import { FaRegChartBar } from 'react-icons/fa';
import { IoAddOutline, IoTimeOutline } from 'react-icons/io5';
import { TiHomeOutline } from 'react-icons/ti';
import { NavLink } from 'react-router';

const Naveber = () => {
    const Links=<>

    <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "btn bg-[#1F5C4D] text-white"
      : "btn bg-[#E5E7EB] text-[#4B5563]"
  }
>
  <TiHomeOutline /> Home
</NavLink>
    <NavLink to="timeline"  className={({isActive}) => 
        isActive ? "btn  bg-[#1F5C4D] text-white"  
        : "btn bg-[#E5E7EB] text-[#4B5563]"} >
        <IoTimeOutline />Timeline
    </NavLink> 
    <NavLink to="stas" className={({isActive}) =>
    isActive ? "btn  bg-[#1F5C4D] text-white" : "btn bg-[#E5E7EB] text-[#4B5563]"}> 
        <FaRegChartBar />Stats
    </NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm   lg:flex justify-between items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                          
                         <div className='flex gap-4'> {Links}</div>
                        </ul>
                    </div>
                    <a className=" font-extrabold text-[24px] text-[#1F2937]">Keen<span className='text-[#1F5C4D]'>Keeper</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        
                        <div className='flex gap-4'> {Links}</div>
                    </ul>
                </div>
                
            </div>


            
            </div>
    )
}
export default Naveber 
