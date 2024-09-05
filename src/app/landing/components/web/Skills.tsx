import Heading from "@/app/landing/components/typography/Heading";
import javascript from "@/assets/imgs/javascript.png";
import css from "@/assets/imgs/css.png";
import html from "@/assets/imgs/html.webp";
import tailwind from "@/assets/imgs/tailwind.png";
import typescript from "@/assets/imgs/typescript.png";
import react from "@/assets/imgs/react.png";
import next from "@/assets/imgs/next.png";
import reactnative from "@/assets/imgs/reactnative.webp";
import node from "@/assets/imgs/node.png";
import jenkins from "@/assets/imgs/jenkins.png";
import docker from "@/assets/imgs/docker.png";
import aws from "@/assets/imgs/aws.png";
import Image from "next/image";
import React from "react";
import { useTranslation } from "@/i18n";

interface Props {
  lng: string;
}

const skills = [
  {
    name: "JavaScript",
    image: javascript,
  },
  {
    name: "CSS 3",
    image: css,
  },
  {
    name: "HTML 5",
    image: html,
  },
  {
    name: "Tailwind CSS",
    image: tailwind,
  },
  {
    name: "TypeScript",
    image: typescript,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "Next.js",
    image: next,
  },
  {
    name: "React Native",
    image: reactnative,
  },
  {
    name: "Node.js",
    image: node,
  },
  {
    name: "Jenkins",
    image: jenkins,
  },
  {
    name: "Docker",
    image: docker,
  },
  {
    name: "AWS",
    image: aws,
  },
];

const Skills: React.FC<Props> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "common");

  return (
    <div className="text-center py-32">
      <Heading size="text-xl mb-2" colorFull uppercase>
        {t("skills.title")}
      </Heading>
      <Heading size="text-2xl md:text-4xl">{t("skills.subtitle")}</Heading>

      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-10 xl:gap-16">
        {skills.map(({ name, image }) => (
          <div
            key={name}
            className="hover:scale-110 transition-all duration-200 bg-gray-300 dark:bg-bg-card px-12 py-14 rounded-lg flex flex-col justify-center items-center w-full md:mx-auto md:w-36 md:h-44"
          >
            <Image src={image} alt={name} width={54} height={60} />
            <p className="text-darkmode text-xs uppercase font-semibold mt-2">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
