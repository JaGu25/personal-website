import Image from "next/image";
import React from "react";
import developer from "@/assets/imgs/developer.png";
import laptop from "@/assets/imgs/laptop.png";
import Heading from "@/app/(landing)/components/typography/Heading";
import { cookies } from "next/headers";
import { useTranslation } from "@/app/i18n";
import { LuDownload } from "react-icons/lu";
import { FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";

const HeroContent = async () => {
  const cookieStore = cookies();
  const lng = cookieStore.get("lng")?.value;
  const { t } = await useTranslation(lng, "common");

  return (
    <main className="px-8 lg:px-40 xl:px-60 bg-darkmode">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-10 lg:pt-28 animate-fade-right animate-duration-[2000ms] animate-ease-in-out">
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
          <button
            className="p-4 text-darkmkode animate-bounce rounded-full font-bold uppercase flex items-center gap-3 transition-all duration-300 hover:scale-110"
            style={{
              background: "linear-gradient(90deg, #FF7D61 0%, #FFDA59 100%)",
            }}
          >
            <p>{t("download")}</p>
            <LuDownload className="text-xl" />
          </button>
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
      <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-36 animate-fade-left animate-duration-[2000ms] animate-ease-in-out bg-darkmode">
        <div className="flex-1 flex flex-col gap-6 lg:gap-10 items-start">
          <Heading size="text-2xl md:text-4xl">Hola, Soy Dixon!</Heading>
          <p className="text-xl md:text-2xl text-darkmode">
            {t("profile-tech")}
          </p>
        </div>
        <div className="flex-1 flex justify-center mt-4 md:mt-0">
          <Image src={laptop} alt="developer" width={420} />
        </div>
      </div>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Application UI code in Tailwind CSS
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Marketing UI design in Figma
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </main>
  );
};

export default HeroContent;
