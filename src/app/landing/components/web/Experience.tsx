import Heading from "@/app/landing/components/typography/Heading";
import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { useTranslation } from "@/i18n";

interface Props {
  lng: string;
}

const Experience: React.FC<Props> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "common");

  return (
    <div className="mt-20 md:mt-0" id="experience">
      <div className="mb-8">
        <Heading size="text-xl mb-2" colorFull uppercase>
          CURRICULUM
        </Heading>
        <Heading size="text-2xl md:text-4xl">{t("cv.title")}</Heading>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 md:flex-[5]">
          <Heading size="text-3xl" colorFull>
            {t("cv.job")}
          </Heading>
          <ol className="mt-6 relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="flex flex-col md:flex-row gap-6 px-3">
                <p className="text-2xl text-darkmode">2022-2024</p>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-lg text-darkmode font-bold">
                      Senior Software Enginner
                    </p>
                    <p className="text-lg text-darkmode"> Encora Inc. </p>
                  </div>
                  <ul className="list-disc mt-8 ml-4 text-darkmode text-base">
                    <li>{t("cv.encora.01")}</li>
                    <li>{t("cv.encora.02")}</li>
                    <li>{t("cv.encora.03")}</li>
                    <li>{t("cv.encora.04")}</li>
                    <li>{t("cv.encora.05")}</li>
                    <li>{t("cv.encora.06")}</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="flex flex-col md:flex-row gap-6 px-3">
                <p className="text-2xl text-darkmode">2021-2022</p>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-lg text-darkmode font-bold">
                      Full Stack Engineer
                    </p>
                    <p className="text-lg text-darkmode">Aira</p>
                  </div>
                  <ul className="list-disc mt-8 ml-4 text-darkmode">
                    <li>{t("cv.aira.01")}</li>
                    <li>{t("cv.aira.02")}</li>
                    <li>{t("cv.aira.03")}</li>
                    <li>{t("cv.aira.04")}</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="flex flex-col md:flex-row gap-6 px-3">
                <p className="text-2xl text-darkmode">2020-2021</p>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-lg text-darkmode font-bold">
                      Full Stack Developer Freelance
                    </p>
                  </div>
                  <ul className="list-disc mt-8 ml-4 text-darkmode">
                    <li>{t("cv.freelance.01")}</li>
                    <li>{t("cv.freelance.02")}</li>
                    <li>{t("cv.freelance.03")}</li>
                    <li>{t("cv.freelance.04")}</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="flex flex-col md:flex-row gap-6 px-3">
                <p className="text-2xl text-darkmode">2019-2020</p>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-lg text-darkmode font-bold">
                      DevOps Junior
                    </p>
                    <p className="text-lg text-darkmode">Hello ZUM</p>
                  </div>
                  <ul className="list-disc mt-8 ml-4 text-darkmode">
                    <li>{t("cv.hellozum.01")}</li>
                    <li>{t("cv.hellozum.02")}</li>
                    <li>{t("cv.hellozum.03")}</li>
                    <li>{t("cv.hellozum.04")}</li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="flex-1 md:flex-[4] flex flex-col gap-10 md:gap-28">
          <div>
            <Heading size="text-3xl" colorFull>
              {t("cv.education")}
            </Heading>
            <ol className="mt-4 relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <div className="flex flex-col md:flex-row gap-6 px-3">
                  <p className="text-2xl text-darkmode">2016-2021</p>
                  <div className="flex-1">
                    <p className="text-lg text-darkmode font-bold">
                      {t("cv.systemenginner")}
                    </p>
                    <p className="text-lg text-darkmode">
                      Universidad Nacional Federico Villareal
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div>
            <Heading size="text-3xl" colorFull>
              {t("cv.language.title")}
            </Heading>
            <div className="mt-6 flex gap-16 text-darkmode">
              <div>
                <p className="text-2xl">{t("cv.language.spanish")}</p>
                <p className="text-lg">{t("cv.language.native")}</p>
              </div>
              <div>
                <p className="text-2xl">{t("cv.language.english")}</p>
                <p className="text-lg">B2</p>
              </div>
            </div>
          </div>
          <div>
            <Heading size="text-3xl" colorFull>
              {t("cv.hobbies.title")}
            </Heading>
            <div className="mt-6 flex justify-between">
              <div className="flex flex-col items-center text-center">
                <MdOutlinePets className="text-3xl text-red-500" />
                <p className="text-base md:text-lg text-darkmode">
                  {t("cv.hobbies.pets")}
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaMusic className="text-3xl text-darkmode" />
                <p className="text-base md:text-lg text-darkmode">
                  {t("cv.hobbies.music")}
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <GiTechnoHeart className="text-3xl text-orange-500" />
                <p className="text-base md:text-lg text-darkmode">
                  {t("cv.hobbies.love")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
