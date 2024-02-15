"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLanguage } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import Navigation from "./Navigation";
import classNames from "classnames";

const size_main_logo = 60;

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="sticky top-0 z-20 h-16 bg-white py-5">
      <nav className=" flex justify-between items-center gap-3 ">
        {" "}
        <Link href="/">
          <Image
            src="/images/main_logo.png"
            alt="Max logo"
            width={size_main_logo}
            height={size_main_logo}
          />
        </Link>
        <ul className="hidden sm:flex items-center gap-5">
          <Navigation />
        </ul>
        <FaLanguage
          className={`block size-7 -translate-x-4 sm:translate-x-0`}
        />
        <div onClick={() => setToggle(!toggle)} className="block sm:hidden">
          <ImCross
            className={classNames(
              toggle
                ? "rotate-0 duration-200 ease-in"
                : "rotate-45 duration-200 ease-in",
              `size-4`
            )}
          />
        </div>
      </nav>
      <ul
        className={classNames(
          toggle
            ? "transform: translate-y-3 ease-out duration-700 z-10 "
            : "transform: -translate-y-80 ease-in duration-700 z-10",
          "relative flex shadow-md py-3 z-20 bg-white sm:hidden justify-center"
        )}
        onClick={() => setToggle(!toggle)}
      >
        <Navigation />
      </ul>
    </header>
  );
}
