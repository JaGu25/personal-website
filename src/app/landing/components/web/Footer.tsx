import Image from "next/image";
import React from "react";
import logo from "@/assets/imgs/logo.png";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { MdPhoneInTalk, MdAlternateEmail, MdLocationOn } from "react-icons/md";
import Heading from "@/app/landing/components/typography/Heading";
import { useTranslation } from "@/i18n";

interface Props {
  lng: string;
}

const Footer: React.FC<Props> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "common");

  return (
    <div className="mt-0 md:mt-20">
      <footer className="flex flex-col sm:flex-row justify-around items-start gap-8 md:gap-0">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Image src={logo} alt="logo" />
            <p className="text-2xl text-darkmode">Dixon Albites</p>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <MdPhoneInTalk className="text-primary" />
            <a className="text-darkmode" href="tel:+51941923260">
              +51 941 923 260
            </a>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <MdAlternateEmail className="text-primary" />
            <a className="text-darkmode" href="mailto:albitestapia25@gmail.com">
              albitestapia25@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <MdLocationOn className="text-primary" />
            <p className="text-darkmode">Lima, Perú </p>
          </div>
        </div>
        <div>
          <Heading size="text-xl" colorFull uppercase>
            {t("footer.social-media")}
          </Heading>
          <div className="flex gap-8 text-darkmode mt-4">
            <a
              href="https://www.linkedin.com/in/dixon-albites-659648161/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl transition-all duration-300 hover:scale-110" />
            </a>
            <a href="https://github.com/JaGu25" target="_blank">
              <FaGithub className="text-3xl transition-all duration-300 hover:scale-110" />
            </a>
            <a href="https://www.tiktok.com/@dixonalbites25" target="_blank">
              <FaTiktok className="text-3xl transition-all duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
      </footer>

      <div className="w-full text-primary mr-auto text-center pt-20 pb-8">
        {t("footer.copyright", { date: new Date().getFullYear() })}
      </div>
    </div>
  );
};

export default Footer;
