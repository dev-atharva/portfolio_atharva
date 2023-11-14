import { HiOutlineDocumentText } from "react-icons/hi2";

const About = () => {
  const handledownload = () => {
    const file_url =
      "https://res.cloudinary.com/dcyo1ji8f/image/upload/v1699754280/portfolio/Atharva_Subodh_Mahadeokar_Resume_lmxzig.pdf";
    window.open(file_url, "_blank");
  };
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8  bg-[#F5F5F5] font-baloo py-4">
      <div className="h-[25%] flex items-center justify-center flex-col gap-2">
        <div className="text-4xl font-bold text-[#555555] sm:text-5xl">
          About Me
        </div>
        <div className="text-[#444444] text-lg">My Introduction</div>
      </div>
      <div className="h-[70%] flex items-center justify-center flex-col sm:flex-row gap-4 px-4  ">
        <div className=" max-h-full overflow-hidden rounded-2xl shadow-xl shadow-gray-500 w-auto  xl:w-5/12">
          <img
            src="https://res.cloudinary.com/dcyo1ji8f/image/upload/v1699635388/portfolio/atharva_mahadeokar_krwofk.webp"
            loading="lazy"
            alt="A photo of Atharva Mahadeokar"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className=" w-[100%] sm:w-[50%] h-auto flex flex-col gap-10">
          <div className="max-h-full overflow-hidden p-2 ">
            <div className="flex flex-row overflow-x-auto gap-2 ">
              {/* Card 1 */}
              <div className="flex flex-col gap-2 min-w-[220px]  items-center justify-center rounded-lg bg-[#EAEAEA] p-2 lg:p-4">
                <div className="text-base font-bold text-[#333333] sm:text-2xl md:text-3xl">
                  Bachlor's in Computer Engineering
                </div>
                <div className="text-sm text-[#555555] font-semibold sm:text-base">
                  Education
                </div>
              </div>
              {/* card 2 */}
              <div className="flex flex-col md:min-h-[170px] min-w-[200px] items-center justify-center rounded-lg bg-[#EAEAEA] p-2 lg:p-4">
                <div className="text-xl font-bold text-[#333333] sm:text-2xl md:text-3xl flex-1 flex items-center justify-center">
                  <span>20+</span>
                </div>
                <div className=" text-base font-semibold sm:text-base text-[#555555]">
                  Projects
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-center min-w-[220px] md:min-h-[170px] justify-center rounded-lg bg-[#EAEAEA] p-2 lg:p-4">
                <div className="text-xl font-bold text-[#333333] sm:text-2xl md:text-3xl flex-1 flex items-center justify-center">
                  <span>Online 24/7</span>
                </div>
                <div className="text-base font-semibold sm:text-base text-[#555555]">
                  Support
                </div>
              </div>
            </div>
            {/* Text related to me */}
            <div className=" p-3 md:p-4 md:mt-4 mb-2 ">
              <p className="  text-base  md:text-xl">
                <b>Bringing innovation to life, one line of code at a time.</b>
                <br /> As a fresh full-stack developer, I'm here to bridge the
                gap between ideas and reality, creating seamless digital
                experiences from front-end to back-end
              </p>
            </div>
          </div>
          {/* Resume button */}
          <div
            onClick={handledownload}
            className="flex flex-row gap-2 shadow-md justify-center cursor-pointer
           items-center rounded-lg bg-[#0077B6] px-4 py-3 md:w-[50%]  text-center
            text-md font-semibold text-white outline-none ring-indigo-300 
            transition duration-100 hover:bg-[#0099CC] focus-visible:ring active:bg-[#005580] md:text-base"
          >
            <span>Download CV</span>
            <HiOutlineDocumentText size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
