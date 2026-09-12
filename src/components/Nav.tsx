import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-50">
      <div className="container mx-auto px-3 lg:px-4 py-1">
        {/* Navbar Main */}
        <div className="relative flex h-14 items-center justify-between sm:h-16 lg:h-20">
          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#475569] lg:hidden"
            aria-label="Toggle menu">
            {isMenuOpen ? (
              <HiX className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <HiMenu className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </button>

          {/* Logo */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2
              lg:static lg:translate-x-0
              lg:flex-1
            ">
            <img
              src={Logo}
              alt="DevStack Logo"
              className=" h-auto w-21 sm:w-28 md:w-32 lg:w-40 xl:w-44 "
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-4 font-medium text-sm lg:flex xl:gap-6 xl:text-base 2xl:gap-7 ">
            <li className="text-[#D91B7E]">Home</li>
            <li className="text-[#475569]">Technologies</li>
            <li className="text-[#475569]">Projects</li>
            <li className="text-[#475569]">About</li>
            <li className="text-[#475569]">Contact</li>
          </ul>

          {/* Sign In + Sign Up */}
          <div className=" flex items-center justify-end gap-1 sm:gap-2 md:gap-3 lg:flex-1 lg:gap-2 xl:gap-3">
            {/* Sign In */}
            <button className="px-1 py-1 text-[10px] font-medium text-[#475569] sm:px-2 sm:text-xs md:px-3 md:text-sm lg:px-3 lg:text-base xl:px-4 xl:text-lg">
              Sign In
            </button>

            {/* Sign Up */}
            <button className="rounded-full bg-[#D91B7E] px-2.5 py-1.5 text-[10px] font-semibold text-white sm:px-6 sm:py-2 sm:text-xs md:text-sm lg:text-base xl:text-lg">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-3 sm:py-4 lg:hidden">
            <ul className="flex flex-col items-center gap-3 text-center text-sm font-medium sm:gap-4 sm:text-base">
              <li className="text-[#D91B7E]">Home</li>
              <li className="text-[#475569]">Technologies</li>
              <li className="text-[#475569]">Projects</li>
              <li className="text-[#475569]">About</li>
              <li className="text-[#475569]">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

