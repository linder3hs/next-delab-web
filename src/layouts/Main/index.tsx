"use client";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "@/../public/assets/delab_logo.png";
import menu from "@/../public/assets/icons/menu.png";
import close from "@/../public/assets/icons/close.png";
import { LinkItem } from "@/components";
import { links } from "./links";

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  const [toggle, setToggle] = useState<boolean>(true);

  const [width, setWidth] = useState<number>(0);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <>
      <header>
        <nav className="flex flex-col md:flex-row justify-around items-center">
          <div className="flex justify-between w-full md:w-auto">
            <Image
              className="w-[100px] lg:w-[180px]"
              src={logo}
              height={41}
              alt="Delab"
              title="Delab"
            />
            <Image
              className="visible md:invisible object-contain cursor-pointer"
              src={toggle ? menu : close}
              alt="menu"
              title="menu"
              width={24}
              height={24}
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <Transition
            show={width > 768 || !toggle}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {(transitionProps) => (
              <div
                className={`${toggle && "hidden"} md:block`}
                {...transitionProps}
              >
                <ul className="flex flex-col md:flex-row gap-10 items-center justify-center font-semibold">
                  {links.map((link) => (
                    <LinkItem
                      key={link.text}
                      href={link.href}
                      text={link.text}
                    />
                  ))}
                </ul>
              </div>
            )}
          </Transition>
        </nav>
      </header>
      {children}
    </>
  );
}
