import sih_indiv from "../assets/sih_indiv_image.jpeg";
import jsm_win from "../assets/jspm_win.jpeg";
const Gallery = () => {
  return (
    <div className="bg-[#F5F5F5] py-6 sm:py-8 lg:py-12 font-baloo">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-[#555555] lg:text-3xl">
              Gallery
            </h2>

            <p className="hidden max-w-screen-sm text-[#444444] md:block">
              Milestones and Moments: A Visual Journey Through Career Triumphs
              and Special Achievements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={sih_indiv}
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              VR
            </span>
          </a>
          {/* <!-- image - end --> */}

          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={jsm_win}
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Tech
            </span>
          </a>
          {/* <!-- image - end --> */}`
          

          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://media.licdn.com/dms/image/C4D22AQE2jO75x-Xfzg/feedshare-shrink_2048_1536/0/1661924733439?e=1702512000&v=beta&t=B7UAFIecej3iCmdiV0BindaRCGuorMc47WqhueQCP90"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Dev
            </span>
          </a>
          {/* <!-- image - end --> */}

          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://media.licdn.com/dms/image/C4D22AQHo1I-43Z87ew/feedshare-shrink_2048_1536/0/1661924733594?e=1702512000&v=beta&t=kyhZL5cOXxZf-riJofEpj13me0mBQZvXrjopHMuF73Y"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Retro
            </span>
          </a>
          {/* <!-- image - end --> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
