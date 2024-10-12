"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BurgerIcon from "./BurgerIcon";

const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/projects",
    label: "Projects",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav>
      <div className="flex items-center justify-between  py-4">
        <Logo />
        <ul className="sm:flex gap-6 hidden">
          {links.map((link, index) => (
            <li
              className={`${
                path === link.label || path === link.path
                  ? "font-medium"
                  : "text-gray-400"
              } hover:text-gray-600 transition-all`}
              key={index}
            >
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden block" ref={menuRef}>
          <BurgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
          <ul
            className={`flex flex-col items-center justify-center z-[98] gap-6 sm:hidden fixed right-0 top-0 bg-black h-screen w-[180px] ${
              isOpen ? "translate-x-0" : "translate-x-[100%]"
            } transition-all duration-300 ease-in-out`}
          >
            {links.map((link, index) => (
              <li
                className={`${
                  path === link.label || path === link.path
                    ? "font-medium text-white"
                    : "text-gray-400"
                } hover:text-gray-600 transition-all`}
                key={index}
              >
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
