import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatar from "../../assets/mountains.jpg";
import { IoCloseOutline } from "react-icons/io5";

const ResponsiveNavbar = () => {
  // implementing side over menu onclick hamburger menu
  const [isSideMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { lable: "Home", link: "#" },
    { lable: "Collections", link: "#" },
    { lable: "About", link: "#" },
    { lable: "Contact Us", link: "#" },
  ];

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-6 shadow-xl">
        {/* first section */}
        <section className="flex gap-3 items-center">
          {/* menu icon */}
          <FiMenu
            className="text-3xl cursor-pointer lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          />
          {/* logo */}
          <a href={"/"} className="text-4xl font-mono">
            CBS
          </a>
        </section>
        {/* desktop menu */}
        <section className="hidden lg:flex gap-5">
          {navLinks.map((item) => (
            <a
              key={item}
              href={item.link}
              className="font-mono font-bold text-xl transition-colors duration-300 hover:text-violet-700 hover:underline hover:underline-offset-4 decoration-4"
            >
              {item.lable}
            </a>
          ))}
        </section>
        {/* mobile menue section */}
        {/* conditional rendring */}
        {isSideMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
            onClick={() => setIsMenuOpen(false)} // Clicking outside closes menu
          >
            <section
              className="fixed text-black bg-white flex flex-col z-50
              left-0 top-0 h-screen p-8 gap-8 w-56 shadow-lg transform transition-transform duration-300 translate-x-0"
            >
              <IoCloseOutline
                className="mt-0 mb-8 text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
                onClick={() => setIsMenuOpen(false)}
              />
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={item.link}
                  className="font-mono font-bold text-xl transition-colors duration-300 hover:text-violet-700 hover:underline hover:underline-offset-4 decoration-4"
                >
                  {item.lable}
                </a>
              ))}
            </section>
          </div>
        )}

        {/* last section */}
        <section className="flex gap-3 items-center">
          {/* cart icon */}
          <AiOutlineShoppingCart className="text-3xl" />
          {/* avatar */}

          <div className="rounded-full border-[5px] border-emerald-400">
            <img
              src={avatar}
              alt="avatar_image"
              className="w-[40px] h-[40px] rounded-full"
            />
          </div>
        </section>
      </nav>
      <hr />
    </main>
  );
};

export default ResponsiveNavbar;
