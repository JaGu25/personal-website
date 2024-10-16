"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import logo from "@/assets/imgs/logo.png";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";

interface IProps {
  lng: string;
}

const NavBarMenu: React.FC<IProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "common");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    document.body.style.overflow = !isOpen ? "hidden" : "scroll";
    setIsOpen(!isOpen);
  };

  return (
    <div className="block md:hidden">
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
          <ul className="flex flex-col text-lg gap-7 mt-10">
            <li className="text-primary font-semibold text-xl">
            {t("navbar.start")}
            </li>
            <li className="text-darkmode text-xl">{t("navbar.about-me")}</li>
            <li className="text-darkmode text-xl">{t("navbar.portfolio")}</li>
            <li className="text-darkmode text-xl">{t("navbar.contact")}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBarMenu;
