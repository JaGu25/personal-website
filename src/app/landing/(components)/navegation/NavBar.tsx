"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/imgs/logo.png";
import Lang from "@/app/landing/(components)/utils/Lang";
import ThemeSwitcher from "@/app/landing/(components)/utils/ThemeSwitcher";
import NavBarMenu from "@/app/landing/(components)/navegation/NavBarMenu";
import Link from "next/link";
import { useTranslation } from "@/i18n/client";
import FloatingActionButton from "@/app/landing/(components)/utils/FloatingActionButton";
import { useEffect } from "react";
import DownloadCV from "@/app/landing/(components)/utils/DownloadCV";

interface Props {
  lng: string;
}

const NavBar: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "common");
  const [hashNavegation, setHashNavegation] = useState("");

  useEffect(() => {
    setHashNavegation(window.location.hash);
  }, []);

  const updateHash = (hash: string) => {
    setHashNavegation(hash);
  };

  return (
    <div className="nav bg-darkmode px-7 py-6 flex justify-between items-center border-b border-b-gray-200">
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="logo dixon developer"
          className="animate-pulse"
        />
        <h2 className="text-darkmode text-base md:text-xl font-semibold animate-pulse">
          Dixon Albites
        </h2>
      </div>
      <nav>
        <ul className="flex text-lg gap-7">
          <div className="hidden lg:flex gap-7 text-darkmode">
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
            <li
              className={`${
                hashNavegation.includes("skills") &&
                "text-primary  font-semibold"
              }`}
            >
              <Link href="#skills" onClick={() => updateHash("#skills")}>
                {t("navbar.skills")}
              </Link>
            </li>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <Lang lng={lng} />
            <ThemeSwitcher />
            <NavBarMenu lng={lng} />
          </div>
        </ul>
      </nav>
      <DownloadCV />
      <FloatingActionButton />
    </div>
  );
};

export default NavBar;
