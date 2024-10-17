import Image from "next/image";
import React from "react";
import logo from "@/assets/imgs/logo.png";
import Lang from "@/app/landing/components/utils/Lang";
import { useTranslation } from "@/app/i18n";
import ThemeSwitcher from "@/app/landing/components/utils/ThemeSwitcher";
import NavBarMenu from "@/app/landing/components/navegation/NavBarMenu";

interface Props {
  lng: string;
}

const NavBar: React.FC<Props> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "common");
  return (
    <div className="bg-darkmode px-7 py-6 flex justify-between items-center border-b border-b-gray-200">
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="logo dixon developer"
          className="animate-bounce"
        />
        <h2 className="text-darkmode text-lg md:text-xl font-semibold animate-bounce">
          Dixon Albites
        </h2>
      </div>
      <nav>
        <ul className="flex text-lg gap-7">
          <div className="hidden md:flex gap-7">
            <li className="text-primary font-semibold">{t("navbar.start")}</li>
            <li className="text-darkmode">{t("navbar.about-me")}</li>
            <li className="text-darkmode">{t("navbar.portfolio")}</li>
            <li className="text-darkmode">{t("navbar.contact")}</li>
          </div>
          <div className="flex items-center gap-4">
            <Lang lng={lng} />
            <ThemeSwitcher />
            <NavBarMenu lng={lng} />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
