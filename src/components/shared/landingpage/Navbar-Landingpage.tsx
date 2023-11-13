"use client";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import { useState } from "react";
import { listNavigationBar } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signOut } from 'next-auth/react'


const NavbarLandingPage = () => {
  const [activeClass, setActiveClass] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggle = () => setIsOpen(!isOpen);

  const defaultStyle =
    "h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const activeStyle = "bg-white";
  return (
    <nav className="w-screen bg-blue flex flex-col md:flex-row justify-between py-2 px-6 items-center h-min fixed">
      <div className="flex w-full md:w-min justify-between">
        <div className="">
          <Image alt="" src="/" width={100} height={50} />
        </div>
        <button onClick={onToggle} className="md:hidden">
          <Image
            src={isOpen ? "/assets/close.svg" : "/assets/ci_hamburger-md.svg"}
            alt="toggle"
            width={isOpen ? 34 : 40}
            height={isOpen ? 34 : 40}
          />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row gap-8`}
      >
        <ul className="flex flex-col md:flex-row gap-6 items-center">
          {listNavigationBar.map((item: { link: string; label: string }) => (
            <li key={item.link} className="">
              <LinkScroll
                to={item.link}
                duration={250}
                spy
                smooth
                activeClass={activeStyle}
                className={defaultStyle}
              >
                {item.label}
              </LinkScroll>
            </li>
          ))}
        </ul>
        <Link href="/sign-in">
          <Button variant="secondary">Sign In</Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarLandingPage;
