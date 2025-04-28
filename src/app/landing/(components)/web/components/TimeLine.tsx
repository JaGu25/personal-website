"use client";
import { useTranslation } from "@/i18n/client";
import React from "react";

const TimeLine = () => {
  const { t } = useTranslation("common");

  return (
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
              <p className="text-lg text-darkmode font-bold">DevOps Junior</p>
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
  );
};

export default TimeLine;
