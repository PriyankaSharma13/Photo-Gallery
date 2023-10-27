import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import search from "../../assets/search.png";
import logo from "../../assets/logo.png"


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hideOnMobile = "hidden md:block"; 
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  
  return (
    <header>
      <div
        className="w-full h-[90px]"
        style={{
          position: "absolute",
          boxShadow: "0px 1px 10px #999"
        }}
      ></div>
      <nav className=" relative ">
      
        <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto ml-auto p-4 ">
          <img src={logo} alt=""  className="text-[white] "/>
         
          <div className={`relative ${hideOnMobile}`}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
              <img src={search} alt="" className="h-5 " />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-[50px] text-sm border-[2px]   rounded text-black-300 border-teal-400 hover:text-black hover:border-white"
              placeholder="Search..."
            ></input>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            
            className=" flex items-center p-3 py-2 mr-1 border rounded text-teal-300 border-teal-400 hover:text-white hover:border-white"
          >
            <FontAwesomeIcon icon={faBars} />
            <span className="sr-only">Menu</span>
          </button>
        </div>

        {/* ------------------Menu-------------- */}
        <div
          className={`${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } block z-[101] fixed w-[400px] h-[600px] right-0 shadow bg-black-90  transition-[0.3s] duration-[all] ease-[ease] inset-y-0`}
        >
          <button
            type="button"
            onClick={closeMenu}
            className="mt-[20px] ml-[150px] p-3 py-2 border rounded text-teal-300 border-teal-400 hover:text-white hover:border-white "
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <ul className="items-center mt-[50px]">
            <li className="  mt-6 pl-[150px] text-[#999] text-[18px] font-normal  hover:text-[#fff]">
               Home
            </li>
            <li className=" mt-6 pl-[150px] text-[#999] text-[18px] font-normal hover:text-[#fff]">
              Photograpy
            </li>
            <li className=" mt-6 pl-[150px]  text-[#999] text-[18px] font-normal hover:text-[#fff]">
             Photo Gallery
            </li>
            <li className="  mt-6 pl-[150px] text-[#999] text-[18px] font-normal hover:text-[#fff]">
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
