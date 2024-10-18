import Heading from "@/app/landing/components/typography/Heading";
import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";

interface Props {
  lng: string;
}

const Experience: React.FC<Props> = () => {
  return (
    <div className="mt-20 md:mt-0">
      <div className="mb-8">
        <Heading size="text-xl mb-2" colorFull uppercase>
          CURRICULUM
        </Heading>
        <Heading size="text-2xl md:text-4xl">Experiencia</Heading>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 md:flex-[5]">
          <Heading size="text-3xl" colorFull>
            Trabajo
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
                    <li>
                      Coordinación con UX para la implementación de nuevos
                      componentes.
                    </li>
                    <li>
                      Coordinación con DevOps y Equipo de Arquitectura para
                      despliegue en diferentes ambientes.
                    </li>
                    <li>
                      Desarrollo de Componentes Web con React, Typescript, SASS,
                      Microfrontends.
                    </li>
                    <li>
                      Desarrollo de pruebas unitarias y de integración con
                      JestGit y Gitflow para el ciclo de desarrollo.
                    </li>
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
                    <li>
                      Implementación de Nuevas Funcionalidades a la Plataforma.
                    </li>
                    <li>
                      Implementaciones en Ambientes Docker y Google
                      Cloud.Desarrollo con Laravel,NodeJS y Elasticsearch.
                    </li>
                    <li>Desarrrollo de Componentes con Vue JS y React JS.</li>
                    <li>
                      Implementación de Servicios Web de Integración con
                      Servicios Externos y Clouds con Php y Laravel.
                    </li>
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
                    <li>
                      Desarrollo de Chatbots en distintos clientes, como lo son
                      a traves de Web y WhatsApp.
                    </li>
                    <li>Desarrollo Backend con Node JS / Nest.</li>
                    <li>
                      Desarrollo Front con Vue - React.Implementacion en
                      ambientes como IBM CLOUD o Heroku.
                    </li>
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
                    <li>Process Automation - CI/CD With Jenkins.</li>
                    <li>Dockerization of Components with Docker.</li>
                    <li>
                      Full Stack Development of a Platform with Laravel / Vue.
                    </li>
                    <li>Deployment Tools in AWS.</li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="flex-1 md:flex-[4] flex flex-col gap-10 md:gap-28">
          <div>
            <Heading size="text-3xl" colorFull>
              Educación
            </Heading>
            <ol className="mt-4 relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <div className="flex flex-col md:flex-row gap-6 px-3">
                  <p className="text-2xl text-darkmode">2016-2021</p>
                  <div className="flex-1">
                    <p className="text-lg text-darkmode font-bold">
                      Ingeniería de Sistemas
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
              Idiomas
            </Heading>
            <div className="mt-6 flex gap-16 text-darkmode">
              <div>
                <p className="text-2xl">Español</p>
                <p className="text-lg">Nativo</p>
              </div>
              <div>
                <p className="text-2xl">Inglés</p>
                <p className="text-lg">B2</p>
              </div>
            </div>
          </div>
          <div>
            <Heading size="text-3xl" colorFull>
              Hobbies
            </Heading>
            <div className="mt-6 flex">
              <div className="flex flex-col items-center text-center">
                <MdOutlinePets className="text-3xl text-red-500" />
                <p className="text-base md:text-lg text-darkmode">
                  Amante de los perros.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaMusic className="text-3xl text-darkmode" />
                <p className="text-base md:text-lg text-darkmode">
                  Todo tipo de música.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <GiTechnoHeart className="text-3xl text-orange-500" />
                <p className="text-base md:text-lg text-darkmode">
                  Apasionado del mundo Tech.
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
