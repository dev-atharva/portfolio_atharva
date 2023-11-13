import {
  BiLogoDjango,
  BiLogoFlask,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoDocker,
  BiLogoAws,
  BiLogoGoogleCloud,
} from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";

import {
  SiSpringboot,
  SiSvelte,
  SiMicrosoftazure,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 h-[90vh] sm:h-screen  bg-[#F5F5F5] font-baloo  py-4">
      <div className="  h-[25%] flex items-center justify-center flex-col gap-2">
        {/* Heading and subheading */}
        <div className=" text-4xl font-bold text-[#555555] sm:text-5xl">
          Skills
        </div>
        <div className="text-[#444444]">My technical skills</div>
      </div>
      {/* Skill buckets */}
      <div className="flex flex-row gap-2 items-center md:justify-center h-[75%] overflow-x-auto">
        {/* Bucket 1 */}
        <div className="border shadow-lg rounded-lg h-[60%] md:h-[80%] flex flex-col  min-w-[300px]">
          <div className="font-semibold text-2xl text-[#555555] pt-2 text-center">
            Backend
          </div>
          {/* Backend card */}
          <div className="grid grid-cols-2 gap-4 p-2 ">
            {/* Cards for backend */}
            <div className="flex flex-col items-center justify-center ">
              <BiLogoPython size={40} />
              <span className="text-base text-[#444444]">Python</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoTypescript size={40} />
              <span className="text-base text-[#444444]">Typescript</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoDjango size={40} />
              <span className="text-base text-[#444444]">Django</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoFlask size={40} />
              <span className="text-base text-[#444444]">Flask</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoNodejs size={40} />
              <span className="text-base text-[#444444]">Node JS</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <SiSpringboot size={40} />
              <span className="text-base text-[#444444]">Spring boot</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoPostgresql size={40} />
              <span className="text-base text-[#444444]">PostgreSql</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoMongodb size={40} />
              <span className="text-base text-[#444444]">MongoDB</span>
            </div>
          </div>
        </div>
        {/* Bucket 2*/}
        <div className="border shadow-lg rounded-lg h-[60%] md:h-[80%] flex flex-col min-w-[300px]">
          <div className="font-semibold text-2xl text-[#555555] pt-2 text-center">
            Frontend
          </div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex flex-col items-center justify-center ">
              <BiLogoHtml5 size={40} />
              <span className="text-base text-[#444444]">HTML</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoCss3 size={40} />
              <span className="text-base text-[#444444]">CSS</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoJavascript size={40} />
              <span className="text-base text-[#444444]">Javascript</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoReact size={40} />
              <span className="text-base text-[#444444]">React</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <SiSvelte size={40} />
              <span className="text-base text-[#444444]">Svelte</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <TbBrandNextjs size={40} />
              <span className="text-base text-[#444444]">Next JS</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoTailwindCss size={40} />
              <span className="text-base text-[#444444]">Tailwind</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoBootstrap size={40} />
              <span className="text-base text-[#444444]">BootStrap</span>
            </div>
          </div>
        </div>
        {/* Bucket 3 */}
        <div className="border shadow-lg rounded-lg h-[60%] md:h-[80%] flex flex-col min-w-[300px]">
          <div className="font-semibold text-2xl text-[#555555] pt-2 text-center">
            Others
          </div>
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex flex-col items-center justify-center ">
              <BsGit size={40} />
              <span className="text-base text-[#444444]">Git</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoDocker size={40} />
              <span className="text-base text-[#444444]">Docker</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoAws size={40} />
              <span className="text-base text-[#444444]">AWS</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <SiMicrosoftazure size={40} />
              <span className="text-base text-[#444444]">Azure</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <BiLogoGoogleCloud size={40} />
              <span className="text-base text-[#444444]">GCP</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <SiVercel size={40} />
              <span className="text-base text-[#444444]">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
