/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import classNames from "classnames";
import Logo from "./logo/Logo";
import LoadingBar from "./logo/LoadingBar";

// const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     viewBox="0 0 512 512"
//     fill="currentColor"
//     height="1em"
//     width="1em"
//     {...props}>
//     <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z" />
//   </svg>
// );

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  useEffect(() => {
    document.querySelectorAll("nav ul .nav-link").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        const el = document.getElementById(`section${i + 1}`);
        el?.scrollIntoView({ behavior: "smooth" });
        // Adjust the scroll position after scrolling to leave the margin
        // el?.scrollBy({
        //   top: 20, // Scroll up by the margin amount
        //   behavior: "smooth",
        // });
      });
    });
  }, []);

  return (
    <nav
      className={classNames(
        "padding-x w-full flex items-center py-5 fixed top-0 z-20",
        scrolled ? "bg-primary" : "bg-transparent",
      )}>
      <LoadingBar color="#34bfff" />
      {/* <button
        onClick={() => setOpen((op) => !op)}
        className="outline-none p-1 sm:hidden flex">
        <MenuIcon className="w-[35px] h-[35px]" />
      </button> */}
      {/* <Sheet open={open}>
        <SheetTitle>
          <Logo />
        </SheetTitle>
        <SheetContent className="bg-black" side="left">
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                tabIndex={0}
                role="button"
                onKeyDown={() => {}}
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] nav-link ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setActive(nav.title);
                  setOpen(false);
                }}>
                <Link href={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet> */}

      <div className="w-full flex justify-between items-center md:max-w-7xl mx-auto">
        <Link
          href="/"
          className="items-center gap-2"
          onClick={() => setActive("")}>
          <Logo />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              tabIndex={0}
              onKeyDown={() => {}}
              role="button"
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer nav-link`}
              onClick={() => setActive(nav.title)}>
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
