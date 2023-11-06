import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../../assets/search.png";
import logo from "../../assets/logo.png";
// import { setSearchValue } from "../../Gallery/GallerySlice";

const Navbar = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const hideOnMobile = "hidden md:block";

  // const dispatch = useDispatch(); // Get the dispatch function


  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  const search = () => {
    onSearch(searchInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <header>
      <div
        className="w-full h-[90px]"
        style={{
          position: "absolute",
          boxShadow: "0px 1px 10px #999",
        }}
      ></div>
      <nav className=" relative ">
        <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto ml-auto p-4 ">
         <a href="/"> <img src={logo} alt="" className="text-[white] cursor-pointer" /></a>

          <div className={`relative ${hideOnMobile}`}>
            <input
              type="text"
              id="search-navbar"
              value={searchInput}
              onChange={handleSearch}
              onKeyPress={handleKeyPress}
              className="block w-full p-2  text-sm border-[2px]   pr-10 rounded text-black-300 border-teal-400 hover:text-black "
              placeholder="Search..."
            ></input>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <img src={searchIcon} alt=""  onClick={search} className="h-6 " />
            </div>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className=" flex items-center p-3 py-2 mr-1 border rounded text-teal-300 border-teal-400 "
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
            <li className="">
              <a
                href="/"
                className="mt-6 pl-[150px] text-[#999] text-[18px] font-normal  hover:text-[#fff]"
              >
                Home
              </a>
            </li>
            {/* <li className=" mt-6 pl-[150px]  text-[#999] text-[18px] font-normal hover:text-[#fff]">
             <a href="food">Food Collection</a>
            </li> */}
            <li className="  mt-6 pl-[150px] text-[#999] text-[18px] font-normal hover:text-[#fff]">
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
