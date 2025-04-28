import Image from "next/image";
import React from "react";
import developer from "@/assets/imgs/developer.png";
import laptop from "@/assets/imgs/laptop.png";
import Heading from "@/app/landing/(components)/typography/Heading";
import { useTranslation } from "@/i18n";
import { LuDownload } from "react-icons/lu";
import { FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";
import { cn } from "@/shared/utils/cn";

interface Props {
  lng: string;
}

const HeroContent: React.FC<Props> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "common");

  return (
    <main className="mt-20 md:mt-0" id="start">
      <div
        className={cn(
          "flex flex-col-reverse md:flex-row justify-between items-center",
          "pt-10 lg:pt-28",
          "animate-fade-right animate-duration-[2000ms] animate-ease-in-out"
        )}
      >
        <div className="flex-1 flex justify-center">
          <Image
            src={developer}
            alt="developer"
            width={420}
            className="animate-fade-up"
          />
        </div>
        <div className="flex-1 flex flex-col gap-6 lg:gap-10 items-start">
          <Heading size="text-2xl md:text-4xl" uppercase>
            Software Engineer
          </Heading>
          <p className="text-xl md:text-2xl text-darkmode">{t("resume")}</p>
          <a
            href="https://dixonalbi.s3.amazonaws.com/Dixon+Albites+-+CV+-+2024.pdf"
            target="_blank"
            className="p-4 text-darkmkode animate-bounce rounded-full font-bold uppercase flex items-center gap-3 transition-all duration-300 hover:scale-110"
            style={{
              background: "linear-gradient(90deg, #FF7D61 0%, #FFDA59 100%)",
            }}
          >
            <p>{t("download")}</p>
            <LuDownload className="text-xl" />
          </a>
          <div className="flex gap-8 text-darkmode">
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
      </div>
      <div
        id="aboutMe"
        className="flex flex-col md:flex-row justify-between items-center py-10 md:py-36 animate-fade-left animate-duration-[2000ms] animate-ease-in-out bg-darkmode"
      >
        <div className="flex-1 flex flex-col gap-6 lg:gap-10 items-start">
          <div>
            <Heading size="text-xl mb-2" colorFull>
              {t("about-me.title")}
            </Heading>
            <Heading size="text-2xl md:text-4xl">
              {t("about-me.greetings")}
            </Heading>
          </div>
          <p className="text-xl md:text-2xl text-darkmode">
            {t("about-me.resume")}
          </p>
        </div>
        <div className="flex-1 flex justify-center mt-4 md:mt-0">
          <Image src={laptop} alt="developer" width={420} />
        </div>
      </div>
    </main>
  );
};

export default HeroContent;
