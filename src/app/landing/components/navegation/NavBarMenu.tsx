"use client";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import logo from "@/assets/imgs/logo.png";
import Image from "next/image";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";

interface IProps {
  lng: string;
}

const NavBarMenu: React.FC<IProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "common");
  const [isOpen, setIsOpen] = useState(false);
  const [hashNavegation, setHashNavegation] = useState("");

  useEffect(() => {
    setHashNavegation(window.location.hash);
  }, []);

  const updateHash = (hash: string) => {
    handleMenu();
    setHashNavegation(hash);
  };

  const handleMenu = () => {
    document.body.style.overflow = !isOpen ? "hidden" : "scroll";
    setIsOpen(!isOpen);
  };

  return (
    <div className="block lg:hidden">
      {!isOpen && (
        <FaBars
          className="text-darkmode text-2xl cursor-pointer"
          onClick={handleMenu}
        />
      )}
      {isOpen && (
        <div
          style={{ height: "100vh" }}
          className="w-full bg-darkmode z-10 absolute top-0 left-0 p-4"
        >
          <div className="flex justify-between">
            <Image
              src={logo}
              alt="logo dixon developer"
              className="animate-bounce"
            />
            <MdClose
              className="text-darkmode text-2xl cursor-pointer"
              onClick={handleMenu}
            />
          </div>
          <ul className="flex flex-col gap-7 mt-10 text-xl text-darkmode">
            <li
              className={`${
                (hashNavegation.includes("start") ||
                  !hashNavegation.includes("#")) &&
                "text-primary font-semibold"
              } `}
            >
              <Link href="#start" onClick={() => updateHash("#start")}>
                {t("navbar.start")}
              </Link>
            </li>
            <li
              className={`${
                hashNavegation.includes("aboutMe") &&
                "text-primary  font-semibold"
              }`}
            >
              <Link href="#aboutMe" onClick={() => updateHash("#aboutMe")}>
                {t("navbar.about-me")}
              </Link>
            </li>
            <li
              className={`${
                hashNavegation.includes("experience") &&
                "text-primary  font-semibold"
              }`}
            >
              <Link
                href="#experience"
                onClick={() => updateHash("#experience")}
              >
                {t("navbar.experience")}
              </Link>
            </li>
            <li onClick={() => updateHash("#skills")}>
              <Link href="#skills" onClick={() => updateHash("#skills")}>
                {t("navbar.skills")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBarMenu;
