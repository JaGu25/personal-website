import Image from "next/image";
import React from "react";
import logo from "@/assets/imgs/logo.png";
import Lang from "@/app/(landing)/components/Lang";
import { cookies } from "next/headers";
import { useTranslation } from "@/app/i18n";
import ThemeSwitcher from "@/app/(landing)/components/ThemeSwitcher";

const NavBar = async () => {
  const cookieStore = cookies();
  const lng = cookieStore.get("lng")?.value;
  const { t } = await useTranslation(lng, "common");

  return (
    <div className="bg-darkmode px-7 py-6 flex justify-between items-center border-b border-b-gray-200">
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="logo dixon developer"
          className="animate-bounce"
        />
        <h2 className="text-darkmode text-xl font-semibold animate-bounce">
          Dixon Albites
        </h2>
      </div>
      <nav>
        <ul className="flex text-lg gap-7">
          <li className="text-primary font-semibold">{t("navbar.start")}</li>
          <li className="text-darkmode">{t("navbar.about-me")}</li>
          <li className="text-darkmode">{t("navbar.portfolio")}</li>
          <li className="text-darkmode">{t("navbar.contact")}</li>
          <li>
            <Lang lng={lng!} />
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
