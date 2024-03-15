import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='Hoo Bank Logo' className='w-[124px] h-[32px]' />

      <ul className='list-none hidden justify-end items-center flex-1 sm:flex' aria-label='primary navigation'>
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={`font-poppins font-normal cursor-pointer text-[1rem] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} hover:opacity-70 transition duration-300 ease-in-out`}>
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt='toggle button' className='cursor-pointer w-[23px] h-[23px] object-contain' onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none  justify-end items-center flex-1 flex flex-col' aria-label='mobile navigation'>
            {navLinks.map((navLink, index) => (
              <li
                key={navLink.id}
                className={`font-poppins font-normal cursor-pointer text-[1rem] text-white ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} hover:opacity-70 transition duration-300 ease-in-out`}>
                <a href={`#${navLink.id}`} onClick={() => setToggle(false)}>
                  {navLink.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
