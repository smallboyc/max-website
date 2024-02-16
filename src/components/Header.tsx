"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import Navigation from "./Navigation";
import ToggleLanguage from "./ToggleLanguage";
import classNames from "classnames";

const size_main_logo = 60;

export default function Header({ locale }: { locale: string }) {
  console.log(locale);
  const [toggle, setToggle] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 60) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      className={classNames(
        shadow ? "shadow-md " : "",
        "sticky top-0 z-20 h-16 bg-white py-4  duration-200 ease-in"
      )}
    >
      <nav className=" flex justify-between items-center gap-3 max-w-container">
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
          <Navigation locale={locale} />
        </ul>
        <ToggleLanguage locale={locale} />
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
            ? "transform: translate-y-2 ease-out duration-700 z-10 "
            : "transform: -translate-y-80 ease-in duration-700 z-10",
          "relative flex shadow-md py-3 z-20 bg-white sm:hidden justify-center max-w-container"
        )}
        onClick={() => setToggle(!toggle)}
      >
        <Navigation locale={locale} />
      </ul>
    </header>
  );
}
